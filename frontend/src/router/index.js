import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard';
import Community from '../views/Community';
import FAQs from '../views/FAQs';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/FAQs',
    name: 'FAQs',
    component: FAQs
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/FAQs.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
