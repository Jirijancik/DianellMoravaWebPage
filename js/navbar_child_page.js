/* Show and hide menu */

$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() <= 0 ) {
            
            $('.navbar').css ({
                'background-color': 'rgba(219,56,68,0)'
            });
            
            $('.navbar-default').css({
                'margin-top': '3.75rem'             
            });
            
            $('.navbar-item-text').css({
               'font-size': '1.56vw',
                'padding-top': '0px'
            });
            
            $('.navbar-brand').css({
               'font-size': '2.08vw'
                
            });
            
            
            $('.navbar-brand-p').css({
                'font-size': '1.56vw',
                'margin-top': '-0.52vw'
                
            });              
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(9, 9, 9, 0.75)',

                'border-color': '#444'
                
            });
            
            $('.navbar-brand').css({
               'font-size': '1.56vw'
                
            });
            
            $('.navbar-brand-p').css({
               'font-size': '1.2vw',
                'margin-top': '0px'
                
            }); 
            
            
            $('.navbar-item-text').css({
               'font-size': '1.2vw',
                'padding-top': '0px'
                
            });
        }
    });    
});


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


/*Dropdown*/
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(0);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(0);
});



// Initialize Animation
$(document).ready(function(){
    
    'use strict'
    new WOW().init();
    
});

