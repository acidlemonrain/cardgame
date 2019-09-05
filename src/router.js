import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/login',
      component: () => import( './views/About.vue')
    },
    {
      path: '/login',
      component: () => import( './views/login.vue')
    },
    {
      path: '/index',
      component: () => import( './views/index.vue')
    },
    {
      path: '/shop',
      component: () => import( './views/shop.vue'),
      children:[
        {
          path:'/shop/shop',
          alias:'/shop',
          component: () => import( './components/shop/shop'),
      },
      {
        path:'/shop/cart',
        component: () => import( './components/shop/cart'),
    }
      ]
    },
    {
      path: '/table',
      component: () => import( './views/table.vue')
    },
  ]
})
