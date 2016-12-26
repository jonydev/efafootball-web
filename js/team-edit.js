/**
 * Created by 晴识明月 on 2016/12/26.
 */
var team_id;
$(document).ready(function (){
    var Request=new Object();
    Request=GetRequest();
    team_id=Request["team_id"];
    AddAllProfile();
});
$(document).on("click",".save-edit",function () {
    //发送保存修改的信息
    if(confirm("是否保存修改？")==true){
        alert("成功修改");
    }
});
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
            var team_img="images/default_team.png";
            if(obj.photo!=""){
                team_img=obj.photo;
            }
            var newroll=
                '<div class="join-container ">'+
                '<div class="join-team background-green ">'+
                '<span  class="join-teamTxt text-white">申请加入</span>'+
                '</div>'+
                '<div class="match-apply light-white save-edit">'+
                '<span  class="match-applyTxt text-green">保存修改</span>'+
                '</div>'+
                '</div>'+
                '<div class="team-img " style="position: relative;text-align: center">'+
                '<img src='+team_img+' alt="" style="width: 136px;height: 136px;" width="100%" height="100%">'+
                '<input type="file" id="loadfile" onchange="checkFile()" style="position: absolute;filter:alpha(opacity=0);opacity:0;width:170px;height:145px;top: 33px;left: 26%;" >'+
                '</div>'+
                '<div class="team-guide">'+
                '<div class="guide-title font3pt">球队概况</div>'+
                '<ul>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">球队名称</div></td>'+
                '<td width="70%"><div class="attr-txt "><input type="text" style="height: 30px;line-height: 30px;border: none;width: 100%;" placeholder="未填写" value='+obj.name+'></div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">简称  </div></td>'+
                '<td width="70%"><div class="attr-txt "><input type="text" style="height: 30px;line-height: 30px;border: none;width: 100%;" placeholder="未填写" value=""></div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item ">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">赞助商 </div></td>'+
                '<td width="70%"><div class="attr-txt "><input type="text" style="height: 30px;line-height: 30px;border: none;width: 100%;" placeholder="未填写" value=""></div></td>'+
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
                '</ul>'+
                '</div>'+
                '<div class="team-profile">'+
                '<div class="team-profile-title font3pt">球队简介</div>'+
                '<div class="team-profile-img hidden">'+
                '<img src="images/swiper2.jpg" alt="" width="100%" height="100%">'+
                '</div>'+
                '<div style="background-color: white"><div class="team-introduce font2pt">---</div></div>'+
                '</div>';
            allcontents.append(newroll);
        }
    });
}