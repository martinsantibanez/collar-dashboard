import axios from 'axios';
import store from '../store/';

//TODO: Bearer from store

export default () => {
  // console.log(store.state.auth.token)
  var token = store.getters['auth/token'];
  var headers = {};
  headers = token ? {'Authorization': "Bearer " + token } : {};
  return axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: headers
  });
};