import { useState, useEffect } from 'react';
import { getBonusInfo } from '../../utils/network/helpers/query';

import BonusInfo from './BonusInfo/BonusInfo';

import styles from './InfoBlock.module.css';

const InfoBlock = ({ isToken }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [onError, setOnError] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    (async () => {
      setIsLoading(true);
      try {
        setData(await getBonusInfo(token));
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setOnError(error.message);
      }
    })();
  }, [isToken]);
  return (
    <div className={styles.container}>{data && <BonusInfo isLoading={isLoading} data={data} onError={onError} />}</div>
  );
};

export default InfoBlock;
