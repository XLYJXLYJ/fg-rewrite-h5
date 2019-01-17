<template>
    <div class="how_to"><img src="../assets/hrefimage.png"></div>
</template>
<script>
import IsWinXin from '@/common/IsWinXin'
export default {
    created () {
        document.title = '微信跳转页';
        let nowURI = window.location.href;
        let weixin = this.Whatis()
        if(!weixin){
            // console.log('不是微信端')
            if (nowURI.indexOf("page=login") != -1) {
                window.location.href = nowURI.replace("index", "login");   
            } else {
                window.location.href = nowURI.replace("index", "itemdetail");   
            }
        } 
    },
    methods: {
        Whatis () {
            return window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
        },
    }
}
</script>
<style lang="less" scoped>
.how_to{
    width: 640px;
    height: 100%;
    position: absolute;
    z-index: 1000;
    img{
        width:640px;
        height: 100%;
        z-index: 1000;
    }
}
</style>
