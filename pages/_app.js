import Head from "next/head";
import "../styles/global.scss";
import "../styles/bootstrap.scss";
import "../styles/custom.scss";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Trayn - Cloud & DevOps Services </title>
        <link
          rel="shortcut icon"
          href="images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <div className="">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
