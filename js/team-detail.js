/**
 * Created by 晴识明月 on 2016/12/16.
 */
var team_id,login_id,match_id;
$(document).ready(function (){
    var Request=new Object();
    Request=GetRequest();
    team_id=Request["team_id"];
    AddAllProfile();
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
    AddMemberContent();
});
$(".schedule a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".schedule").find(".triangle-container").addClass("shift-triangle");
    $(".all-match").removeClass("hidden");
    $(".all-profile").addClass("hidden");
    $(".all-player").addClass("hidden");
    AddMatchContent();
});
$(document).on("click",".edit-team",function () {
    if(!CheckLeader()==true) return;
    window.location.href="http://120.76.206.174:8080/efafootball-web/team-edit.html?team_id="+team_id;
});
$(document).on("click",".teammatch_ul li",function () {
    var game_id=$(this).attr("value");
    window.location.href="http://120.76.206.174:8080/efafootball-web/match-each.html?match_id="+match_id+"&game_id="+game_id+"&flag=1";
});
$(document).on("click",".upgoing-game li",function () {
    var game_id=$(this).attr("value");
    window.location.href="http://120.76.206.174:8080/efafootball-web/match-each.html?match_id="+match_id+"&game_id="+game_id+"&flag=0";
});
$(document).on("click","#team-notify",function () {
    if(!CheckLeader()==true) return;
    window.location.href="http://localhost:63342/efafootball-web/team-notify.html";
});
$(document).on("click",".join-team",function () {
    //根据localStorage缓存看是否登录
    var have_logined=localStorage.getItem("have_logined");
    if(have_logined==1){
        login_id=localStorage.getItem("loginId");
        var mine_info=localStorage.getItem("mine_info");
        if(mine_info.team!=""){
            TIP_ERROR("你已经加入了球队，不能重复加入！")
            return;
        }
        var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/joinTeam ?teamId="+team_id+"&loginId="+login_id;
        debugger;
        $.ajax({
            url:url,
            success:function (data) {
                console.log(data);
                var result=data.result;
                if(result=="fail"){
                    $(".Tip").removeClass("hidden");
                    $(".Tip span").text(data.message);
                    setTimeout('$(".Tip").addClass("hidden")',1500);
                }
            }
        })
    }else{
        $(".Tip").removeClass("hidden");
        setTimeout('$(".Tip").addClass("hidden")',1500);
    }
});
function checkFile(){
    var file = document.getElementById("loadfile").value;
    console.log(file);
    if(file){
        document.getElementById("profile-img").src=file;
    }
}
function AddAllProfile() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/viewTeam?teamId="+team_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            var allcontents=$(".all-profile").empty();
            console.log(data.rows[0]);
            var obj=eval(data.rows[0]);
            if(obj.office!=undefined) match_id=obj.office.id;
            var team_img="images/default_team.png" ;
            if(obj.photo!="") team_img=obj.photo;
            var newroll=
                '<div class="join-container ">'+
                '<div class="join-team background-green ">'+
                '<span  class="join-teamTxt text-white">申请加入</span>'+
                '</div>'+
                '<div class="match-apply light-white edit-team">'+
                '<span  class="match-applyTxt text-green">编辑球队</span>'+
                '</div>'+
                '</div>'+
                '<div class="team-img">'+
                '<img  src= '+team_img+' alt="" width="100%" height="100%">'+
                '</div>'+
                '<div class="team-guide">'+
                '<div class="guide-title font3pt">球队概况</div>'+
                '<ul>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">球队全称</div></td>'+
                '<td width="70%"><div class="attr-txt ">'+obj.name+'</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">简称  </div></td>'+
                '<td width="70%"><div class="attr-txt ">---</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item ">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">赞助商 </div></td>'+
                '<td width="70%"><div class="attr-txt ">---</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="cloth-name">秋衣色彩</div></td>'+
                '<td width="70%"><div class="cloth-txt "> <span class="home">主场</span> <div class="home-color" style="width: 23px;height: 23px;background: red;-moz-border-radius: 11px;-webkit-border-radius: 11px;border-radius: 11px;"></div> </div>'+
                '<span class="rehome">客场</span> <div class="rehome-color" style="width: 23px;height: 23px;background: black;-moz-border-radius: 11px;-webkit-border-radius: 11px;border-radius: 11px;"></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">球员数量</div></td>'+
                '<td width="70%"><div class="attr-txt ">'+obj.num+'</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item" id="team-notify">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">球队消息</div></td>'+
                '<td width="70%"><div class="attr-txt "><img src="images/goto_player.png" alt="" class="goto-img" width="100%" height="100%"></div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                '<div class="team-profile">'+
                '<div class="team-profile-title font3pt">球队简介</div>'+
                '<div class="team-profile-img hidden">'+
                '<img src="images/swiper2.jpg" alt="" width="100%" height="100%">'+
                '</div>'+
                '<div style="background-color: white"><div class="team-introduce font2pt">'+obj.content+'</div></div>'+
            '</div>';
            allcontents.append(newroll);
            $(".home-color").css("backgroundColor",obj.upper);
            $(".rehome-color").css("backgroundColor",obj.lower);
        }
    });
}
function AddMatchContent() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/getScheduleByFlag?officeId="+match_id+"&team_id="+team_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            var allcontents=$(".teammatch_ul").empty();
            var upgoingcontent=$(".upgoing-game").empty();
            console.log(data);
            var obj=eval(data.rows);
            for (var i=obj.length-1;i>=0;i--){
                var single=obj[i];
                var awayTeamPhoto="images/default_team.png";
                var homeTeamPhoto="images/default_team.png";
                if(single.awayTeamPhoto!="") awayTeamPhoto=single.awayTeamPhoto;
                if(single.homeTeamPhoto!="") homeTeamPhoto=single.homeTeamPhoto;
                var weekday=GetWeekday(single.datetime);
                if(single.flag==0){
                    var newroll=
                    '<div class="upgoing-game-title">下场比赛 </div>'+
                    '<div class="upgoing-game-title">第'+single.turn+'轮 '+single.datetime+' '+weekday+'</div>'+
                    '<div>'+
                    '<ul>'+
                    '<li value='+single.id+'>'+
                    '<div class="team-results">'+
                        '<div class="team-a">'+
                        '<a class="team-atxt text-black" href="javascript:;">'+single.homeTeamName+'</a>'+
                        '<img class="team-aimg" src='+homeTeamPhoto+'  alt="" width="100%" height="100%">'+
                        '</div>'+
                        '<div class="result">'+
                        '<span class="result-a">'+single.time.substr(0,5)+'</span>'+
                    '</div>'+
                    '<div class="team-b">'+
                        '<img class="team-bimg" src='+awayTeamPhoto+' alt="" width="100%" height="100%">'+
                        '<a class="team-btxt text-black" href="javascript:;">'+single.awayTeamName+'</a>'+
                        '</div>'+
                        '</div>'+
                        '</li>'+
                        '</ul>'+
                        '</div>';
                    upgoingcontent.append(newroll);
                }
                else{
                    var newroll=
                        '<li class="" value='+single.id+'>'+
                        '<div class="history-game">'+
                        '<div class="history-game-title">第'+single.turn+'轮 '+single.datetime+' '+weekday+'</div>'+
                        '<div>'+
                        '<ul>'+
                        '<li>'+
                        '<div class="team-results">'+
                        '<div class="team-a">'+
                        '<a class="team-atxt text-black" href="javascript:;">'+single.homeTeamName+'</a>'+
                        '<img class="team-aimg" src='+homeTeamPhoto+' width="100%" height="100%">'+
                        '</div>'+
                        '<div class="result">'+
                        '<span class="result-b">'+single.homescore+':'+single.awayscore+'</span>'+
                        '</div>'+
                        '<div class="team-b">'+
                        '<img class="team-bimg" src='+awayTeamPhoto+' width="100%" height="100%">'+
                        '<a class="team-btxt text-black" href="javascript:;">'+single.awayTeamName+'</a>'+
                        '</div>'+
                        '</div>'+
                        '</li>'+
                        '</ul>'+
                        '</div>'+
                        '</div>'+
                        '</li>';
                    allcontents.append(newroll);
                }
            }
        }
    });
}
function AddMemberContent() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/memberList?teamId="+team_id;
    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        success:function (data) {
            var leadercontent=$(".leader-ul").empty();
            var captaincontent=$(".captain-ul").empty();
            var goalkeepercontent=$(".goalkeeper-ul").empty();
            var guardcontent=$(".guard-ul").empty();
            var midcourtcontent=$(".midcourt-ul").empty();
            var forwardcontent=$(".forward-ul").empty();
            console.log(data);
            var obj=eval(data);
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
                        '<li class="shooter-info">'+
                        '<div class="shooter-num">'+
                        '<a href="javascript:;" style="color: black" >'+player.number+'</a>'+
                        '</div>'+
                        '<div class="shooter-head">'+
                        '<img src='+photo+'  alt="" width="100%" height="100%">'+
                        '</div>'+
                        '<div class="shooter-other">'+
                        '<div class="name-goto"><a href="javascript:;" style="color: black" class="shooter-name">'+player.name+'</a> <img src="images/goto_player.png" class="goto_player" alt="" width="100%" height="100%"></div>'+
                        '<div class="shooter-score"><span>国籍：</span>中国<span>&nbsp;&nbsp;&nbsp;&nbsp;年龄：</span>'+player.age+' <span>&nbsp;&nbsp;&nbsp;&nbsp;位置：</span>'+player.position+'</div>'+
                        '</div>'+
                        '</li>';
                }
                if(key=="GK"){
                    goalkeepercontent.append(newroll);
                }else if(key=="CB"){
                    guardcontent.append(newroll);
                }else if(key=="CM"){
                    midcourtcontent.append(newroll);
                }else if(key=="CF"){
                    forwardcontent.append(newroll);
                }
            }
        }
    });
}
function CheckLeader() {
    //根据localStorage缓存看是否登录
    var have_logined=localStorage.getItem("have_logined");
    if(have_logined==1){
        login_id=localStorage.getItem("loginId");
        var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/checkLeader?teamId="+team_id+"&loginId="+login_id;
        $.ajax({
            url:url,
            success:function (data) {
                var result=data.result;
                if(result=="fail"){
                    $(".Tip").removeClass("hidden");
                    $(".Tip span").text(data.message);
                    setTimeout('$(".Tip").addClass("hidden")',1500);
                    return false;
                }else if(result=="success"){
                    return true;
                }
            }
        });
    }else{
        $(".Tip").removeClass("hidden");
        setTimeout('$(".Tip").addClass("hidden")',1500);
        return false;
    }
}
function TIP_ERROR(error_message) {
    $(".Tip").removeClass("hidden");
    $(".Tip span").html(error_message);
    setTimeout('$(".Tip").addClass("hidden")',1500);
    return;
}