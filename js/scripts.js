/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function() {

    function setHandlers(){
        
        /* HANDLERS FOR SHOW OR HIDE FEEDBACK FORM  */
        
        var subLayer = document.getElementById('sub_layer');
        var wrappFormFeedback = document.getElementById('wrapp_form_feedback');
        
        var emailDinTech = document.getElementById('e_mail_din_tech');
        var btnGetFreeSample = document.getElementById('btn_get_free_sample');
        
        var btnClose = document.getElementById('btn_close');
        
        var showForm = function(){
            
            subLayer.style.display = 'block';
            wrappFormFeedback.style.display = 'block';
        };
        
        var closeForm = function(){
            
            var rConfirm = confirm("Закрыть окно? Введённые данные будут утеряны.");
            
            if (rConfirm === true){
                
                subLayer.style.display = 'none';
                wrappFormFeedback.style.display = 'none';
                document.getElementById("form_feedback").reset();
            }
            else{}
        };
        
        btnGetFreeSample.addEventListener('click', showForm);
        emailDinTech.addEventListener('click', showForm);
        
        subLayer.addEventListener('click',closeForm);
        btnClose.addEventListener('click',closeForm);
        
        

//        var btnHideMoreInfo = document.getElementById('hide_more_info_btn');
//        var blockMoreInfo = document.getElementById('more_info_block');
//        var btnsHideMoreInfo = document.getElementsByClassName('hide-more-info-btn');
//        var btnChanged = false;
//
//        var showMoreInfo = function(){
//            blockMoreInfo.style.display = 'block';
//        };
//        
//        var hideMoreInfo = function(){
//            blockMoreInfo.style.display = 'none';
//        };
//        
//        var changeBtnMoreInfo = function(){
//            
//            if(btnChanged === false){
//                
//                btnMoreInfo.style.display = 'none';
//                btnHideMoreInfo.style.display = 'inline-block';
//                
//                btnChanged = true;
//                
//            }
//            else{
//                
//                btnMoreInfo.style.display = 'inline-block';
//                btnHideMoreInfo.style.display = 'none';
//                
//                btnChanged = false;
//                
//            }
//        
//        };
//        for (var i = 0; i < btnsHideMoreInfo.length; i++) {
//        
//            btnsHideMoreInfo[i].addEventListener('click', hideMoreInfo);
//            btnsHideMoreInfo[i].addEventListener('click', changeBtnMoreInfo);
//        
//        }
//        
//        btnMoreInfo.addEventListener('click', showMoreInfo);
//        btnMoreInfo.addEventListener('click', changeBtnMoreInfo);
        
    }setHandlers();

    
};
