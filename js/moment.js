/**
 * Created by 晴识明月 on 2017/3/2.
 */
$(document).ready(function (){
    AddMoment();
    //初始化emoji控件
    $('.emotion').qqFace({

        id : 'facebox',

        assign:'commenttext',

        path:'third-plugin/qqFace/arclist/' //表情存放的路径

    });
});
function AddMoment() {
    var new_content=replace_em('撒旦撒多多所大<img src="third-plugin/qqFace/arclist/6.gif" border="0"><img src="third-plugin/qqFace/arclist/28.gif" border="0">但是');
    $(".show-text").html(new_content);
    // var select_photo=["http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp1b7o152g1cbu1qnasl3e.jpg", "http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp83mt091uhq1hd0n3uf.jpg","http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp15vpokb19nnmd41hkjg.jpg"
    //     , "http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmpdo51bgu7lcqjk12u0h.jpg","http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmpek53i3190m6eu5tpi.jpg",
    //     "http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp1o321a94na819sk1inmj.jpg"];
    var select_photo=["http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp1b7o152g1cbu1qnasl3e.jpg", "http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp83mt091uhq1hd0n3uf.jpg"
        ,"http://obxgaesml.bkt.clouddn.com/o_1ba6jlvmp15vpokb19nnmd41hkjg.jpg"];
    InsertPhoto(select_photo);
}
function InsertPhoto(select_photo) {
    var old_conten=$(".img-box").empty();
    var newphoto='';
    var length=select_photo.length;
    if(length==1){
        newphoto+='<a  href="javascript:;" id='+i+'><img class="img-one" src='+select_photo[i]+' alt="" ></a>';
    }else if (length==2){
        newphoto+='<a  href="javascript:;" id='+i+'><img class="img-two" src='+select_photo[i]+' alt="" ></a>';
    }else if(length>2){
        for (var i=0;i<length;i++){
            newphoto+='<a  href="javascript:;" id='+i+'><img class="img-three" src='+select_photo[i]+' alt="" ></a>';
            if((i+1) % 3==0 ){
                newphoto+='</br>';
            };
        }
    }
    $(".img-box").html(newphoto);
}
$(document).on("click",".delete-comment",function () {
    var r=confirm("你确定发表评论吗？")
    if (r==true) {
        var comment=$("#commenttext").html();
        console.log(comment);
    }
});