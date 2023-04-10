import { useState, useEffect } from 'react';
import { getBonusInfo } from '../../utils/network/helpers/query';

import BonusInfo from './BonusInfo/BonusInfo';

import styles from './InfoBlock.module.css';

const InfoBlock = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [onError, setOnError] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      (async () => {
        setIsLoading(true);
        try {
          setData(await getBonusInfo(token));
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          setOnError(error.message);
        }
      })();
    }
  }, []);
  return (
    <div className={styles.container}>
      <BonusInfo isLoading={isLoading} data={data} onError={onError} />
    </div>
  );
};

export default InfoBlock;
