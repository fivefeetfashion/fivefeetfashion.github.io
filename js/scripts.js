
$(document).ready(function() {

  //setup close-button;
  $('.close-button').fadeOut('fast');

  //change position of close-button on scroll if needed
  $(window).scroll(function() {
      attachCloseToTop();
  });

  //change position of close-button if tablet mode
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

  //if mobile, set "continue reading" to high alpha color;
  if (/Mobi/i.test(navigator.userAgent) || /Anroid/i.test(navigator.userAgent)) {
    // mobile!
    $('.card span').css({"color": "hsla(340, 82%, 52%, 1)"});
    // $('.follow').css({"padding-left": "5vw"});
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

//switch between blog list and blog post
$('.card').click(function() {
  // console.log($(this).attr('id'));
  showBlogPost();
  setPostHtml(post);
  $('.fb-comments').fadeIn("fast");
});
$('.close-button').click(function() {
  hideBlogPost();
});

//helpers
function showBlogPost() {
  $('.content').fadeOut("fast");

  $('#blog-post').fadeIn("fast", function() {
    setTimeout(function(){
      $('.close-button').fadeIn('slow');
      attachCloseToTop();
    }, 100);
  });
};
function hideBlogPost() {
  $('.close-button').fadeOut('fast');
  $('.content').fadeIn("fast");
  $('#blog-post').fadeOut("fast");
  $('.post-title h1').text("");
  $('.post p').html("");
  $('.fb-comments').fadeOut("fast");
};

$(document).on('click', '#about', aboutPage);
$(document).on('click', '#home', hideBlogPost);
$(document).on('click', '.logo', hideBlogPost);

function aboutPage() {
  setPostHtml(about);
};

function setPostHtml(object) {
  var string = "";
  var arr = object.data;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].type === "text") {
      string += "<p>" + arr[i].text; + "</p>";
    } else if(arr[i].type === "img") {
      string+= "<img src='" + arr[i].url + "' class='img-responsive v-img'/>";
    } else if(arr[i].type === "h3") {
      string += "<h3>" + arr[i].text + "</h3>";
    } else if(arr[i].type === "h4") {
      string += "<h4>" + arr[i].text + "</h4>";
    }
  }

  showBlogPost();
  $('.post-title h1').text(object.title);
  $('.post p').html(string);
};
