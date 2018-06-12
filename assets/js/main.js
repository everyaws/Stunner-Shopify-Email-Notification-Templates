
(function($) {
    "use strict";



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



})(jQuery);
