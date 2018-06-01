
/* ===================================
    Basic JavaScript Setting
====================================== */
(function($) {
    "use strict";

/* ===================================
    JavaScript FUNCTION
====================================== */

    //CenterAlign FUNCTION  
    function centerAlign() {
        //vertical aligning to center
        $.main = $('.hero-section'),
        $.mainContent = $('.hero-wrapper'),
        $.contentMargin = ($(window).height() - $.mainContent.height()) / 2;
        $.main.css({
            height: $(window).height() - 100 + "px" 
        });
        $.mainContent.css({
          "margin-top": $.contentMargin - 40 + "px"
        });
    }

    // function hideNav() {
    //     $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
    // }
    
    // function showNav() {
    //     $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
    // }

/* ===================================
    window.resize FUNCTION
====================================== */
$(window).resize(function(e) {
    centerAlign();
}); // End Window Resize

/* ===================================
    window.scroll FUNCTION
====================================== */
$(window).scroll(function(e) {

    var y = $(window).scrollTop();
    if (y > 0) {
        $(".scrollToTop").css({
            'display': 'block',
            'opacity': y / 800
        });
    } else {
        $(".scrollToTop").css({
            'display': 'block',
            'opacity': y / 800
        });
    }
}); // End Window Scroll

/* ===================================
    window.load FUNCTION
====================================== */
$(window).load(function(e) {
    /* LOADER */
    setTimeout(function() {
        $('.loader').addClass('isActive');
    }, 1000);
    setTimeout(function() {
        $('.loader').remove();
    }, 2000);
    setTimeout(function() {
        $('.hero-section').addClass('isActive');
    }, 1100);
  

    centerAlign();
}); // End Window load



/* ===================================
    document.ready FUNCTION
====================================== */
$(document).ready(function(e) {
    centerAlign();
    // $('a[href*="#"]:not([href="#"])').click(function() {
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000);
    //                 return false;
    //             }
    //         }
    // });


}); // End document ready


/*$(document).ready(function(){
      $(".changer_st").click(function () {
        $(this).addClass("changer_st-o");
        $(".win_btn").removeClass("changer_st");
        $(".c-ifrm").addClass("active");
      });
});

$(document).ready(function(){
      $(".changer_st-o").click(function () {
        //$(this).addClass("changer_st");
        //$(".win_btn").removeClass("changer_st-o");
        $(".c-ifrm").removeClass("active");
      });
});
$('.changer_st').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     $(".c-ifrm").addClass("active");
  } else {
     $(".c-ifrm").removeClass("active");
  }
  $(this).data("clicks", !clicks);
});

$('.changer_st').click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     $(".c-ifrm").addClass("active");
  } else {
     $(".c-ifrm").removeClass("active");
  }
  $(this).data("clicks", !clicks);
});
*/


var action = 1;

$(".changer_st").on("click", viewSomething);

function viewSomething() {
    if ( action == 1 ) {
        $(".c-ifrm").addClass("active");
        $(".theme-tab").addClass("theme_st_js");
        action = 2;
    } else {
        $(".c-ifrm").removeClass("active");
        $(".theme-tab").removeClass("theme_st_js");
        action = 1;
    }
}



$(document).ready(function(){
      $(".st_list").click(function () {
          $(".st_list").removeClass("active");
          $(this).addClass("active");
          var checked_value_item_service = $(this).attr('value');
          var checked_Id_info_item_service = '.'+''+checked_value_item_service+'';
          $('.st-tm').removeClass('active');
          $(checked_Id_info_item_service).addClass('active');
      });
});


$("#selectBox").change(function(){

    var checked_ve = '.' + $(this).val();
    $('.st-tm').removeClass('active');
    $(checked_ve).addClass('active');
    //alert('Selected value: ' + $(this).val());
});

var ElementQueries = require('css-element-queries/src/ElementQueries');

// attaches to DOMLoadContent and does anything for you
ElementQueries.listen();

// or if you want to trigger it yourself:
// 'init' parses all available CSS and attach ResizeSensor to those elements which
// have rules attached (make sure this is called after 'load' event, because
// CSS files are not ready when domReady is fired.
ElementQueries.init();


})(jQuery); // End function
