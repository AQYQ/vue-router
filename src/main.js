import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios'
import echarts from 'echarts'

Vue.use(ElementUi);
Vue.prototype.$http=Axios
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
