import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import usuarios from './modules/usuarios';
import mascotas from './modules/mascotas';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    auth: auth,
    usuarios: usuarios,
    mascotas: mascotas,
  }
});