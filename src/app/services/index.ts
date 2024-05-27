import axiosInstance from '../config/axios';
import * as adminService from './user/user';
const renewToken = (refreshToken: any) => {
  const axiosBody: any = {
    method: 'post',
    url: 'renewToken',
    data: {
      refreshToken,
    },
    notUseToken: true,
  };
  return axiosInstance(axiosBody);
};

const services = {
  adminService,
  renewToken,
};

export default services;
