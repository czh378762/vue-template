import Vue from 'vue'
import App from './App.vue'
import '@/style/reset.scss'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

// console.log(process.env.VUE_APP_URL)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
