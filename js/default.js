$(document).ready(function(){
    $('.Banner-slider').owlCarousel({
	    items:1,
	    smartSpeed:450,
	    autoplay:true,
	    loop:true
	});
});

$(document).ready(function(){
	$(document).on('scroll', function() {
		var banner_hgt = $('.Banner-sec').height();
	    if( $(window).scrollTop() >= banner_hgt){
	        $('.fixed-top').addClass('bg-dblue');
	    }
	    else {
	        $('.fixed-top').removeClass('bg-dblue');
	    }
	});
});

$(document).ready(function(){
	$(".preloader").append("<img src='img/logo.png' class='img-fluid' alt='Treva'>");
	$(".preloader").fadeOut(300);
});