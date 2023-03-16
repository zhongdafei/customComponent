import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/base.scss'
import './assets/icon/iconfont.css'
import "ol/ol.css";
import { popover } from '@/directives/popover'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import DictData from "@/components/DictData";
import Message from '@/components/MessageBox'
Vue.config.productionTip = false
// 自定义组件引入全局组件
import XfButton from './components/Button/index'
import XfTable from './components/Table/index'
import XfTableColumn from './components/TableColumn/index'
import ZSelect from './components/Select/index'
import ZOption from './components/Option/index'
Vue.prototype.$message = Message
// DictData.install(); 
function myPlugin(Vue, options) {
  console.log(Vue, options);
  Vue.mixin({
    data() {
      // 页面定义了dicts才把dict融合到页面的data中去 
      if (!this.$options.dicts || this.$options.dicts.length <= 0) {
        return {}
      }
      return { dict: '1234' }
    },
    created() {
      if (this.dict) {
        store.dispatch('setDict', { value: 'a', key: this.$options.dicts })
        console.log(this.dict, 123, store);
      }
    }
  })
}
// Vue.use(myPlugin, 123)
Vue.use(XfButton)
Vue.use(XfTable)
Vue.use(XfTableColumn)
Vue.use(ZSelect)
Vue.use(ZOption)
Vue.use(ElementUI)
Vue.directive('popover', popover)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
