<template>
    <div class="goods_share">
        <alert v-model="alert_show">{{error_type}}</alert>
        <swiper 
        :list="demoList"
        auto 
        style="width:100%;margin:0 auto;" 
        height="180px" 
        dots-class="custom-bottom" 
        dots-position="center">
        </swiper>
        <p class="goods_share_title"><img src="../assets/tm.jpg">{{itemTitle}}</p>
        <p class="sale_price">卷后价<span class="money_icon">￥</span><span class="money_num">{{itemEndPrice}}</span><span class="sale_num">￥{{itemPrice}}</span></p>
        <p class="sale_price_img"><img src="../assets/discount_bg.jpg"><span>{{couponMoney}}元</span></p>
        <div class="goods_share_button">
            <button class="download_button" @click.stop.prevent="DownloadApp()">下载app拿佣金</button>
            <button class="copy_button"  type="button"
                v-clipboard:copy="tbkPwd"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError">
            复制淘宝口令</button>
            <input type="text" style="display:none" v-show='tbkPwd'>
        </div>
    </div>
</template>
<script>
import IsWinXin from '@/common/IsWinXin'
import Qs from 'qs'
export default {
    data () {
        return {
            img_list: '',
            nowURI: '', // 获取当前url地址
            ids: '', // 获取的地址信息
            tbkPwd: '', // 口令信息
            error_type: '', // 错误类型
            alert_show: false, // 是否弹出错误
            itemTitle: '', // 标题
            itemPrice: '', // 现价
            itemEndPrice: '', // 折后价
            couponMoney: '', // 优惠券
            arrImg: [], // 商品图片
            demoList: []
        }
    },
    mounted() {
        IsWinXin.IsWinXin()
        this.ids = this.GetId();
        this.GetShopDetail()
        this.GetCopyCommand()
    },
    methods: {
        DownloadApp () {
            let u = navigator.userAgent;
            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            let hrefUrl = "https://sj.qq.com/myapp/detail.htm?apkName=com.fgoushop.fangou";
            if (isiOS) {
                hrefUrl = "https://itunes.apple.com/cn/app/凡购-官方正版/id1444751684?mt=8";
            }
            window.location.href = hrefUrl;
        },
        GetId () {
            this.nowURI = window.location.href;
            let arrParams = this.nowURI.split("?")[1].split("&"),
                parseObj = {};
            for(let i = 0; i < arrParams.length; i ++) {
                let newA = arrParams[i].split("=");
                parseObj[newA[0]] = newA[1];
            }
            return parseObj;
        },
        GetShopDetail () {
            let data = {
                userId: this.ids.d,
                itemId: this.ids.itemId
                // userId: 123077,
                // itemId: 553190408685
            }
            data = Qs.stringify(data)
            this.axios.get(this.$store.state.baseUrl + '/product/thd/itemDetail?' + data)
            .then(response => {
                if (response.data.code === 200) {
                if (response.data.data.userId) {
                    this.itemTitle = response.data.data.itemTitle
                    this.itemPrice = response.data.data.itemPrice
                    this.itemEndPrice = response.data.data.itemEndPrice
                    this.couponMoney = response.data.data.couponMoney
                    if (response.data.data.taobaoImage) {
                        this.arrImg = response.data.data.taobaoImage.split(",")
                        this.demoList = this.arrImg.map((one, index) => ({
                            url: 'javascript:',
                            img: one
                        }))
                    } else if (response.data.data.itemPic) {
                        this.arrImg[0] = response.data.data.itemPic;
                    }
                }
                } else {
                this.error_type = response.data.message
                this.alert_show = true
                }
            })
        },
        GetCopyCommand () {
            let data = {
                // userId: 123077,
                // itemId: 553190408685
                userId: this.ids.d,
                itemId: this.ids.itemId
            }
            data = Qs.stringify(data)
            this.axios.get(this.$store.state.baseUrl + '/product/thd/convertEnhance?' + data)
            .then(response => {
                if (response.data.code === 200) {
                    this.tbkPwd = response.data.data.tbkPwd;
                } else {
                    this.error_type = response.data.message
                    this.alert_show = true
                }
            })
        },
        onCopy () {
            if (this.tbkPwd) {
                this.error_type = '复制淘口令成功'
                this.alert_show = true
            }
        },
        onError () {
            if (this.tbkPwd) {
                this.error_type = '复制淘口令失败'
                this.alert_show = true
            }
        }
    },
}
</script>
<style lang="less" scoped>
.goods_share{
    width: 640px;
    height: 100%;
    position: absolute;
    background-color: #fff;
    .goods_share_title{
        width:600px;
        height:60px;
        font-size:27px;
        font-family:PingFang-SC-Regular;
        font-weight:Regular;
        color:#333;
        position: relative;
        margin: 0 auto;
        margin-top: 23px;
        line-height: 31px;
        img{
            width:34px;
            height:21px;
            position: relative;
            top: -8px;
            left: 0px;
            margin-right: 8px;
        }
    }
   .goods_share_button{
        position: fixed;
        bottom: 0px;
        width: 640px;
        height: 85px;
        .download_button{
            position: relative;
            left: 0px;
            width:320px;
            height:85px;
            background:#FF8F00;
            font-size: 29px;
            color: #fff;
            font-family:PingFang-SC-Regular;
            font-weight:Regular;
        }
        .copy_button{
            position: absolute;
            right: 0px;
            width:320px;
            height:85px;
            background:#FF5100;
            font-size: 29px;
            color: #fff;
            font-family:PingFang-SC-Regular;
            font-weight:Regular;
        }
    }
    .sale_price{
        width:600px;
        height:34px;
        font-size:27px;
        font-family:PingFang-SC-Medium;
        font-weight:Medium;
        color:#FF5100;
        position: relative;
        margin: 0 auto;
        margin-top: 27px;
        .money_icon{
            width:15px;
            height:18px;
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:Medium;
            color:#FF5100;
            margin-left: 4px;
        }
        .money_num{
            width:91px;
            height:26px;
            font-size:34px;
            font-family:PingFang-SC-Medium;
            font-weight:Medium;
            color:#FF5100;
        }
        .sale_num{
            width:82px;
            height:19px;
            font-size:24px;
            font-family:PingFang-SC-Regular;
            font-weight:bold;
            text-decoration:line-through;
            color:rgba(153,153,153,1);
            position: relative;
            left: 17px;
        }
    }
    .sale_price_img{
        width:130px;
        height:45px;
        position: relative;
        left: 20px;
        top: 30px;
        img{
            width:130px;
            height:45px;
        }
        span{
            width:61px;
            height:24px;
            font-size:27px;
            font-family:PingFang-SC-Regular;
            font-weight:Regular;
            color:#fff;
            position: absolute;
            left: 52px;
            top: 8px;
        }
    }
}
</style>