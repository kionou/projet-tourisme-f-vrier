$(document).ready(function() {


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 100) {
        $(".navbar").addClass("bg-white");
    } else {
      $(".navbar").removeClass("bg-white");
    }
});
  
});