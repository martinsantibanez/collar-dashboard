import Api from '@/services/Api';
import VueJwtDecode from 'vue-jwt-decode'

//TODO save in localstorage
export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('user-token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    role: state => state.user.role,
    token(state) {
      return state.token;
    }
  },
  mutations: {
    setToken(state, payload) {
      localStorage.setItem('user-token', payload.token);
      state.token = payload.token;
    },
    setUser(state, payload) {
      localStorage.setItem('user', JSON.stringify(payload.user));
      state.user = payload.user;
    },
    resetToken(state) {
      localStorage.removeItem('user-token'); 
      localStorage.removeItem('user'); 
      state.token = '';
      state.user = {};
    }
  },
  actions: {
    async login({commit}, user){
      var response = await Api().post('login/', user);
      var token = response.data.token;
      commit('setToken', {'token': token});
      commit('setUser', {'user': response.data.user});
      return response.data.user.role;
    },
    logout({commit}) {
      commit('resetToken');
    }
  }
}