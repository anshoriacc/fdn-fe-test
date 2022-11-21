import Image from 'next/image';

import styles from '@styles/CardReview.module.scss';
import profilePictures from '@images/pp.webp';

const CardReview = ({ data }: { data: any }) => {
  const { user, profile, product, star, comment } = data;
  console.log(data);
  return (
    <div className={styles['wrapper']}>
      <div className={styles['card']}>
        <div className={styles['product']}>
          <div className={styles['image-wrapper']}>
            <Image src={product?.image} alt={product?.name} fill />
          </div>
          <div>
            <h4>{product?.name}</h4>
            <p>{product?.desc}</p>
          </div>
        </div>
        <div className={styles['review']}>
          <div className={styles['rating']}>
            {[...Array(5)].map((item, index) => (
              <i
                className={
                  index < star ? styles['stars-fill'] : styles['stars']
                }
                key={index}
              />
            ))}
          </div>
          <p className={styles['comment']}>{comment}</p>
        </div>
      </div>
      <div className={styles['profile']}>
        <div className={styles['image-wrapper']}>
          <Image src={profilePictures} alt={user} fill />
        </div>
        <h4>{user}</h4>
        <p>
          {profile
            ? profile.map((item: any, index: any) => {
                if (index !== profile.length - 1) {
                  return <span key={index}>{`${item}, `}</span>;
                } else {
                  return <span key={index}>{item}</span>;
                }
              })
            : null}
        </p>
      </div>
    </div>
  );
};

export default CardReview;
