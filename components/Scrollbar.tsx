import { ReactNode } from 'react';
import SimpleBarReact from 'simplebar-react';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface ScrollbarProps {
    children?: ReactNode,
    sx?: object
}

const RootStyle = styled('div')(() => ({
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
    'maxHeight': '100%',
    '& .simplebar-scrollbar': {
        '&:before': {
            backgroundColor: alpha(theme.palette.grey[600], 0.48),
        },
        '&.simplebar-visible:before': {
            opacity: 1,
        },
    },
    '& .simplebar-track.simplebar-vertical': {
        width: 10,
    },
    '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
        height: 6,
    },
    '& .simplebar-mask': {
        zIndex: 'inherit',
    },
}));

const Scrollbar = ({ children, sx, ...other }: ScrollbarProps) => {
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobile) {
        return (
            <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
                {children}
            </Box>
        );
    }

    return (
        <RootStyle>
            <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
                {children}
            </SimpleBarStyle>
        </RootStyle>
    );
};

export default Scrollbar;
