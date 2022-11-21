import styles from '@styles/Ads.module.scss';

const Ads = ({
  text,
  width,
  height,
}: {
  text: String;
  width: number;
  height: number;
}) => {
  return (
    <div className={styles['ads-wrapper']}>
      <div
        className={styles['ads']}
        style={{
          width,
          height,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Ads;
