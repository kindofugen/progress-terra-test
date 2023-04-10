import styles from './FailBlock.module.css';

const FailBlock = ({ onError }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span>{onError}</span>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Перезагрузить страницу
        </button>
      </div>
    </div>
  );
};

export default FailBlock;
