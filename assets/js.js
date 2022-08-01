$ === jQuery;
jQuery(document).ready(function () {
  jQuery("a#darkMode").click(function ($) {
    jQuery("body").toggleClass("dark");
    if (jQuery("body").hasClass("dark")) {
      jQuery("a#darkMode i")
        .removeClass("fas fa-adjust")
        .addClass("fas fa-sun");
    } else {
      jQuery("a#darkMode i")
        .removeClass("fas fa-sun")
        .addClass("fas fa-adjust");
    }
  });
  jQuery("a#modalBtn").click(function ($) {
    jQuery("#popup").css("display", "block");
  });
  jQuery("button#closeModalBtn").click(function ($) {
    jQuery("#popup").css("display", "none");
  });
  $(window).scroll(function ($) {
    if (scrollY > 90) {
      // alert("readch!");
      jQuery("header:not(#firstHeader)").css("z-index", "10");
    } else {
      jQuery("header:not(#firstHeader)").css("z-index", "auto");
    }
  });
});
jQuery(document).keyup(function(event) {
    if (event.which == 27) {
        jQuery("#popup").css("display", "none");
    }
});
