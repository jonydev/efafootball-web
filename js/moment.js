/**
 * Created by 晴识明月 on 2017/3/2.
 */
var login_id,mine_info;
var current_moment_id;
var current_moment;
$(document).ready(function (){
    //根据localStorage缓存看是否登录
    var have_logined=localStorage.getItem("have_logined");
    if(have_logined==1){
        mine_info=JSON.parse(localStorage.getItem("mine_info"));
        loginId=localStorage.getItem("loginId");
    }else{
        TIP_ERROR("未登录，不能评论！");
    }
    SetContent_new();
    //初始化emoji控件
    $('.emotion').qqFace({

        id : 'facebox',

        assign:'commenttext',

        path:'third-plugin/qqFace/arclist/' //表情存放的路径

    });
});
$(document).on("click",".moment-ul .comment-div",function () {
    var commenttext=$(this).closest("li").find(".comment-text").attr("id");
    var X = $(this).offset().top+38; //当前点击控件的位置 动态设置modal的位置
    current_moment_id=$(this).closest("li").attr("id");
    current_moment=$(this).closest("li");
    $("#myModal").css("top",X);
});
$(document).on("click",".comment-confirm",function () {
    var r=confirm("你确定发表评论吗？")
    if (r==true) {
        var content=$("#commenttext").html();
        var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/Moment/comment?user_id="+loginId+"&content="+content+"&moment_id="+current_moment_id;
        $.ajax({
            url:url,
            success:function (data) {
                if(data.result=="success"){
                    var neeroll=
                        '<li>'+
                        '<div class=" font12pt"><a href="javascript:;">'+mine_info.name+'</a>:'+content+'</div>'+
                        '</li>';
                    current_moment.find(".comment-ul").append(neeroll);
                    current_moment.find("#comment-num").text(eval(current_moment.find("#comment-num").text())+1); //评论数量加1
                }else TIP_ERROR("评论失败！");

            }
        })
    }
    $("#myModal").modal("hide");
});
$(document).on("click","#praise",function () {
        var moment_id=$(this).closest("li").attr("id");
        var mythis=$(this);
        var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/Moment/praise?user_id="+loginId+"&moment_id="+moment_id;
        $.ajax({
            url:url,
            success:function (data) {
                if(data.result=="praise success"){ //点赞成功
                    // mythis.find("i").removeClass("icon-praise").addClass("icon-comment");
                    mythis.find("#praise-num").text(eval(mythis.find("#praise-num").text())+1);
                    mythis.html(mythis.html().replace("赞","取消赞"));

                }else if(data.result=="cancel success"){//取消点赞成功
                    // mythis.find("i").css("background-image","../images/icon_praise.png");
                    mythis.find("#praise-num").text(eval(mythis.find("#praise-num").text())-1);
                    mythis.html(mythis.html().replace("取消赞","赞"));
                }else
                    TIP_ERROR("点赞失败！");

            }
        })
});
function SetContent_new() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/Moment/getallmoment";
    var allcontent=$(".moment-ul").empty();
    $.ajax({
        url:url,
        success:function (data) {
            var all_moment=eval(data["moment"]);
            var all_comment=eval(data["comment"]);
            for (var i=0;i<all_moment.length;i++){
                var single=all_moment[i];
                var head_photo="images/default_head.png";
                if(single.user.photo!="") head_photo=single.user.photo;
                var newroll=
                    '<li class="each-comment" id='+single.id+'>'+
                    '<div class="co-head">'+
                    '<div class="img-div">'+
                    '<img src='+head_photo+' alt="" class="head-img">'+
                    '</div>'+
                    '<div class="info-div">'+
                    '<div class="name-div font14pt"><a href="javascript:;">'+single.user.name+'</a></div>'+
                    '<div class="time-div font12pt"><span>'+single.date+'</span></div>'+
                    '</div>'+
                    '</div>'+
                    '<div>'+
                    '<div class="show-text">'+single.content+'</div>'+
                    '<div class="img-box">'+single.photo+'</div>'+
                    '</div>'+
                    '<div class="comment-list">'+
                    '<ul  class="comment-ul">';
                if(all_comment[i].length==0){
                    newroll+=
                        '<li>'+
                        '<div class=" font12pt">暂时还没有任何评论，快去评论吧！</div>'+
                        '</li>';
                }else {
                    for(var j=0;j<all_comment[i].length;j++){
                        var single_comment=all_comment[i][j];
                        newroll+=
                            '<li>'+
                            '<div class=" font12pt"><a href="javascript:;">'+single_comment.user.name+'</a>:'+single_comment.content+'</div>'+
                            '</li>';
                    }
                }
                newroll+=
                    '</ul>'+
                    '</div>'+
                    '<div>'+
                    '<div class="f-detail font12pt">'+
                    '<a href="javascript:;" class="comment-div" data-toggle="modal" data-target="#myModal"><i class="icon-comment"></i>评论（<span id="comment-num">'+single.commentNum+'</span>）</a>';
                if(single.praiseList.indexOf(loginId)==-1){
                     newroll+=
                         '<a href="javascript:;" class="praise-div" id="praise"><i class="icon-praise"></i>赞（<span id="praise-num">'+single.praiseNum+'</span>）</a>'+
                         '</div>'+
                         '</div>'+
                         '</li>';
                 }else{
                     newroll+=
                         '<a href="javascript:;" class="praise-div" id="praise"><i class="icon-praise"></i>取消赞（<span id="praise-num">'+single.praiseNum+'</span>）</a>'+
                         '</div>'+
                         '</div>'+
                         '</li>';
                 }

                allcontent.append(newroll);
            }
        }
    })
}
