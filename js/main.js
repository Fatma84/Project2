$(function() {

     "use strict";
  

    (function animateText(){

       $('.caption').animate({

            opacity: '0'
            
       
           },6000, function() {
       
            $(this).animate({
       
               opacity:'1',
            }, 500, function (){

                animateText();
            });
         
          });
           

    }()); 
    
     
    (function animateText(){

        $('.h3').animate({
 
             opacity: '0'
             
        
            },2000, function() {
        
             $(this).animate({
        
                opacity:'1',
             }, 500, function (){
 
                 animateText();
             });
          
           });
            
 
     }()); 


       $('.lists li input').click(function(){
            $(this).prop('checked', true).parent().siblings().children().prop('checked', false);
              
       });


    
   

     });
     