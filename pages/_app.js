import '@/styles/globals.css'
import React, {Component} from 'react';
import Layout from "../components/layout";
import UIUC from "../components/UIUC";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    

  )
}
