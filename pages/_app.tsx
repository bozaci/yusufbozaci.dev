import Head from 'next/head';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Layout from 'components/Layout';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'remixicon/fonts/remixicon.css';
import 'styles/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yusuf Bozacı</title>
      </Head>
      <div className="app">
        <Layout>
          <GoogleAnalytics trackPageViews />
          <NextNProgress color="#889aff" height={5} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
