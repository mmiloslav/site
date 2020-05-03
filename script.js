$(function(){
	let menu_bool = true;

	$('.lines').click(function(){
		if (menu_bool == true) {
			$('.top-bar__nav_m').css('display', 'block');
			$('.svg_1').css('top', '229px');
			menu_bool = false;
		} else {
			$('.top-bar__nav_m').css('display', 'none');
			$('.svg_1').css('top', '80px');
			menu_bool = true;
		}
	});

  let scroll_bool = true;

  $('body').on('click', '.order-call', function(){
    $('.call-back-parent').css('display', 'flex');
    if (scroll_bool == true) {
      $('html, body').css('overflow','hidden'); //запрет скролла
      scroll_bool = false;
    }
  });

   $('body').on('click', '.more-info__button', function(){
    $('.more-info-parent').css('display', 'flex');
    if (scroll_bool == true) {
      $('html, body').css('overflow','hidden'); //запрет скролла
      scroll_bool = false;
    }
  });

  $('body').on('click', '.callx', function(){
    $('.call-back-parent').css('display', 'none');
    $('.more-info-parent').css('display', 'none');
    if (scroll_bool == false) {
      $('html, body').css('overflow','visible');
      scroll_bool = true;
    }
  });

  $('body').on('click', '.button_4', function(){
    $('.call-back-parent').css('display', 'none');
    if (scroll_bool == false) {
      $('html, body').css('overflow','visible');
      scroll_bool = true;
    }
  });

	$('.my-works').slick({
    prevArrow: $('.prev'),
		nextArrow: $('.next'),
      	slidesToShow: 3,
      	slidesToScroll: 1,
      	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
          dots: true
	      }
	    }
    ]
    });

   	function showTags() {
   		$('.flying-tags div').css({
   			'opacity': '1',
   			'visibility': 'visible'
      });
      $('.tag_1').css({
        'top': '118px',
        'left': '113px',
        'transform': 'rotate(26deg)'
      });
      $('.tag_2').css({
        'top': '320px',
        'left': '217px',
        'transform': 'rotate(16deg)'
      });
      $('.tag_3').css({
        'top': '558px',
        'left': '332px',
        'transform': 'rotate(-22deg)'
      });
      $('.tag_4').css({
        'top': '146px',
        'left': '695px',
        'transform': 'rotate(-13deg)'
      });
      $('.tag_5').css({
        'top': '476px',
        'left': '838px',
        'transform': 'rotate(20deg)'
      });
   	};

   	// setTimeout(showTags, 0);
    showTags();

   	window.onscroll = function() {scrollFunction()};

	function scrollFunction() { 
  		// if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    // 		$('.i-do').css({
   	// 		'opacity': '1',
   	// 		'visibility': 'visible'});
  		// }
  		// else if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1) {
    // 		$('.i_do').css({
   	// 		'opacity': '0',
   	// 		'visibility': 'hidden'});
  		// }
      // if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      //   $('.cover').css({
      //   'opacity': '0',
      //   'visibility': 'hidden'});
      // }
  		if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    		$('.pb').css({
   			'opacity': '1',
   			'visibility': 'visible'});
  		}
  		else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
    		$('.pb').css({
   			'opacity': '0',
   			'visibility': 'hidden'});
  		}
  		if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
    		$('.gradient').css({
   			'opacity': '1',
   			'visibility': 'visible'});
  		}
  		else if (document.body.scrollTop < 1080 || document.documentElement.scrollTop < 1080) {
    		$('.gradient').css({
   			'opacity': '0',
   			'visibility': 'hidden'});
  		}
  		if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    		$('footer').css({
   			'opacity': '1',
   			'visibility': 'visible'});
  		}
  		else if (document.body.scrollTop < 1500 || document.documentElement.scrollTop < 1500) {
    		$('footer').css({
   			'opacity': '0',
   			'visibility': 'hidden'});
  		}
	}


});