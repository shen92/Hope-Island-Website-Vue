import Vue from 'vue'
import VueRouter from 'vue-router'
import { Home, About, Team, Gallery } from '@/views'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Hope Island | About',
    },
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: {
      title: 'Hope Island | Team',
    },
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: 'Hope Island | Gallery',
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
