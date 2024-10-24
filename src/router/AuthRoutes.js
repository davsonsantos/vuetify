import { redirectIfAuthenticated } from '@/router/guards';

export default [
    {
      path: '/login',
      component: () => import('@/layouts/authLayout.vue'),
      beforeEnter: redirectIfAuthenticated,
      children: [
        {
          name: 'login',
          path: '',
          component: () => import('@/pages/auth/loginPage.vue')
        },
      ]
    },
  
  ];
// const AuthRoutes = {
//     path: '/login',
//     component: () => import('@/layouts/authLayout.vue'),
//     beforeEnter: redirectIfAuthenticated,
//     children: [
//         {
//             name: 'login',
//             path: '/',
//             component: () => import('@/pages/auth/loginPage.vue')
//         },
//     ]
// }

// export default AuthRoutes;