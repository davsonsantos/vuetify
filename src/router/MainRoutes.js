import { auth } from '@/router/guards';

export default {
  path: '/',
  component: () => import('@/layouts/dashLayout.vue'),
  beforeEnter: auth,
  children: [
    {
      name: 'dashboard',
      path: '/',
      component: () => import('@/pages/dashboard/dashboardPage.vue')
    },
  ]
};