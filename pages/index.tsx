import styled from '@mui/material/styles/styled';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useResponsive from 'hooks/useResponsive';
import Logo from 'components/Logo';
import LoginForm from 'features/authentication/Login';
import AuthSocial from 'features/authentication/Socmed';
import Image from 'next/image';
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

export default function Login() {
    const smUp = useResponsive('up', 'sm');
    const mdUp = useResponsive('up', 'md');

    const router = useRouter();

    return (
        <RootStyle>
            <HeaderStyle>
                <Logo />

                {smUp && (
                    <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                        Don’t have an account? {''}
                        <Link
                            variant="subtitle2"
                            sx={{ cursor: 'pointer' }}
                            onClick={() => router.push('/register')}
                        >
                            Get started
                        </Link>
                    </Typography>
                )}
            </HeaderStyle>

            {mdUp && (
                <SectionStyle>
                    <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                        Hi, Welcome Back
                    </Typography>
                    <Image
                        src="https://res.cloudinary.com/den5rttgg/image/upload/v1665676693/kpi/illustration_login_y9im3j.png"
                        alt="Key Performance Index"
                        width={464}
                        height={348}
                    />
                </SectionStyle>
            )}

            <Container maxWidth="sm">
                <ContentStyle>
                    <Typography variant="h4" gutterBottom>
                        Sign In with
                    </Typography>

                    <AuthSocial />

                    <LoginForm />

                    {!smUp && (
                        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                            Don’t have an account?{' '}
                            <Link variant="subtitle2" onClick={() => router.push('/register')}>
                                Get started
                            </Link>
                        </Typography>
                    )}
                </ContentStyle>
            </Container>
        </RootStyle>
    );
}
