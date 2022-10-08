import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Iconify from 'components/Iconify';
import Searchbar from 'layouts/navbar/Searchbar';
import AccountPopover from 'layouts/navbar/AccountPopover';
import LanguagePopover from 'layouts/navbar/LanguagePopover';
import NotificationsPopover from 'layouts/navbar/NotificationsPopover';
import { MouseEventHandler } from 'react';

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
    },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: APPBAR_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

type NavbarProps = {
    openSidebar: MouseEventHandler<HTMLAnchorElement> | undefined | any
}

const Navbar = ({ openSidebar }: NavbarProps) => (
    <RootStyle>
        <ToolbarStyle>
            <IconButton
                onClick={openSidebar}
                sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
            >
                <Iconify icon="eva:menu-2-fill" />
            </IconButton>

            <Searchbar />
            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                <LanguagePopover />
                <NotificationsPopover />
                <AccountPopover />
            </Stack>
        </ToolbarStyle>
    </RootStyle>
);

export default Navbar;
