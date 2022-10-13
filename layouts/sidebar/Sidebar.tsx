import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Link as LinkMUI } from '@mui/material';
import useResponsive from 'hooks/useResponsive';
import Logo from 'public/assets/Logo';
import Scrollbar from 'components/Scrollbar';
import SidabarMenu from 'layouts/sidebar/SidabarMenu';
import sidebarConfig from 'layouts/sidebar/SidebarConfig';
import { useRouter } from 'next/router';

const DRAWER_WIDTH = 280;

const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: 'https://res.cloudinary.com/den5rttgg/image/upload/v1665677191/kpi/avatar_default_wsifzx.jpg',
};

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    backgroundColor: theme.palette.grey[500_12],
}));

type SidebarProps = {
    isOpenSidebar: boolean
    onCloseSidebar: any
}

const Sidebar = ({ isOpenSidebar, onCloseSidebar }: SidebarProps) => {
    const { pathname } = useRouter();
    const isDesktop = useResponsive('up', 'lg');

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                'height': 1,
                '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
        >
            <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
                <Logo />
            </Box>

            <Box sx={{ mb: 5, mx: 2.5 }}>
                <LinkMUI underline="none" component={Link} href="/">
                    <AccountStyle>
                        <Avatar src={account.photoURL} alt="Key Performance Index" />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                                {account.displayName}
                            </Typography>
                        </Box>
                    </AccountStyle>
                </LinkMUI>
            </Box>

            <SidabarMenu sidebarConfig={sidebarConfig} />
        </Scrollbar>
    );

    return (
        <RootStyle>
            {!isDesktop && (
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}

            {isDesktop && (
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: DRAWER_WIDTH,
                            bgcolor: 'background.default',
                            borderRightStyle: 'dashed',
                        },
                    }}
                >
                    {renderContent}
                </Drawer>
            )}
        </RootStyle>
    );
};

export default Sidebar;
