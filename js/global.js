/**
 * Created by 晴识明月 on 2016/11/30.
 */

//获取url中"?"符后的字串
function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//根据日期计算星期几
function GetWeekday(time_str) {
    var arys1= new Array();
    arys1=time_str.split('-');     //日期为输入日期，格式为 2013-3-10
    var ssdate=new Date(arys1[0],parseInt(arys1[1]-1),arys1[2]);
    var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weekArray[ssdate.getDay()];// 这个就是你想要的结果吧
    return  week; //就是你要的星期几
}

//弹出提示框
function ShowTip(Tip_Info) {
    var layer=document.createElement("div");
    layer.id="layer";
    var style=
        {

        }
    for(var i in style)
        layer.style[i]=style[i]
    layer.innerHTML=Tip_Info;
    if(document.getElementById("layer")==null)
    {
        document.body.appendChild(layer);
        //setTimeout("document.body.removeChild(layer)",2000)
    }

}