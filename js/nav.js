$(function () {
  let nav_end_scroll = Math.round($("nav").offset().top + $("nav").outerHeight());
  $(window).on("scroll", function () {
    if (Math.round($(window).scrollTop()) >= nav_end_scroll) {
      $("nav").addClass("shadow-sm");
    }
    if (Math.round($(window).scrollTop()) <= nav_end_scroll) {
      $("nav").removeClass("shadow-sm");
    }
  });
});
