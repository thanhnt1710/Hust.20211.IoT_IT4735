import Vue from 'vue'
import App from './App.vue'

//router
import router from './routers/router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
