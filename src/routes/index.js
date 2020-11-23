import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/home/home'),
    meta: { title: '首页' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home'),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
