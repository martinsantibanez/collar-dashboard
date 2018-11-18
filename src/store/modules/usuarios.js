import Api from '@/services/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    usuario: {},
    mascotas: []
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
    },
    setMascotas(state, mascotas){
      state.mascotas = mascotas;
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
    async getMascotas({commit}, id){
      const response = await Api().get('usuarios/'+id+'/mascotas');
      commit('setMascotas', response.data);
    },
    async addMascota({commit}, payload){
      const response = await Api().post('usuarios/'+payload.id_usuario+'/mascotas', payload.mascota);
      // console.log(response);
      return response.data;

    }
  }
}