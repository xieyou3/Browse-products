import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/home.vue';
import Detail from '../pages/Details/detail.vue';
import Address from '../pages/Address/address.vue';
import Newaddress from '../pages/Address/addnew.vue';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/address',
      component:Address,
    },
    {
      path:'/addnew',
      component:Newaddress,
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
    },
  ]
})

export default router;