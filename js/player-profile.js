/**
 * Created by 晴识明月 on 2017/4/27.
 */
var player_id;
$(document).ready(function () {
    //向后台请求数据刷新缓存信息
    var Request=new Object();
    Request=GetRequest();
    player_id=Request["player_id"];
    SetContent(player_id);
})
//向后台请求数据刷新缓存信息
function SetContent(id) {
    // var loginId=mine_info["id"];
    //拉数据
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data["player_profile"][0]);
                var other_info=eval(data["other_info"]);
                console.log(data);
                var addcontent=$(".player_profile").empty();
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
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">进球数</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+other_info[0]+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '<li class="each-item">'+
                    '<table width="100%">'+
                    '<tr class="font15pt">'+
                    '<td width="30%"><div class="attr-name">比赛场数</div></td>'+
                    '<td width="70%"><div class="attr-txt ">'+other_info[1]+'</div></td>'+
                    '</tr>'+
                    '</table>'+
                    '</li>'+
                    '</li>'+
                    '</ul>'+
                    '</div>';
                addcontent.append(newroll);
            }
        }
    );
}
