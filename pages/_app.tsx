import { AppProps } from "next/dist/shared/lib/router/router";
import { Fragment } from "react";
import "../styles/base.global.css";
import "bootstrap/dist/css/bootstrap.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
