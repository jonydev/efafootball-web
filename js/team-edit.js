/**
 * Created by 晴识明月 on 2016/12/26.
 */
var team_id,token;
var current_choose; //标记当前所设置的属性，0 表示设置性别 1表示设置位置
$(document).ready(function (){
    var Request=new Object();
    Request=GetRequest();
    team_id=Request["team_id"];

    AddAllProfile();
    //从服务器获取domain和token
    $.ajax({
        url:"http://120.76.206.174:8080/efaleague-web/appPath/appData/getImageByToken",
        success:function (data) {
            if(data.result=="success"){
                token=data.message;
                // domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
// uploader 为一个plupload对象，继承了所有plupload的方法，参考http://plupload.com/docs
//引入Plupload 、qiniu.js后
                var uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',    //上传模式,依次退化
                    browse_button: 'loadfile',       //上传选择的点选按钮，**必需**
                    //uptoken_url: '/token',            //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                    uptoken : token, //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                    // unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                    // save_key: true,   // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                    domain: 'http://obxgaesml.bkt.clouddn.com/',   //bucket 域名，下载资源时用到，**必需**
                    get_new_uptoken: false,  //设置上传文件的时候是否每次都重新获取新的token
                    container: 'loadfile-container',           //上传区域DOM ID，默认是browser_button的父元素，
                    max_file_size: '100mb',           //最大文件体积限制
                    flash_swf_url: 'js/plupload/Moxie.swf',  //引入flash,相对路径
                    max_retries: 3,                   //上传失败最大重试次数
                    dragdrop: true,                   //开启可拖曳上传
                    drop_element: 'loadfile-container',        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                    chunk_size: '4mb',                //分块上传时，每片的体积
                    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                    init: {
                        'FilesAdded': function(up, files) {
                            plupload.each(files, function(file) {
                                // 文件添加进队列后,处理相关的事情
                                plupload.each(files, function(file) {
                                });
                            });
                        },
                        'BeforeUpload': function(up, file) {
                            // 每个文件上传前,处理相关的事情
                        },
                        'UploadProgress': function(up, file) {
                            // 每个文件上传时,处理相关的事情
                        },
                        'FileUploaded': function(up, file, info) {
                            // 每个文件上传成功后,处理相关的事情
                            // 其中 info 是文件上传成功后，服务端返回的json，形式如
                            // {
                            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                            //    "key": "gogopher.jpg"
                            //  }
                            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                            var domain = up.getOption('domain');
                            var res = JSON.parse(info);
                            var sourceLink = domain + res.key;   //获取上传成功后的文件的Url
                            $("#team-img").attr("src",sourceLink);
                        },
                        'Error': function(up, err, errTip) {
                            //上传出错时,处理相关的事情
                        },
                        'UploadComplete': function() {
                            //队列文件处理完毕后,处理相关的事情
                        },
                        'Key': function(up, file) {
                            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                            // 该配置必须要在 unique_names: false , save_key: false 时才生效
                            var key = file.id+".jpg";
                            return key;
                            // do something with key here
                        }
                    }
                });
// domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
// uploader 为一个plupload对象，继承了所有plupload的方法，参考http://plupload.com/docs
            }
        }
    });
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