import store from '../store';
import axios from 'axios';
import router from '../router.js';

export default function apiSetup() {
  axios.defaults.baseURL = 'http://192.168.0.15:3000/api/';
  axios.interceptors.request.use(function(config) {
    const token = store.getters['auth/token'];
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function(err) {
      return Promise.reject(err);
  });
  axios.interceptors.response.use(function(response) {
    return response;
  }, function(error){
    // console.log("atrapado");
    // console.log(JSON.stringify(error));
    // console.log(error.response);
    if(error.response.status == 403 || error.response.status == 401){
      // console.log(router.push);
      // console.log(router.push({name: 'Login'}));
      localStorage.removeItem('token');
      router.push({name: 'Login'});
    }
    return error;
  })
}