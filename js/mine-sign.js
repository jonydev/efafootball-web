/**
 * Created by 晴识明月 on 2016/12/27.
 */
var current_choose; //标记当前所设置的属性，0 表示设置性别 1表示设置位置
$(document).ready(function (){

});
$(".sign-btn").click(function () {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/createUser?loginName=ganzi01&password=198424&name=ganjinhua&userType=1";
    Sign_Up(url);
});
$(".position-ul li").click(function () {
    $(".position-ul").find(".text-green").removeClass("text-green");
    $(this).addClass("text-green");
});
$(".sex-ul li").click(function () {
    $(".sex-ul").find(".text-green").removeClass("text-green");
    $(this).addClass("text-green");
});
$(".save-item").click(function () {
    $(".top-div").addClass("hidden");
    $(".sex-ul").addClass("hidden");
    $(".position-ul").addClass("hidden");
    if(current_choose==0){
        var choose_content=$(".sex-ul").find(".text-green table tr td div").text();
        $("#sex").val(choose_content);
    }else if(current_choose==1){
        var choose_content=$(".position-ul").find(".text-green table tr td div").text();
        $("#position").val(choose_content);
    }
});
$(".cancel-item").click(function () {
    $(".top-div").addClass("hidden");
    $(".sex-ul").addClass("hidden");
    $(".position-ul").addClass("hidden");
    current_choose=-1;
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
function checkFile(){
    var file = document.getElementById("loadfile").value;
    console.log(file);
    if(file){
        document.getElementById("profile-img").src=file;
    }
}

function choose_sex() {
    $(".top-div").removeClass("hidden");
    $(".sex-ul").removeClass("hidden");
    current_choose=0;
}

function choose_position() {
    $(".top-div").removeClass("hidden");
    $(".position-ul").removeClass("hidden");
    current_choose=1;
}

function choose_city() {
    //to do
}