import axios from 'axios';
import _ from 'lodash';

export default {
  namespaced: true,
  state: {
    error: "",
    estado: false
  },
  getters: {
    mascota(state){
      return state.mascota;
    }
  },
  mutations: {
    dismiss(state){
        state.error = ""
        state.estado = false;
    },
    setError(state, error){
      state.error = error;
      state.estado = true;
    },
  },
  actions: {
    dismiss({commit}){
      commit('dismiss');
    },
    error({commit}, error){
        commit('setError', error);
    }
  }
}