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
            window.location.href = nowURI.replace("index", "index"); 
            window.location.href = nowURI.replace("login", "index"); 
            window.location.href = nowURI.replace("itemdetail", "index"); 
            window.location.href = nowURI.replace("Search", "index"); 
            window.location.href = nowURI.replace("SearchVideo", "index"); 
        }
    },
    Whatis () {
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
    }
}