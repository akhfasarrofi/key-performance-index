import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { fShortenNumber } from 'utils/formatNumber';
import { DashboardAnalytic } from 'types/dashboard';

const TrafficSocmed = ({
    title,
    list,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card>) => {
    return (
        <Card {...other}>
            <CardHeader title={title} />

            <CardContent>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 2,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                    }}
                >
                    {list?.map((site: any) => (
                        <Paper
                            key={site.name}
                            variant="outlined"
                            sx={{ py: 2.5, textAlign: 'center' }}
                        >
                            <Box sx={{ mb: 0.5 }}>{site.icon}</Box>

                            <Typography variant="h6">{fShortenNumber(site.value)}</Typography>

                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {site.name}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default TrafficSocmed;
