// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Home'
import FindRent from '@/views/FindRent'
import RentSpot from '@/views/RentSpot'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Homepage,
      },
    ],
  },
  {
    path: '/find-rent',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/find-rent',
        name: 'Find Rent',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: FindRent,
      },
    ],
  },
  {
    path: '/rent-spot',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/rent-spot',
        name: 'Rent Spot',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: RentSpot,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
