/**
 * Created by cnm on 2016/11/6.
 */

$(document).ready(function (){
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
    SetSwiper();
    SetContent();
});
function SetSwiper() {
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/bulletinData";
    $.ajax({
        url:url,
        success:function (data) {
            var myobject=eval(data);
            var swipercontent=$(".swiper-wrapper");
            swipercontent.empty();
            //增加首页滑动页面
            for (var i=0;i<myobject.length;i++){
                var singleobj=myobject[i];
                var content=
                    '<div class="swiper-slide" value='+singleobj.url+'>'+
                        '<img src='+singleobj.photo+' alt="" width="100%" height="100%">'+
                    '</div>';
                swipercontent.append(content);
            }
        }
    })
}
function SetContent() {
    debugger;
    //拉数据
    var url="http://120.76.206.174:8080/efaleague-web/appPath/appData/newsData?id=1";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                console.log(data);
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
                                '<div class="real-time">9:00 11-03</div>'+
                            '<div class="read_count">阅读 1559</div>'+
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
