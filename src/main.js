// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import 'lib-flexible/flexible'
import {Alert, Loading} from 'vux'
import { Swiper } from 'vux'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
// import Vconsole from 'vconsole'

// Vue.prototype.$vconsole = new Vconsole()

Vue.use(VueClipboard)

Vue.use(VueClipboard)

Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.component('alert', Alert)

Vue.component('loading', Loading)

Vue.component('swiper', Swiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
