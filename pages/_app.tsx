import "../styles/globals.scss";

import React from "react";
import { AppProps } from "next/app";

import Layout from "../layout/Layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
