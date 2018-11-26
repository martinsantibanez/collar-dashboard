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
  // error handler
  axios.interceptors.response.use(function(response) {
    return response;
  }, function(error){
    var errorResponse = error.response
    // Si viene mensaje mostrar el error:
    if(errorResponse.data.message) store.dispatch('error/error', errorResponse.data.message);

    if(errorResponse.status == 403 || errorResponse.status == 401){
      // Si no tiene permiso deslogear y llevarlo al login:
      store.dispatch('auth/logout');
      router.push({name: 'Login'});
    }
    return true;
  })
}