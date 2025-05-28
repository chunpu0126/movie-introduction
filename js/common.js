$(function(){
	
	//anchor link
	$('a[href^="#"]').on('click',function(){
		var speed = 600;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		if( !$(target).get(0) ){ return false; }
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "easeOutQuad");
		if($('.wtNavigation').hasClass('show')) {
			$('.wtNavigation, .worldtourContents').removeClass('show').addClass('close');}
		return false;
	});
	
	//pagetop set
	var topBtn = $('.pagetop');
	topBtn.hide();
	function scrollEvent() {
		var scTp = $(window).scrollTop();
		(scTp > 300) ? topBtn.fadeIn() : topBtn.fadeOut();
	}
	
	//メニュー表示非表示
	$('#navigationBtn').on('click', function() {
		if($('.naviBtn').hasClass('show')) {
			$('.naviBtn, .navigationWrap').removeClass('show');
		}else{
			$('.naviBtn, .navigationWrap').addClass('show');
		}
	});

	$('.wtNavigation').mouseenter(function(){
		$('.wtNavigation, .worldtourContents').removeClass('close').addClass('show');
	}).mouseleave(function(){
		$('.wtNavigation, .worldtourContents').removeClass('show').addClass('close');
	});
	
	$('.wtNavigation').on('click', function() {
		if($('.wtNavigation').hasClass('show')) {
			$('.wtNavigation, .worldtourContents').removeClass('show').addClass('close');
		}else{
			$('.wtNavigation, .worldtourContents').removeClass('close').addClass('show');
		}
	});
	//メニュー非表示  >  AnchorLink
	/*$('.navigationList>li>a').on('click', function() {
		if($('.naviBtn').hasClass('show')) {
			$('.naviBtn, .navigationWrap').removeClass('show');
		}
	});
	*/
	//画像読み込み
	imgload();
	function imgload() {
		$imgload = $('.imgload');
		var length = $imgload.length;
		for (var i = 0; i < length; i++) {
			elem = $imgload.eq(i);
			if(elem.is(':visible') && elem.attr('data-src')) {
				elem.attr('src', elem.attr('data-src')).removeAttr('data-src');
			}
		}
	}
	
	var timer = false;
	$(window).on('resize', function() {
		if (timer !== false) { clearTimeout(timer); }
		timer = setTimeout(function() { imgload(); }, 200);
	});
	
	//scroll event
	$(window).on('load scroll', function() {
		scrollEvent();
	});
	
	//colorbox
	$('a[rel="movie"]').colorbox({iframe:true,width:"100%", height:"100%", maxWidth:1280, maxHeight:790, opacity:.9});

	
	//colorbox img
	$('a[rel="img"]').colorbox({maxWidth:'100%',maxHeight:'100%', opacity:.9});
	
});

jQuery(function(){
	var category = location.pathname;
	jQuery("a").click(function(e) {
		var ahref = jQuery(this).attr('href');
		if(ahref) { ga('send', 'event', category, 'Click', ahref); }
	})
});
