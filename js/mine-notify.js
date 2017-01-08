/**
 * Created by 晴识明月 on 2017/1/8.
 */
var loginId;
$(document).ready(function () {
    var have_logined=localStorage.getItem("have_logined");
    if(have_logined==1) {
        var mine_info = localStorage.getItem("mine_info");
        loginId = localStorage.getItem("loginId");
    }
    ShowNotify();
});
function ShowNotify() {
    $.ajax({
        url:"http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllMemberByFlag?loginId="+loginId,
        success:function (data) {
            console.log(data);
            debugger;

        }
    });
}