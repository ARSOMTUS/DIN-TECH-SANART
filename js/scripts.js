/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(function() {
    
    /* SLIDER START */
        
      $('.flexslider').flexslider({
        animation: "slide"
      });
      
    /**/  


    /* SHOW OR HIDE FEEDBACK FORM  */

    var subLayer = $('#sub_layer');
    var wrappFormFeedback = $('#wrapp_form_feedback');
    var formFeedback = $('#form_feedback');
    
    var scrollYCoord = 0;
    
    
    $( "#btn_get_free_sample, #e_mail_din_tech" ).click(function() {
        
        scrollYCoord = $('html').scrollTop();
        wrappFormFeedback.css('top', scrollYCoord + 70 );
        wrappFormFeedback.css('display','block');
        subLayer.css('display','block');
        
    });
    
    $( "#btn_close, #sub_layer" ).click(function() {
        
        var rConfirm = confirm("Закрыть окно? Введённые данные будут утеряны.");
            
            if (rConfirm === true){
                
                wrappFormFeedback.css('display','none');
                subLayer.css('display','none');
                formFeedback.get(0).reset();
                
            }
            else{}
        
    });
    
    /* END SHOW OR HIDE FEEDBACK FORM*/

});


//window.onload = function() {

//    function setHandlers(){
        
        /* HANDLERS FOR SHOW OR HIDE FEEDBACK FORM  */
        
//        var subLayer = document.getElementById('sub_layer');
//        var wrappFormFeedback = document.getElementById('wrapp_form_feedback');
//        
//        var emailDinTech = document.getElementById('e_mail_din_tech');
//        var btnGetFreeSample = document.getElementById('btn_get_free_sample');
//        
//        var btnClose = document.getElementById('btn_close');
//        var pageYCoord = 0;
//        
//        var htmlTag = document.documentElement;
//        
//        var showForm = function(){
//            
//            pageYCoord = window.pageYOffset;
//            wrappFormFeedback.style.top = pageYCoord + 70 + 'px';
//            
//            htmlTag.scrollTop = pageYCoord;
//            
//            subLayer.style.display = 'block';
//            wrappFormFeedback.style.display = 'block';
//            
//        };
//        
//        var closeForm = function(){
//            
//            var rConfirm = confirm("Закрыть окно? Введённые данные будут утеряны.");
//            
//            if (rConfirm === true){
//                
//                subLayer.style.display = 'none';
//                wrappFormFeedback.style.display = 'none';
//                document.getElementById("form_feedback").reset();
//            }
//            else{}
//        };
//        
//        btnGetFreeSample.addEventListener('click', showForm);
//        emailDinTech.addEventListener('click', showForm);
//        
//        subLayer.addEventListener('click',closeForm);
//        btnClose.addEventListener('click',closeForm);
        
//    }setHandlers();
    
//};
