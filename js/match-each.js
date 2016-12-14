/**
 * Created by 晴识明月 on 2016/12/3.
 */
$(document).ready(function () {
    $(".real-schedule ").addClass("text-green").removeClass("text-black");
    $(".real-schedule").find(".triangle-container").addClass("shift-triangle");
});
$(".real-schedule").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".real-schedule").find(".triangle-container").addClass("shift-triangle");
    $(".tab-real-schedule").removeClass("hidden");
    $(".tab-start-first").addClass("hidden");
    $(".tab-statistic").addClass("hidden");
    //AddIntroduceContent();
});
$(".start-first").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".start-first").find(".triangle-container").addClass("shift-triangle");
    $(".tab-start-first").removeClass("hidden");
    $(".tab-real-schedule").addClass("hidden");
    $(".tab-statistic").addClass("hidden");
    //AddIntroduceContent();
});
$(".statistic").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".statistic").find(".triangle-container").addClass("shift-triangle");
    $(".tab-statistic").removeClass("hidden");
    $(".tab-real-schedule").addClass("hidden");
    $(".tab-start-first").addClass("hidden");
    //AddIntroduceContent();
});
$(".shape").click(function () {
    $(".match-info-tab").find(".text-green").removeClass("text-green");
    $(".match-info-tab").find(".triangle-container").removeClass("shift-triangle");
    $(this).addClass("text-green");
    $(".shape").find(".triangle-container").addClass("shift-triangle");
    //AddIntroduceContent();
});