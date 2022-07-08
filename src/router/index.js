import Vue from 'vue'
import VueRouter from 'vue-router' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Button',
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "message" */ '../views/message.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
