// global. currently active menu item 
var current_item = 0;

// few settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});





// ======================================






  var show3 = document.getElementById("showme3");
  var show2 = document.getElementById("showme2");
  var show = document.getElementById("showme");
   var linkID = document.getElementById("linkID");
   var hideMe = document.getElementById("hideMe");
    
  show3.onclick = function () {
    pauseVid();

    
  }

   show.onclick = function () {
    pauseVid();

    
  }

     show2.onclick = function () {
      pauseVid();
      reload();
    
  }



  linkID.onclick = function () {
    linkID.style.display = "none";
  }


  hideMe.onclick = function () {
    pauseVid();
    linkID.style.display = "none";
  }

 

 // ===================================================


//  jQuery(document).ready(function(){
//     if (jQuery(window).width() > 650) {
        
//  show3.onclick = function () {
//     pauseVid();

//     linkID.style.display = "block";
//   }

//    show.onclick = function () {
//     pauseVid();

//     linkID.style.display = "block";
//   }

//      show2.onclick = function () {
//       pauseVid();
//       reload();

//     linkID.style.display = "block";
//   }



//   linkID.onclick = function () {
//     linkID.style.display = "none";
//   }


//   hideMe.onclick = function () {
//     pauseVid();
//     linkID.style.display = "none";
//   }

// }
// });



 // ==========================================


document.getElementById("contactMe").onclick = function () {
  linkID.style.display = "none";
}


