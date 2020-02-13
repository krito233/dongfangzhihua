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
import about from "../components/about";
import selectlist from "../components/selectlist";
import addList from "../components/addList";
import itemList from "../components/itemList";



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
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/select',
      name: 'selectlist',
      component: selectlist
    },
    {
      path: '/addL',
      name: 'addList',
      component: addList
    },
    {
      path: '/itemlist',
      name: 'itemList',
      component: itemList
    }
  ]
})
export default router;
