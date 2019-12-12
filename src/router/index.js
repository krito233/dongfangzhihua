import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)
import sy from '@/components/sy'
import addMes from "../components/addMes";
import login from "../components/login";



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
    }
  ]
})
export default router;
