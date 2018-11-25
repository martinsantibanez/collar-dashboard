import Api from '@/common/Api';

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('user-token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
    mascotas: []
    // user: {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    role: state => state.user.role,
    token(state) {
      return state.token;
    },
    user: state => state.user
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
    },
    setMascotas(state, payload) {
      state.mascotas = payload.mascotas;
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
    },
    async getPerfilPropio({commit}){
      var response = await Api().get('me');
      // console.log(response);
      commit( 'setUser', {'user': response.data} );
      return response.data.user;
    },
    async editPerfilPropio({commit}, usuario){
      var response = await Api().put('me', usuario)
      return response;
      // console.log(response); 
    },
    async getMascotas({commit}){
      var response = await Api().get('me/mascotas');
      commit( 'setMascotas', {'mascotas': response.data} );
      return response.data;
    },
    async readAlerta({commit}, id_alerta){
      var response = await Api().post('alertas/'+id_alerta+'/leer')
    }
  }
}