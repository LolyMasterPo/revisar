import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home.vue'
import about from '@/views/about.vue'
import contact from '@/views/contact.vue'
import portfolio from '@/views/portfolio.vue'
import education from '@/views/education.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home

    },
    {
      path: '/about',
      name: 'about',
      component: about

    },
    {
      path: '/contact',
      name: 'contact',
      component: contact

    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio

    },
    {
      path: '/education',
      name: 'education',
      component: education

    },
  ]
})

export default router
