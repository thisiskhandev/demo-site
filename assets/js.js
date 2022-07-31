$ === jQuery;
jQuery(document).ready(function () {
  jQuery("a#darkMode").click(function ($) {
    jQuery("body").toggleClass("dark");
  });
});
