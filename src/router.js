import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import vetRoutes from './vet/router.js';
import userRoutes from './user/router.js';

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
  var currentUser = localStorage.getItem('user');
  var role = store.getters['auth/role'];
  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // const requiresAuth = to.meta.requiresAuth;
  if (requiresAuth && !currentUser) {
    next({ name: 'Login' });
  } else if (!requiresAuth && currentUser) {
    next('/'+role);
  } else next();
});

export default router;
