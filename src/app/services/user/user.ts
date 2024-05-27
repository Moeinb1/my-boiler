import axiosInstance from '@config/axios';
const url = '/users';

//admin table
export const adminDetails = (params: {
  name?: string;
  email?: string;
  username?: string | number;
  mobile_number?: number;
  page?: number | string;
  per_page?: number | string;
  sort?: string | number;
  direction?: string | number;
}) => {
  return axiosInstance({
    method: 'get',
    url: url,
    params,
  });
};

//admin profile
export const adminShow = (params: { id: string }) => {
  return axiosInstance({
    method: 'get',
    url: url + '/' + params.id,
  });
};

//admin my-profile
export const adminShowProfile = () => {
  return axiosInstance({
    method: 'get',
    url: url + '/profile',
  });
};

// create admin
export const createAdmin = (data: any) => {
  return axiosInstance({
    method: 'post',
    url: url,
    data,
  });
};

// update admin
export const updateAdmin = (data: any, userId?: number | string) => {
  return axiosInstance({
    method: 'put',
    url: url + '/' + userId,
    data,
  });
};

// update admin password
export const updateAdminsPassword = (data: any, userId?: number | string) => {
  return axiosInstance.patch(url + '/' + userId + '/password', data);
};

// change status admin
export const suspendAdmin = (userId?: number | string) => {
  return axiosInstance({
    method: 'patch',
    url: url + '/' + userId + '/status',
  });
};

// logs table admin
export const adminLogs = (params: { id: string }) => {
  return axiosInstance({
    method: 'get',
    url: url + '/' + params.id + '/log',
  });
};

//update admin data
export const updateAdminData = (data: any, params: number) => {
  return axiosInstance({
    method: 'patch',
    url: url + '/' + params,
    data,
  });
};

export const selfUpdatePassword = (data: object) => {
  console.log(data);
  return axiosInstance({
    method: 'patch',
    url: url + '/' + 'self-update',
    data,
  });
};

export const updateSuperAdminData = (userId: number, data: object) => {
  return axiosInstance({
    method: 'put',
    url: url + '/' + userId,
    data,
  });
};

//export admin data
export const exportAdminData = (params: {
  name?: string;
  email?: string;
  username?: string | number;
  mobile_number?: number;
  page?: number | string;
  per_page?: number | string;
  sort?: string | number;
  direction?: string | number;
}) => {
  return axiosInstance({
    method: 'get',
    url: url + '/export?type=excel',
    params,
  });
};
