



function pauseVid() {
    var x = document.getElementsByTagName("video");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].pause();
    }

}



// ---------------------- video poster ------------------------------


   var op1 = document.getElementById("op1");
   var op2 = document.getElementById("op2");
   var op3 = document.getElementById("op3");
   var op4 = document.getElementById("op4");
   var op5 = document.getElementById("op5");
   var op6 = document.getElementById("op6");
   var op7 = document.getElementById("op7");
 
  
  op1.onplay = function() {
        op1.style.background = "none";
};

  op2.onplay = function() {
        op2.style.background = "none";
};

//   op3.onplay = function() {
//         op3.style.background = "none";
// };

//   op4.onplay = function() {
//         op4.style.background = "none";
// };

//   op5.onplay = function() {
//         op5.style.background = "none";
// };

  op6.onplay = function() {
        op6.style.background = "none";
};

  op7.onplay = function() {
        op7.style.background = "none";
};

 
// -----------------RE-LOAD VIDEO --------------------

function reload() {

    var delayMillis = 2000;




jQuery(document).ready(function(){
    if (jQuery(window).width() > 650) {
        


           setTimeout(function() {
    
  op1.load();
  op1.style.background = "#0e000d url('media/pic2.jpg') no-repeat center";

  op2.load();
  op2.style.background = "#0e000d url('media/pic1.jpg') no-repeat center";

  op3.load();
  op3.style.background = "#0e000d url('media/pic3.jpg') no-repeat center";

  op4.load();
  op4.style.background = "#0e000d url('media/pic4.jpg') no-repeat center";

  op5.load();
  op5.style.background = "#0e000d url('media/pic5.jpg') no-repeat center";

  op6.load();
  op6.style.background = "#0e000d url('media/pic6.jpg') no-repeat center";

  op7.load();
  op7.style.background = "#0e000d url('media/pic7.jpg') no-repeat center";



  }, delayMillis);

} 


     
});
jQuery(window).resize(function () {
        if (jQuery(window).width() < 649) {
            


setTimeout(function() {
    
  op1.load();
  op1.style.background = "#0e000d url('media/mob2.jpg') no-repeat center";

  op2.load();
  op2.style.background = "#0e000d url('media/mob1.jpg') no-repeat center";

  op3.load();
  op3.style.background = "#0e000d url('media/mob3.jpg') no-repeat center";

  op4.load();
  op4.style.background = "#0e000d url('media/mob4.jpg') no-repeat center";

  op5.load();
  op5.style.background = "#0e000d url('media/mob5.jpg') no-repeat center";

  op6.load();
  op6.style.background = "#0e000d url('media/mob6.jpg') no-repeat center";

  op7.load();
  op7.style.background = "#0e000d url('media/mob7.jpg') no-repeat center";



  }, delayMillis);




            }
});
  



 
}




