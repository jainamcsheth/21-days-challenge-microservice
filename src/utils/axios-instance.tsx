/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import axios from 'axios';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...config.headers,
    };
    return config;
  },
  (error) => {
    console.log(' Request error - ', error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log('Response error - ', error);
  },
);
