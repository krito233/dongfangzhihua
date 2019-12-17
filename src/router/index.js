import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sy from '@/components/sy'
import addMes from "../components/addMes";
import login from "../components/login";
import scenicType from "../components/scenicType";
import list from "../components/list";
import content from "../components/content";

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
    },
    {
      path: '/scenic',
      name: 'scenic',
      component: scenicType
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/con',
      name: 'contene',
      component: content
    },
  ]
})
