import Vue from 'vue'
// import VueCookies from 'vue-cookies'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import 'babel-polyfill'


Vue.config.productionTip = false
Vue.prototype.$http = axios


Vue.use(ElementUI)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
