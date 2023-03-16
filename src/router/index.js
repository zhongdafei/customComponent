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
    path: '/popover',
    name: 'popover',
    component: () => import(/* webpackChunkName: "popover" */ '../views/popover.vue')
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import(/* webpackChunkName: "tree" */ '../views/Tree.vue')
  },
  {
    path: '/messagebox',
    name: 'MessageBox',
    component: () => import(/* webpackChunkName: "MessageBox" */ '../views/messageBox.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "Table" */ '../views/table.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import(/* webpackChunkName: "Select" */ '../views/select.vue')
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: () => import(/* webpackChunkName: "transfer" */ '../views/transfer.vue')
  },
  {
    path: '/waterfall',
    name: 'waterfall',
    component: () => import(/* webpackChunkName: "waterfall" */ '../views/waterfall.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/map/index.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../views/calendar.vue')
  },
  {
    path: '/iCalendar',
    name: 'iCalendar',
    component: () => import(/* webpackChunkName: "iCalendar" */ '../views/iCalendar.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
