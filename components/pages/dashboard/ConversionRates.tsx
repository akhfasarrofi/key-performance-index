import merge from 'lodash/merge';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { fNumber } from 'utils/formatNumber';
import BaseOptionChart from 'components/pages/dashboard/Cart';
import { DashboardAnalytic } from 'types/dashboard';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';


const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ConversionRates = ({
    title,
    chartData,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card>) => {
    const chartLabels = chartData.map((i) => i.label);
    const chartSeries = chartData.map((i) => i.value);
    const chartOptions: ApexOptions = merge(BaseOptionChart(), {
        tooltip: {
            marker: { show: false },
            y: {
                formatter: (seriesName: number) => fNumber(seriesName),
                title: {
                    formatter: () => '',
                },
            },
        },
        plotOptions: {
            bar: { horizontal: true, barHeight: '28%', borderRadius: 2 },
        },
        xaxis: {
            categories: chartLabels,
        },
    });

    return (
        <Card {...other}>
            <CardHeader title={title}/>

            <Box sx={{ mx: 3 }} dir="ltr">
                <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={364} />
            </Box>
        </Card>
    );
};

export default ConversionRates;
