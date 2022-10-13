import { useRef, useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/material/styles/styled';
import MenuPopover from 'components/MenuPopover';
import langAction from 'store/lang/action';
import { withRouter } from 'next/router';
import Image from 'next/image';

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

const LANGS = [
    {
        value: 'en',
        label: 'English',
        icon: 'https://res.cloudinary.com/den5rttgg/image/upload/v1665677219/kpi/ic_flag_en_pcvufq.svg',
    },
    {
        value: 'id',
        label: 'Indonesian',
        icon: 'https://res.cloudinary.com/den5rttgg/image/upload/v1665677218/kpi/ic_flag_de_ayggei.svg',
    },
];

const LanguagePopover = () => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState('');

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleChangeLanguage = (lang: string) => {
        langAction.changeLanguage(lang);
        setLanguage(lang);
    };

    return (
        <>
            <IconButton
                ref={anchorRef}
                onClick={handleOpen}
                sx={{
                    padding: 0,
                    width: 44,
                    height: 44,
                    ...(open && {
                        bgcolor: (theme) => alpha(
                            theme.palette.primary.main,
                            theme.palette.action.focusOpacity,
                        ),
                    }),
                }}
            >
                {language === 'en' ? (
                    <Image
                        src="https://res.cloudinary.com/den5rttgg/image/upload/v1665677219/kpi/ic_flag_en_pcvufq.svg"
                        alt="Key Performance Index"
                        width={30}
                        height={30}
                    />
                ) : (
                    <Image
                        src="https://res.cloudinary.com/den5rttgg/image/upload/v1665677218/kpi/ic_flag_de_ayggei.svg"
                        alt="Key Performance Index"
                        width={30}
                        height={30}
                    />
                )}
            </IconButton>

            <MenuPopover
                open={open}
                onClose={handleClose}
                anchorEl={anchorRef.current}
                sx={{
                    'mt': 1.5,
                    'ml': 0.75,
                    'width': 180,
                    '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
                }}
            >
                <ArrowStyle className="arrow" />
                <Stack spacing={0.75}>
                    {LANGS.map((option) => {
                        return (
                            <MenuItem
                                key={option.value}
                                selected={language === option.value}
                                onClick={() => handleChangeLanguage(option.value)}
                            >
                                <Box
                                    component="img"
                                    alt={option.label}
                                    src={option.icon}
                                    sx={{ width: 28, mr: 2 }}
                                />
                                {option.label}
                            </MenuItem>
                        );
                    })}
                </Stack>
            </MenuPopover>
        </>
    );
};

export default withRouter(LanguagePopover);
