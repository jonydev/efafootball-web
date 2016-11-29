/**
 * Created by cnm on 2016/11/7.
 */
$(document).ready(function (){
    $('#search').bind('input propertychange', function() {searchTeambyName();});

});
$(".search-div").click(function () {
    $(".search-top").addClass("hidden");
});

function searchTeambyName() {
    //添加商品搜索处理
    alert("点击自动搜索商品");
}
function ShowAllMatchs() {
    var url=".....";
    $.ajax({
        url:url,
        success:function (data) {
            var obj=eval(data);
            var match_list=$(".match-ul");
            match_list.empty();
            for (var i = 0; i < rows.length; i++) {
                var goalrow = rows[i];
                var rank = i + 1;
                var name = goalrow.name;
                var teamname = goalrow.teamName;
                var goalnum = goalrow.num;
                var penalty = 0;
                var newroll =
                    '<li class="single-match background-white">'+
                        '<div>'+
                            '<div class="match-img">'+
                                '<img src="images/赛事列表_标识_EFA.png" alt="" width="100%" height="100%">'+
                            '</div>'+
                            '<div class="match-detail">'+
                            '<div class="match-title">'+
                            '<div class="match-txt ">第七届企业联盟足球赛</div>'+
                            '</div>'+
                            '<div class="match-info">'+
                            '<div class="city">'+
                            '<img class="city-img" src="images/赛事列表_城市_标识.png" alt="">'+
                            '<a class="city-txt font2pt" href="">武汉</a>'+
                            '</div>'+
                            '<div class="round">'+
                            '<img class="round-img" src="images/赛事列表_进程_将开始（报名结束）_标识.png" alt="">'+
                            '<a  class="round-txt font2pt" href="">第五轮</a>'+
                            '</div>'+
                            '<div class="team-num">'+
                            '<img class="team-numimg" src="images/赛事列表_参赛球队_标识.png" alt="">'+
                            '<a class="team-numtxt font2pt" href="">20</a>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                            '<div class="match-detail-img">'+
                                '<img src="images/内容_球队_前往.png" alt="" width="100%" height="100%">'+
                            '</div>'+
                        '</div>'+
                    '</li>'
                match_list.append(newroll);
            }
        }
    });
}