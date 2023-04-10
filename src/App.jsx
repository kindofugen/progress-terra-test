import { useState, useEffect } from 'react';
import { getAccessToken } from './utils/network/helpers/query';

import StatusBar from './components/StatusBar/StatusBar';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoBlock/InfoBlock';
import FailBlock from './components/FailBlock/FailBlock';

function App() {
  const [onError, setOnError] = useState('');
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessToken();
        sessionStorage.setItem('accessToken', token);
        setIsToken(true);
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
          <InfoBlock isToken={isToken} />
        </>
      )}
    </>
  );
}

export default App;
