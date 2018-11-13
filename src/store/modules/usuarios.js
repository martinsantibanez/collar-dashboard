import Api from '@/services/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    usuario: {}
  },
  getters: {
    usuario(state){
      return state.usuario;
    }
  },
  mutations: {
    setAllUsuarios(state, usuarios){
      state.list = usuarios;
    },
    setUsuario(state, usuario){
      state.usuario = usuario;
    }
  },
  actions: {
    async getUsuarios({commit}){
      const response = await Api().get('usuarios');
      commit('setAllUsuarios', response.data);
    },
    async addUsuario({commit}, newUsuario){
      await Api().post('usuarios', newUsuario);
    },
    async editUsuario({commit}, editedUsuario){
      await Api().put('usuarios/'+editedUsuario._id, editedUsuario);
    },
    async getUsuarioById({commit}, id){
      const response = await Api().get('usuarios/'+id);
      commit('setUsuario', response.data);
    },
    async deleteUsuario({commit, dispatch}, id){
      await Api().delete('usuarios/'+id);
      dispatch('getUsuarios');
    },
  }
}