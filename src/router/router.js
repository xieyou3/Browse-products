import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/home.vue';
import Detail from '../pages/Details/detail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/',
      component:Home,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
  ]
})

export default router;