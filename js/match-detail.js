/**
 * Created by cnm on 2016/11/12.
 */
var match_id;
$(document).ready(function () {
    var Request=new Object();
    Request=GetRequest();
    match_id=Request["id"];
    $(".introduce a").addClass("text-green").removeClass("text-black");
    $(".introduce").find(".triangle-container").addClass("shift-triangle");
    AddIntroduceContent();
});
$(document).on("click",".spreed",function () {
    $(this).closest("li").find(".match-date").toggleClass("hidden");
    $(this).closest("li").find("ul").toggleClass("hidden");
    if($(this).closest("li").find("ul").hasClass("hidden")){
        $(this).attr("src","images/spreed.png");
    }else {
        $(this).attr("src","images/respreed.png");
    }
});
$(document).on("click",".all-matchs li",function () {
    window.location.href="http://120.76.206.174:8080/efafootball-web/match-each.html?"
})
$(document).on("click",".shooter",function () {
    $(this).addClass(" background-green text-white");
    $(".redyellow").addClass("text-green").removeClass("background-green text-white");
    AddBillboardContent();
});
$(document).on("click",".redyellow",function () {
    $(this).addClass(" background-green text-white");
    $(".shooter").addClass("text-green").removeClass("background-green text-white");
    AddRedyellowContent();
});
$(".introduce a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".introduce").find(".triangle-container").addClass("shift-triangle");
    $(".all-profile").removeClass("hidden");
    AddIntroduceContent();
});
$(".team a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".team").find(".triangle-container").addClass("shift-triangle");
    AddTeamContent();
});
$(".schedule a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".schedule").find(".triangle-container").addClass("shift-triangle");
   AddMatchContent();
});
$(".points a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".points").find(".triangle-container").addClass("shift-triangle");
    AddPointsContent();
});
$(".billboard a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".billboard").find(".triangle-container").addClass("shift-triangle");
    AddBillboardContent();
});
function AddIntroduceContent() {
    $(".all-profile").removeClass("hidden");
    $(".all-points").addClass("hidden");
    $(".all-billboard").addClass("hidden");
    $(".all-schedule").addClass("hidden");
    $(".all-team").addClass("hidden");
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/officeViewData?id="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            var allcontents=$(".all-profile").empty();
            console.log(data);
            var newroll=
            '<div class="all-profile ">'+
                '<div class="profile-img">'+
                '<img src="images/swiper2.jpg"  alt="" width="100%" height="100%">'+
                '</div>'+
                '<div class="match-profile-container">'+
                '<div class="match-profile font3pt">赛事简介</div>'+
                '<div style="background-color: white"><div class="match-introduce font2pt">光谷业余啊额are热热额阿尔而非二 热额</div></div>'+
            '</div>'+
            '<div class="match-rule-container">'+
                '<div class="match-profile font3pt">规则简介</div>'+
                '<div style="background-color: white"><div class="match-introduce font2pt">光谷业余啊额are热热额阿尔而非二 热额</div></div>'+
            '</div>'+
            '<div class="match-referee-container">'+
                '<div class="match-profile font3pt">裁判简介</div>'+
                '<div style="background-color: white"><div class="match-introduce font2pt">光谷业余啊额are热热额阿尔而非二 热额</div></div>'+
            '</div>'+
            '<div class="preview">'+
                '<div class="preview-title font3pt">往期回顾</div>'+
                '<ul>'+
                '<li class="each-round">'+
                '<div class="preview-roud font3pt">第一届</div>'+
                '<div class="preview-rank font2pt"> <span style="color: #AEB2B3">冠军</span> 强势表达 / <span style="color: #AEB2B3"> 亚军</span> MIP / <span style="color: #AEB2B3"> 季军</span> 强势表达 </div>'+
                '</li>'+
                '<li class="each-round">'+
                '<div class="preview-roud font3pt">第二届</div>'+
                '<div class="preview-rank font2pt"> <span style="color: #AEB2B3">冠军</span> 强势表达 / <span style="color: #AEB2B3"> 亚军</span> MIP / <span style="color: #AEB2B3"> 季军</span> 强势表达 </div>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '<div class="famous-people">'+
                '<div class="famous-people-title font3pt">名人堂</div>'+
                '<ul>'+
                '<li class="each-round">'+
                '<div class="preview-roud font3pt">第一届</div>'+
                '<div class="preview-rank font2pt"> <span style="color: #AEB2B3">最佳射手</span> 陈帅 强势表达 / <span style="color: #AEB2B3"> 最佳球员</span> 邓建坤 MIP </div>'+
            '</li>'+
            '<li class="each-round">'+
                '<div class="preview-roud font3pt">第二届</div>'+
                '<div class="preview-rank font2pt"> <span style="color: #AEB2B3">最佳射手</span> 陈帅 强势表达 / <span style="color: #AEB2B3"> 最佳球员</span> 邓建坤 MIP </div>'+
            '</li>'+
            '</ul>'+
            '</div>'+
            '</div>';
            allcontents.append(newroll);
        }
    });
}

