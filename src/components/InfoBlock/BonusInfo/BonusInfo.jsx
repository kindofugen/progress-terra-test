import loader from './img/loader.svg';
import burn from './img/burn.svg';
import arrow from './img/arrow.svg';
import styles from './BonusInfo.module.css';

const BonusInfo = ({ isLoading, data, onError }) => {
  const burningDate = new Date(data?.dateBurning).toLocaleString('ru-RU').slice(0, 5);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {isLoading && (
          <div className={styles.loading}>
            <img src={loader} alt='loading...' />
          </div>
        )}
        {Boolean(onError) && !data && (
          <div className={styles.error_message}>
            <span>{onError}</span>
          </div>
        )}
        {Boolean(data) && (
          <div className={styles.content}>
            <div className={styles.info}>
              <div className={styles.current_quantity}>
                <span className={styles.main_info}>{data?.currentQuantity} бонусов</span>
              </div>
              <div className={styles.burning}>
                <span>{burningDate} сгорит</span>
                <img src={burn} />
                <span>{data?.forBurningQuantity} бонусов</span>
              </div>
            </div>
            <div className={styles.button}>
              <img src={arrow} alt='' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BonusInfo;
