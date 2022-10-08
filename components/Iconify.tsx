import { Icon } from '@iconify/react';
import { Box, SxProps, Theme } from '@mui/material';

type IconifyProps = {
    icon: string
    sx?: SxProps<Theme>
}
const Iconify = ({ icon, sx, ...other }: IconifyProps & $ComponentType<typeof Box>) => {
    return <Box
        component={Icon}
        icon={icon}
        sx={{ ...sx }}
        {...other}
    />;
};

export default Iconify;
