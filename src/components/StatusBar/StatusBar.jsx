import connection from './img/connection.svg';
import wifi_connection from './img/wifi_connection.svg';
import battery from './img/battery.svg';
import bluetooth from './img/bluetooth.svg';

import styles from './StatusBar.module.css';

const StatusBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_block}>
        <div className={styles.connection_wrapper}>
          <img src={connection} />
        </div>
        <div className={styles.operator}>
          <span className={styles.text}>Figma</span>
        </div>
        <div className={styles.wifi_connection}>
          <img src={wifi_connection} />
        </div>
      </div>
      <div className={styles.center_block}>
        <div className={styles.time}>
          <span className={styles.text}>9:42 AM</span>
        </div>
      </div>
      <div className={styles.right_block}>
        <div className={styles.bluetooth}>
          <img src={bluetooth} />
        </div>
        <div className={styles.battery}>
          <span className={styles.text}>42%</span>
          <img src={battery} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
