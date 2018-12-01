import axios from 'axios';
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
      const response = await axios.get('usuarios');
      commit('setAllUsuarios', response.data);
    },
    async addUsuario({commit}, newUsuario){
      await axios.post('usuarios', newUsuario);
    },
    async editUsuario({commit}, editedUsuario){
      await axios.put('usuarios/'+editedUsuario._id, editedUsuario);
    },
    async getUsuarioById({commit}, id){
      const response = await axios.get('usuarios/'+id);
      commit('setUsuario', response.data);
    },
    async deleteUsuario({commit, dispatch}, id){
      await axios.delete('usuarios/'+id);
      dispatch('getUsuarios');
    },
    async getMascotas({commit}, id){
      const response = await axios.get('usuarios/'+id+'/mascotas');
      commit('setMascotas', response.data);
    },
    async addMascota({commit}, payload){
      const response = await axios.post('usuarios/'+payload.id_usuario+'/mascotas', payload.mascota);
      return response.data;
    },
    async getClientes({commit}){
      const response = await axios.get('clientes');
      commit('setAllUsuarios', response.data);
    }
  }
}