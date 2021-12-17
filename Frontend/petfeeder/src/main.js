import Vue from 'vue'
import App from './App.vue'
//router
import router from './routers/router'
import VueRouter from 'vue-router'
//vuex
import Vuex from 'vuex'
import store from './stores/store.js'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
