import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {
      // 微信首页加载
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/components/Index'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      // 全网搜卷
      path: '/Search',
      name: 'Course',
      component: resolve => require(['@/components/Course'], resolve),
      meta: {
        title: '全网搜卷'
      }
    },
    {
      // 如何搜索优惠卷
      path: '/SearchVideo',
      name: 'SearchVideo',
      component: resolve => require(['@/components/SearchVideo'], resolve),
      meta: {
        title: '如何搜索优惠卷'
      }
    },
    {
      // 注册
      path: '/login',
      name: 'Register',
      component: resolve => require(['@/components/Register'], resolve),
      meta: {
        title: '注册'
      }
    },
    {
      // 活动注册
      path: '/webRegister',
      name: 'webRegister',
      component: resolve => require(['@/components/webRegister'], resolve),
      meta: {
        title: '微信注册'
      }
    },
    {
      // 活动注册成功领红包
      path: '/webRegisterSuccess',
      name: 'webRegisterSuccess',
      component: resolve => require(['@/components/webRegisterSuccess'], resolve),
      meta: {
        title: '活动注册成功领红包'
      }
    },
    {
      // 下载
      path: '/Download',
      name: 'Download',
      component: resolve => require(['@/components/Download'], resolve),
      meta: {
        title: '下载'
      }
    },
    {
      // 注册成功
      path: '/loginSuccess',
      name: 'RegisterSuccess',
      component: resolve => require(['@/components/RegisterSuccess'], resolve),
      meta: {
        title: '注册成功'
      }
    },
    {
      // 商品详情
      path: '/itemdetail',
      name: 'GoodsShare',
      component: resolve => require(['@/components/GoodsShare'], resolve),
      meta: {
        title: '商品详情'
      }
    }
  ]
})


