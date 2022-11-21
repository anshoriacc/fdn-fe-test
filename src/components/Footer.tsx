import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/Footer.module.scss';
import logo from '@icons/logo-fd.svg';
import appstore from '@images/download-appstore.png';
import googleplay from '@images/download-googleplay.png';
import fb from '@icons/fb.svg';
import twitter from '@icons/twitter.svg';
import instagram from '@icons/instagram.svg';
import youtube from '@icons/youtube.svg';

import Ads from '@components/Ads';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['left']}>
        <div className={styles['navigations']}>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Awards</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </div>
        <Link href="/">
          <div className={styles['logo-wrapper']}>
            <Image src={logo} alt="female-daily-logo" fill />
          </div>
        </Link>
        <p className={styles['copyright']}>
          Copyright © 2015 - 2022 Female Daily Network ∙ All the rights
          reserved.
        </p>
      </div>
      <div className={styles['right']}>
        <p className={styles['title']}>Download Our Mobile App</p>
        <div className={styles['download']}>
          <a href="https://itunes.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id&mt=8">
            <div className={styles['image-wrapper']}>
              <Image src={appstore} alt="download from appstore" fill />
            </div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.fdbr.android&hl=en_GB">
            <div className={styles['image-wrapper']}>
              <Image src={googleplay} alt="download from googleplay" fill />
            </div>
          </a>
        </div>
        <div className={styles['social']}>
          <a href="https://www.facebook.com/FemaleDailyNetwork/">
            <i className={styles['fb']} />
          </a>
          <a href="https://twitter.com/femaledaily">
            <i className={styles['twitter']} />
          </a>
          <a href="https://www.instagram.com/femaledailynetwork/">
            <i className={styles['instagram']} />
          </a>
          <a href="https://www.youtube.com/user/FemaleDailyNetwork">
            <i className={styles['youtube']} />
          </a>
        </div>
      </div>
      <div className={styles['ads-wrapper']}>
        <Ads text="Bottom Frame" width={970} height={50} />
      </div>
    </footer>
  );
};

export default Footer;
