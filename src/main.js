import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> b5946b1791d46db26187e6b5f5434c12d3bd512e

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
