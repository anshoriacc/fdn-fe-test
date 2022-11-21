import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/Navbar.module.scss';
import logo from '@icons/logo-fd.svg';

const navigations = [
  { title: 'skincare', link: 'skincare' },
  { title: 'make up', link: 'makeup' },
  { title: 'body', link: 'body' },
  { title: 'hair', link: 'hair' },
  { title: 'fragrance', link: 'fragrance' },
  { title: 'nails', link: 'nails' },
  { title: 'tools', link: 'tools' },
  { title: 'brands', link: 'brands' },
];

const Navbar = () => {
  return (
    <header className={styles['header']}>
      <nav className={styles['top-navigation']}>
        <Link href="/">
          <div className={styles['logo-wrapper']}>
            <Image src={logo} alt="female-daily-logo" fill />
          </div>
        </Link>
        <div className={styles['search-wrapper']}>
          <i className={styles['search-icon']}></i>
          <input
            type="search"
            placeholder="Search products, articles, topics, brands, etc"
          />
        </div>
        <button>LOGIN / SIGNUP</button>
      </nav>
      <nav className={styles['bottom-navigation']}>
        {navigations.map((navigation, index) => (
          <Link href={`/${navigation.link}`} key={index}>
            {navigation.title.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
