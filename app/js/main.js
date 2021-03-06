$(document).ready(function() {
	$(".nav_item_hover").hover(function(){
		$(this).stop(true).fadeTo("fast",1); // This sets the opacity to 100%     on hover
	},function(){
		$(this).stop(true).fadeTo("fast", 0); // This sets the opacity back to 60% on mouseout
	});
});
//main_nav_item hover change
var nav_item = $(".main_nav_item_icon");
    nav_item.hover(function(){
        nav_item.not(this).removeClass("item_active");
        $(this).toggleClass("item_active");
    });


var liLength = $('#ball_con > li > img');
var ballIn = function(){
	setTimeout(function() {
		liLength.eq(0).fadeTo('slow', 1).addClass('animated fadeInRight');
	}, 1000);
	setTimeout(function() {
		liLength.eq(1).fadeTo('slow', 1);
	}, 1400);
	setTimeout(function() {
		liLength.eq(2).fadeTo('slow', 1);
	}, 1800);
	setTimeout(function() {
		liLength.eq(3).fadeTo('slow', 1);
	}, 2200);
	setTimeout(function() {
		liLength.eq(4).fadeTo('slow', 1);
	}, 2600);
	
};

var mainT = function(){
	$("#main_tittle").removeClass("d-none").addClass('d-block animated slideInRight ');
};

var hexagonBlock = function() {
	$('.main_sect .main_sect_container .info_about').removeClass('d-none').addClass('d-block animated fadeIn');
}

var flyCar = function(){
	$("#fly_car_img").removeClass("d-none").addClass("d-block animated slideInLeft fly-car-animation-duration");
};

var logoHeader = $('.header .logo_container');
var menuList = $('.navbar-expand-lg .navbar-collapse');
var header = function(){
	setTimeout(function() {
		$("#header").removeClass("d-none").addClass("d-block animated fadeInDown");
	}, 200);
	setTimeout(function() {
		logoHeader.removeClass('d-none').addClass('d-block animated fadeInDown');
		menuList.addClass('d-block animated fadeInRight');
	}, 400);
};


var scroll = function(){
	$("#scroll_down").removeClass("d-none");
	$("#join").removeClass("d-none");
	$("#scroll_down_2").removeClass("d-none");
	$("#join_2").removeClass("d-none");
	$("#main_nav").removeClass("d-none").addClass("animated slideInRight");
	$("#main_nav_2").removeClass("d-none").addClass("animated slideInRight");
};

$(window).load(function(){
	setTimeout(function(){
		$('#preloader').addClass("d-none");
		setTimeout(flyCar, 2800);
		setTimeout(ballIn, 3000);
		setTimeout(header, 7500);
		setTimeout(mainT, 9200);
		setTimeout(hexagonBlock, 9200);
		setTimeout(scroll, 9200);
	}, 500);
});

$('.join_us').click(function() {
	$('.section_form').show('slow').animate({
		opacity: .8
	}, 1000);
});

$('.close-form').click(function() {
	$('.section_form').hide('slow').animate({
		opacity: 0
	}, 500);
});


//$('#fullpage').fullpage({
//	sectionSelector: '.section',
//	navigation: true,
//	scrollingSpeed: 1100,
//	anchors: ['main_sectt', 'sect_twoo', 'sect_tt', 'sect-fourr', 'sect_fivee', 'sect_sixx', 'footerr'],
//	menu: '#menu',
//	onLeave: function(origin, destination, direction) {
//		var leavingSection = $(this);
//		var mainSect = $("#main_sect");
//		if(origin.item == mainSect[0]) {
//			$('#header').removeClass('d-block');
//			$("#header").addClass('d-none');
//		}
//		if(destination.anchor == 'main_sectt') {
//			$('#header').removeClass('d-none');
//			$('#header').addClass('d-block');
//		}
//	}
//});
//


$('#fp-nav').hide();