function AddTeamContent() {
    $(".all-team").removeClass("hidden");
    $(".all-points").addClass("hidden");
    $(".all-billboard").addClass("hidden");
    $(".all-schedule").addClass("hidden");
    $(".all-profile").addClass("hidden");
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/officeViewData?id="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            var allcontents=$(".all-team").empty();
            console.log(data);
            var newroll=
            '<div class="all-team">'+
                '<div>'+
                '<div class="choose-create-container hidden">'+
                '<div class="choose-match background-green ">'+
                '<div class="choose-matchImg">'+
                '<img src="images/join_team.png" alt="" height="100%" width="100%">'+
                '</div>'+
                '<span  class="choose-matchTxt text-white">选择赛事</span>'+
                '</div>'+
                '<div class="create-team light-white">'+
                '<div class="create-teamImg">'+
                '<img src="images/tab_button_profile_sel.png" alt="" width="100%" height="100%">'+
                '</div>'+
                '<span  class="create-teamTxt text-green">创建球队</span>'+
                '</div>'+
                '</div>'+
                '<div class="search-top">'+
                '<img class="search-icon" src="images/team_search.png" alt="" width="100%" height="100%">'+
                '<span class="search-text">搜索</span>'+
                '</div>'+
                '<div class="search-div">'+
                '<form class="bs-example bs-example-form" role="form">'+
                '<div class=" input-group-lg search-input">'+
                '<input type="text" onchange="hidden_icon()" class="form-control " placeholder="" value="" id="search">'+
                '</div>'+
                '</form>'+
                '</div>'+
                '<div>'+
                '<ul class="team-ul">'+
                '<li class="single-team background-white" id="2999">'+
                '<img class="team-Img" src="images/join_team.png" alt="" width="100%" height="100%">'+
                '<a class="team-name" href="javascript:;">华中科技大学队</a>'+
                '<img class="team-detail" src="images/goto_team.png" alt="" width="100%" height="100%">'+
                '<a class="team-num" href="javascript:;">34</a>'+
                '<img class="team-num-img" src="images/player_number.png" alt="" width="100%" height="100%">'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '</div>'+
                '</div>';
            allcontents.append(newroll);
        }
    });
}

function AddMatchContent() {
    $(".all-schedule").removeClass("hidden");
    $(".all-points").addClass("hidden");
    $(".all-billboard").addClass("hidden");
    $(".all-profile").addClass("hidden");
    $(".all-team").addClass("hidden");
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByTitle?officeId="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            var allcontents=$(".all-schedule ul").empty();
            console.log(data);
            var single=eval(data.rows);
            for(var i=0;i<5;i++){
                var rank=i+1;
                var newroll=
                    '<li value="">'+
                        '<div class="round">'+
                        '<p class="round-num">第'+rank+'轮</p>'+
                        '<img class="spreed" src="images/respreed.png" alt="" width="100%" height="100%">'+
                        '</div>'+
                        '<div class="match-date">'+
                        '<p class="font3pt">11月2日 星期六</p>'+
                        '</div>'+
                        '<div>'+
                        '<ul class="all-matchs">';
                        for(var j=0;j<5;j++){
                            var child=
                                '<li value="54">'+
                                '<div class="team-results">'+
                                '<div class="team-a">'+
                                '<a class="team-atxt text-black" href="">红郡FC</a>'+
                                '<img class="team-aimg" src="images/match_choose.png" alt="" width="100%" height="100%" >'+
                                '</div>'+
                                '<div class="result">'+
                                '<span class="result-a background-grey93">10:10</span><br/>'+
                                '<span class="result-b ">已结束</span>'+
                                '</div>'+
                                '<div class="team-b">'+
                                '<img class="team-bimg" src="images/match_choose.png" alt="" width="100%" height="100%">'+
                                '<a class="team-btxt text-black" href="">MIP</a>'+
                                '</div>'+
                                '</div>'+
                                '</li>';
                            newroll+=child;
                        }
                        newroll+=
                        '</ul>'+
                        '</div>'+
                    '</li>';
                allcontents.append(newroll);
            }
        }
    });
}

