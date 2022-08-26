import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Trading Chart View</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
