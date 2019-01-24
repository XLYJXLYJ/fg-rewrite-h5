<template>
  <div>
    <!-- <VHead></VHead> -->
    <alert v-model="alert_show">{{error_type}}</alert>
    <div class="change_password">
      <img class="change_password_bg" src="../assets/bg2.png" alt="">
      <div class="me">
        <img src="../assets/back@2x.png" @click="BackFunction()">
        <p>领取红包</p>
      </div>
      <div class="box" :class="{ismargin:istrue}">
        <div class="money">
          <p>{{$store.state.hongbao}}<img src="../assets/yuan@2x.png"></p>
        </div>
        <div class="phone">用手机号{{$store.state.hongbao_phone|looksums}}</div>
        <div class="login">登录凡购领取</div>
        <div class="setpassword_confirm" :class="{ismargin:istrue}">
          <button @click.stop.prevent="ConfirmChangePassword()" :class="{forget_password_button:is_forget_password_button,ok_forget_password_button:!is_forget_password_button}">立即下载凡购</button>
        </div>
      </div>
      <div class="activity_rules">
        <h3>活动规则：</h3>
        <ol>
          <li>1.本活动仅限于通过本页面参加</li>
          <li>2.活动有效期:2019年1月17日－2019年2月17日</li>
          <li>3.同一个手机号限领一次</li>
          <li>4.本次活动解释权归深圳市凡购网络科技有限公司所有</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import IsWinXin from '@/common/IsWinXin'
