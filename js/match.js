/**
 * Created by cnm on 2016/11/7.
 */
$(document).ready(function (){
    $('#search').bind('input propertychange', function() {searchTeambyName();});
    ShowAllMatchs();
});
$(document).on("click",".single-match",function () {
    var match_id=$(this).attr("value");
    window.location.href="http://120.76.206.174:8080/efafootball-web/match-detail.html?id="+match_id;
})
$(".search-div").click(function () {
    $(".search-top").addClass("hidden");
});
$(".introduce a").click(function () {
    $(".title-container").find(".text-green").removeClass("text-green").addClass("text-black");
    $(".title-container div").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green").removeClass("text-black");
    $(".introduce").find(".triangle-container").addClass("shift-triangle");
    //AddIntroduceContent();
});

function searchTeambyName() {
    //添加商品搜索处理
    alert("点击自动搜索商品");
}
function ShowAllMatchs() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/officeData ";
    $.ajax({
        url:url,
        success:function (data) {
            var matchs=eval(data);
            console.log(matchs);
            var match_list=$(".match-ul");
            match_list.empty();
            for (var i = 0; i < matchs.length; i++) {
                var singlematch = matchs[i];
                var name = singlematch.name;
                var match_id=singlematch.id;
                var team_num=singlematch.sort;
                var imgsrc=singlematch.photo;
                var round=singlematch.type;
                var newroll =
                    '<li class="single-match background-white" value='+match_id+'>'+
                        '<div>'+
                            '<div class="match-img">'+
                                '<img src='+imgsrc+' alt="" width="100%" height="100%">'+
                            '</div>'+
                            '<div class="match-detail">'+
                            '<div class="match-title">'+
                            '<div class="match-txt ">'+name+'</div>'+
                            '</div>'+
                            '<div class="match-info">'+
                            '<div class="city">'+
                            '<img class="city-img" src="images/match_city.png" alt="">'+
                            '<a class="city-txt font2pt" href="javascript:;">武汉</a>'+
                            '</div>'+
                            '<div class="round">'+
                            '<img class="round-img" src="images/round.png" alt="">'+
                            '<a  class="round-txt font2pt" href="javascript:;">第'+round+'轮</a>'+
                            '</div>'+
                            '<div class="team-num">'+
                            '<img class="team-numimg" src="images/match_team.png" alt="">'+
                            '<a class="team-numtxt font2pt" href="javascript:;">'+team_num+'</a>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '<div class="match-detail-img">'+
                                '<img src="images/goto_team.png" alt="" width="100%" height="100%">'+
                            '</div>'+
                        '</div>'+
                    '</li>';
                match_list.append(newroll);
            }
        }
    });
}