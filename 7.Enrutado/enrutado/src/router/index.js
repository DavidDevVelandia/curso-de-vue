import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import BlogView2 from '../views/BlogView2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => AboutView
  },
  {
    path: '/services',
    name: 'Services',
    component: () => ServicesView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => BlogView
  },
  {
    //path con parametros dinamicos
    path: '/blog/:id',
    name: 'post',
    //acceder a sub rutas
    component: () => PostView,
    children: [{
      path: 'blog2',
      name: 'blog2',
      component: () => BlogView2
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
