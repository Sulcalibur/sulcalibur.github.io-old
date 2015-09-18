// var s = skrollr.init();

$(window).scroll(function () { 

	$('.mountains-1').css({
		'top' : -($(this).scrollTop()/4)+"px"
	}); 
	$('.mountains-2').css({
			'top' : -($(this).scrollTop()/2)+"px"
	 }); 
/*  $('.buildings-1').css({
		'top' : -($(this).scrollTop()/1)+"px"
	}); */
	$('.buildings-2').css({
			'top' : -($(this).scrollTop()/1)+"px"
	 }); 
});