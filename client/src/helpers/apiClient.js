import axios from 'axios';

export default function apiClient(req) {
  const instance = axios.create({
    baseURL: '/api'
  });

  let token;

  instance.setJwtToken = newToken => {
    token = newToken;
  };

  instance.interceptors.request.use(
    conf => {
        if (token) {
            conf.headers.authorization = token;
        }

        return conf;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response ? error.response.data : error)
  );

  return instance;
}
