import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});
// 拦截器
instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (error) => Promise.reject(error));
// 相应拦截器
instance.interceptors.response.use((response) => {
  console.log(response);
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;
