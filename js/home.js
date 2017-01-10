/**
 * Created by cnm on 2016/11/6.
 */

$(document).ready(function (){
    SetSwiper();
    // SetContent();
    SetContentOld();
});
$(document).on("click",".swiper-slide",function () {
    window.location.href=$(this).attr("value");
});
$(document).on("click",".news_ul li",function () {
    window.location.href="http://120.76.123.140/index.php?s=/mob/weibo/weibodetail/id/"+$(this).attr("value");
});
$(".join-team").click(function () {
   android.JoinTeam();
});
$(".match-apply").click(function () {
    android.MatchSignUp();
});
function SetSwiper() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/bulletinData";
    $.ajax({
        url:url,
        success:function (data) {
            var myobject=eval(data);
            var swipercontent=$(".swiper-wrapper");
            swipercontent.empty();
            var content='';
            //增加首页滑动页面
            for (var i=0;i<myobject.length;i++){
                var singleobj=myobject[i];
                content+=
                    '<div class="swiper-slide" id="swiper" value='+singleobj.url+'>'+
                        '<img src='+singleobj.photo+' alt="" width="100%" height="100%">'+
                    '</div>';
            }
            swipercontent.append(content);
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: 2500,
                autoplayDisableOnInteraction: false
            });
        }
    })
}
function SetContent() {
    //拉数据
    var url="http://120.76.123.140/index.php?s=/mob/weibo/news";
    // var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/newsData?id=1";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = (data);
                var addcontent=$(".news_ul").empty();
                for (var i = 0; i < obj.length; i++) {
                    var single=obj[i];
                    var newroll =
                        '<li value='+single.id+'>'+
                            '<div class="single_new background-white">'+
                                '<div class="news_img">'+
                                '<img  class="img-attr" src='+single.pic+' alt="" width="100%" height="100%">'+
                                '</div>'+
                                '<div class="news_info">'+
                                '<div class="news_title text-space">'+single.profile+'</div>'+
                            '<div class="news_time">'+
                                '<div class="time_icon">'+
                                '<img src="images/notice_time.png" alt="">'+
                                '</div>'+
                                '<div class="real-time">'+single.date+'</div>'+
                            '<div class="read_count">阅读 '+single.view_count+'</div>'+
                            '</div>'+
                            '</div>'+
                            '</div>'+
                        '</li>'
                    addcontent.append(newroll);
                }
            }
        }
    )
}
function SetContentOld() {
    //拉数据
    // var url="http://120.76.123.140/index.php?s=/mob/weibo/news";
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/newsData?id=1";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = (data);
                var addcontent=$(".news_ul").empty();
                for (var i = 0; i < obj.length; i++) {
                    var single=obj[i];
                    var newroll =
                        '<li value='+single.id+'>'+
                        '<div class="single_new background-white">'+
                        '<div class="news_img">'+
                        '<img  class="img-attr" src='+single.photo+' alt="" width="100%" height="100%">'+
                        '</div>'+
                        '<div class="news_info">'+
                        '<div class="news_title text-space">'+single.title+'</div>'+
                        '<div class="news_time">'+
                        '<div class="time_icon">'+
                        '<img src="images/notice_time.png" alt="">'+
                        '</div>'+
                        '<div class="real-time">12:00</div>'+
                        '<div class="read_count">阅读 '+0+'</div>'+
                        '</div>'+
                        '</div>'+
                        '</div>'+
                        '</li>'
                    addcontent.append(newroll);
                }
            }
        }
    )
}
