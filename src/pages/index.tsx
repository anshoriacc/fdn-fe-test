import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

import styles from '@styles/Home.module.scss';
import profilePictures from '@images/pp.webp';
import nivea from '@images/nivea.png';
import theOrdinary from '@images/the-ordinary.png';
import theBodyShop from '@images/the-body-shop.png';
import skII from '@images/sk-ii.png';
import innisfree from '@images/innisfree.png';

import Ads from '@components/Ads';
import CardEditorChoice from '@components/CardEditorChoice';
import CardArticles from '@components/CardArticles';
import CardReview from '@components/CardReview';
import Layout from '@components/Layout';

export default function Home() {
  const [dataEditorChoice, setDataEditorChoice] = useState<any[]>([]);
  const [dataLatestArticles, setDataLatestArticles] = useState<any[]>([]);
  const [dataLatestReviews, setDataLatestReviews] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      .then((res) => {
        // console.log(res.data);
        setDataEditorChoice(res.data["editor's choice"]);
        setDataLatestArticles(res.data['latest articles']);
        setDataLatestReviews(res.data['latest review']);
        // console.log(dataEditorChoice);
      })
      .catch((err) => {
        console.log(err);
      });

    return;
  }, []);

  return (
    <Layout>
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
        <div className={styles['ads-divider']}>
          <LatestReviews data={dataLatestReviews} />
          <div className={styles['ads-margin']}>
            <Ads text={'MR 2'} width={300} height={250} />
          </div>
        </div>
        <TopBrands />
      </main>
    </Layout>
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

function LatestReviews({ data }: { data: Array<any> }) {
  const [reviewsShowed, setReviewsShowed] = useState<any[]>([]);
  const [reviewsMeta, setReviewsMeta] = useState<any>({
    offset: 0,
  });

  useEffect(() => {
    if (reviewsMeta.offset === 0) {
      setReviewsShowed(data?.slice(0, 2));
    } else {
      setReviewsShowed(data?.slice(1, 3));
    }
  }, [data, reviewsMeta.offset]);

  const buttonHandler = () => {
    if (reviewsMeta.offset === 0) {
      setReviewsMeta({ ...reviewsMeta, offset: reviewsMeta.offset + 1 });
    } else {
      setReviewsMeta({ ...reviewsMeta, offset: reviewsMeta.offset - 1 });
    }
  };

  return (
    <section className={styles['latest-reviews']}>
      <div className={styles['header-section']}>
        <div>
          <h2>Latest Reviews</h2>
          <h3>So you can make better purchase decision</h3>
        </div>
        <a href="#">See more &gt;</a>
      </div>
      <div className={styles['list-card']}>
        {reviewsShowed
          ? reviewsShowed.map((item, index) => (
              <CardReview data={item} key={index} />
            ))
          : null}
      </div>
      <div className={styles['button']}>
        <button
          onClick={buttonHandler}
          disabled={reviewsMeta.offset === 0 ? true : false}
        >
          {`<`}
        </button>
        <button
          onClick={buttonHandler}
          disabled={reviewsMeta.offset === 1 ? true : false}
        >{`>`}</button>
      </div>
    </section>
  );
}

function TopBrands() {
  return (
    <section className={styles['top-brands']}>
      <div className={styles['header-section']}>
        <div>
          <h2>Top Brands</h2>
          <h3>We all know and love</h3>
        </div>
        <a href="#">See more &gt;</a>
      </div>
      <div className={styles['brands']}>
        <div className={styles['image-wrapper']}>
          <Image src={nivea} alt="brands" fill />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={theOrdinary} alt="brands" fill />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={theBodyShop} alt="brands" fill />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={skII} alt="brands" fill />
        </div>
        <div className={styles['image-wrapper']}>
          <Image src={innisfree} alt="brands" fill />
        </div>
      </div>
      <p className={styles['fdn']}>
        Female Daily - Find everything you want to know about beauty on Female
        Daily
      </p>
      <p>
        Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
        Tutorials, Discussions Beauty Workshops, anything!
      </p>
      <p>
        We are here to be your friendly solution to all things beauty, inside
        and out!
      </p>
    </section>
  );
}
