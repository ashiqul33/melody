import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

import "../styles/cart_list.scss";
import "../styles/common.scss";
import "../styles/course_details.scss";
import "../styles/home.scss";
import "../styles/login.scss";
import "../styles/profile.scss";
import "../styles/signup.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
