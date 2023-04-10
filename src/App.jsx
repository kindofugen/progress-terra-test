import { useState, useEffect } from 'react';
import { getAccessToken } from './utils/network/helpers/query';

import StatusBar from './components/StatusBar/StatusBar';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import FailBlock from './components/FailBlock/FailBlock';

function App() {
  const [onError, setOnError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessToken();
        sessionStorage.setItem('accessToken', token);
      } catch (error) {
        setOnError(error.message);
      }
    })();
  }, []);

  return (
    <>
      <StatusBar />
      <Header />
      {onError ? (
        <FailBlock onError={onError} />
      ) : (
        <>
          <InfoBlock />
        </>
      )}
    </>
  );
}

export default App;
