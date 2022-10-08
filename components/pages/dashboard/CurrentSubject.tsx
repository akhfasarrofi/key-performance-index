import merge from 'lodash/merge';
import styled from '@mui/material/styles/styled';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import BaseOptionChart from 'components/pages/dashboard/Cart';
import { DashboardAnalytic } from 'types/Dashboard';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const CHART_HEIGHT = 392;

const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
    'height': CHART_HEIGHT,
    'marginTop': theme.spacing(2),
    '& .apexcharts-canvas svg': {
        height: CHART_HEIGHT,
    },
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

const CurrentSubject= ({
    title,
    subheader,
    chartData,
    chartColors,
    chartLabels,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card> ) => {
    const chartOptions: ApexOptions = merge(BaseOptionChart(), {
        stroke: { width: 2 },
        fill: { opacity: 0.48 },
        legend: { floating: true, horizontalAlign: 'center' },
        xaxis: {
            categories: chartLabels,
            labels: {
                style: {
                    colors: chartColors,
                },
            },
        },
    });

    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <ChartWrapperStyle dir="ltr">
                <ReactApexChart type="radar" series={chartData} options={chartOptions} height={340} />
            </ChartWrapperStyle>
        </Card>
    );
};

export default CurrentSubject;
