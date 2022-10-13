import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';
import MenuPopover from 'components/MenuPopover';
import handleLogout from 'utils/logout';
import Router from 'next/router';

const ArrowStyle = styled('span')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        top: -7,
        zIndex: 1,
        width: 12,
        right: 20,
        height: 12,
        content: '\'\'',
        position: 'absolute',
        borderRadius: '0 0 4px 0',
        transform: 'rotate(-135deg)',
        background: theme.palette.background.paper,
        borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
        borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    },
}));

const account = {
    displayName: 'Jaydon Frankie',
    email: 'demo@minimals.cc',
    photoURL: 'https://res.cloudinary.com/den5rttgg/image/upload/v1665677191/kpi/avatar_default_wsifzx.jpg',
};

const MENU_OPTIONS = [
    {
        label: 'Home',
        icon: 'eva:home-fill',
        route: '/dashboard',
    },
    {
        label: 'Profile',
        icon: 'eva:person-fill',
        route: '/profile',
    },
    {
        label: 'Settings',
        icon: 'eva:settings-2-fill',
        route: '/setting',
    },
];

const AccountPopover = () => {
    const anchorRef = useRef(null);

    const [open, setOpen] = useState(null);

    const handleOpen = (event: any) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };


    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    p: 0,
                    // ...(open && {
                    //     '&:before': {
                    //         zIndex: 1,
                    //         content: '\'\'',
                    //         width: '100%',
                    //         height: '100%',
                    //         borderRadius: '50%',
                    //         position: 'absolute',
                    //         bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                    //     },
                    // }),
                }}
            >
                <Avatar src={account.photoURL} alt="Key Performance Index" />
            </IconButton>

            <MenuPopover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleClose}
                sx={{
                    'p': 0,
                    'mt': 1.5,
                    'ml': 0.75,
                    '& .MuiMenuItem-root': {
                        typography: 'body2',
                        borderRadius: 0.75,
                    },
                }}
            >
                <ArrowStyle className="arrow" />

                <Box sx={{ my: 1.5, px: 2.5 }}>
                    <Typography variant="subtitle2" noWrap>
                        {account.displayName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                        {account.email}
                    </Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack sx={{ p: 1 }}>
                    {MENU_OPTIONS.map((option) => (
                        <MenuItem
                            key={option.label}
                            onClick={() => Router.push(option.route)}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
                    Logout
                </MenuItem>
            </MenuPopover>
        </>
    );
};

export default AccountPopover;
