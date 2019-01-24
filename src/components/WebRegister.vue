<template>
  <div>
    <!-- <VHead></VHead> -->
    <alert v-model="alert_show">{{error_type}}</alert>
    <div class="change_password">
      <img class="change_password_bg" src="../assets/bg.png" alt="">
      <div class="me">
        <img src="../assets/back@2x.png" @click="BackFunction()">
        <p>凡购注册</p>
      </div>
      <!-- <div class="logo"><img src="../assets/register_logo@2x.png" alt=""></div> -->
      <form>
      <!-- 第一个表单 -->
      <!-- <img class="one_close" src="../assets/delete@2x.png" v-show="forget_password_phone" @click.stop.prevent="ClearPhone()"> -->
      <div :class="{get_identifying_code:is_margin01,x_get_identifying_code:is_margin02,p_get_identifying_code:p_is_margin}">
        <input type="text" v-model="phone" placeholder="请输入您的手机号" autocomplete="off" @focus.stop.prevent="ForgetPasswordPhoneFocus()" @blur.stop.prevent="ForgetPasswordPhoneBlur()">
      </div>
      <!-- 第二个表单 -->
      <!-- <img class="two_close" src="../assets/delete@2x.png" v-show="forget_password_picture_code" @click.stop.prevent="ClearForgetPasswordPictureCode()"> -->
      <div :class="{get_picture_identifying_code:is_margin01,x_get_picture_identifying_code:is_margin02,p_get_picture_identifying_code:p_is_margin}">
        <input type="text" v-model="picture_code" placeholder="输入图形验证码" autocomplete="off" @focus.stop.prevent="ForgetPasswordPictureCodeFocus()" @blur.stop.prevent="ForgetPasswordPictureCodeBlur()">
        <img :src="get_picture_identifying_code" @click.stop.prevent="ReloadImgCode()">
      </div>
      <!-- 第三个表单 -->
      <!-- <img class="three_close" src="../assets/delete@2x.png" v-show="forget_password_phone_code" @click.stop.prevent="ClearForgetPasswordPhoneCode()"> -->
      <div :class="{get_phone_identifying_code:is_margin01,x_get_phone_identifying_code:is_margin02,p_get_phone_identifying_code:p_is_margin}">
        <input type="text" v-model="phone_code" placeholder="输入手机验证码" autocomplete="off" @focus.stop.prevent="ForgetPasswordPhoneCodeFocus()" @blur.stop.prevent="ForgetPasswordPhoneCodeBlur()">
        <button @click.stop.prevent="GetCodeNumber" :class="{getCodeNumber:btnTxtColor01 , getCodeNumberDisabled:btnTxtColor02}" :disabled="disabled">{{btnTxt}}</button>
      </div>
      <div :class="{setpassword_confirm:is_margin01,x_setpassword_confirm:is_margin02,p_setpassword_confirm:p_is_margin}">
      <button @click.stop.prevent="ConfirmChangePassword()" :class="{forget_password_button:is_forget_password_button,ok_forget_password_button:!is_forget_password_button}">立即领取</button>
      </div>
      </form>
      <div :class="{activity_rules:is_margin01,x_activity_rules:is_margin02,p_activity_rules:p_is_margin}">
        <h3>活动规则：</h3>
        <ol>
          <li>1.本活动仅限于通过本页面参加</li>
          <li>2.活动有效期:2019年1月17日－2019年2月17日</li>
          <li>3.同一个手机号限领一次</li>
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
      clickNum: '', // 是否已经点击
      is_margin01: true, // 判断是否是x
      is_margin02: false, // 判断是否是x
      p_is_margin: false // 判断是都是苹果
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
    // let weixin = this.Whatis()
    // if(weixin){
    //     window.location.href = window.location.href.replace("login", "index");
    // }
    this.GetImgCode()
    // this.phone = localStorage.getItem('mobile')
  },
  mounted () {
    this.IsIPhoneX()
    this.clickNum = localStorage.getItem('clickNum')
    if (this.clickNum == 1) {
      console.log('已点击')
    } else {
      this.ClickNum()
    }
  },
  methods: {
    IsIPhoneX (fn) {
      var u = navigator.userAgent
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // 是否是ios终端
      if (isIOS) {
        this.width = 387 * (document.body.clientWidth / 400)
        if (screen.height === 812 && screen.width === 375) {
          // 是iphoneX
          this.is_margin01 = false
          this.is_margin02 = true
          this.p_is_margin = false
        } else {
          // 是苹果但不是iphoneX
          this.p_is_margin = true
          this.is_margin01 = false
          this.is_margin02 = false
        }
      } else {
        this.p_is_margin = false
        this.is_margin01 = true
        this.is_margin02 = false
      }
    },
    Whatis () {
      return window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    },
    ClickNum () {
      let arrParams = window.location.href.split("?")[1].split("&"),
      parseObj = {};
      for(let i = 0; i < arrParams.length; i ++) {
          let newA = arrParams[i].split("=");
          parseObj[newA[0]] = newA[1];
      }
      let resource = parseObj.resource;
      if (!resource) {
          resource = 0;
      }
      this.axios.post(this.$store.state.baseUrl + '/system/resource/statistics?osType=0&resource=' + resource)
        .then(response => {
        if (response.data.code === 200) {
          window.localStorage.setItem('clickNum',1)
        } else {
          this.error_type = response.data.message
          this.alert_show = true
        }
      })
    },
    // 第一个表单函数
    ForgetPasswordPhoneBlur () {
      this.forget_password_phone = false
      this.axios.get(this.$store.state.baseUrl + '/user/info/query?osType=0&mobile=' + this.phone)
      .then(response => {
        if (response.data.code === 200) {
          if (response.data.data.userId) {
            this.error_type = '该手机号已经注册'
            this.alert_show = true
            setTimeout(() => {this.$router.push('loginSuccess')}, 1500);
          }
        } else {
          this.error_type = response.data.message
          this.alert_show = true
        }
      })
    },
    ForgetPasswordPhoneFocus () {
      this.forget_password_phone = true
    },
    ClearPhone () {
      this.phone = ''
    },
    // 第二个表单函数
    ForgetPasswordPictureCodeBlur () {
      this.forget_password_picture_code = false
    },
    ForgetPasswordPictureCodeFocus () {
      this.forget_password_picture_code = true
    },
    ClearForgetPasswordPictureCode () {
      this.picture_code = ''
    },
    // 第三个表单函数
    ForgetPasswordPhoneCodeBlur () {
      this.forget_password_phone_code = false
    },
    ForgetPasswordPhoneCodeFocus () {
      this.forget_password_phone_code = true
    },
    ClearForgetPasswordPhoneCode () {
      this.phone_code = ''
    },
    // 密码是否可见
    SwitchPassword () {
      if (this.text_or_password === 'text') {
        this.text_or_password = 'password'
        this.icon_eye_one = false
      } else {
        this.text_or_password = 'text'
        this.icon_eye_one = true
      }
    },
    // 密码是否可见
    SwitchConfirmPassword () {
      if (this.confirm_text_or_password === 'text') {
        this.confirm_text_or_password = 'password'
        this.icon_eye_two = false
      } else {
        this.confirm_text_or_password = 'text'
        this.icon_eye_two = true
      }
    },
    // 图片验证码
    GetImgCode () {
      this.codeTime = Date.parse(new Date())
      this.axios.get(this.$store.state.baseUrl + '/media/imgCode?osType=0&codeTime=' + this.codeTime)
        .then(response => {
          if (response.data.code === 200) {
            this.get_picture_identifying_code = response.data.data
          } else {
            this.error_type = response.data.message
            this.alert_show = true
          }
        })
    },
    // 刷新验证码
    ReloadImgCode () {
      this.GetImgCode()
    },
    // 手机验证码
    GetCodeNumber () {
      if (!this.phone) {
        this.error_type = '请先填写手机号'
        this.alert_show = true
      } else if (!this.picture_code) {
        this.error_type = '请先填写图形验证码'
        this.alert_show = true
      } else {
        let concertcodeTime = this.codeTime + this.picture_code
        concertcodeTime = concertcodeTime.toString()
        let data = {
          mobile: this.phone.toString(),
          codeTime: concertcodeTime,
          imgCode: this.picture_code,
          osType: 0
        }
        data = Qs.stringify(data)
        this.axios.post(this.$store.state.baseUrl + '/media/ssm/send/imgCode?' + data)
          .then(response => {
            if (response.data.code === 200) {
              this.GetImgCode()
              this.time = 60
              this.disabled = true
              this.Timer()
            } else {
              this.error_type = response.data.message
              this.alert_show = true
            }
          })
      }
    },
    IsShowLoginButtonColor () {
      if (this.phone && this.picture_code && this.phone_code) {
        this.is_forget_password_button = false
      } else {
        this.is_forget_password_button = true
      }
    },
    // 验证60s
    Timer () {
      if (this.time > 0) {
        this.time--
        this.btnTxt = this.time + 's后重新发送'
        setTimeout(this.Timer, 1000)
        this.btnTxtColor01 = false
        this.btnTxtColor02 = true
        this.disabled = true
      } else {
        this.time = 0
        this.btnTxt = '获取验证码'
        this.disabled = false
        this.btnTxtColor01 = true
        this.btnTxtColor02 = false
      }
    },
    // 注册
    ConfirmChangePassword () {
      let regpassword = /^[a-zA-Z0-9]\w{6,16}$/
      let arrParams = window.location.href.split("?")[1].split("&"),
      parseObj = {};
      for(let i = 0; i < arrParams.length; i ++) {
          let newA = arrParams[i].split("=");
          parseObj[newA[0]] = newA[1];
      }
      let inviteCode = parseObj.inviteCode;
      if (!inviteCode) {
          inviteCode = "888888";
      }
      let appVersion = parseObj.appVersion;
      let deviceId = "0000ANDROID";
      let osVersion = "android"; 
        let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isiOS) {
          deviceId = "00000000IOS";
          osVersion = "ios";
      }
      let resource = parseObj.resource;
      if (!resource) {
          resource = 0;
      }
      let data = {
        mobile: this.phone.toString(),
        // password: this.$md5(this.confirm_password),
        verifiCode: this.phone_code,
        osType: 0,
        inviteCode:inviteCode,
        osVersion: osVersion,
        appVersion: appVersion,
        deviceId:deviceId,
        resource:resource
      }
      if (!this.phone) {
        this.error_type = '手机号不能为空'
        this.alert_show = true
      } else if (this.phone.length !== 11) {
        this.error_type = '手机号格式不正确'
        this.alert_show = true
      }else if (!this.picture_code) {
        this.error_type = '图形验证码不能为空'
        this.alert_show = true
      } else if (!this.phone_code) {
        this.error_type = '手机验证码不能为空'
        this.alert_show = true
      } else {
        data = Qs.stringify(data)
        this.axios.post(this.$store.state.baseUrl + '/user/activity/regist?' + data)
          .then(response => {
            if (response.data.code === 200) {
              this.$store.state.hongbao = response.data.data
              this.$store.state.hongbao_phone = this.phone
              this.$router.push({name: 'webRegisterSuccess'})
            } else {
              this.error_type = response.data.message
              this.alert_show = true
            }
          })
      }
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
  .is_margin40{
    margin-top:40px;
  }
  .is_margin10{
    margin-top:-10px;
  }
  .change_password_bg{
    width: 640px;
    height: auto;
    position: relative;
    top: 75px;
  }
    .me{
    position: fixed;
    width: 100%;
    height: 75px;
    background-color: #F5F5F5;
    text-align: center;
    top: 0px;
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
  // .logo{
  //   width: 293px;
  //   height: 176px;
  //   position: relative;
  //   top: 72px;
  //   margin: 0 auto;
  //   img{
  //     width: 293px;
  //     height: 176px;
  //   }
  // }
    .p_get_identifying_code{
    position: absolute;
    top: 625px;
    left: 126px;
    width: 370px;
    height: 67px;
    input{
      width: 369px;
      height: 68px;
      font-size: 29px;
      background: #F5F5F5;
      color: #333333;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      padding-left: 18px;
      border-radius:9px;
    }
    img{
        width: 136px;
        height: 51px;
        position: absolute;
        top: 21px;
        right: 26px;
    }
  }
   .x_get_identifying_code{
    position: absolute;
    top: 655px;
    left: 126px;
    width: 370px;
    height: 67px;
    input{
      width: 369px;
      height: 68px;
      font-size: 29px;
      background: #F5F5F5;
      color: #333333;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      padding-left: 18px;
      border-radius:9px;
    }
    img{
        width: 136px;
        height: 51px;
        position: absolute;
        top: 21px;
        right: 26px;
    }
  }
  .get_identifying_code{
    position: absolute;
    top: 615px;
    left: 126px;
    width: 370px;
    height: 67px;
    input{
      width: 369px;
      height: 68px;
      font-size: 29px;
      background: #F5F5F5;
      color: #333333;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      padding-left: 18px;
      border-radius:9px;
    }
    img{
        width: 136px;
        height: 51px;
        position: absolute;
        top: 21px;
        right: 26px;
    }
  }
    .p_get_picture_identifying_code{
    position: absolute;
    top: 702px;
    left: 126px;
    width: 387px;
    height: 67px;
    input{
        width: 223px;
        height: 68px;
        font-size: 29px;
        background: #F5F5F5;
        color: #333333;
        position: absolute;
        left: 0px;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        padding-left: 18px;
        border-radius:9px;
    }
    img{
        width: 140px;
        height: 68px;
        position: absolute;
        right: 0px;
        border-radius: 3px;
    }
  }
  .x_get_picture_identifying_code{
    position: absolute;
    top: 732px;
    left: 126px;
    width: 387px;
    height: 67px;
    input{
        width: 223px;
        height: 68px;
        font-size: 29px;
        background: #F5F5F5;
        color: #333333;
        position: absolute;
        left: 0px;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        padding-left: 18px;
        border-radius:9px;
    }
    img{
        width: 140px;
        height: 68px;
        position: absolute;
        right: 0px;
        border-radius: 3px;
    }
  }
  .get_picture_identifying_code{
    position: absolute;
    top: 692px;
    left: 126px;
    width: 387px;
    height: 67px;
    input{
        width: 223px;
        height: 68px;
        font-size: 29px;
        background: #F5F5F5;
        color: #333333;
        position: absolute;
        left: 0px;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        padding-left: 18px;
        border-radius:9px;
    }
    img{
        width: 140px;
        height: 68px;
        position: absolute;
        right: 0px;
        border-radius: 3px;
    }
  }
      .p_get_phone_identifying_code{
    position: absolute;
    top: 779px;
    left: 126px;
    width: 387px;
    height: 67px;
    input{
        width: 223px;
        height: 67px;
        font-size: 29px;
        background: #F5F5F5;
        color: #333333;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        padding-left: 19px;
        border-radius:9px;
    }
    .getCodeNumberDisabled{
      width: 140px;
      height: 68px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #E13535;
      background-color: #fff;
      font-size:20px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      border-radius: 3px;
      border: 1px solid #999;
    }
    .getCodeNumber{
      width: 140px;
      height: 68px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #E13535;
      background-color: #FFFFFF;
      font-size:20px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      border-radius: 3px;
    }
  }
    .x_get_phone_identifying_code{
    position: absolute;
    top: 809px;
    left: 126px;
    width: 387px;
    height: 67px;
    input{
        width: 223px;
        height: 67px;
        font-size: 29px;
        background: #F5F5F5;
        color: #333333;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        padding-left: 19px;
        border-radius:9px;
    }
    .getCodeNumberDisabled{
      width: 140px;
      height: 68px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #E13535;
      background-color: #fff;
      font-size:20px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      border-radius: 3px;
      border: 1px solid #999;
    }
    .getCodeNumber{
      width: 140px;
      height: 68px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #E13535;
      background-color: #FFFFFF;
      font-size:20px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      border-radius: 3px;
    }
  }
  .get_phone_identifying_code{
    position: absolute;
    top: 769px;
    left: 126px;
    width: 387px;
    height: 67px;
    input{
        width: 223px;
        height: 67px;
        font-size: 29px;
        background: #F5F5F5;
        color: #333333;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        padding-left: 19px;
        border-radius:9px;
    }
    .getCodeNumberDisabled{
      width: 140px;
      height: 68px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #E13535;
      background-color: #fff;
      font-size:20px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      border-radius: 3px;
      border: 1px solid #999;
    }
    .getCodeNumber{
      width: 140px;
      height: 68px;
      position: absolute;
      top: 0px;
      right: 0px;
      color: #E13535;
      background-color: #FFFFFF;
      font-size:20px;
      font-family:PingFang-SC-Regular;
      font-weight:Regular;
      border-radius: 3px;
    }
  }
  .register_show_passage{
    width:38px;
    height: 22px;
    position: absolute;
    top: 584px;
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
    .p_setpassword_confirm{
    position: absolute;
    top: 820px;
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
      background: #FFCA8F;
      color: #E13535;
      cursor: pointer;
    }
  }
    .x_setpassword_confirm{
    position: absolute;
    top: 850px;
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
  .setpassword_confirm{
    position: absolute;
    top: 810px;
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
      background: #FFCA8F;
      color: #E13535;
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
    .p_activity_rules{
    width:450px;
    height: auto;
    position: absolute;
    top: 1000px;
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
  .x_activity_rules{
    width:450px;
    height: auto;
    position: absolute;
    top: 1030px;
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
  .activity_rules{
    width:450px;
    height: auto;
    position: absolute;
    top: 1020px;
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
