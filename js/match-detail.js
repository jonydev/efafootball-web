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
    AddBillboardContent();
});
$(document).on("click",".spreed",function () {
    $(this).closest("li").find(".match-date").toggleClass("hidden");
    $(this).closest("li").find("ul").toggleClass("hidden");
    if($(this).closest("li").find("ul").hasClass("hidden")){
        $(this).attr("src","images/赛事_比赛详情_展开赛事栏_图标.png");
    }else {
        $(this).attr("src","images/赛事_比赛详情_收起赛事栏_图标.png");
    }
});
$(document).on("click",".all-matchs li",function () {
    window.location.href="http://localhost/efafootball-web/match-each.html?"
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
    //AddIntroduceContent();
});
$(".team a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".team").find(".triangle-container").addClass("shift-triangle");
    //AddTeamContent();
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
    var allcontents=$(".all-contents").empty();
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/officeViewData?id="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            console.log(data);
            var newroll=
                '<div class="all-points">'+
                '<div>'+
                '<table>'+
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
                '</tr>'+
                '<tr class="single-tr">'+
                '<td><div class="up-grade"></div>'+
                '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">1</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/积分榜_上升.png" alt="" width="100%" height="100%"></div>'+
                '</td><td style="font-weight: 700">剑桥</td><td>23</td><td>11</td>'+
                '<td>4</td><td>5</td><td>6</td><td>3</td><td>6</td><td style="font-weight: 800">56</td><td>4</td><td>5</td>'+
                '</tr>'+
                '<tr class="single-tr Sperate-line">'+
                '<td ><div class="up-grade"></div>'+
                '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">1</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/积分榜_上升.png" alt="" width="100%" height="100%"></div>'+
                '</td ><td  style="font-weight: 700">剑桥</td><td>23</td><td>11</td>'+
                '<td>4</td><td>5</td><td>6</td><td>3</td><td>6</td><td style="font-weight: 800">56</td><td>4</td><td>5</td>'+
                '</tr>'+
                '</table>'+
                '</div>'+
                '</div>';
            allcontents.append(newroll);
        }
    });
}

function AddTeamContent() {
    var allcontents=$(".all-contents").empty();
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/officeViewData?id="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            console.log(data);
            var newroll=
                '<div class="all-points">'+
                '<div>'+
                '<table>'+
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
                '</tr>'+
                '<tr class="single-tr">'+
                '<td><div class="up-grade"></div>'+
                '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">1</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/积分榜_上升.png" alt="" width="100%" height="100%"></div>'+
                '</td><td style="font-weight: 700">剑桥</td><td>23</td><td>11</td>'+
                '<td>4</td><td>5</td><td>6</td><td>3</td><td>6</td><td style="font-weight: 800">56</td><td>4</td><td>5</td>'+
                '</tr>'+
                '<tr class="single-tr Sperate-line">'+
                '<td ><div class="up-grade"></div>'+
                '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">1</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/积分榜_上升.png" alt="" width="100%" height="100%"></div>'+
                '</td ><td  style="font-weight: 700">剑桥</td><td>23</td><td>11</td>'+
                '<td>4</td><td>5</td><td>6</td><td>3</td><td>6</td><td style="font-weight: 800">56</td><td>4</td><td>5</td>'+
                '</tr>'+
                '</table>'+
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
    var allcontents=$(".all-schedule ul").empty();
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getSchedule?officeId="+match_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            console.log(data);
            var single=eval(data.rows);
            for(var i=0;i<5;i++){
                var rank=i+1;
                var newroll=
                    '<li value="">'+
                        '<div class="round">'+
                        '<p class="round-num">第'+rank+'轮</p>'+
                        '<img class="spreed" src="images/赛事_比赛详情_收起赛事栏_图标.png" alt="" width="100%" height="100%">'+
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
                                '<img class="team-aimg" src="images/赛事列表_参赛球队_标识.png" alt="" width="100%" height="100%" >'+
                                '</div>'+
                                '<div class="result">'+
                                '<span class="result-a background-grey93">10:10</span><br/>'+
                                '<span class="result-b ">已结束</span>'+
                                '</div>'+
                                '<div class="team-b">'+
                                '<img class="team-bimg" src="images/赛事列表_标识_EFA.png" alt="" width="100%" height="100%">'+
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
                         '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">'+rank+'</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/积分榜_上升.png" alt="" width="100%" height="100%"></div>'+
                         '</td ><td  style="font-weight: 700 overflow:hidden">'+single.team.name+'</td><td>'+total+'</td><td>'+single.won+'</td>'+
                         '<td>'+single.even+'</td><td>'+single.beaten+'</td><td>'+single.goal+'</td><td>'+single.lost+'</td><td>'+realball+'</td><td style="font-weight: 800">'+single.point+'</td><td>'+single.red+'</td><td>'+single.yellow+'</td>'+
                     '</tr>';
                }
                else{
                    newroll=
                        '<tr class="single-tr ">'+
                        '<td ><div class="up-grade"></div>'+
                        '<a style="float: left;margin-left: 2px;color: black;padding: 6px 0;" href="">'+rank+'</a> <div style="float: right;padding: 12px 0;"><img class="up-img" src="images/积分榜_上升.png" alt="" width="100%" height="100%"></div>'+
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
                            '<img style="float: left;margin-left: 10px;" class="first-shooter" src="images/赛事_比赛进程_首发_默认头像_图标.png" alt="" width="100%" height="100%">'+
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