import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/'
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// importing the helper
import apiSetup from './common/apiSetup';
import colors from 'vuetify/lib/util/colors';
apiSetup();

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken3,
    secondary: colors.green.lighten2,
    accent: colors.pink.darken1
  }
});

// TODO Importar fuentes
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
