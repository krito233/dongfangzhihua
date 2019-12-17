import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)
import sy from '@/components/sy'
import addMes from "../components/addMes";
import login from "../components/login";
import scenicType from "../components/scenicType";
import list from "../components/list";
import content from "../components/content";



const router = new VueRouter({
  routes: [{
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
export default router;
