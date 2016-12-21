/**
 * Created by 晴识明月 on 2016/12/20.
 */
var current_choose; //标记当前所设置的属性，0 表示设置性别 1表示设置位置
$(document).ready(function (){
    $('#search').bind('input propertychange', function() {searchTeambyName();});
    //ShowAllMatchs();
});
$(".login").click(function () {
    $(this).addClass("background-green ").removeClass("light-white");
    $(".login").addClass("text-white").removeClass("text-green");
    $(".sign-apply").addClass("light-white").removeClass("background-green");
    $(".login-Txt").addClass("text-green").removeClass("text-white");
    $(".edit_profile").removeClass("hidden");
    $(".sign_up").addClass("hidden");
});
$(".sign-apply").click(function () {
    $(this).addClass("background-green ").removeClass("light-white");
    $("sign-Txt").addClass("text-white").removeClass("text-green");
    $(".login").addClass("light-white").removeClass("background-green");
    $(".login-Txt").addClass("text-green").removeClass("text-white");
    $(".edit_profile").addClass("hidden");
    $(".sign_up").removeClass("hidden");
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