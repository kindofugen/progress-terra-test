import { authInstance, infoInstance } from '../axios';

export const getAccessToken = async () => {
  const { data } = await authInstance.post('/api/v3/clients/accesstoken', {
    idClient: process.env.REACT_APP_CLIENT_ID,
    accessToken: '',
    paramName: 'device',
    paramValue: process.env.REACT_APP_DEVICE_ID,
    latitude: 0,
    longitude: 0,
    sourceQuery: 0,
  });
  if (data.result.status === 0) {
    return data.accessToken;
  } else {
    throw new Error('Что-то пошло не так...');
  }
};

export const getBonusInfo = async (token) => {
  const { data } = await infoInstance.get(`/api/v3/ibonus/generalInfo/${token}`);
  if (data.resultOperation.status === 0) {
    return data.data;
  } else {
    throw new Error('Не удалось загрузить бонусы');
  }
};
