$(document).ready(function() {

	$('.main_btna').on("click", function(){
		$(".overlay").fadeIn(500);
		$(".modal").slideDown(500);
	});

	$('.main_btn').on("click", function(){
		$(".overlay").fadeIn(500);
		$(".modal").slideDown(500);
	});

	$('.main_nav li:eq(1)').on("click", function(){
		$(".overlay").fadeIn(500);
		$(".modal").slideDown(500);
	});

	$('.modal .close').on("click", function(){
		$(".overlay").fadeOut(500);
		$(".modal").slideUp(500);
	});

});