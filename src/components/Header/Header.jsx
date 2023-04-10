import info from './img/info.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <span>логотип</span>
        </div>
        <div className={styles.info}>
          <img src={info} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
