import styled from '@mui/material/styles/styled';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useResponsive from '../hooks/useResponsive';
import Page from 'components/Page';
import Logo from 'components/Logo';
import RegisterForm from 'components/auth/RegisterForm';
import AuthSocial from 'components/auth/AuthSocial';
import { useRouter } from 'next/router';

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

export default function Register() {
    const smUp = useResponsive('up', 'sm');
    const mdUp = useResponsive('up', 'md');

    const router = useRouter();

    return (
        <Page title="Register">
            <RootStyle>
                <HeaderStyle>
                    <Logo />
                    {smUp && (
                        <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                            Already have an account? {''}
                            <Link
                                variant="subtitle2"
                                onClick={() => router.push('/')}
                                sx={{ cursor: 'pointer' }}
                            >
                                Login
                            </Link>
                        </Typography>
                    )}
                </HeaderStyle>

                {mdUp && (
                    <SectionStyle>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                            Manage the job more effectively with Minimal
                        </Typography>
                        <img
                            alt="Key Performance Indexx"
                            src="https://res.cloudinary.com/den5rttgg/image/upload/v1665678768/kpi/illustration_register_oxrxhu.png"
                            width={464}
                            height={348}
                        />
                    </SectionStyle>
                )}

                <Container>
                    <ContentStyle>
                        <Typography gutterBottom variant='h4'>Register with</Typography>

                        <AuthSocial />

                        <RegisterForm />

                        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                            By registering, I agree to Minimal&nbsp;
                            <Link underline="always" color="text.primary" href="#">
                                Terms of Service
                            </Link>
                            {''}and{''}
                            <Link underline="always" color="text.primary" href="#">
                                Privacy Policy
                            </Link>
                            .
                        </Typography>

                        {!smUp && (
                            <Typography variant="body2" sx={{ mt: 3, textAlign: 'center' }}>
                                Already have an account?{' '}
                                <Link
                                    variant="subtitle2"
                                    onClick={() => router.push('/')}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    Login
                                </Link>
                            </Typography>
                        )}
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
