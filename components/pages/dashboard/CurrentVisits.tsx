import merge from 'lodash/merge';
import useTheme from '@mui/material/styles/useTheme';
import styled from '@mui/material/styles/styled';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { fNumber } from 'utils/formatNumber';
import BaseOptionChart from 'components/pages/dashboard/Cart';
import { DashboardAnalytic } from 'types/dashboard';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
    'height': CHART_HEIGHT,
    'marginTop': theme.spacing(5),
    '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible',
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        alignContent: 'center',
        position: 'relative !important',
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    },
}));

const CurrentVisits = ({
    title,
    subheader,
    chartColors,
    chartData,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card>) => {
    const theme = useTheme();
    const chartLabels = chartData.map((i) => i.label);
    const chartSeries = chartData.map((i) => i.value);

    const chartOptions: ApexOptions = merge(BaseOptionChart(), {
        colors: chartColors,
        labels: chartLabels,
        stroke: { colors: [theme.palette.background.paper] },
        legend: { floating: true, horizontalAlign: 'center' },
        dataLabels: { enabled: true, dropShadow: { enabled: false } },
        tooltip: {
            fillSeriesColor: false,
            y: {
                formatter: (seriesName: number) => fNumber(seriesName),
                title: {
                    formatter: (seriesName: string) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: { donut: { labels: { show: false } } },
        },
    });

    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <ChartWrapperStyle dir="ltr">
                <ReactApexChart type="pie" series={chartSeries} options={chartOptions} height={280} />
            </ChartWrapperStyle>
        </Card>
    );
};

export default CurrentVisits;
