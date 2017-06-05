$(document).ready(function() {
  $(window).scroll(function() {
    attachCloseToTop();
  });
});


attachCloseToTop = function() {
  if($(document).width() < 1025) {
    if(!($('#blog-post').hasClass('hide'))) {
      var distanceFromTop = $(this).scrollTop();
      if (distanceFromTop >= $('.sidebar').height()) {
          $('.close-button').removeClass('close-button-absolute');
          $('.close-button').addClass('close-button-fixed');
      } else {
          $('.close-button').removeClass('close-button-fixed');
          $('.close-button').addClass('close-button-absolute');
      }
    }
  }
};
