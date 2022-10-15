import useTheme from '@mui/material/styles/useTheme';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Iconify from 'components/Iconify';
import {
    Widget,
    Analytic,
    CurrentSubject,
    Timelines,
    TrafficSocmed,
} from 'components/pages/dashboard';
import { useTranslation } from 'react-i18next';
import Page from 'components/Page';
import Image from 'next/image';
import { faker } from '@faker-js/faker';

const MainDashboard = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Page title='Dashboard'>
            <Container maxWidth="xl">
                <Typography variant="h4" sx={{ mb: 5, display: 'flex' }}>
                    {t('dashboard.title')} Admin Komerce
                    <Image
                        height={40}
                        width={40}
                        src='https://res.cloudinary.com/den5rttgg/image/upload/v1665677181/kpi/hand_njzlk2.gif'
                        alt='Key Performance Index'
                    />
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Widget
                            title={t('dashboard.technology')}
                            total={12}
                            icon={'ant-design:code-filled'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Widget
                            title={t('dashboard.people')}
                            total={5} color="info"
                            icon={'ri:team-fill'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Widget
                            title={t('dashboard.product')}
                            total={4}
                            color="secondary"
                            icon={'cib:product-hunt'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Widget
                            title={t('dashboard.operation')}
                            total={6}
                            color="warning"
                            icon={'icon-park-solid:reverse-operation-in'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Widget
                            title={t('dashboard.growth')}
                            total={4}
                            color="error"
                            icon={'uil:arrow-growth'}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Widget
                            title={t('dashboard.cx')}
                            total={5}
                            color="success"
                            icon={'ant-design:customer-service-filled'}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={12}>
                        <Analytic
                            title={t('dashboard.performance')}
                            chartLabels={[
                                '01/01/2003',
                                '02/01/2003',
                                '03/01/2003',
                                '04/01/2003',
                                '05/01/2003',
                                '06/01/2003',
                                '07/01/2003',
                                '08/01/2003',
                                '09/01/2003',
                                '10/01/2003',
                                '11/01/2003',
                            ]}
                            chartData={[
                                {
                                    name: 'Team A',
                                    type: 'column',
                                    fill: 'solid',
                                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                                },
                                {
                                    name: 'Team B',
                                    type: 'area',
                                    fill: 'gradient',
                                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                                },
                                {
                                    name: 'Team C',
                                    type: 'line',
                                    fill: 'solid',
                                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <TrafficSocmed
                            title={t('dashboard.socmed')}
                            list={[
                                {
                                    name: 'FaceBook',
                                    value: 323234,
                                    icon: <Iconify
                                        icon={'eva:facebook-fill'}
                                        color="#1877F2"
                                        width={32}
                                        height={32}
                                    />,
                                },
                                {
                                    name: 'Google',
                                    value: 341212,
                                    icon: <Iconify
                                        icon={'eva:google-fill'}
                                        color="#DF3E30"
                                        width={32}
                                        height={32}
                                    />,
                                },
                                {
                                    name: 'Linkedin',
                                    value: 411213,
                                    icon: <Iconify
                                        icon={'eva:linkedin-fill'}
                                        color="#006097"
                                        width={32}
                                        height={32}
                                    />,
                                },
                                {
                                    name: 'Twitter',
                                    value: 443232,
                                    icon: <Iconify
                                        icon={'eva:twitter-fill'}
                                        color="#1C9CEA"
                                        width={32}
                                        height={32}
                                    />,
                                },
                            ]}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <CurrentSubject
                            title="Current Subject"
                            chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
                            chartData={[
                                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
                            ]}
                            chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
                        />
                    </Grid>

                    <Grid item xs={12} md={6} lg={4}>
                        <Timelines
                            title="Order Timeline"
                            list={[...Array(5)].map((_, index) => ({
                                id: faker.datatype.uuid(),
                                title: [
                                    '1983, orders, $4220',
                                    '12 Invoices have been paid',
                                    'Order #37745 from September',
                                    'New order placed #XF-2356',
                                    'New order placed #XF-2346',
                                ][index],
                                type: `order${index + 1}`,
                                time: '16 Feb 2022 09:35',
                            }))}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default MainDashboard;
