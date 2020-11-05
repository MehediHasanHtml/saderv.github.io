
jQuery(document).ready(function(){


$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

  $('.main-slider .owl-carousel').owlCarousel({
    'items': 1,
    'autoplay': true,
    'loop': true,
    'dots': true,
    'autoplayTimeout':10000,
      'slideSpeed': 1000,
    'autoplaySpeed': 2500,
    'nav': true,
    'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    
    
    
  });   


  $('.testimonils-area .owl-carousel').owlCarousel({
    'items': 1,
    'autoplay': true,
    'loop': true,
    'dots': true,
    'nav': true,
    'pagination': true,
    'navText': ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    

    
  }); 
  

$(window).scroll(function(){
   if($(this).scrollTop() > 300){
    $('.scroll-Top').fadeIn();
   }else{
    $('.scroll-Top').fadeOut();
   }
   
   
  });
   
  $('.scroll-Top').click(function(){
    $('html,body').animate({scrollTop:0}, 1000);
});




  var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
    },
    scrollContainer: null,  
    resetAnimation: true,  
  }
);
wow.init();






});


var $root = $('html, body');
$('.nav a').click(function() {
    $root.animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});




