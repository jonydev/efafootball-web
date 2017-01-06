/**
 * Created by 晴识明月 on 2016/12/3.
 */
var match_id,hometeamid,awayteamid;
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
    AddRealScheduleContent();
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
    AddStartFirstContent(hometeamid);
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
    AddStatisticContent();
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
$("#home-team").click(function () {
    $(this).addClass("background-green2e text-white").removeClass("text-green26");
    $("#away-team").removeClass("background-green2e text-white").addClass("text-green26");
    AddStartFirstContent(hometeamid);
});
$("#away-team").click(function () {
    $(this).addClass("background-green2e text-white").removeClass("text-green26");
    $("#home-team").removeClass("background-green2e text-white").addClass("text-green26");
    AddStartFirstContent(awayteamid);
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
function AddRealScheduleContent() {
    var a_abstractcontent=$(".a-abstract_ul").empty();
    var b_abstractcontent=$(".b-abstract_ul").empty();
    var realctcontent=$(".real-ul").empty();
    var newroll=
        '<li class="single-li">'+
            '<img class="action-a-img" src="images/real_goal.png" alt="" width="100%" height="100%">'+
            '<span class="action-a-time">8</span>'+
        '<span class="action-a-who">未命名</span>'+
        '</li>';
    a_abstractcontent.append(newroll);
    var newroll=
        '<li class="single-li">'+
                '<img class="action-b-img" src="images/real_goal.png" alt="" width="100%" height="100%">'+
                '<span class="action-b-who">hhha</span>'+
                '<span class="action-b-time">6</span>'+
            '</li>';
    b_abstractcontent.append(newroll);
    var newroll=
        '<li>'+
            '<div class="direction-l">'+
                '<img class="flag-img" src="images/real_goal.png" alt="" width="100%" height="100%">'+
                '</div>'+
                '<div class="my_circle"></div>'+
                '<div class="direction-r">'+
                '<span class="direction-l-time">87</span>'+
            '</div>'+
            '</li>';
    var a=
        '<li>'+
            '<div class="direction-l">'+
                '<img class="flag-img" src="images/real_goal.png" alt="" width="100%" height="100%">'+
                '<span  class="direction-l-name"> 20号 蔡勤学</span>'+
            '</div>'+
            '<div class="my_circle"></div>'+
                '<div class="direction-r">'+
                '<span class="direction-l-time">87</span>'+
            '</div>'+
            '</li>';
    var b=
        '<li>'+
            '<div class="direction-r">'+
                '<img class="flag-img" src="images/real_goal.png" alt="" width="100%" height="100%">'+
                '<span  class="direction-r-name"> 20号 蔡勤学</span>'+
            '</div>'+
            '<div class="my_circle"></div>'+
                '<div class="direction-l">'+
                '<span class="direction-r-time">87</span>'+
            '</div>'+
            '</li>';
    realctcontent.append(newroll).append(a).append(b);
}
function SetContentStarted() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleById?officeId="+match_id+"&id="+game_id;
    $.ajax({
        url:url,
        success:function (data) {
        console.log(data.rows);
        var single=(data.rows)[0];
        hometeamid=single.homeTeamId;
        awayteamid=single.awayTeamId;
        if(single.homeTeamPhoto!="")
        {
            $(".team-aimg").attr("src",single.homeTeamPhoto);
        }
        $(".team-atxt").text(single.homeTeamName);
        $(".team-btxt").text(single.awayTeamName);
        $(".score-result").text(single.homescore+':'+single.awayscore);
        }
    })
    AddRealScheduleContent();
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
function AddStartFirstContent(teamId) {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByMember?teamId="+teamId+"&scheduleId="+game_id;
    $.ajax({
        url:url,
        success:function (data) {
            var GKcontent=$(".GK_ul").empty();
            var CFcontent=$(".CF_ul").empty();
            var CMcontent=$(".CM_ul").empty();
            var CBcontent=$(".CB_ul").empty();
            console.log(data);
            var obj=JSON.parse(data);
            for (var key in obj){
                var single=obj[key];
                // var headphoto="images/default_team.png";
                // if(single.photo!="") headphoto=single.photo;
                var newroll='';
                for(var i=0;i<single.length;i++){
                    var player=single[i];
                    var photo="images/default_head.png";
                    if(player.photo!="") photo=player.photo;
                    newroll+=
                        '<li class="each-person">'+
                        '<a class="number text-black" href="">'+player.number+'</a>'+
                        '<div class="member-info">'+
                        '<img class="person-img" src='+photo+'  alt="" width="1005" height="100%">'+
                        '<a class="name font10pt text-black" href="">'+player.name+'</a>'+
                        '<img class="member-info-detail" src="images/goto_player.png" alt="" width="100%" height="100%">'+
                        '</div>'+
                        '</li>';
                }
                if(key=="GK"){
                    GKcontent.append(newroll);
                }else if(key=="CB"){
                    CBcontent.append(newroll);
                }else if(key=="CM"){
                    CMcontent.append(newroll);
                }else if(key=="CF"){
                    CFcontent.append(newroll);
                }
            }
        }
    });
}
function AddStatisticContent() {
    $("#shoot").find(".percent-a").html(3);
    $("#shoot").find(".percent-b").html(4);
    $("#shoot").find(".real-value-a").css("width","39%");
    $("#shoot").find(".real-value-b").css("width","24%");
    $("#point-kick").find(".percent-a").html(3);
    $("#point-kick").find(".percent-b").html(4);
    $("#point-kick").find(".real-value-a").css("width","39%");
    $("#point-kick").find(".real-value-b").css("width","24%");
    $("#free-kick").find(".percent-a").html(3);
    $("#free-kick").find(".percent-b").html(4);
    $("#free-kick").find(".real-value-a").css("width","39%");
    $("#free-kick").find(".real-value-b").css("width","24%");
    $("#cornor-kick").find(".percent-a").html(3);
    $("#cornor-kick").find(".percent-b").html(4);
    $("#cornor-kick").find(".real-value-a").css("width","39%");
    $("#cornor-kick").find(".real-value-b").css("width","24%");
    $("#break-rules").find(".percent-a").html(3);
    $("#break-rules").find(".percent-b").html(4);
    $("#break-rules").find(".real-value-a").css("width","39%");
    $("#break-rules").find(".real-value-b").css("width","24%");

}