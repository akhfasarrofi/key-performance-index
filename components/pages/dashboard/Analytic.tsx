import merge from 'lodash/merge';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import BaseOptionChart from 'components/pages/dashboard/Cart';
import { DashboardAnalytic } from 'types/dashboard';
import dynamic from 'next/dynamic';
import type { ApexOptions } from 'apexcharts';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Analytic = ({
    title,
    subheader,
    chartLabels,
    chartData,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card>) => {
    const chartOptions: ApexOptions = merge(BaseOptionChart(), {
        plotOptions: { bar: { columnWidth: '16%' } },
        fill: { type: chartData.map((i) => i.fill) },
        labels: chartLabels,
        xaxis: { type: 'datetime' },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y: number) => {
                    if (typeof y !== 'undefined') {
                        return `${y.toFixed(0)} visits`;
                    }
                    return y;
                },
            },
        },
    });

    return (
        <Card {...other}>
            <CardHeader title={title} subheader={subheader} />

            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <ReactApexChart type="line" series={chartData} options={chartOptions} height={287} />
            </Box>
        </Card>
    );
};

export default Analytic;
