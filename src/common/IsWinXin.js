import Vue from 'vue'
import router from '../router/index.js'
export default{
    IsWinXin () {
        let weixin = this.Whatis()
        console.log(weixin)
        let nowURI = window.location.href;
        if(!weixin){
            console.log('不是微信端')
            if (nowURI.indexOf("page=login") != -1) {
                window.location.href = nowURI.replace("index", "login");   
            } else {
                window.location.href = nowURI.replace("index", "itemdetail");   
            }
        } 
        // else {
        //     console.log('是微信端')
        //     window.location.href = nowURI.replace("index", "index");  
        // }
    },
    Whatis () {
        return window.navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    }
}