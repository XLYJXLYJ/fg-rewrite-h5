import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/Register'},
    {
      // 全网搜卷
      path: '/Search',
      name: 'Course',
      component: resolve => require(['@/components/Course'], resolve)
    },
    {
      // 如何搜索优惠卷
      path: '/SearchVideo',
      name: 'SearchVideo',
      component: resolve => require(['@/components/SearchVideo'], resolve)
    },
    {
      // 注册
      path: '/Register',
      name: 'Register',
      component: resolve => require(['@/components/Register'], resolve)
    },
    {
      // 注册成功
      path: '/RegisterSuccess',
      name: 'RegisterSuccess',
      component: resolve => require(['@/components/RegisterSuccess'], resolve)
    },
    {
      // 商品详情
      path: '/itemdetail',
      name: 'GoodsShare',
      component: resolve => require(['@/components/GoodsShare'], resolve)
    }
  ]
})
