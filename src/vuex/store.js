import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  dpr: '', // 设备像素比
  userType: 0, // 用户类型
  have_order: true, // 是否有订单
  search_phone: '', // 是否有订单
  StoreUnderCountPercent: '', // 直属占比
  StoreReferCountPercent: '', // 推荐占比
  StoreAgentCountPercent: '', // 代理商占比
  // baseUrl: 'http://h5.fgshop.vip/#/'
  baseUrl: 'https://api.fgoushop.com'
  // baseUrl: 'http://47.107.48.61:8820'
}

const actions = {
  PostDpr (context) { // 输出设备像素比
    context.commit('GetDpr')
  },
  IsWinXin () {
    let weixin = (function(){return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1})();
    console.log(weixin)
    if(!weixin){
      let nowURI = window.location.href;
      if (nowURI.indexOf("page=login") != -1) {
          window.location.href = nowURI.replace("index", "login");   
      } else {
          window.location.href = nowURI.replace("index", "itemdetail");   
      }
    }
  }
}

const mutations = {
  GetDpr () { // 得到设备像素比
    state.dpr = window.devicePixelRatio
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations
})
