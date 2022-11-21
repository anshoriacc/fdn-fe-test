import Image from 'next/image';

import styles from '@styles/CardArticles.module.scss';

const CardArticles = ({ data }: { data: any }) => {
  const { title, author, image, published_at } = data;
  return (
    <a href="#" className={styles['link']}>
      <div className={styles['wrapper']}>
        <div className={styles['image-wrapper']}>
          <Image src={image} alt={title} fill />
        </div>

        <h4>{title}</h4>
        <p>
          <span className={styles['author']}>{author}</span> |{' '}
          <span>{published_at}</span>
        </p>
      </div>
    </a>
  );
};

export default CardArticles;
