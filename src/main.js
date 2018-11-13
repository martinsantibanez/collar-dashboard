import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@fortawesome/fontawesome-free/css/all.css';
import GAuth from 'vue-google-oauth2'
Vue.use(GAuth, {clientId: '216176704370-obo5sho0fjqc0i5qs49hn4va64b7fl92.apps.googleusercontent.com'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
