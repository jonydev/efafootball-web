/**
 * Created by cnm on 2016/11/12.
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