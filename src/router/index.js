import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: sy
    }
  ]
})
