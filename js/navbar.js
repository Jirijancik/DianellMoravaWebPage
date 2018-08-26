/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 600 ) {
            
            $('.navbar').css ({
              
                'background-color': 'rgba(219,56,68,0)'
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(219,56,68,0.0)',
                'height': '120px',
                'margin-top': '3.75rem'             
            });
            
            $('.navbar-item-text').css({
               'font-size': '30px',
                'padding-top': '0px'
            });
            
            $('.navbar-brand').css({
               'font-size': '40px'
                
            });
            
            $('.navbar-brand-p').css({
               'font-size': '30px'
                
            });              
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(219,56,68,0.85)',
                'height': '100px',
                'border-color': '#444'
                
            });
            
            $('.navbar-brand').css({
               'font-size': '30px'
                
            });
            
            $('.navbar-brand-p').css({
               'font-size': '20px'
                
            });            
            
            $('.navbar-item-text').css({
               'font-size': '25px',
                'padding-top': '0px'
                
            });
            
        }
       
        
    });
    
    
});

//add smooth scrolling
//$(document).ready(function() {
//    
//    'use strict';
//   
//    
//    $('.nav-item, #scroll-to-top').click(function() {
//    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//      var target = $(this.hash);
//      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//      if (target.length) {
//        $('html, body').animate({
//          scrollTop: target.offset().top
//        }, 1000);
//        return false;
//      }
//    }
//  });
//    
//    
//});

$(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top - 0
         }, 900, 'swing', function () {
             window.location.hash = target;
         });
     });
 });



/* active menu item on click */
//$(document).ready(function() {
//    
//    'use strict';
//    
//    
//    $('.navbar-nav li a').click(function(){
//        
//        'use strict';
//        
//        $('.navbar-nav li a').parent().removeClass("active");
//        
//        $(this).parent().addClass("active");
//    
//    });
//});
//


// Add bx slider to screens

//$(function(){
//  $('.bxslider').bxSlider({
//        slideWidth: 292.5,
//        auto: true,
//        minSlides: 1, 
//        maxSlides: 3, 
//        slideMargin: 50
//  });
//});
//


// Add counter
//$(document).ready(function() {
//    
//    $('.counter-num').counterUp({
//        delay: 10,
//        time: 2000
//    });
//});


// Initialize Animation
$(document).ready(function(){
    
    'use strict'
    new WOW().init();
    
});




