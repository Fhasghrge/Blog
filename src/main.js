import Vue from 'vue'
import App from './App.vue'
import VueShowdown from 'vue-showdown'
import router from './router/index'
import axios from 'axios'
import less from 'less'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueShowdown, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: false,
  },
})
Vue.use(less)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
