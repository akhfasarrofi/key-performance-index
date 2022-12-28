import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { fDateTime } from 'utils/formatTime';
import Iconify from 'components/Iconify';
import Scrollbar from 'components/Scrollbar';
import { DashboardAnalytic } from 'types/dashboard';

const News = ({
    title,
    list,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card>) => (
    <Card {...other}>
        <CardHeader title={title} />

        <Scrollbar>
            <Stack spacing={3} sx={{ p: 3, pr: 0, height: 345, overflow: 'scroll'}}>
                {list?.map((news: any) => (
                    <NewsItem key={news.id} news={news} />
                ))}
            </Stack>
        </Scrollbar>

        <Divider />

        <Box sx={{ p: 2, textAlign: 'right' }}>
            <Button
                size="small"
                color="inherit"
                endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
            >
                View all
            </Button>
        </Box>
    </Card>
);

export default News;

const NewsItem = ({ news }: any) => {
    const { image, title, description, postedAt } = news;

    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <Box
                component="img"
                alt="Key Performance Index"
                src={image}
                sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
            />

            <Box sx={{ minWidth: 240, flexGrow: 1 }}>
                <Typography
                    color="inherit"
                    variant="subtitle2"
                    noWrap
                >
                    {title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary' }}
                    noWrap
                >
                    {description}
                </Typography>
            </Box>

            <Typography
                variant="caption"
                sx={{
                    pr: 3,
                    // flexShrink: 0,
                    // color: 'text.secondary',
                }}
            >
                {fDateTime(postedAt)}
            </Typography>
        </Stack>
    );
};
