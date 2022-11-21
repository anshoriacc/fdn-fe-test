import React from 'react';
import Head from 'next/head';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>
          Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
