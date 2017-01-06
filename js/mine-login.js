/**
 * Created by 晴识明月 on 2016/12/27.
 */
$(document).ready(function (){

});
$(".login-btn").click(function () {
    $(this).addClass("background-green text-white");
    $(".sign-btn").removeClass("background-green text-white").addClass("background-greyf2");
    var loginName=$("#loginName").val();
    var password=$("#password").val();
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/checkLogin?loginName="+loginName+"&password="+password;
    $.ajax({
        url:url,
        success:function (data) {
            var login_success=eval(data.result);
            if(login_success){            //login success
                localStorage.setItem("have_logined",1);
                //把json数据转换成字符串格式存储
                localStorage.setItem("mine_info",JSON.stringify(data.rows[0]));
                localStorage.setItem("loginId",data.rows[0].id);
                window.location.href="http://120.76.206.174:8080/efafootball-web/mine.html";
            }else{                       //login failed
                $(".Tip").removeClass("hidden");
                setTimeout('$(".Tip").addClass("hidden")',1500);
            }
        }
    })
});
$(".sign-btn").click(function () {
    $(this).addClass("background-green text-white");
    $(".login-btn").removeClass("background-green text-white").addClass("background-greyf2");
    window.location.href="http://120.76.206.174:8080/efafootball-web/mine-sign.html";
});