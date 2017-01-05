/**
 * Created by 晴识明月 on 2016/12/3.
 */
var match_id;
var game_id;
$(document).ready(function () {
    var Request=new Object();
    Request=GetRequest();
    game_id=Request["game_id"];
    match_id=Request["match_id"];
    var flag=Request["flag"];
    if(flag==1){//展示已经结束的比赛
        $(".had_started").removeClass("hidden");
        $(".no_started").addClass("hidden");
        SetContentStarted();
    }else if(flag==0){//展示未开始的比赛
        $(".had_started").addClass("hidden");
        $(".no_started").removeClass("hidden");
        SetContentNoStarted();
    }
    $(".real-schedule ").addClass("text-green").removeClass("text-black");
    $(".real-schedule").find(".triangle-container").addClass("shift-triangle");

});
$(".real-schedule").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".real-schedule").find(".triangle-container").addClass("shift-triangle");
    $(".tab-real-schedule").removeClass("hidden");
    $(".tab-start-first").addClass("hidden");
    $(".tab-statistic").addClass("hidden");
    $(".tab-shape").addClass("hidden");
    //AddIntroduceContent();
});
$(".start-first").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".start-first").find(".triangle-container").addClass("shift-triangle");
    $(".tab-start-first").removeClass("hidden");
    $(".tab-real-schedule").addClass("hidden");
    $(".tab-statistic").addClass("hidden");
    $(".tab-shape").addClass("hidden");
    AddStartFirstContent();
});
$(".statistic").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".statistic").find(".triangle-container").addClass("shift-triangle");
    $(".tab-statistic").removeClass("hidden");
    $(".tab-real-schedule").addClass("hidden");
    $(".tab-start-first").addClass("hidden");
    $(".tab-shape").addClass("hidden");
    //AddIntroduceContent();
});
$(".shape").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".shape").find(".triangle-container").addClass("shift-triangle");
    $(".tab-statistic").addClass("hidden");
    $(".tab-real-schedule").addClass("hidden");
    $(".tab-start-first").addClass("hidden");
    $(".tab-shape").removeClass("hidden");
    //AddIntroduceContent();
});
$(document).on("click",".signup",function () {
    $(this).addClass("background-green").removeClass("light-white");
    $(this).find(".signup-Txt").addClass("text-white").removeClass("text-green");
    $(".leave").removeClass("background-green").addClass("light-white");
    $(".leave").find(".leave-Txt").removeClass("text-white").addClass("text-green");
});
$(document).on("click",".leave",function () {
    $(this).addClass("background-green").removeClass("light-white");
    $(this).find(".leave-Txt").addClass("text-white").removeClass("text-green");
    $(".signup").removeClass("background-green").addClass("light-white");
    $(".signup").find(".signup-Txt").removeClass("text-white").addClass("text-green");
});
function SetContentStarted() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleById?officeId="+match_id+"&id="+game_id;
    $.ajax({
        url:url,
        success:function (data) {
        console.log(data.rows);
        var single=(data.rows)[0];
        if(single.homeTeamPhoto!="")
        {
            $(".team-aimg").attr("src",single.homeTeamPhoto);
        }
        $(".team-atxt").text(single.homeTeamName);
        $(".team-btxt").text(single.awayTeamName);
        $(".score-result").text(single.homescore+':'+single.awayscore);
        }
    })
}
function SetContentNoStarted() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleById?officeId="+match_id+"&id="+game_id;
    $.ajax({
        url:url,
        success:function (data) {
            console.log(data.rows);
            var single=(data.rows)[0];
            if(single.homeTeamPhoto!="")
            {
                $(".team-aimg").attr("src",single.homeTeamPhoto);
            }
            $(".team-atxt").text(single.homeTeamName);
            $(".team-btxt").text(single.awayTeamName);
            $(".result-going").text(single.time);
            $(".match-place").text(single.place);
        }
    })
}
function AddStartFirstContent() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByMember?teamId=b59e8aa6-6ded-11e6-ba4f-00163e000c51&scheduleId=129";
    $.ajax({
        url:url,
        success:function (data) {
            console.log(data.rows);

        }
    })
}