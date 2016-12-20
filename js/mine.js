/**
 * Created by 晴识明月 on 2016/12/20.
 */
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
function checkFile(){
    var file = document.getElementById("loadfile").value;
    console.log(file);
    if(file){
        document.getElementById("profile-img").src=file;
    }
}
