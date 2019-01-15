<template>
  <div>
    <!-- <VHead></VHead> -->
    <alert v-model="alert_show">{{error_type}}</alert>
    <div class="change_password">
      <div class="me">
        <p>凡购注册</p>
      </div>
      <img src="../assets/register_icon_success@2x.png">
      <p class="register-success">注册成功</p>
      <p class="download-fg">下载凡购APP<span>拿佣金</span></p>
      <button @click.stop.prevent="DownloadFg()">去下载</button>
    </div>
  </div>
</template>

<script>
import IsWinXin from '@/common/IsWinXin'
// import store from '@/vuex/store'
import Qs from 'qs'
export default {
  name: 'RegisterSuccess',
  data () {
    return {
      error_type: '', // 错误类型
      alert_show: false, // 是否弹出错误
    }
  },
  mounted() {
    IsWinXin.IsWinXin()
  },
  methods: {
    DownloadFg () {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let hrefUrl = "https://sj.qq.com/myapp/detail.htm?apkName=com.fgoushop.fangou";
      if (isiOS) {
          hrefUrl = "https://itunes.apple.com/cn/app/凡购-官方正版/id1444751684?mt=8";
      }
      window.location.href = hrefUrl;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.change_password{
  width: 640px;
  height: 100%;
  position: absolute;
  background-color: #fff;
  text-align: center;
  .me{
    position: absolute;
    width: 100%;
    height: 75px;
    background-color: #F5F5F5;
    text-align: center;
    position: relative;
    p{
    width:121px;
    height:32px;
    font-size:29px;
    font-family:PingFang-SC-Medium;
    font-weight:Medium;
    color: #000;
    margin: 0 auto;
    padding-top: 25px;
    }
  }
  img{
    width: 90px;
    height: 90px;
    position: relative;
    top: 180px;
  }
  .register-success{
    width:236px;
    height:30px;
    font-size:27px;
    font-family:PingFang-SC-Regular;
    font-weight:Regular;
    color:#333;
    position: relative;
    top: 0px;
    margin: 0 auto;
    margin-top:197px;
  }
  .download-fg{
    width:236px;
    height:30px;
    font-size:27px;
    font-family:PingFang-SC-Regular;
    font-weight:Regular;
    color:#333;
    position: relative;
    top: 0px;
    margin: 0 auto;
    margin-top:7px;
  }
  button{
    width:307px;
    height:75px;
    background:#FF5100;
    border-radius:9px;
    font-size:29px;
    font-family:PingFang-SC-Medium;
    font-weight:Medium;
    color:#333;
    position: relative;
    margin: 0 auto;
    margin-top:68px;
    color: #fff;
  }
}
</style>
