/**
 * Created by 晴识明月 on 2016/12/26.
 */
var team_id;
var current_choose; //标记当前所设置的属性，0 表示设置性别 1表示设置位置
$(document).ready(function (){
    var Request=new Object();
    Request=GetRequest();
    team_id=Request["team_id"];
    AddAllProfile();
});
$(document).on("click",".save-edit",function () {
    //发送保存修改的信息
    var name=$("#team_name").val();
    var content=$(".team-introduce").val();
    var photo="";
    if(confirm("是否保存修改？")==true){
        var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/updateTeam?id="+team_id+"&name="+name+"&photo="+photo+"&content="+content;
        $.ajax({
            url:url,
            success:function (data) {
                var result=data.result;
                if(result=="success"){
                    $(".Tip span").text(data.message);
                    $(".Tip").removeClass("hidden");
                    setTimeout('$(".Tip").addClass("hidden")',1500);
                }
            }
        })
    }
});
$(document).on("click",".home-color",function () {
    choose_color();
    current_choose=0;
});
$(document).on("click",".rehome-color",function () {
    choose_color();
    current_choose=1;
})
$(".position-ul li").click(function () {
    $(".position-ul").find(".text-green").removeClass("text-green");
    $(this).addClass("text-green");
});
$(".sex-ul li").click(function () {
    $(".sex-ul").find(".text-green").removeClass("text-green");
    $(this).addClass("text-green");
});
$(".color-ul li").click(function () {
    $(".sex-ul").find(".text-green").removeClass("text-green");
    $(this).addClass("text-green");
});
$(".save-item").click(function () {
    var getcolor=$("#color").css("backgroundColor");
    if(current_choose==0){
        $(".home-color").css({"backgroundColor":getcolor});
        $(".choose-color").addClass("hidden");
    }else if(current_choose==1){
        $(".rehome-color").css({"backgroundColor":getcolor});
        $(".choose-color").addClass("hidden");
    }
});
$(".cancel-item").click(function () {
    $(".choose-color").addClass("hidden");
    current_choose=-1;
});
function checkFile(){
    var file = document.getElementById("loadfile").value;
    console.log(file);
    if(file){
        document.getElementById("profile-img").src=file;
    }
}

function choose_sex() {
    $(".top-div").removeClass("hidden");
    $(".sex-ul").removeClass("hidden");
    current_choose=0;
}

function choose_position() {
    $(".top-div").removeClass("hidden");
    $(".position-ul").removeClass("hidden");
    current_choose=1;
}
function choose_color() {
    $(".choose-color").removeClass("hidden");
}

function choose_city() {
    //to do
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
                '<td width="70%"><div class="attr-txt "><input type="text" style="height: 30px;line-height: 30px;border: none;width: 100%;" placeholder="未填写" id="team_name" value='+obj.name+' ></div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">简称  </div></td>'+
                '<td width="70%"><div class="attr-txt "><input type="text" style="height: 30px;line-height: 30px;border: none;width: 100%;" placeholder="未填写" id="short_name" value=""></div></td>'+
                '</tr>'+
                '</table>'+
                '</li>'+
                '<li class="each-item ">'+
                '<table width="100%">'+
                '<tr class="font2pt">'+
                '<td width="30%"><div class="attr-name">赞助商 </div></td>'+
                '<td width="70%"><div class="attr-txt "><input type="text" style="height: 30px;line-height: 30px;border: none;width: 100%;" placeholder="未填写" id="sponsor-name" value=""></div></td>'+
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
                '<div style="background-color: white"><textarea class="team-introduce font2pt">'+obj.content+'</textarea></div>'+
                '</div>';
            allcontents.append(newroll);
        }
    });
}