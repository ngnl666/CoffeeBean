import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue'),
    children: [
      {
        path: ':list',
        name: 'List',
        component: () => import('../views/Shop.vue'),
      },
      {
        path: ':list/:item',
        name: 'Item',
        component: () => import('../views/Shop.vue'),
      },
    ],
  },
  {
    path: '/detail', // 改成動態路由
    name: 'DetailCard',
    component: () => import('../components/DetailCard.vue'),
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite.vue'),
  },
  {
    path: '/pick',
    name: 'Pick',
    component: () => import('../views/Pick.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'productlist',
        name: 'ProductList',
        component: () => import('../views/ProductList.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/Coupon.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Order.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/Home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
