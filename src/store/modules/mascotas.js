import axios from 'axios';
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
      const response = await axios.get('mascotas');
      commit('setAllMascotas', response.data);
    },
    async addMascota({commit}, newMascota){
      await axios.post('mascotas', newMascota);
    },
    async getMascotaById({commit}, id){
      const response = await axios.get('mascotas/'+id);
      commit('setMascota', response.data);
    },
    async editMascota({commit}, editedMascota){
      await axios.put('mascotas/'+editedMascota._id, editedMascota);
    },
    async deleteMascota({commit, dispatch}, id){
      await axios.delete('mascotas/'+id);
      dispatch('getMascotas');
    },
    async createAlerta({commit, dispatch}, payload){
      await axios.post('mascotas/'+payload.id_mascota+'/alertas', payload.alerta);
      // commit()
    }
  }
}