function AddPointsContent(){
    $(".all-points").removeClass("hidden");
    $(".all-billboard").addClass("hidden");
    $(".all-schedule").addClass("hidden");
    $(".all-profile").addClass("hidden");
    $(".all-team").addClass("hidden");
    var allcontents=$("table").empty();
    var tablehead=
        '<tr class="table-head">'+
        '<th style="width: 10%;text-align: center">排名</th>'+
        '<th style="width: 20%;text-align: center">球队</th>'+
        '<th style="width: 11%;text-align: center">场次</th>'+
        '<th style="width: 6%;text-align: center">胜</th>'+
        '<th style="width: 6%;text-align: center">平</th>'+
        '<th style="width: 6%;text-align: center">负</th>'+
        '<th style="width: 6%;text-align: center">进</th>'+
        '<th style="width: 6%;text-align: center">失</th>'+
        '<th style="width: 6%;text-align: center">净</th>'+
        '<th style="width: 11%;text-align: center">积分</th>'+
        '<th style="width: 6%;text-align: center">红</th>'+
        '<th style="width: 6%;text-align: center">黄</th>'+
        '</tr>';
    allcontents.append(tablehead);
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/leagueIntegral?officeId="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            console.log(data);
            var obj=eval(data.rows)
            for(var i=0;i<obj.length;i++){
                var single=obj[i];
                var total=eval(single.won)+eval(single.even)+eval(single.beaten);
                var realball=eval(single.goal)-eval(single.lost);
                var rank=i+1;
                var newroll="";
                if(i==5){
                 newroll=
                     '<tr class="single-tr Sperate-line">'+
                         '<td ><div class="up-grade"></div>'+
                         '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">'+rank+'</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/points_up.png" alt="" width="100%" height="100%"></div>'+
                         '</td ><td  style="font-weight: 700 overflow:hidden">'+single.team.name+'</td><td>'+total+'</td><td>'+single.won+'</td>'+
                         '<td>'+single.even+'</td><td>'+single.beaten+'</td><td>'+single.goal+'</td><td>'+single.lost+'</td><td>'+realball+'</td><td style="font-weight: 800">'+single.point+'</td><td>'+single.red+'</td><td>'+single.yellow+'</td>'+
                     '</tr>';
                }
                else{
                    newroll=
                        '<tr class="single-tr ">'+
                        '<td ><div class="up-grade"></div>'+
                        '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">'+rank+'</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/points_up.png" alt="" width="100%" height="100%"></div>'+
                        '</td ><td  style="font-weight: 700">'+single.team.name+'</td><td>'+total+'</td><td>'+single.won+'</td>'+
                        '<td>'+single.even+'</td><td>'+single.beaten+'</td><td>'+single.goal+'</td><td>'+single.lost+'</td><td>'+realball+'</td><td style="font-weight: 800">'+single.point+'</td><td>'+single.red+'</td><td>'+single.yellow+'</td>'+
                        '</tr>';
                }
                allcontents.append(newroll);
                }
        }
    });
}

function AddBillboardContent() {
    $(".all-billboard").removeClass("hidden");
    $(".all-points").addClass("hidden");
    $(".all-schedule").addClass("hidden");
    $(".all-profile").addClass("hidden");
    $(".all-team").addClass("hidden");
    var allcontents=$("table").empty();
    var tablehead=
        '<tr>'+
            '<th class="rank ">排名</th>'+
            '<th class="player-name ">球员</th>'+
            '<th class="player-team ">球队</th>'+
            '<th class="main-goal ">总进球</th>'+
            '<th class="main-penalty ">点球</th>'+
        '</tr>';
    allcontents.append(tablehead);
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllGoal?officeId="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            console.log(data);
            var obj=eval(data.rows);
            for(var i=0;i<obj.length;i++){
                var rank=i+1;
                var single=obj[i];
                if(i==0){
                    var newroll=
                        '<tr class="first-tr">'+
                            '<td>'+rank+'</td>'+
                            '<td colspan="2">'+
                            '<img style="float: left;margin-left: 10px;" class="first-shooter" src="images/default_head.png" alt="" width="100%" height="100%">'+
                            '<div style="margin-left: 10px;float: left;margin-top: 22px;text-align: left">'+
                            '<div>'+single.name+'</div>'+
                            '<div style="color: #BBBEBD">'+single.teamName+'</div>'+
                            '</div>'+
                            '</td>'+
                            '<td>'+single.num+'</td>'+
                            '<td>'+single.number+'</td>'+
                        '</tr>';
                }
                else{
                    var newroll=
                        '<tr class="single-tr">'+
                            '<td>'+rank+'</td><td>'+single.name+'</td><td style="color: #BBBEBD">'+single.teamName+'</td><td>'+single.num+'</td><td>'+single.number+'</td>'+
                        '</tr>';
                }
                allcontents.append(newroll);
            }
        }
    });
    
}

function AddRedyellowContent() {
    var allcontents=$("table").empty();
    var tablehead=
        '<tr class="table-head">'+
        '<th class="rank ">排名</th>'+
        '<th class="player-name ">球员</th>'+
        '<th class="player-team ">球队</th>'+
        '<th class="main-goal ">红牌</th>'+
        '<th class="main-penalty ">黄牌</th>'+
        '</tr>';
    allcontents.append(tablehead);
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllCard?officeId="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            console.log(data);
            var obj=eval(data.rows);
            for(var i=0;i<obj.length;i++){
                var rank=i+1;
                var single=obj[i];
                var newroll=
                    '<tr class="single-tr">'+
                    '<td>'+rank+'</td><td>'+single.memberName+'</td><td style="color: #BBBEBD overflow:hidden">'+single.teamName+'</td><td>'+single.red+'</td><td>'+single.yellow+'</td>'+
                    '</tr>';
                allcontents.append(newroll);
            }
        }
    });
}
function SpreedMatch() {
    $()
}
function hidden_icon() {
    $(".search-top").addClass("hidden");
}