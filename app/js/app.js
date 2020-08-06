// document.addEventListener("DOMContentLoaded", function() {

// 	// Custom JS

// });


jQuery(document).ready(function($) {
	
	// Home slider
	$('.heroes-slider').slick({
		// autoplay: true,
		// autoplaySpeed: 3000,
		// infinite: false,
		dots: true,
	});

	// Adaptive navigation

});

var elemWidth, fitCount, varWidth = 0, ctr, 
    $menu = $("ul#menu"), $collectedSet;

ctr = $menu.children().length;
$menu.children().each(function() {
    varWidth += $(this).outerWidth();
});

collect();
$(window).resize(collect);

function collect() {
    elemWidth = $menu.width();
    fitCount = Math.floor((elemWidth / varWidth) * ctr) - 1;
    $menu.children().css({"display": "block", "width": "auto"});
    $collectedSet = $menu.children(":gt(" + fitCount + ")");
    $("#submenu").empty().append($collectedSet.clone());  
    $collectedSet.css({"display": "none", "width": "0"});
}