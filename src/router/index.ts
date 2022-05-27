import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          component: () => import('../components/WelcomeDisplay.vue'),
        },
        {
          path: ':id(\\d+)',
          component: () => import('../components/ListPost.vue'),
        },
        {
          path: ':id(\\d+)/create-post',
          name: 'create-post',
          component: () => import('../components/EditPost.vue'),
        },
        {
          path: ':id(\\d+)/edit-post/:postId',
          name: 'edit-post',
          component: () => import('../components/EditPost.vue'),
        },
        {
          path: 'settings',
          component: () => import('../components/Settings.vue'),
        },
        {
          path: 'contacts',
          component: () => import('../components/ListContact.vue'),
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
    if (token || to.name === 'login' || to.name === 'signup') {
      next()
    } else {
      next({name: 'login'})
    }
  }
);

export default router
