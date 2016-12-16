/**
 * Created by cnm on 2016/11/12.
 */
$(document).ready(function (){
    $('#search').bind('input propertychange', function() {searchTeambyName();});

});
$(".search-div").click(function () {
        $(".search-top").addClass("hidden");
});
$(document).on("click",".team-ul li",function () {
    var team_id=$(this).attr("id");
    window.location.href="http://120.76.206.174:8080/efafootball-web/team-detail.html?id="+team_id;
})
function searchTeambyName() {
    //添加商品搜索处理
    alert("点击自动搜索商品");
}