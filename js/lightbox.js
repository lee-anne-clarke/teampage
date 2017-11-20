//Codes for lightboxes on client employee page: http://lee-anne-clarke.com/work/teampage/

//1. Capture the click event on each employee image box
  //1.1. Show the overlay.
  //1.2. Show the corresponding employee info box & a close button.
  
//2. When close button is clicked, hide the overlay and the info box.

// ************************************************************

//Define the variables
var $overlay = $(".overlay");
var $lightbox = $(".lightbox");


//Add the overlay
$("body").append($overlay);

//Capture the click event on each employee image box
$( ".employee__box" ).on( "click", function(event) {
	
	//Remove overflow from body while lightbox is open
	$("body").addClass("no-overflow");
	
	//Define variables for the employee image box and the matching employee info
	var $teamBoxData = $(this).attr("data-person");
	var $lightboxMatch = document.getElementById($teamBoxData);
	
	//Show the overlay
	$overlay.fadeIn();
	
	//Clear any previous css modifications in case the user clicks on the same image box more than once	
	$overlay.children().css("display",""); 
	
	//Hide all employee info boxes except the correct one
	$overlay.children().not($lightboxMatch).hide();
});


//When close button is clicked, hide the overlay and the info box, and restore overflow to body
$( ".lightbox__close" ).on( "click", function(event) {
	
	var $teamBoxData = $(this).parent(".employee__box").attr("data-person");
	
	var $lightboxMatch = document.getElementById($teamBoxData);
	
	$overlay.fadeOut();
	$("body").removeClass("no-overflow");
	$lightboxMatch.hide();
});                   
                          