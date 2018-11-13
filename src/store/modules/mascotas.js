import Api from '@/services/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    mascota: {}
  },
  getters: {
    mascota(state){
      return state.mascota;
    }
  },
  mutations: {
    setAllMascotas(state, mascotas){
      state.list = mascotas;
    },
    setMascota(state, mascota){
      state.mascota = mascota;
    },
  },
  actions: {
    async getMascotas({commit}){
      const response = await Api().get('mascotas');
      commit('setAllMascotas', response.data);
    },
    async addMascota({commit}, newMascota){
      await Api().post('mascotas', newMascota);
    },
    async getMascotaById({commit}, id){
      const response = await Api().get('mascotas/'+id);
      commit('setMascota', response.data);
    },
    async editMascota({commit}, editedMascota){
      await Api().put('mascotas/'+editedMascota._id, editedMascota);
    },
    async deleteMascota({commit, dispatch}, id){
      await Api().delete('mascotas/'+id);
      dispatch('getMascotas');
    }
  }
}