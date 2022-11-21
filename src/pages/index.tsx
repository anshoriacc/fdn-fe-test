import { useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

import styles from '@styles/Home.module.scss';

import Navbar from '@components/Navbar';
import Ads from '@components/Ads';
import Footer from '@components/Footer';

export default function Home() {
  useEffect(() => {
    axios
      .get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }, []);

  return (
    <>
      <Head>
        <title>
          Female Daily - Info, Artikel, Video dan Review Seputar Kecantikan
        </title>
      </Head>
      <Navbar />
      <Ads text="Top Frame" width={970} height={50} />
      <Ads text="Billboard" width={970} height={250} />
      <EditorChoice />
      <Ads
        text={'Horizontal\n(Internal campaign only)'}
        width={970}
        height={250}
      />
      <Footer />
    </>
  );
}

function EditorChoice() {
  return (
    <section className={styles['editor-choice']}>
      <h2>Editor&apos;s Choice</h2>
      <h3>Curated with love</h3>
    </section>
  );
}
