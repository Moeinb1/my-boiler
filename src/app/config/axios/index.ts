import axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

interface IAxiosRequest extends InternalAxiosRequestConfig {
  notUseToken?: boolean;
  manualToken?: string;
}

let baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (request: IAxiosRequest) => {
    const user = getCookie('user');
    request.headers = request.headers ?? {};
    request.headers['Accept-Language'] = 'fa';
    if (!request?.notUseToken) {
      if (request.manualToken) {
        (request.headers as AxiosHeaders).set(
          'Authorization',
          `Bearer ${request.manualToken}`
        );
      } else if (user && JSON.parse(`${user}`).access_token) {
        (request.headers as AxiosHeaders).set(
          'Authorization',
          `Bearer ${JSON.parse(`${user}`).access_token}`
        );
      }
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    var user = getCookie('user');
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 &&
        user?.toString()?.includes('refresh_token')) ||
      (error.stack?.includes('SyntaxError') &&
        user?.toString()?.includes('refresh_token'))
    ) {
      try {
        // let refresh_token = JSON.parse(`${user}`).refresh_token ?? '';
        axios
          .get(
            `${baseURL}/auth/refresh-token?refresh_token=${
              JSON.parse(
                `{${user
                  ?.toString()
                  ?.substring(user?.toString()?.indexOf('refresh_token') - 1)}`
              )?.refresh_token
            }`
          )
          .then((response) => {
            if (response?.data?.data?.refresh_token) {
              axiosInstance.defaults.headers.common['Authorization'] =
                'Bearer ' + response.data?.data?.refresh_token;
              setCookie('user', JSON.stringify(response.data?.data), {
                maxAge: 600 * 60 * 240,
              });
              // originalRequest._retry = true;
              return axiosInstance;
            }
          })
          .catch((err) => console.log(err));
      } catch (err) {
        setTimeout(() => {
          window.location.replace('/login');
          deleteCookie('user');
        }, 1000);
      }
    }
    if (!user?.toString()?.includes('refresh_token') || !user) {
      window.location.replace('/login');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
