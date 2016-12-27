/**
 * Created by 晴识明月 on 2016/12/27.
 */
$(document).ready(function (){

});
$(".sign-btn").click(function () {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/createUser?loginName=ganzi01&password=198424&name=ganjinhua&userType=1";
    Sign_Up(url);
});
function Sign_Up(url) {
    $.ajax({
        url:url,
        success:function (data) {
            var result=(data.result);
            console.log(data);
            if(result=="repeat"){
                $(".Tip").removeClass("hidden");
                $(".Tip span").html("注册失败,该用户名已经存在!")
                setTimeout('$(".Tip").addClass("hidden")',1500);
            }else if(result=="fail"){
                $(".Tip").removeClass("hidden");
                $(".Tip span").html("注册失败!")
                setTimeout('$(".Tip").addClass("hidden")',1500);
            }else if(result=="success"){
                localStorage.setItem("have_logined",1);
                //把json数据转换成字符串格式存储
                localStorage.setItem("loginId",data.message);
                window.location.href="http://120.76.206.174:8080/efafootball-web/mine.html";
            }
        }
    })
}