import { AppProps } from "next/dist/shared/lib/router/router";
import { Fragment } from "react";
import "../styles/base.global.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.interceptors.request.use((req) => {
  if (!req.url.includes("auth")) {
    const token = JSON.parse(sessionStorage.getItem("accessToken"));
    req.headers.Authorization = token;
  }
  return req;
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default MyApp;
