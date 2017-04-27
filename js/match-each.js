/**
 * Created by 晴识明月 on 2016/12/3.
 */
var match_id,hometeamid,awayteamid;
var game_id,match_info,addstart=0;
var event_photo=["images/real_goal.png","images/real_support.png","images/real_yellow.png","images/real_red.png",
"images/real_shoot.png","images/real_corner.png","images/real_free.png","images/real_breakrule.png","images/real_point_get.png",
    "images/real_over.png","images/real_change.png","images/real_change.png","images/real_start.png","images/real_half_end.png",
    "images/real_half_end.png","images/real_end.png","images/real_own_goal.png"];
$(document).ready(function () {
    var Request=new Object();
    Request=GetRequest();
    game_id=Request["game_id"];
    match_id=Request["match_id"];
    var flag=Request["flag"];
    if(flag!=0){//展示已经结束的比赛
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
    AddShapeContent();
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
$("#home-team-shape").click(function () {
    $(this).addClass("background-green2e text-white").removeClass("text-green26");
    $("#away-team-shape").removeClass("background-green2e text-white").addClass("text-green26");
    AddShapeContent(hometeamid);
});
$("#away-team-shape").click(function () {
    $(this).addClass("background-green2e text-white").removeClass("text-green26");
    $("#home-team-shape").removeClass("background-green2e text-white").addClass("text-green26");
    AddShapeContent(awayteamid);
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
$(document).on("click",".each-position li",function () {
    var player_id=$(this).attr("id");
    window.location.href="http://120.76.206.174:8080/efafootball-web/player-profile.html?player_id="+player_id;
});
function AddRealScheduleContent() {
    var a_abstractcontent=$(".a-abstract_ul");
    var b_abstractcontent=$(".b-abstract_ul");
    var realctcontent=$(".real-ul");
    var local_a_abstract_number=localStorage.getItem("local_a_abstract_number");    //获取本地缓存
    var local_b_abstract_number=localStorage.getItem("local_b_abstract_number");    //获取本地缓存
    var local_real_number=localStorage.getItem("local_real_number");  //获取本地缓存
    if(local_a_abstract_number==null) local_a_abstract_number=0;
    if(local_b_abstract_number==null) local_b_abstract_number=0;
    if(local_real_number==null) local_real_number=0;

    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleToProcess?id="+game_id+"&homeId="+hometeamid+"&awayId="+awayteamid;
    $.ajax({
        url:url,
        success:function (data) {
            var obj=JSON.parse(data);
            for (var key in obj){
                var single_ul=obj[key];
                for (var i=0;i<single_ul.length;i++){
                    var single=single_ul[i];
                    var photo=event_photo[eval(single.eventType)-1];
                    if(key==hometeamid &&i>=local_a_abstract_number){
                        localStorage.setItem("local_a_abstract_number",single_ul.length);
                        var newroll=
                            '<li class="single-li">'+
                            '<img class="action-a-img" src='+photo+' alt="" width="100%" height="100%">'+
                            '<span class="action-a-time"></span>'+
                            '<span class="action-a-who">'+single.number+'号'+single.name+single.eventName+'</span>'+
                            '</li>';
                        a_abstractcontent.append(newroll);
                    }else if(key==awayteamid&&i>=local_b_abstract_number){
                        localStorage.setItem("local_b_abstract_number",single_ul.length);
                        var newroll=
                            '<li class="single-li">'+
                            '<img class="action-b-img" src='+photo+' alt="" width="100%" height="100%">'+
                            '<span class="action-b-who">'+single.number+'号'+single.name+single.eventName+'</span>'+
                            '<span class="action-b-time"></span>'+
                            '</li>';
                        b_abstractcontent.append(newroll);
                    }
                }
            }
        }
    });
    if (addstart==0){
        var newroll=
            '<li>'+
            '<div class="direction-l">'+
            '<img class="flag-img" src="images/real_start.png" alt="" width="100%" height="100%">'+
            '</div>'+
            '<div class="my_circle"></div>'+
            '<div class="direction-r">'+
            '<span class="direction-l-time">0</span>'+
            '</div>'+
            '</li>';
        realctcontent.append(newroll);
        addstart++;
    }
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getInformation?id="+game_id+"&homeId="+hometeamid+"&awayId="+awayteamid;
    $.ajax({
        url:url,
        success:function (data) {
            var obj=eval(data.rows);
            if(obj==undefined) return;
            console.log(obj);
            for (var i=0;i< obj.length;i++){
                var single=obj[i];
                localStorage.setItem("local_real_number",obj.length);
                var photo=event_photo[eval(single.type)-1];
                if(i<local_real_number) break;
                if(single.teamId==""){
                    var newroll=
                        '<li>'+
                        '<div class="direction-l">'+
                        '<img class="flag-img" src='+photo+' alt="" width="100%" height="100%">'+
                        '</div>'+
                        '<div class="my_circle"></div>'+
                        '<div class="direction-r">'+
                        '<span class="direction-l-time">'+single.time+'</span>'+
                        '</div>'+
                        '</li>';
                }else if(single.teamId==hometeamid){
                    var newroll=
                        '<li>'+
                        '<div class="direction-l">'+
                        '<img class="flag-img" src='+photo+' alt="" width="100%" height="100%">'+
                        '<span  class="direction-l-name"> '+single.content+'</span>'+
                        '</div>'+
                        '<div class="my_circle"></div>'+
                        '<div class="direction-r">'+
                        '<span class="direction-l-time">'+single.time+'</span>'+
                        '</div>'+
                        '</li>';
                }else if(single.teamId==awayteamid){
                    var newroll=
                        '<li>'+
                        '<div class="direction-r">'+
                        '<img class="flag-img" src='+photo+' alt="" width="100%" height="100%">'+
                        '<span  class="direction-r-name"> '+single.content+'</span>'+
                        '</div>'+
                        '<div class="my_circle"></div>'+
                        '<div class="direction-l">'+
                        '<span class="direction-r-time">'+single.time+'</span>'+
                        '</div>'+
                        '</li>';
                }
                realctcontent.append(newroll);
                // $('#match-detail')[0].scrollTop=$('#match-detail').height();
                $('#match-detail')[0].scrollTop=5000;
            }
        }
    });
}
setInterval("AddRealScheduleContent()",10000);
function SetContentStarted() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleById?officeId="+match_id+"&id="+game_id;
    $.ajax({
        url:url,
        success:function (data) {
        console.log(data.rows);
        match_info=(data.rows)[0];
        var single=(data.rows)[0];
        hometeamid=single.homeTeamId;
        awayteamid=single.awayTeamId;
        if(single.homeTeamPhoto!="")
        {
            $(".team-aimg").attr("src",single.homeTeamPhoto);
        }
        if(single.awayTeamPhoto!="")
        {
            $(".team-bimg").attr("src",single.awayTeamPhoto);
        }
        $(".team-atxt").text(single.homeTeamName);
        $(".team-btxt").text(single.awayTeamName);
        $(".score-result").text(single.homescore+':'+single.awayscore);
        AddRealScheduleContent();
        }
    });
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
            // $(".result-going").text(single.time.substr(0,5));
            $(".result-going").text(single.time.split("-")[0]);
            $(".match-place").text(single.place);
        }
    })
}
function AddStartFirstContent(teamId) {
    $("#home-team").text(match_info.homeTeamName);
    $("#away-team").text(match_info.awayTeamName);
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
                    if(player.photo!="") photo=player.photo+"?imageView2/1/w/60/h/60";
                    newroll+=
                        '<li class="each-person" id='+player.id+'>'+
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
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getStatistical?id="+game_id+"&homeId="+hometeamid+"&awayId="+awayteamid;
    var statisticcontent=$(".statistic-info").empty();
    $.ajax({
        url:url,
        success:function (data) {
            var obj=JSON.parse(data);
            var hometeam=obj[hometeamid];
            var awayteam=obj[awayteamid];
            for (var i=0;i<awayteam.length;i++){
                var single_a=hometeam[i];
                var single_b=awayteam[i];
                var newroll=
                    '<li class="single-statistic" id="shoot">'+
                    '<div class="team-a-statistic" style="float: left">'+
                    '<div class="total-value-a">'+
                    '<div class="real-value-a" style="width: '+single_a.percentage+'"></div>'+
                    '</div>'+
                    '<a class="percent-a font6pt" href="javascript:;">'+single_a.num+'</a>'+
                    '</div>'+
                    '<div class="statistic-name  font6pt" style="float: left">'+single_a.typeName+'</div>'+
                    '<div class="team-b-statistic " style="float: left">'+
                    '<div class="total-value-b">'+
                    '<div class="real-value-b" style="width: '+single_b.percentage+'"></div>'+
                    '</div>'+
                    '<a class="percent-b font6pt" href="javascript:;">'+single_b.num+'</a>'+
                    '</div>'+
                    '</li>';
                $("#shoot").find(".real-value-a").css("width",single_a.percentage);
                $("#shoot").find(".real-value-b").css("width",single_b.percentage);
                statisticcontent.append(newroll);
            }
        }
    });
}
function AddShapeContent(team_id) {
    $("#home-team-shape").text(match_info.homeTeamName);
    $("#away-team-shape").text(match_info.awayTeamName);
}
function clear_localstorage(){
    localStorage.removeItem("local_a_abstract_number");
    localStorage.removeItem("local_b_abstract_number");
    localStorage.removeItem("local_real_number");
}