// import store from '@/vuex/store'
import Qs from 'qs'
export default {
  filters: {//数字转换过滤器
    looksums(n) {
      let str=n.toString()
      let pat=/(\d{3})\d*(\d{4})/
      let b=str.replace(pat,'$1****$2');
      return b
    }
  },
  name: 'Register',
  data () {
    return {
      get_picture_identifying_code: '', // 图形验证码
      phone: '', // 手机号
      codeTime: '', // 时间戳
      picture_code: '', // 图片验证码
      phone_code: '', // 手机验证码
      password: '', // 输入密码
      confirm_password: '', // 确认密码
      error_type: '', // 错误类型
      alert_show: false, // 是否弹出错误
      is_forget_password_button: true, // 默认确认提交按钮不可点击
      text_or_password: 'password', // 默认密码不可见
      confirm_text_or_password: 'password', // 默认确认密码不可见
      forget_password_phone: false, // 默认输入手机号小图标不可见
      forget_password_picture_code: false, // 默认输入图形验证码小图标不可见
      forget_password_phone_code: false, // 默认输入手机号验证码小图标不可见
      forget_password_password: false, // 默认输入密码小图标不可见
      forget_password_comfirm_password: false, // 默认输入确认密码小图标不可见
      icon_eye_one: false, // 切换眼睛小图标
      icon_eye_two: false, // 切换眼睛小图标
      time: 0, // 验证码时间初始化
      btnTxt: '获取验证码', // 验证码按钮文字
      btnTxtColor01: true, // 验证码按钮的颜色
      btnTxtColor02: false, // 验证码按钮的颜色
      disabled: false, // 按钮是否可点击
      istrue: false
    }
  },
  watch: {
    'phone': function () {
      this.IsShowLoginButtonColor()
    },
    'picture_code': function () {
      this.IsShowLoginButtonColor()
    },
    'phone_code': function () {
      this.IsShowLoginButtonColor()
    }
  },
  created () {
    document.title = '凡购注册';
  },
  mounted () {
    this.IsIPhoneX()
  },
  methods: {
    Whatis () {
      return window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    },
    IsIPhoneX () {
      var u = navigator.userAgent
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 是否是ios终端
      if (isIOS) {
        this.width = 387 * (document.body.clientWidth / 400)
        if (screen.height === 812 && screen.width === 375) {
          // 是iphoneX
          this.istrue = true
        } else {
          // 不是iphoneX
          this.istrue = false
        }
      } else {
        this.istrue = false
      }
    },
    // 注册
    ConfirmChangePassword () {
      let u = navigator.userAgent;
      let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      let hrefUrl = "https://sj.qq.com/myapp/detail.htm?apkName=com.fgoushop.fangou";
      if (isiOS) {
          hrefUrl = "https://itunes.apple.com/cn/app/凡购-官方正版/id1444751684?mt=8";
      }
      window.location.href = hrefUrl;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.change_password{
  width: 640px;
  height: 100%;
  position: absolute;
  background-color: #fff;
  .change_password_bg{
    width: 640px;
    height: 100%;
    position: absolute;
    top: 75px;
  }
  .ismargin{
    padding-top: 80px;
  }
    .me{
    position: absolute;
    width: 100%;
    height: 75px;
    background-color: #F5F5F5;
    text-align: center;
    position: relative;
    img{
      width: 34px;
      height: 34px;
      position: absolute;
      left: 16px;
      top: 22px;
    }
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
  .box{
    width: 440px;
    height: 700px;
    position: relative;
    top: 226px;
    margin: 0 auto;
    .money{
      width:305px;
      height:96px;
      font-size:102px;
      font-family:HelveticaNeue-Bold;
      font-weight:bold;
      color:rgba(229,27,9,1);
      z-index: 1000;
      position: relative;
      top: 50px;
      margin: 0 auto;
      text-align: center;
      img{
        width:42px;
        height:42px;
        position: relative;
        top: 6px;
        left: 2px;
      }
    }
    .phone{
      width:270px;
      height:55px;
      font-size:26px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      color:rgba(255,202,143,1);
      position: relative;
      top: 221px;
      margin: 0 auto;
    }
    .login{
      width:270px;
      height:55px;
      font-size:26px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      color:rgba(255,202,143,1);
      position: relative;
      top: 198px;
      margin: 0 auto;
      text-align: center;
    }
  }
  .register_show_passage{
    width:38px;
    height: 22px;
    position: absolute;
    top: 246px;
    left: 550px;
    z-index: 1000;
  }
  .confirm_register_show_passage{
    width:38px;
    height: 22px;
    position: absolute;
    top: 678px;
    left: 550px;
    z-index: 1000;
  }
  .setpassword_confirm{
    position: absolute;
    top: 427px;
    width: 100%;
    height: 94px;
    text-align: center;
    button{
      width:387px;
      height:77px;
      font-size:27px;
      font-family:PingFang-SC-bold;
      font-weight:bold;
      margin: 0 auto;
      margin-top:33px;
      border-radius: 3px;
      cursor: pointer;
    }
    .forget_password_button{
      background: #FFCA8F;
      color: #E13535;
      cursor: pointer;
    }
    .ok_forget_password_button{
      background: #FF5100;
      color: #fff;
      cursor: pointer;
    }
  }
  .one_close{
    width:24px;
    height: 24px;
    position: absolute;
    top: 595px;
    left: 477px;
    z-index: 1000;
  }
  .two_close{
    width:24px;
    height: 24px;
    position: absolute;
    top: 670px;
    left: 336px;
    z-index: 1000;
  }
  .three_close{
    width:24px;
    height: 24px;
    position: absolute;
    top: 745px;
    left: 336px;
    z-index: 1000;
  }
  .activity_rules{
    width:490px;
    height: auto;
    position: absolute;
    bottom: -35px;
    left: 98px;
    h3{
      font-size: 20px;
      font-family:PingFang-SC-bold;
      font-weight:bold;
      color: #FFCA8F;
    }
    ol{
      width: 100%;
      height: auto;
      li{
        margin-top: 0px;
        font-size: 20px;
        color: #FFCA8F;
        line-height: 26px;
        font-family:PingFang-SC-Heavy;
        font-weight:Heavy;
      }
    }
  }
}
</style>
