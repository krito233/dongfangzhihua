import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'
import addMes from "../components/addMes";
import login from "../components/login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sy',
      component: sy
    },
    {
      path: '/add',
      name: 'addMes',
      component: addMes
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
