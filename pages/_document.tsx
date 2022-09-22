import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="Komerce KPI"
            content='Dashboard for KPI Apps'
          />
          <meta
            name="description"
            content='Dashboard - for KPI'
          />
          <meta
            property="og:title"
            content='KPI Dashboard'
            key="ogtitle"
          />
          <meta
            property="og:image"
            content="/assets/images/banner-desktop.jpg"
            key="ogimage"
          />
          {/* <meta
            property="image"
            content="/assets/images/math/banner-desktop.jpg"
          /> */}
          <meta
            property="og:site_name"
            content='KPI Dashboard'
            key="ogsitename"
          />
          <link rel="icon" href="/favicon.png" />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="expires" content="0" />
          <meta httpEquiv="pragma" content="no-cache" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
