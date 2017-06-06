$(document).ready(function() {
  $('.close-button').fadeOut('fast');
  $(window).scroll(function() {
      attachCloseToTop();
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

  if (/Mobi/i.test(navigator.userAgent) || /Anroid/i.test(navigator.userAgent)) {
    // mobile!
    $('.card span').css({"color": "hsla(340, 82%, 52%, 1)"})
  }
});

// attaches close button to the top when scrolling
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

//switch between blig list and blog post
$('.card').click(function() {
  // console.log($(this).attr('id'));
  $('.content').fadeOut("fast");

  $('#blog-post').fadeIn("fast", function() {
    setTimeout(function(){
      $('.close-button').fadeIn('slow');
      attachCloseToTop();
    }, 100);
  });
});

$('.close-button').click(function() {
  $('.close-button').fadeOut('fast');
  $('.content').fadeIn("fast");
  $('#blog-post').fadeOut("fast");
});
