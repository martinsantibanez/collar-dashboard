import axios from 'axios';

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    user: {},
    mascotas: []
    // user: {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    role(state, getters){
      return state.user.role
    },
    token(state) {
      return state.token;
    },
    user: state => state.user
  },
  mutations: {
    setToken(state, payload) {
      localStorage.setItem('token', payload.token);
      state.token = payload.token;
    },
    setUser(state, payload) {
      // localStorage.setItem('user', payload.user);
      state.user = payload.user;
    },
    resetToken(state) {
      localStorage.removeItem('token'); 
      // localStorage.removeItem('user'); 
      state.token = '';
      state.user = {};
    },
    setMascotas(state, payload) {
      state.mascotas = payload.mascotas;
    }
  },
  actions: {
    async login({commit}, user){
      var response = await axios.post('login/', user);
      // console.log(response);
      if(response.data){
        var token = response.data.token;
        commit('setToken', {'token': token});
        commit('setUser', {'user': response.data.user});
        return response.data.user.role;
      }
    },
    logout({commit}) {
      commit('resetToken');
    },
    async getPerfilPropio({commit}){
      var response = await axios.get('me');
      // console.log(response);
      commit( 'setUser', {'user': response.data} );
      return response.data.user;
    },
    async editPerfilPropio({commit}, usuario){
      var response = await axios.put('me', usuario)
      return response;
      // console.log(response); 
    },
    async getMascotas({commit}){
      var response = await axios.get('me/mascotas');
      commit( 'setMascotas', {'mascotas': response.data} );
      return response.data;
    },
    async readAlerta({commit}, id_alerta){
      var response = await axios.post('alertas/'+id_alerta+'/leer')
    }
  }
}