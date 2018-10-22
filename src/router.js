import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Layout from './components/Layout';

import DashboardView from './views/Dashboard';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: {name: 'dashboard'},
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardView
        },
      ]
    },
  ]
})
