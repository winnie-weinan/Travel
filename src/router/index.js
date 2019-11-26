import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

import Nav from '@/pages/home/components/Nav'
import pageone from '@/pages/home/components/pageone'
import pagetwo from '@/pages/home/components/pagetwo'
import pagethree from '@/pages/home/components/pagethree'
Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Home',
  //     component: Home
  //   }, {
  //     path: '/city',
  //     name: 'City',
  //     component: City
  //   }, {
  //     path: '/detail/:id',
  //     name: 'Detail',
  //     component: Detail
  //   }],
  // // 每次做页面切换时，总是让X Y轴为0，始终回到最顶部
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/city',
          name: 'City',
          component: City
        }, {
          path: '/detail/:id',
          name: 'Detail',
          component: Detail
        }
      ]
    },
    {
      path: '/',
      name: 'Nav',
      component: Nav,
      children: [
        {
          path: '/',
          name: 'pageone',
          component: pageone
        }, {
          path: '/pagetwo',
          name: 'pagetwo',
          component: pagetwo
        }, {
          path: '/pagethree',
          name: 'pagethree',
          component: pagethree
        }
      ]
    }
  ]
})
