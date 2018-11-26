import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import usuarios from './modules/usuarios';
import mascotas from './modules/mascotas';
import veterinarios from './modules/veterinarios';
import error from './modules/error';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { 
    auth: auth,
    usuarios: usuarios,
    mascotas: mascotas,
    veterinarios: veterinarios,
    error: error
  }
});