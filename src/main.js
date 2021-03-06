import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/base.scss'
import './assets/icon/iconfont.css'
import {popover} from '@/directives/popover'
Vue.config.productionTip = false
// 自定义组件引入全局组件
import XfButton from './components/Button/index'
Vue.use(XfButton)
Vue.directive('popover',popover)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
