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
    SetContent();
});

function SetContent() {
    //拉数据
    var url="http:.....";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var addcontent=$(".swiper-container");
                addcontent.empty();
                //增加首页滑动页面
                var swiper_content=
                    '<div class="swiper-slide">'+
                    '<img src='+image1+ 'alt="" width="100%" height="100%">'+
                    '</div>'+
                    '<div class="swiper-slide">'+
                    '<img src='+image2+'alt="" width="100%" height="100%">'+
                    '</div>'+
                    '<div class="swiper-slide">'+
                    '<img src='+image3+'alt="" width="100%" height="100%">'+
                    '</div>';
                addcontent.append(swiper_content);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var score = rows[i];
                    var rank = i + 1;
                    var name = score.team.name;
                    var point = score.point;
                    var match = score.won + "/" + score.even + "/" + score.beaten;
                    var goal = score.goal;
                    var lost = score.lost
                    var red = score.red;
                    var yellow = score.yellow;
                    var plus = score.goal - score.lost;
                    var newroll =
                        "<tr>" +
                        "<td class='c left'>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td class='c'>" + point + "</td>" +
                        "<td class='c'>" + match + "</td>" +
                        "<td class='c'>" + goal + '/' + lost + "</td>" +
                        "<td class='c'>" +
                        "<span style='color: #ff0000;'>" + red +"</span>" +
                        "<span>/</span>" +
                        "<span style='color: #ffaa00'>" + yellow + "</span>" +
                        "</td>" +
                        "<td class='c right'>" + plus + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}
