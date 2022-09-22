import '../styles/globals.css';
import 'antd/dist/antd.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Komerce KPI</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
