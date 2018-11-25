import axios from 'axios';
import store from '../store/';

export default () => {
  // console.log(store.state.auth.token)
  var token = store.getters['auth/token'];
  var headers = {};
  headers = token ? {'Authorization': "Bearer " + token } : {};
  return axios.create({
    baseURL: 'http://192.168.0.15:3000/api/',
    headers: headers
  });
};