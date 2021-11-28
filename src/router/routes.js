
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/PageHome.vue') },
        { path: '/camera', component: () => import('pages/PageCamera.vue') }
    ]
  },
  {
    path: '/setting',
    component: () => import('layouts/MainLayout.vue'),
      children: [
        { path: '', component: () => import('pages/Setting/Setting.vue') }
      ]
  },
  {
    path: '/auth',
    component: () => import('layouts/auth/AuthLayout.vue'),
      children: [
        { path: '', component: () => import('pages/auth/Login.vue') },
        { path: 'login', component: () => import('pages/auth/Login.vue') },
        { path: 'register', component: () => import('pages/auth/Register.vue') },
        { path: 'lost-password', component: () => import('pages/auth/LostPassword.vue') },
        { path: 'confirm-password', component: () => import('pages/auth/ConfirmPassword.vue') },
        { path: 'confirm-info', component: () => import('pages/auth/ConfirmInfo.vue') }
      ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
