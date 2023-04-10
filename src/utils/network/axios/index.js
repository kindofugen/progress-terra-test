import axios from 'axios';

export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_ACCESS_URL,
  timeout: 1000,
  headers: {
    AccessKey: process.env.REACT_APP_ACCESS_KEY,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export const infoInstance = axios.create({
  baseURL: process.env.REACT_APP_GENERAL_INFO_URL,
  timeout: 1000,
  headers: {
    AccessKey: process.env.REACT_APP_ACCESS_KEY,
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
