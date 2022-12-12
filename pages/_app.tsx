import '../styles/globals.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { NextPage } from 'next';
import createEmotionCache from 'createEmotionCache';
import ThemeProvider from 'theme/ThemeProvider';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from 'store/store';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enTranslations from 'locales/en';
import idTranslations from 'locales/id';
import { Auth0Provider } from '@auth0/auth0-react';

interface KomerceKPIProps extends AppProps {
    emotionCache?: EmotionCache;
    Component: NextPage;
}

const clientSideEmotionCache = createEmotionCache();

const resources = {
    en: { messages: enTranslations },
    id: { messages: idTranslations },
};

const i18n: any = i18next.use(initReactI18next);
i18n.init({
    react: {
        wait: true,
    },
    resources,
    lng: 'en',
    fallbackLng: 'id',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
    ns: ['messages'],
    defaultNS: 'messages',
    fallbackNS: [],
});

const ScrollToTop = () => {
    const { pathname } = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default function KomerceKPI(props: KomerceKPIProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const auth0Domain: any = process.env.NEXT_PUBLIC_URL_AUTH0_DOMAIN;
    const auth0ClientId: any = process.env.NEXT_PUBLIC_URL_AUTH0_CLIEND_ID;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <title>Key Performance Index</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            <Provider store={store}>
                <ThemeProvider>
                    <I18nextProvider i18n={i18n}>
                        <ScrollToTop />
                        <Auth0Provider
                            domain={auth0Domain}
                            clientId={auth0ClientId}
                            redirectUri="http://localhost:3000"
                            scope="read:current_user update:current_user_metadata"
                        >
                            <Component {...pageProps} />
                        </Auth0Provider>
                    </I18nextProvider>
                </ThemeProvider>
            </Provider>
        </CacheProvider>
    );
};
