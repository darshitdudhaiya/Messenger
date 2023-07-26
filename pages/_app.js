import "../styles/tailwind.css";
import "../styles/slick.css";
import '../styles/globals.css';
import React, { useState } from "react";
import { SessionProvider } from 'next-auth/react';
import Head from "next/head";
function MyApp({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
      <Head>
        <title>Messenger</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
export default MyApp;