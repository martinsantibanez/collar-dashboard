import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import vetRoutes from './vet/routes.js';
import userRoutes from './user/routes.js';

import Index from './Index';
import Login from './Login';
import Logout from './Logout';

import store from './store/';
Vue.use(Router)

const baseRoutes = [
  {
    path: '/',
    name: 'Index',
    // component: Index,
    redirect: { name: 'Login'}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path:'/logout',
    name: 'Logout',
    meta: { requiresAuth: true },
    component: Logout
  }
];
const routes = baseRoutes.concat(vetRoutes, userRoutes);
const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  
  next();
});

export default router;
