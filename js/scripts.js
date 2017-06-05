$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).width() < 1025) {
      attachCloseToTop();
    }
  });

  $( window ).resize(function() {
    if($(document).width() < 1025) {
      $('#blog-post').addClass('relative-position')
      attachCloseToTop();
    } else {
      $('.close-button').removeClass('close-button-absolute');
      $('.close-button').addClass('close-button-fixed');
      $('#blog-post').removeClass('relative-position')
    }
  });
  
});

// attaches close button to the top when scrolling
attachCloseToTop = function() {
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
};
