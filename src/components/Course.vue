<template>
  <div class="search">
    <div class="search_contain">
      <div class="part_one">
        <!-- <p class="search_methods">精准搜索商品的方法</p>
        <p class="search_methods_one">1.在淘宝/天猫复制商品标题</p>
        <p class="search_methods_two">2.在搜索框里搜索购买商品</p> -->
        <a href="fangou://search"><img src="../assets/home_search@2x.png"></a>
        <img src="../assets/souquan_banner@2x.png">
        <input type="text" placeholder="输入淘宝/天猫/拼多多商品标题或关键字" v-model="context">
      </div>
      <div class="part_two">
        <!-- <p class="seo">详细教程</p>
        <p class="seo_one">（1）在手机淘宝或天猫找到想要的宝贝，长按标题区域，<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;点击“拷贝”即可复制宝贝标题</p>
        <img class="seo_one_img" src="../assets/1.png">
        <p class="seo_two">（2）打开凡购App，点击搜索框，长按搜索框选择"粘贴",<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;再次点击搜索就能搜索到刚才拷贝的内容了</p>
        <img class="seo_two_img" src="../assets/2.png">
        <p class="seo_three">（3）进入商品详情页后点击右下角“领券¥350”</p>
        <img class="seo_three_img" src="../assets/3.png">
        <p class="seo_four">（4）点击领券后系统会自动跳转到淘宝页面，点击优惠<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;券上的“立即领券”</p>
        <img class="seo_four_img" src="../assets/4.png">
        <p class="seo_five" >（5）在确认订单的"店铺优惠"可以看到所领取的优惠券，<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提交订单付款完成交易，等待是10分钟即可在凡购<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App上收到佣金啦~</p>
        <img class="seo_five_img" src="../assets/5.png"> -->
        <img src="../assets/search_02.png">
      </div>
    </div>
  </div>
</template>

<script>
import IsWinXin from '@/common/IsWinXin'
export default {
  name: 'HelloWorld',
  mounted() {
    IsWinXin.IsWinXin()
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      context: ''
    }
  },
  // methods: {
    
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.search{
    // display: flex;
    // flex-direction: column;
    // min-height: 100vh;
    position: absolute;
  .search_contain{
    flex: 1;
    .part_one{
      width: 640px;
      height: 323px;
      position: absolute;
      left: 0px;
      top: 0px;
      a{
        width: 540px;
        height: 323px;
        z-index: 2000;
        display: block;
        position: absolute;
        top: 0px;
        left: 50px;
        z-index: 2000;
        img{
          width: 26px;
          height: 26px;
          position: absolute;
          top: 214px;
          left: 20px;
        }
      }
      img{
        width: 100%;
        height: auto;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: -1000;
      }
      input{
        width:482px;
        height:55px;
        background:#fff;
        border-radius:27px;
        z-index: 1000;
        border: 1px solid red;
        position: absolute;
        top: 200px;
        left: 50px;
        font-size:24px;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        color:#999;
        padding-left: 57px;
        -webkit-appearance: none;
      }
    }
  }
  .part_two{
    width:640px;
    min-height: 500px;
    position: absolute;
    left: 0px;
    top: 323px;
    img{
        width: 100%;
        height: auto;
    }
    // .seo{
    //   width:117px;
    //   height:29px;
    //   font-size:29px;
    //   font-family:PingFang-SC-Bold;
    //   font-weight:bold;
    //   color:rgba(1,1,1,1);
    //   position: absolute;
    //   left: 35px;
    //   top: 0px;
    // }
    // .seo_one{
    //   width:582px;
    //   height:58px;
    //   font-size:22px;
    //   font-family:PingFang-SC-Regular;
    //   font-weight:Regular;
    //   color:rgba(0,0,0,1);
    //   line-height: 30px;
    //   position: absolute;
    //   left: 35px;
    //   top: 45px;
    // }
    // .seo_one_img{
    //   width:513px;
    //   height:912px;
    //   position: absolute;
    //   left: 78px;
    //   top: 110px;
    // }
    // .seo_two{
    //   width:592px;
    //   height:58px;
    //   font-size:22px;
    //   font-family:PingFang-SC-Regular;
    //   font-weight:Regular;
    //   color:rgba(0,0,0,1);
    //   line-height: 30px;
    //   position: absolute;
    //   left: 35px;
    //   top: 1045px;
    // }
    // .seo_two_img{
    //   width:513px;
    //   height:912px;
    //   position: absolute;
    //   left: 78px;
    //   top: 1118px;
    // }
    // .seo_three{
    //   width:582px;
    //   height:58px;
    //   font-size:22px;
    //   font-family:PingFang-SC-Regular;
    //   font-weight:Regular;
    //   color:rgba(0,0,0,1);
    //   line-height: 30px;
    //   position: absolute;
    //   left: 35px;
    //   top: 2064px;
    // }
    // .seo_three_img{
    //   width:513px;
    //   height:912px;
    //   position: absolute;
    //   left: 78px;
    //   top: 2099px;
    // }
    // .seo_four{
    //   width:582px;
    //   height:58px;
    //   font-size:22px;
    //   font-family:PingFang-SC-Regular;
    //   font-weight:Regular;
    //   color:rgba(0,0,0,1);
    //   line-height: 30px;
    //   position: absolute;
    //   left: 35px;
    //   top: 3042px;
    // }
    // .seo_four_img{
    //   width:513px;
    //   height:912px;
    //   position: absolute;
    //   left: 78px;
    //   top: 3103px;
    // }
    // .seo_five{
    //   width:592px;
    //   height:86px;
    //   font-size:22px;
    //   font-family:PingFang-SC-Regular;
    //   font-weight:Regular;
    //   color:rgba(0,0,0,1);
    //   line-height: 30px;
    //   position: absolute;
    //   left: 35px;
    //   top: 4045px;
    // }
    // .seo_five_img{
    //   width:513px;
    //   height:912px;
    //   position: absolute;
    //   left: 78px;
    //   top: 4140px;
    //   margin-bottom: 35px;
    // }
  }
}
</style>
