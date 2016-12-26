/**
 * Created by cnm on 2016/11/12.
 */
var g_team;
$(document).ready(function (){
    SetContent();
});
$(".search-div").click(function () {
        $(".search-top").addClass("hidden");
});
$(document).on("click",".team-ul li",function () {
    var team_id=$(this).attr("id");
    window.location.href="http://120.76.206.174:8080/efafootball-web/team-detail.html?team_id="+team_id;
})
function searchTeambyName() {
    //添加商品搜索处理
    var search_content=$(".form-control").val();
    if(search_content==""){
        $(".search-top").removeClass("hidden");
    }else{
        $(".search-top").addClass("hidden");
    }
    var addcontent=$(".team-ul").empty();
    for (var i = 0; i < g_team.length; i++) {
            var single = g_team[i];
            if (single.name.indexOf(search_content) != -1) {
            var newroll =
                '<li class="single-team background-white" id=' + single.id + '>' +
                '<img class="team-Img" src="images/join_team.png" alt="" width="100%" height="100%">' +
                '<a class="team-name" href="javascript:;">' + single.name + '</a>' +
                '<img class="team-detail" src="images/goto_team.png" alt="" width="100%" height="100%">' +
                '<a class="team-num" href="javascript:;">' + single.num + '</a>' +
                '<img class="team-num-img" src="images/player_number.png" alt="" width="100%" height="100%">' +
                '</li>';
            addcontent.append(newroll);
        }
    }
}
function reset_icon() {
    if($(".form-control").val()==""){
        $(".search-top").removeClass("hidden");
    }
}
function SetContent() {
    //拉数据
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/allTeam?companyId=1";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data.rows);
                console.log(obj);
                g_team=eval(data.rows);
                var addcontent=$(".team-ul").empty();
                for (var i = 0; i < obj.length; i++) {
                    var single=obj[i];
                    var photo="images/default_team.png";
                    if(single.photo!="") photo=single.photo;
                    var newroll =
                        '<li class="single-team background-white" id='+single.id+'>'+
                            '<img class="team-Img" src= '+photo+' alt="" width="100%" height="100%">'+
                            '<a class="team-name" href="javascript:;">'+single.name+'</a>'+
                            '<img class="team-detail" src="images/goto_team.png" alt="" width="100%" height="100%">'+
                            '<a class="team-num" href="javascript:;">'+single.num+'</a>'+
                            '<img class="team-num-img" src="images/player_number.png" alt="" width="100%" height="100%">'+
                        '</li>';
                    addcontent.append(newroll);
                }
            }
        }
    );
}
