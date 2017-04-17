/**
 * Created by 晴识明月 on 2016/12/20.
 */
$(document).ready(function (){
    $('#search').bind('input propertychange', function() {searchTeambyName();});
    //根据localStorage缓存看是否登录
    var have_logined=localStorage.getItem("have_logined");
    if(have_logined==1){
        var mine_info=localStorage.getItem("mine_info");
        var loginId=localStorage.getItem("loginId");
        console.log(mine_info);
        SetContent(loginId);
    }else{
        window.location.href="http://120.76.206.174:8080/efafootball-web/mine-login.html";
    }
    $(document).on("click",".edit_info",function () {
        alert("this is test!!!");
        window.location.href="http://120.76.206.174:8080/efafootball-web/mine-edit.html";
     });

});
$(".login").click(function () {
    $(this).addClass("background-green ").removeClass("light-white");
    $(".login").addClass("text-white").removeClass("text-green");
    $(".sign-apply").addClass("light-white").removeClass("background-green");
    $(".login-Txt").addClass("text-green").removeClass("text-white");
    $(".edit_profile").removeClass("hidden");
    $(".sign_up").addClass("hidden");
});
$(".sign-apply").click(function () {
    $(this).addClass("background-green ").removeClass("light-white");
    $("sign-Txt").addClass("text-white").removeClass("text-green");
    $(".login").addClass("light-white").removeClass("background-green");
    $(".login-Txt").addClass("text-green").removeClass("text-white");
    $(".edit_profile").addClass("hidden");
    $(".sign_up").removeClass("hidden");
});
$(document).on("click",".logout",function () {
    localStorage.clear();
    window.location.href="http://120.76.206.174:8080/efafootball-web/mine-login.html";
});
// $(document).on("click",".edit_info",function () {
//     alert("this is test!!!");
//     window.location.href="http://120.76.206.174:8080/efafootball-web/mine-edit.html";
// });
//向后台请求数据刷新缓存信息
function SetContent(loginId) {
    // var loginId=mine_info["id"];
    //拉数据
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/viewMember?loginId="+loginId;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data.rows[0]);
                localStorage.setItem("mine_info",JSON.stringify(data.rows[0]));
                var addcontent=$(".edit_profile").empty();
                var photo="images/default_head.png";
                var team_name="暂无球队";
                if(obj.team.id!="") team_name=obj.team.name;
                if(obj.photo!="") photo=obj.photo;
                var newroll =
                '<div class="player-img"> <img src='+photo+' alt="" class="player-head" width="100%" height="100%"> </div>'+
                    '<div class="team-guide">'+
                    '<div class="team-guide-title font15pt">所属球队</div>'+
                    '<ul>'+
                    '<li class="team-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name own-team-img"><img src="images/default_team.png"  alt="" width="100%" height="100%"></div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+team_name+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</ul>'+
                    '</div>'+
                    '<div class="person-guide">'+
                    '<div class="person-title font15pt">个人</div>'+
                    '<ul>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">姓名</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.name+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">身份证</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.cards+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">年龄</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.age+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">球衣号码</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.number+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">性别</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.sex+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">身高</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.height+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">体重</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.weight+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item ">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">场上位置 </div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.position+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">地区</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.city+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">手机号</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+obj.telephone+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                '<li class="each-item edit_info">'+
                '<table width="100%">'+
                '<tr class="font15pt">'+
                '<td width="100%"><div class="" style="text-align: center;cursor:pointer">修改信息</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '</ul>'+
                '</div>'+
                    '<div class="person-guide">'+
                    '<div class="person-title font15pt">关于我们</div>'+
                    '<ul>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">意见反馈</div></td>'+
                    '<td width="70%"><div class="attr-txt "><img src="images/goto_player.png" alt="" class="goto-img" width="100%" height="100%"></div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">联系我们</div></td>'+
                    '<td width="70%"><div class="attr-txt "><img src="images/goto_player.png" alt="" class="goto-img" width="100%" height="100%"></div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">版本信息</div></td>'+
                    '<td width="70%"><div class="attr-txt ">V1.1</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item ">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">清除缓存 </div></td>'+
                    '<td width="70%"><div class="attr-txt ">5MB</div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item logout">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="100%"><div class="" style="text-align: center">退出登录</div></td>'+
                    '</tr>'+
                    '</table>'+
                '</li>'+
                '</ul>'+
                '</div>';
                addcontent.append(newroll);
            }
        }
    );
}
//根据缓存刷新页面
function newSetContent(mine_info) {
    //拉数据
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/viewMember?loginId=02ec4fdfcdbc448abb6a5067141b3950";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                console.log(obj);
                var addcontent=$(".edit_profile").empty();
                var photo="images/default_head.png";
                // if(obj.photo!="") photo=obj.photo;
                var newroll =
                    '<div class="player-img"> <img src='+photo+' alt="" class="player-head" width="100%" height="100%"> </div>'+
                    '<div class="team-guide">'+
                    '<div class="team-guide-title font15pt">所属球队</div>'+
                    '<ul>'+
                    '<li class="team-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name own-team-img"><img src="images/default_team.png"  alt="" width="100%" height="100%"></div></td>'+
                    '<td width="70%"><div class="attr-txt ">红郡足球俱乐部</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</ul>'+
                    '</div>'+
                    '<div class="person-guide">'+
                    '<div class="person-title font15pt">个人</div>'+
                    '<ul>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">姓名</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+name+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">年龄</div></td>'+
                    '<td width="70%"><div class="attr-txt ">32</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">性别</div></td>'+
                    '<td width="70%"><div class="attr-txt ">男</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item ">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">场上位置 </div></td>'+
                    '<td width="70%"><div class="attr-txt ">MC</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">地区</div></td>'+
                    '<td width="70%"><div class="attr-txt ">湖北 武汉</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">修改密码</div></td>'+
                    '<td width="70%"><div class="attr-txt "><img src="images/goto_player.png" alt="" class="goto-img" width="100%" height="100%"></div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</ul>'+
                    '</div>'+
                    '<div class="person-guide">'+
                    '<div class="person-title font15pt">关于我们</div>'+
                    '<ul>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">意见反馈</div></td>'+
                    '<td width="70%"><div class="attr-txt "><img src="images/goto_player.png" alt="" class="goto-img" width="100%" height="100%"></div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">联系我们</div></td>'+
                    '<td width="70%"><div class="attr-txt "><img src="images/goto_player.png" alt="" class="goto-img" width="100%" height="100%"></div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">版本信息</div></td>'+
                    '<td width="70%"><div class="attr-txt ">V1.1</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item ">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">清除缓存 </div></td>'+
                    '<td width="70%"><div class="attr-txt ">500MB</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</ul>'+
                    '</div>';
                addcontent.append(newroll);
            }
        }
    );
}