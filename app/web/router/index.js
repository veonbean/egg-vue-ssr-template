import Vue from 'vue';

import VueRouter from 'vue-router';
const Home = () => import('../page/view/home.vue');
const Login = () => import('../page/view/login.vue');
const NotFound = () => import('../page/view/notfound.vue');

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: [
      {
        path: '/',
        component: Home,
        children: [],
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '*', component: NotFound,
      }
    ]
  });
}