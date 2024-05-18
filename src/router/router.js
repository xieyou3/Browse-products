import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/home.vue';
import Detail from '../pages/Details/detail.vue';
import Address from '../pages/Address/address.vue';
import Newaddress from '../pages/Address/addnew.vue';
import Shoppingcart from '../pages/Cart/cart.vue';

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
    {
      path: '/shoppingcart',
      name: 'Shoppingcart',
      component: Shoppingcart,
    },
  ]
})

export default router;