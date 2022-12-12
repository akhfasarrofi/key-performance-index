import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { fDateTime } from 'utils/formatTime';
import { DashboardAnalytic } from 'types/Dashboard';

const Timelines = ({
    title,
    subheader,
    list,
    ...other
}: DashboardAnalytic & $ComponentType<typeof Card>) => (
    <Card {...other}>
        <CardHeader title={title} subheader={subheader} />

        <CardContent
            sx={{
                '& .MuiTimelineItem-missingOppositeContent:before': {
                    display: 'none',
                },
            }}
        >
            <Timeline>
                {list?.map((item, index) => (
                    <OrderItem
                        key={index}
                        item={item}
                        isLast={index === list.length - 1}
                    />
                ))}
            </Timeline>
        </CardContent>
    </Card>
);

export default Timelines;

const OrderItem = ({ item, isLast }: any) => {
    const { type, title, time } = item;

    return (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot
                    color={
                        (type === 'order1' && 'primary') ||
                        (type === 'order2' && 'success') ||
                        (type === 'order3' && 'info') ||
                        (type === 'order4' && 'warning') ||
                        'error'
                    }
                />
                {isLast ? null : <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
                <Typography variant="subtitle2">{title}</Typography>

                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {fDateTime(time)}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};
