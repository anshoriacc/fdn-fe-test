import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/Home.module.scss';
import profilePictures from '@images/pp.webp';

import Navbar from '@components/Navbar';
import Ads from '@components/Ads';
import Footer from '@components/Footer';
import CardEditorChoice from '@components/CardEditorChoice';
import CardArticles from '@components/CardArticles';

export default function Home() {
  const [dataEditorChoice, setDataEditorChoice] = useState([]);
  const [dataLatestArticles, setDataLatestArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      .then((res) => {
        console.log(res.data);
        setDataEditorChoice(res.data["editor's choice"]);
        setDataLatestArticles(res.data['latest articles']);
        // console.log(dataEditorChoice);
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles['main']}>
        <Ads text="Top Frame" width={970} height={50} />
        <Ads text="Billboard" width={970} height={250} />
        <EditorChoice data={dataEditorChoice} />
        <Ads
          text={'Horizontal\n(Internal campaign only)'}
          width={970}
          height={250}
        />
        <LatestArticles data={dataLatestArticles} />
      </main>
      <Footer />
    </>
  );
}

function EditorChoice({ data }: { data: Array<any> }) {
  return (
    <section className={styles['editor-choice']}>
      <h2>Editor&apos;s Choice</h2>
      <h3>Curated with love</h3>
      <div className={styles['list-card']}>
        {data
          ? data.map((item, index) => (
              <div key={index} className={styles['ec-wrapper']}>
                <div className={styles['editor']}>
                  <div className={styles['image-wrapper']}>
                    <Image src={profilePictures} alt="profile pictures" fill />
                  </div>
                  <div>
                    <p className={styles['name']}>{item?.editor}</p>
                    <p className={styles['role']}>{item?.role}</p>
                  </div>
                </div>
                <CardEditorChoice data={item?.product} />
              </div>
            ))
          : null}
      </div>
    </section>
  );
}

function LatestArticles({ data }: { data: Array<any> }) {
  return (
    <section className={styles['latest-articles']}>
      <div className={styles['header-section']}>
        <div>
          <h2>Latest Articles</h2>
          <h3>So you can make better purchase decision</h3>
        </div>
        <a href="#">See more &gt;</a>
      </div>
      <div className={styles['list-card']}>
        {data
          ? data.map((item, index) => <CardArticles data={item} key={index} />)
          : null}
      </div>
    </section>
  );
}
