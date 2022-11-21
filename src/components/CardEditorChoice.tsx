import styles from '@styles/CardEditorChoice.module.scss';
import Image from 'next/image';

const CardEditorChoice = ({ data }: { data: any }) => {
  const { name, rating, description, image } = data;

  return (
    <a href="#" className={styles['link']}>
      <div className={styles['wrapper']}>
        <div className={styles['image-wrapper']}>
          <Image src={image} alt={name} fill />
        </div>
        <div className={styles['rating']}>
          <span>{rating}</span>
          {[...Array(5)].map((item, index) => (
            <i
              className={
                index < rating - 1 ? styles['stars-fill'] : styles['stars']
              }
              key={index}
            />
          ))}
        </div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default CardEditorChoice;
