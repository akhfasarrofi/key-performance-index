import { ReactNode, useMemo } from 'react';
import {
    ThemeProvider as MUIThemeProvider,
    createTheme,
    StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import palette from 'theme/Palette';
import typography from 'theme/Typography';
import componentsOverride from 'theme/overrides';
import shadows, { customShadows } from 'theme/Shadows';

type ChildrenProps = {
    children?: ReactNode
}

const ThemeProvider = ({ children }: ChildrenProps) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 8 },
            typography,
            shadows,
            customShadows,
        }),
        [],
    );

    const theme = createTheme(themeOptions as any);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
};

export default ThemeProvider;
