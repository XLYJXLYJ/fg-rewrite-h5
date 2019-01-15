export default{
    IsWinXin () {
        let weixin = this.Whatis()
        console.log(weixin)
        let nowURI = window.location.href;
        if(!weixin){
            if (nowURI.indexOf("page=login") != -1) {
                window.location.href = nowURI.replace("index", "login");   
            } else {
                window.location.href = nowURI.replace("index", "itemdetail");   
            }
        } else {
            window.location.href = 'http://h5.fgshop.vip/#/index';
        }
    },
    Whatis () {
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    }
}