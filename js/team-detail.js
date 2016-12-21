/**
 * Created by 晴识明月 on 2016/12/16.
 */
$(document).ready(function (){
    $('#search').bind('input propertychange', function() {searchTeambyName();});

});
$(".introduce a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".introduce").find(".triangle-container").addClass("shift-triangle");
    $(".all-profile").removeClass("hidden");
    $(".all-player").addClass("hidden");
    $(".all-match").addClass("hidden");
});
$(".player a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".player").find(".triangle-container").addClass("shift-triangle");
    $(".all-player").removeClass("hidden");
    $(".all-profile").addClass("hidden");
    $(".all-match").addClass("hidden");
});
$(".schedule a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".schedule").find(".triangle-container").addClass("shift-triangle");
    $(".all-match").removeClass("hidden");
    $(".all-profile").addClass("hidden");
    $(".all-player").addClass("hidden");
});

function checkFile(){
    var file = document.getElementById("loadfile").value;
    console.log(file);
    if(file){
        document.getElementById("profile-img").src=file;
    }
}