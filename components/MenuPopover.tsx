import { memo, ReactNode } from 'react';
import { Popover } from '@mui/material';
import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';

interface MenuPopoverProps {
    children: ReactNode,
    sx?: object
}

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

const MenuPopover = ({
    children,
    sx,
    ...other
}: MenuPopoverProps & $ComponentType<typeof Popover>) => (
    <Popover
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
            sx: {
                p: 1,
                width: 200,
                overflow: 'inherit',
                ...sx,
            },
        }}
        {...other}
    >
        <ArrowStyle className="arrow" />

        {children}
    </Popover>
);

export default memo(MenuPopover);
