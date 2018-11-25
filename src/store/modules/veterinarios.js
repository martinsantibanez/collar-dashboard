import Api from '@/common/Api';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    list: [],
    veterinario: {},
    mascotas: []
  },
  getters: {
    veterinario(state){
      return state.veterinario;
    }
  },
  mutations: {
    setAllVeterinarios(state, veterinarios){
      state.list = veterinarios;
    },
    setUsuario(state, veterinario){
      state.veterinario = veterinario;
    },
  },
  actions: {
    async getAllVeterinarios({commit}){
      const response = await Api().get('veterinarios');
      commit('setAllVeterinarios', response.data);
    }
  }
}