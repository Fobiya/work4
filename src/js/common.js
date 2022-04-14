define(["jquery"], function($) {
  
  
//  $('header').addClass('open');
  
  
  $('.pass__').click( function(){
      $(this).parent().find('[type=password]').attr('type','text');
 

}); 
  
   $('.acf-basic-uploader').after('<p>No image selected</p>');
  
  
  
  $('.box__error').click( function(){
      $(this).remove();
});
  
      $('.home__10 .list a').click(function() {
          $(this).toggleClass('plus minus');
          $(this).parent().toggleClass('open');
      }); 
      $('.icon_desctop').click(function() {
          $(this).toggleClass('nemu__ open__');
          $('section.user__account>.container>.row>div:first-child').toggleClass('open');
      });
      $('ul.list li a').click(function() {
           var $dnum = $(this).parent().data('num');
        
          $('section.user__account .box__menu ul li').removeClass('active');
          $('section.user__account .box__select li').removeClass('open');
          $(this).parent().addClass('active');
        
          $("section.user__account ul.box__select>li:nth-child(" + $dnum + ")").addClass('open'); 
      });
  
// ===========================================================  
// Pixel Perfect MODUL
// ===========================================================  
    
    $(document).ready(function() {
      $('body').each(function() {
          var body = $(this);
          var img_url = $(this).data('img');
          var img = new Image();
          img.src = img_url;
          img.onload = function() {
              var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
              body.append(ppbox);
          };
      });
          
      $('html').click(function() {
          $('#images__back').toggleClass('front__end');
      });
    }); 

// =========================================================== 
// END Pixel Perfect MODUL
// =========================================================== 
//  
//    videos = document.querySelectorAll("video");
//    for (var i = 0, l = videos.length; i < l; i++) {
//        var video = videos[i];
//        var src = video.src || (function () {
//            var sources = video.querySelectorAll("source");
//            for (var j = 0, sl = sources.length; j < sl; j++) {
//                var source = sources[j];
//                var type = source.type;
//                var isMp4 = type.indexOf("mp4") != -1;
//                if (isMp4) return source.src;
//            }
//            return null;
//        })();
//        if (src) {
//            var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
//            if (isYoutube) {
//                var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
//                id = (id.length > 1) ? id.splice(1) : id;
//                id = id.toString();
//                var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
//                video.src = mp4url + id;
//            }
//        }
//    }
  
// ===========================================================
// VIDEO
// ===========================================================  
  
// ===========================================================
// VIDEO
// ===========================================================  
  
// ===========================================================
// SCROLL
// ===========================================================
  

    // NAVIGATION MENU LEFT


    $(function() {
        $('.menu').click(function() {
            $('.right__menu').addClass('open');
            $('body').addClass('open__menu');
        });
    });

    $(document).mouseup(function(e) { // web document click event
        var div = $(".right__menu"); // here we specify the ID of the element
        if (!div.is(e.target) // if the click was not on our block
            &&
            div.has(e.target).length === 0) { // and not by its children
            $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
        }
    });



    $('.right__menu li a').click(function() {

      $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
    });
    $('.right__menu').click(function() {

      $(".right__menu").removeClass("open");
            $('body').removeClass("open__menu");
    });
  

// =========================================================== 
// cssClassTogglerScroll
// =========================================================== 
  
//  function animateNumber(callback, from, to, duration) {
//  let start = null,
//    animate = timestamp => {
//      start = start || timestamp;
//      let progress = Math.min((timestamp - start) / duration, 1);
//      callback(progress * (to - from) + from);
//      if(progress < 1) {
//        window.requestAnimationFrame(animate);
//      }
//    };
//  window.requestAnimationFrame(animate);
//}
  
  
  
  
  class cssClassTogglerScroll{
  constructor(data){
    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: data.threshold
    };

    this.observer = new IntersectionObserver((entries, observer)=>{
      entries.forEach((entry) => {
      if(entry.isIntersecting){
        if(data.cssClass){
          entry.target.classList.add(data.cssClass);
        }
        if(data.onVisible){
          data.onVisible();
        }
      }
      else{
        if(data.cssClass){
          entry.target.classList.remove(data.cssClass);
        }
        if(data.onHidden){
          data.onHidden();
        }
      }
    });

  }, this.options);
    this.observer.observe(data.element);

  }
}

for(let div of document.querySelectorAll('footer')){

  new cssClassTogglerScroll({
    element: div,
    cssClass: 'act__',
    threshold: 0.1,
    onVisible: () => {

    },
    onHidden: () => {
//      console.log('section__products active');
    }
  });

}
  
  
// =========================================================== 
// END cssClassTogglerScroll
// =========================================================== 
  
  
  
  
  


//    responsiveVoice.cancel();
//   responsiveVoice.speak($('h1').val());


//responsiveVoice.enableWindowClickHook();
//  responsiveVoice.clickEvent();
  
//  	responsiveVoice.setDefaultVoice("US English Female");
//responsiveVoice.enableEstimationTimeout = false;
  
//responsiveVoice.speak($('h1').text(), "UK English Male", {volume: 1}); 
//responsiveVoice.speak($('.number').text(), "UK English Male", {volume: 1}); 
  
//function startCapture(displayMediaOptions) {
// let captureStream = null;
//
// return navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
//    .catch(err => { console.error("Error:" + err); return null; });
//}
  
// ===========================================================
// SCROLL
// ===========================================================
  
// ===========================================================
// SCROLL
// ===========================================================
  
  
  


  var height = $(window).scrollTop();

  if(height => 100 ) {
//    $('.scroll__menu').addClass('top');
  }

  $(window).scroll(function() {
      var height = $(window).scrollTop();

      if(height > 100 ) {
            $('header').addClass('top');
      } else {
           $('header').removeClass('top');
      }
  });


// ===========================================================
// END SCROLL
// ===========================================================
  
// ===========================================================
// Scroll Style
// ===========================================================
  
  
  
  
  
  
  
// ===========================================================
// Audio Play
// ===========================================================
  
  
//  var obj = document.createElement("audio");
//  obj.src = "https://assets.codepen.io/217233/p3d_pop2_t.mp3";
//  obj.volume = 0.1;
//  obj.autoPlay = false;
//  obj.preLoad = true;
//  obj.controls = true;
//
//  $(".purpur").click(function() {
//    obj.play();
//    // obj.pause();
////    console.log(obj.src);
//  });
//  
//    var objn = document.createElement("audio");
//  objn.src = "https://assets.codepen.io/217233/p3d_pop5_t.mp3";
//  objn.volume = 0.1;
//  objn.autoPlay = false;
//  objn.preLoad = true;
//  objn.controls = true;
//
//  $(".intercom-launcher").click(function() {
//    objn.play();
//    // obj.pause();
////    console.log(obj.src);
//  });
  
  
  
  
// ===========================================================
// END Audio Play
// ===========================================================
  
// ===========================================================
// Option Select calculation
// ===========================================================
  
  
//  $('select[name="an_key"],select[name="an_work"]').change(function(){
//    var sum = 1; 
//    $('.anonymous').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = 0.3 + sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.an span').html( Math.trunc(sum)); 
//        $('.an_price').val( Math.trunc(sum)); 
//    });
//  });
//    
//  
//  $('select[name="co_key"],select[name="co_work"]').change(function(){
//    var sum = 1; 
//    $('.connected').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = 1 + sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.co span').html( Math.trunc(sum)); 
//        $('.co_price').val( Math.trunc(sum)); 
//    });
//  });
//      
//  
//  $('select[name="fa_key"],select[name="fa_work"]').change(function(){
//    var sum = 1; 
//    $('.family').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = 2.5 + sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.fa span').html( Math.trunc(sum)); 
//        $('.fa_price').val( Math.trunc(sum)); 
//    });
//  });
//    
//  $('select[name="un_key"],select[name="un_work"]').change(function(){
//    var sum = 750; 
//    $('.unlimited').find(":selected").each(function(){
//    // console.log($(this).val());
//
//        sum = sum * parseInt($(this).val());
//        // console.log(sum);
//        $('.box__price.un span').html( Math.trunc(sum)); 
//        $('.un_price').val( Math.trunc(sum)); 
//    });
//  });
  
  
//  $('select.info').change(function(){
//    var sum = 0; 
//    $('.family').find(":selected").each(function(){
//            sum = sum +  parseInt($(this).val());
//        $('span.resultAppend').html(sum);
//    });
//  });
  
// ===========================================================
// END Option Select calculation
// ===========================================================
  
// ===========================================================
// Scroll Style
// ===========================================================
	
	
// ===========================================================
// cursor
// ===========================================================
  
  
//  const updateProperties = (elem, state) => {
//    elem.style.setProperty('--x', `${state.x}px`)
//    elem.style.setProperty('--y', `${state.y}px`)
//    elem.style.setProperty('--width', `${state.width}px`)
//    elem.style.setProperty('--height', `${state.height}px`)
//    elem.style.setProperty('--radius', state.radius)
//    elem.style.setProperty('--scale', state.scale)
//  }
//
//  document.querySelectorAll('.cursor').forEach(cursor => {
//    let onElement
//
//    const createState = e => {
//      const defaultState = {
//        x: e.clientX,
//        y: e.clientY,
//        width: 40,
//        height: 40,
//        radius: '50%'
//      }
//
//      const computedState = {}
//
//      if (onElement != null) {
//        const { top, left, width, height } = onElement.getBoundingClientRect()
//        const radius = window.getComputedStyle(onElement).borderTopLeftRadius
//
//        computedState.x = left + width / 2
//        computedState.y = top + height / 2
//        computedState.width = width
//        computedState.height = height
//        computedState.radius = radius
//      }
//
//      return {
//        ...defaultState,
//        ...computedState
//      }
//    }
//
//    document.addEventListener('mousemove', e => {
//      const state = createState(e)
//      updateProperties(cursor, state)
//    })
//
//    document.querySelectorAll('a, button').forEach(elem => {
//      elem.addEventListener('mouseenter', () => (onElement = elem))
//      elem.addEventListener('mouseleave', () => (onElement = undefined))
//    })
//  })
//  
//
//  
//  
////  HOVER HEADER  JQERY
//  
//  var n = 0;
//  $( "header" )
//    .mouseenter(function() {
//      n += 1;
////        $( '.cursor' ).addClass( "none" );
//    })
//    .mouseleave(function() {
////       $( '.cursor' ).removeClass( "none" );
//    }); 
//  
//  var en = 0;
//  $( "footer" )
//    .mouseenter(function() {
//      en += 1;
//        $( '.cursor' ).addClass( "curblack" );
//    })
//    .mouseleave(function() {
//       $( '.cursor' ).removeClass( "curblack" );
//    });



 // ===========================================================
// cursor
// =========================================================== 
  
  
  
// ===========================================================
// NAVIGATION LOGO SCROLL TOP
// ===========================================================	
	
	// NAVIGATION LOGO SCROLL TOP
  
//$('.logo').on('click', function(e) {
//  e.preventDefault();
//  $('.nav-toggle').removeClass('open');
//  $('.menu-left').removeClass('collapse');
//  $('body').animate({
//    scrollTop: 0
//  }, 750, 'easeInOutQuad')
//});
  
// LINKS TO ANCHORS
    //$('header a[href^="#"]').on('click', function(event) {
    //
    //  var $target = $(this.getAttribute('href'));
    //
    //  if($target.length) {
    //    event.preventDefault();
    //    $('html, body').stop().animate({
    //      scrollTop: $target.offset().top
    //    }, 750, 'easeInOutQuad');
    //  }
    //});

// TOGGLE HAMBURGER & COLLAPSE NAV
//$('.nav-toggle').on('click', function() {
//  $(this).toggleClass('open');
//  $('.menu-left').toggleClass('collapse');
//});
// REMOVE X & COLLAPSE NAV ON ON CLICK
//$('header .menu-left a').on('click', function() {
//  $('.nav-toggle').removeClass('open');
//  $('.menu-left').removeClass('collapse');
//});

// SHOW/HIDE NAV

// Hide Header on on scroll down
  
//var didScroll;
//var lastScrollTop = 0;
//var delta = 5;
//var navbarHeight = $('.box__menu').outerHeight();
//
//$(window).scroll(function(event){
//    didScroll = true;
//});
//
//setInterval(function() {
//    if (didScroll) {
//        hasScrolled();
//        didScroll = false;
//    }
//}, 250);
//
//function hasScrolled() {
//    var st = $(this).scrollTop();
//
//    // Make sure they scroll more than delta
//    if(Math.abs(lastScrollTop - st) <= delta)
//        return;
//
//    // If they scrolled down and are past the navbar, add class .nav-up.
//    // This is necessary so you never see what is "behind" the navbar.
//    if (st > lastScrollTop && st > navbarHeight){
//        // Scroll Down
////        $('.box__menu').removeClass('show-nav').addClass('hide-nav');
////        $('.nav-toggle').removeClass('open');
////        $('.menu-left').removeClass('collapse');
//    } else {
//        // Scroll Up
//        if(st + $(window).height() > $(document).height()) {
//            $('.box__menu').removeClass('hide-nav').addClass('show-nav');
//        }
//    }
//
//    lastScrollTop = st;
//}
  
// ===========================================================  
// End NAVIGATION LOGO SCROLL TOP
// ===========================================================  
	
	
	
// ===========================================================  
// Pixel Perfect MODUL
// ===========================================================  
    
//    $(document).ready(function() {
//                $('body').each(function() {
//                    var body = $(this);
//                    var img_url = $(this).data('img');
//                    var img = new Image();
//                    img.src = img_url;
//                    img.onload = function() {
//                        var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
//                        body.append(ppbox);
//                    };
//                });
//
//        $('html').click(function() {
//            $('#images__back').toggleClass('front__end');
//        });
//    }); 

// =========================================================== 
// END Pixel Perfect MODUL
// =========================================================== 
    
    

// =========================================================== 
// Scroll LINK
// =========================================================== 
    
//   $('a.scroll').click(function() {
//        $("body").animate({
//            scrollTop: $($(this).attr("href")).offset().top + "px"
//        }, {
//            duration: 1000,
//            easing: "swing"
//        });
//        return false;
//    });
    
// =========================================================== 
// END Scroll LINK
// =========================================================== 
    
    
    
// =========================================================== 
// Scroll BAR
// ===========================================================  
    

//    $(window).scroll(function() {
//        // calculate the percentage the user has scrolled down the page
//        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
//
//        $('.bar-long').css('width', scrollPercent + "%");
//
//    });
    
 
// =========================================================== 
// END Scroll BAR 
// ===========================================================



// =========================================================== 
// SLICK SLIDER FULL NAVIGATION
// ===========================================================    


  
  $('a.next__2').click(function() { 
    $sider__2.slick('slickNext');
  });
 
  $('a.prev__2').click(function() {
    $sider__2.slick('slickPrev');
  });

  var $sider__2 = $('.single__slider__2');
  
  
    $sider__2.slick({
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 1000,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
      
        responsive: [{
            breakpoint: 1250,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
          },
          {
            breakpoint: 850,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
          }                     
        ]
    });
  
  
  

  
  $('a.next__1').click(function() { 
    $sider__1.slick('slickNext');
  });
 
  $('a.prev__1').click(function() {
    $sider__1.slick('slickPrev');
  });

  var $sider__1 = $('.single__slider__1');
  
  
    $sider__1.slick({
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 1000,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
      
        responsive: [{
            breakpoint: 1250,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
          },
          {
            breakpoint: 850,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
          }                     
        ]
    });
  
    

  
  $('a.next__3').click(function() { 
    $sider__3.slick('slickNext');
  });
 
  $('a.prev__3').click(function() {
    $sider__3.slick('slickPrev');
  });

  var $sider__3 = $('.single__slider__3');
  
  
    $sider__3.slick({
        arrows: false,
        dots: false,
        autoplay: false,
        speed: 1000,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
      
        responsive: [{
            breakpoint: 1250,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
          },
          {
            breakpoint: 850,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
          }                     
        ]
    });
  
  

  
  
  
  $('.home__3 .slid__arrow .next').click(function() { 
    $slider__home__3.slick('slickNext');
  });
 
  $('.home__3 .slid__arrow .prev').click(function() {
    $slider__home__3.slick('slickPrev');
  });

 var $slider__home__3 = $('.slider__home__3');

    $slider__home__3.slick({

        dots: true,
//  infinite: true,
//  speed: 300,
//
//
//  variableWidth: true,
//      
//      centerMode: true,
//  arrows: false,
//  slidesToShow: 5,
//  responsive: [
//    {
//      breakpoint: 4008,
//      settings: {
//        arrows: false,
////        centerMode: true,
//      variableWidth: true,
//      centerMode: true,
// 
//        slidesToShow: 5
//      }
//    },
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
////        centerMode: true,
//          variableWidth: false,
//             centerMode: false,
// 
//        slidesToShow: 1
//      }
//    },
//    {
//      breakpoint: 600,
//      settings: {
//        arrows: false,
//           variableWidth: false,
//     centerMode: false,
//        slidesToShow: 1
//      }
//    }
//  ]
      
//        fade: true,
//  cssEase: 'linear',
      
//       infinite: true,
    variableWidth: true, 
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
      
    customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<span class="dot"></span>';
    },
      
//  infinite: true,
//  speed: 1000,
//  slidesToShow: 1,
//  centerMode: true,
//  variableWidth: true
      
  responsive: [
    {
      breakpoint: 991,
      settings: {
       infinite: true,
       variableWidth: false, 

        
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
         slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
      
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
    }); 
  
  
   var $slider__home__4 = $('.slider__home__4');
  
  $('.home__4 .slid__arrow .next').click(function() { 
    $slider__home__4.slick('slickNext');
  });
 
  $('.home__4 .slid__arrow .prev').click(function() {
    $slider__home__4.slick('slickPrev');
  });



    $slider__home__4.slick({

      
       dots: false,
      arrows: false,
  centerMode: false,
  centerPadding: '0px',
  slidesToShow: 3,

  responsive: [
    {
      breakpoint: 1700,
      settings: {
         dots: false,
        arrows: false,
        centerMode: true,
//        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
      
      
      
//      
//  centerMode: true,
//  centerPadding: '60px',
//  slidesToShow: 3,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
//      
      
      
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
    });  
  
  
  
  
  
  
   var $smoll_slider = $('.smoll_slider');
  
  $('.home__5 .slid__arrow .next').click(function() { 
    $smoll_slider.slick('slickNext');
  });
 
  $('.home__5 .slid__arrow .prev').click(function() {
    $smoll_slider.slick('slickPrev');
  });



    $smoll_slider.slick({
//        arrows: false,
//        dots: false,
//        autoplay: true,
//        speed: 500,
////        infinite: true,
//        slidesToShow: 5,
//         slidesToScroll: 1,
//        responsive: [{
//                breakpoint: 1100,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 2,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 950, 
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            }
//        ]
////infinite: true, 
//  centerMode: true,
////  centerPadding: '100px',
//  slidesToShow: 5,
//      slidesToScroll: 1,
//      
//      speed: 500,
//      autoplay: true,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
//      
      arrows: false,
  centerMode: false,
//  centerPadding: '60px',
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        arrows: false,
        centerMode: false,
//        centerPadding: '40px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1480,
      settings: {
        arrows: false,
        centerMode: false,
//        centerPadding: '40px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1313,
      settings: {
        arrows: false,
        centerMode: false,
//        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 1200,
      settings: {
        infinite: true,
        variableWidth: false, 

        
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 630,
      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '50px',
//        slidesToShow: 2
        
        
               infinite: true,
       variableWidth: false, 

        
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
         slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 450,
      settings: {
//        arrows: false,
//        centerMode: true,
//        centerPadding: '50px',
//        slidesToShow: 2
        
        
        infinite: true,
        variableWidth: false, 

        arrows: false,
        centerMode: true,
        centerPadding: '40px',
         slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
      
      
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
    });
  
  
  
  
    
   var $slider__home__6 = $('.slider__home__6');
  
  $('.home__6 .slid__arrow .next').click(function() { 
    $slider__home__6.slick('slickNext');
  });
 
  $('.home__6 .slid__arrow .prev').click(function() {
    $slider__home__6.slick('slickPrev');
  });



    $slider__home__6.slick({
//        arrows: false,
//        dots: false,
//        autoplay: true,
//        speed: 500,
////        infinite: true,
//        slidesToShow: 5,
//         slidesToScroll: 1,
//        responsive: [{
//                breakpoint: 1100,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 2,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 950, 
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            }
//        ]
////infinite: true, 
//  centerMode: true,
////  centerPadding: '100px',
//  slidesToShow: 5,
//      slidesToScroll: 1,
//      
//      speed: 500,
//      autoplay: true,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
//      

      
      
      
             dots: false,
      arrows: false,
  centerMode: false,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
         dots: false,
        arrows: false,
        centerMode: true,
//        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
      
      
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
    });  
  
  
  
  
  
  
  
      
   var $slider__home__8 = $('.slider__home__8');
  
  $('.home__8 .slid__arrow .next').click(function() { 
    $slider__home__8.slick('slickNext');
  });
 
  $('.home__8 .slid__arrow .prev').click(function() {
    $slider__home__8.slick('slickPrev');
  });



    $slider__home__8.slick({
//        arrows: false,
//        dots: false,
//        autoplay: true,
//        speed: 500,
////        infinite: true,
//        slidesToShow: 5,
//         slidesToScroll: 1,
//        responsive: [{
//                breakpoint: 1100,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 2,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 950, 
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            }
//        ]
////infinite: true, 
//  centerMode: true,
////  centerPadding: '100px',
//  slidesToShow: 5,
//      slidesToScroll: 1,
//      
//      speed: 500,
//      autoplay: true,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
//      
      arrows: false,
//  centerMode: true,
//  centerPadding: '60px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
//        centerMode: true,
//        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
      
      
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
    });  
  
  
  
  
  
  
  
  
  
    
  
  
    
   var $slider__home__9 = $('.slider__home__9');
  
  $('.home__9 .slid__arrow .next').click(function() { 
    $slider__home__9.slick('slickNext');
  });
 
  $('.home__9 .slid__arrow .prev').click(function() {
    $slider__home__9.slick('slickPrev');
  });



    $slider__home__9.slick({
//        arrows: false,
//        dots: false,
//        autoplay: true,
//        speed: 500,
////        infinite: true,
//        slidesToShow: 5,
//         slidesToScroll: 1,
//        responsive: [{
//                breakpoint: 1100,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 2,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 950, 
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            }
//        ]
////infinite: true, 
//  centerMode: true,
////  centerPadding: '100px',
//  slidesToShow: 5,
//      slidesToScroll: 1,
//      
//      speed: 500,
//      autoplay: true,
//  responsive: [
//    {
//      breakpoint: 768,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 3
//      }
//    },
//    {
//      breakpoint: 480,
//      settings: {
//        arrows: false,
//        centerMode: true,
////        centerPadding: '40px',
//        slidesToShow: 1
//      }
//    }
//  ]
//      
            
dots: false,
arrows: false,
centerMode: false,
centerPadding: '0px',
slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
         dots: false,
        arrows: false,
        centerMode: true,
//        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: true,
         dots: false,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
      
      
//                customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
    });  
  
  
  
  
  
  
  
$('.user__slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 1200,
    //        infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(slider, i) {
    // this example would render "tabs" with titles
    return '<span class="dot"></span>';
    },
});
//  
//  
//  
//
//  var slideCount = null;
//    $goo__7__slid.on('init', function(event, slick){
//      slideCount = slick.slideCount;
//      setSlideCount();
//      setCurrentSlideNumber(slick.currentSlide);
//    });
//
//    $goo__7__slid.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//      setCurrentSlideNumber(nextSlide);
//    });
//
//    function setSlideCount() {
//      var $el = $('.slide-count-wrap').find('.gototal');
//      $el.text(slideCount);
//    }
//
//    function setCurrentSlideNumber(currentSlide) {
//      var $el = $('.slide-count-wrap').find('.current');
//      $el.text(currentSlide + 1);
//    } 
//  
  
// =========================================================== 
// section__8
// =========================================================== 
  
  
//$('.flat.section__9 .right__').click(function() { 
//  $gallery.slick('slickNext');
//});
//
//$('.flat.section__9 .left__').click(function() {
//  $gallery.slick('slickPrev');
//});
//
//  
//var $gallery = $('.flat.section__9 .box__slider__8');
//var neeslideCount = null;
//
//$( document ).ready(function() {
//    $gallery.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    });
//});
//
//$gallery.on('init', function(event, slick){
//  yyneeslideCount = slick.neeslideCount;
//  setneeslideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setneeslideCount() {
//  var $el = $('.rslide-count-wrap').find('.rtotal');
//  $el.text(yyneeslideCount);
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $el = $('.rslide-count-wrap').find('.rcurrent');
//  $el.text(currentSlide + 1);
//}
//  
  
  
// =========================================================== 
// END section__8
// ===========================================================   
  
// =========================================================== 
// section__8
// =========================================================== 
  
  
//$('.flat.section__9 .right__').click(function() { 
//  $section__9.slick('slickNext');
//});
//
//$('.flat.section__9 .left__').click(function() {
//  $section__9.slick('slickPrev');
//});
//
//  
//var $section__9 = $('.box__section__9');
//var relslideCount = null;
//
//$( document ).ready(function() {
//    $section__9.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    });
//});
//
//$section__9.on('init', function(event, slick){
//  slideCount = slick.slideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$section__9.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $reel = $('.slide-count-wrap').find('.total');
//  $reel.text(relslideCount);
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $reel = $('.slide-count-wrap').find('.current');
//  $reel.text(currentSlide + 1);
//}
//  
  
  
// =========================================================== 
// END section__8
// =========================================================== 
    
  
// =========================================================== 
// section__8
// =========================================================== 
  
//  
//$('.interior.section__6 .intright__').click(function() { 
//  $box__interior__6.slick('slickNext');
//});
//
//$('.interior.section__6 .intleft__').click(function() {
//  $box__interior__6.slick('slickPrev');
//});
//
//  
//var $box__interior__6 = $('.box__interior__6');
//var slideCount = null;
//
//$( document ).ready(function() {
//    $box__interior__6.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    });
//});
//
//$box__interior__6.on('init', function(event, slick){
//  slideCount = slick.slideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$box__interior__6.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $rel = $('.intslide-count-wrap').find('.inttotal');
//  $rel.text(slideCount);
//  
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $rel = $('.intslide-count-wrap').find('.intcurrent');
//  $rel.text(currentSlide + 1);
//}
//  
  
  
// =========================================================== 
// END section__8
// ===========================================================     
  
// =========================================================== 
// section__8
// =========================================================== 
  
  
//$('.flat.section__6 .intright__').click(function() { 
//  $box__flat__6.slick('slickNext');
//});
//
//$('.flat.section__6 .intleft__').click(function() {
//  $box__flat__6.slick('slickPrev');
//});
//
//  
//var $box__flat__6 = $('.box__interior__6');
//var flatslideCount = null;
//
//$( document ).ready(function() {
//    $box__flat__6.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    });
//});
//
//$box__flat__6.on('init', function(event, slick){
//  flatslideCount = slick.flatslideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$box__flat__6.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $flatrel = $('.intslide-count-wrap').find('.inttotal');
//  $flatrel.text(flatslideCount);
//  
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $flatrel = $('.intslide-count-wrap').find('.intcurrent');
//  $flatrel.text(currentSlide + 1);
//}
  
  
  
// =========================================================== 
// END section__8
// =========================================================== 
    
// =========================================================== 
// section__turnkey 6
// =========================================================== 
  
  
//$('.turnkey.section__6 .intright__').click(function() { 
//  $box__turnkey__6.slick('slickNext');
//});
//
//$('.turnkey.section__6 .intleft__').click(function() {
//  $box__turnkey__6.slick('slickPrev');
//});
//
//  
//var $box__turnkey__6 = $('.box__turnkey__6');
//var flatslideCount = null;
//
//$( document ).ready(function() {
//    $box__turnkey__6.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    });
//});
//
//$box__turnkey__6.on('init', function(event, slick){
//  flatslideCount = slick.flatslideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$box__turnkey__6.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $flatrel = $('.intslide-count-wrap').find('.inttotal');
//  $flatrel.text(flatslideCount);
//  
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $flatrel = $('.intslide-count-wrap').find('.intcurrent');
//  $flatrel.text(currentSlide + 1);
//}
  
  
  
// =========================================================== 
// END section__turnkey 6
// =========================================================== 

    
  
  
  
//  $('.slick2__slick').slick({
//     arrows: false, 
//  dots: false,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 1,
//    customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
//  responsive: [
//    {
//           breakpoint: 9999999,
//      settings: "unslick"
//    },
//    {
//      breakpoint: 991,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2,
//              dots: true,
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1,
//              dots: true,
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
//});
  
  

//       $('.section__3 .slider__3__next').click(function() { 
//    $sidert.slick('slickNext');
//  });
// 
//  $('.section__3 .slider__3__prev').click(function() {
//    $sidert.slick('slickPrev');
//  });
//
//
//  var $sidert = $('.slider__mobile__3');
//  
//  $sidert.slick({
//     arrows: false, 
//  dots: false,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 1,
//    
//  responsive: [
//    {
//           breakpoint: 9999999,
//      settings: "unslick"
//    },
//    {
//      breakpoint: 991,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 1
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
//});
//   


     
//     $(this).one(function(e){
//               e.preventDefault();   
//     });
  
  
  
  
  
//    var $sidertrrt = $('.interior.section__2 .container>.row:nth-child(2)');
//  
//  $sidertrrt.slick({
//     arrows: false, 
//  dots: true,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 2,
//       customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
//  responsive: [
//    {
//           breakpoint: 9999999,
//      settings: "unslick"
//    },
//    {
//      breakpoint: 991,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
//});
//    
    
  
  
  
  
  
  
//    var $flatsection2 = $('.flat.section__2 .container>.row:nth-child(2)');
//  
//  $flatsection2.slick({
//     arrows: false, 
//  dots: true,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 2,
//       customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
//  responsive: [
//    {
//           breakpoint: 9999999,
//      settings: "unslick"
//    },
//    {
//      breakpoint: 991,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
//});
  
  
  
  
  
  
  
  

//    $('.prise__slider').slick({
//        arrows: false,
//        dots: false,
//        autoplay: true,
//        speed: 500,
//        infinite: false,
//        slidesToShow: 5,
//        slidesToScroll: 1,
//        responsive: [{
//                breakpoint: 1350,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 3,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },{
//                breakpoint: 1150,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 2,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            },
//            {
//                breakpoint: 730, 
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                    slidesToScroll: 1,
//                    infinite: true,
//                }
//            }
//        ]
//    });


// =========================================================== 
// END SLICK SLIDER FULL NAVIGATION 
// ===========================================================       
    

    
  
  
//  
//class cssClassTogglerScroll{
//  constructor(data){
//    this.options = {
//      root: null,
//      rootMargin: "0px",
//      threshold: data.threshold
//    };
//
//    this.observer = new IntersectionObserver((entries, observer)=>{
//      entries.forEach((entry) => {
//      if(entry.isIntersecting){
//        if(data.cssClass){
//          entry.target.classList.add(data.cssClass);
//        }
//        if(data.onVisible){
//          data.onVisible();
//        }
//      }
//      else{
//        if(data.cssClass){
//          entry.target.classList.remove(data.cssClass);
//        }
//        if(data.onHidden){
//          data.onHidden();
//        }
//      }
//    });
//
//  }, this.options);
//    this.observer.observe(data.element);
//
//  }
//}
//
//
//
//for(let div of document.querySelectorAll('section')){
//
//  new cssClassTogglerScroll({
//    element: div,
//    cssClass: 'active',
//    threshold: 0.1,
//    onVisible: () => {
//
//    },
//    onHidden: () => {
////      console.log('section__products active');
//    }
//  });
//}
//    

  
// =========================================================== 
// Fancybox
// =========================================================== 


    //$("#open-policy").on('click', function() {
    //  
    //  $.fancybox.open({
    //    src : '',
    //    type : 'html',
    //    smallBtn : false
    //  });
    //    
    ////    $('.next-form').click(function() {
    ////
    ////        $.fancybox.open({
    ////	   src  : '#trueModal'
    ////
    ////});
    ////});
    //  
    //});


    
// =========================================================== 
// END Fancybox
// ===========================================================    
    
    
    
    
    
// =========================================================== 
// INPUT MASK
// ===========================================================    



// =========================================================== 
// END INPUT MASK
// ===========================================================     
    
    
    
    
    
// =========================================================== 
// checkbox input click
// ===========================================================   


    //$(document).ready(function(){ 
    //    
    //    
    //    
    //  $('[type="checkbox"]').click(function(){
    //      
    ////      console.log('1');
    //      
    //  
    //      
    //
    //        if ($(this).prop('checked')) {
    //           $('#bot').addClass('chek');
    //          
    //              $('#bot').removeAttr('disabled');
    //             $('[type="checkbox"]').removeClass('errore');
    //            
    //            
    //        } else {
    //             $('#bot').attr('disabled', true);
    //            $('[type="checkbox"]').addClass('errore');
    //        };
    //
    //  });
    //
    //});


    
// =========================================================== 
// END checkbox input click
// ===========================================================    
    
    
    
// =========================================================== 
// INPUT MASK
// ===========================================================    

//var canvas = document.getElementById('cont');
//var clone = document.getElementById('blurCanvasBottom');
//
//var cloneCtx = clone.getContext('2d');
//var ctx = canvas.getContext('2d');
//
//
//var w = $('#blurCanvasTop').width();
//var h = $('#blurCanvasTop').height();
//
//var ww = $(window).width();
//var wh = $(window).height();
//canvas.width = ww;
//canvas.height= wh;
//var partCount = 100;
//var particles = [];
//
//function particle(){
//  this.color = 'rgba(255,255,255,'+ Math.random()+')';
////  console.log(this.color);
//  this.x = randomInt(0,ww);
//  this.y = randomInt(0,wh);
//  this.direction = {
//    "x": -1 + Math.random() * 2,
//    "y": -1 + Math.random() * 2
//  };
//  this.vx = 0.3 * Math.random();
//  this.vy = 0.3 * Math.random();
//  this.radius = randomInt(2,3);
//  this.float = function(){
//    this.x += this.vx * this.direction.x;
//    this.y += this.vy * this.direction.y;
//  };
//  this.changeDirection = function (axis) {
//    this.direction[axis] *= -1;
//  };
//  this.boundaryCheck = function () {
//            if (this.x >= ww) {
//                this.x = ww;
//                this.changeDirection("x");
//            } else if (this.x <= 0) {
//                this.x = 0;
//                this.changeDirection("x");
//            }
//            if (this.y >= wh) {
//                this.y = wh;
//                this.changeDirection("y");
//            } else if (this.y <= 0) {
//                this.y = 0;
//                this.changeDirection("y");
//            }
//        };
//  this.draw = function () {
//    ctx.beginPath();
//    ctx.fillStyle = this.color;
//    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//    ctx.fill();
//  };
//}
//function clearCanvas() {
// cloneCtx.clearRect(0, 0, ww, wh);
// ctx.clearRect(0, 0, ww, wh);
//}
//function createParticles(){
//  for (i=0;i<partCount;i++){
//    var p = new particle();
//    particles.push(p);
//  }
//}
//function drawParticles() {
//   for (i=0;i<particles.length;i++) {
//     p = particles[i];
//     p.draw();
//   }
//}
//function updateParticles() {
//        for (var i = particles.length - 1; i >= 0; i--) {
//            p = particles[i];
//            p.float();
//            p.boundaryCheck();
//        }
//}
//createParticles();
//drawParticles();
//function animateParticles() {
//        clearCanvas();
//        drawParticles();
//        updateParticles();
//        cloneCtx.drawImage(canvas, 0, 0);
//        requestAnimationFrame(animateParticles);
//    }
//requestAnimationFrame(animateParticles);
//cloneCtx.drawImage(canvas, 0, 0);
//
//$(window).on('resize',function(){
//  ww = $(window).width();
//  wh = $(window).height();
//  canvas.width = ww;
//  canvas.height= wh;
//  clearCanvas();
//  particles = [];
//  createParticles();
//  drawParticles();
//});
//function randomInt(min,max)
//{
//    return Math.floor(Math.random()*(max-min+1)+min);
//}
//function velocityInt(min,max)
//{
//    return Math.random()*(max-min+1)+min;
//}

// =========================================================== 
// END INPUT MASK
// ===========================================================     

  
  
// =========================================================== 
// MASSEDG
// ===========================================================  
  
//  $('.intercom-launcher').click(function(){
//    $('.massage__form').toggleClass('open');
////    $('body').toggleClass('back');
//    $('.intercom-lightweight-app-launcher-icon-open i').toggleClass('open');
//    $('.intercom-lightweight-app-launcher-icon-open svg').toggleClass('none');
//                                
//      
// });
  
  
// =========================================================== 
// END CLICK MASSEDG
// ===========================================================    
  
  
// =========================================================== 
// END CLICK MASSEDG
// ===========================================================    
  
  
  
  
  
// =========================================================== ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== 
//   Section__ Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home
// =========================================================== ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== 
  
//  
// 
//  var $sidertrr = $('.home.section__2 .list');
//  
//  $sidertrr.slick({
//     arrows: false, 
//  dots: true,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 2,
//       customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
//  responsive: [
//    {
//           breakpoint: 9999999,
//      settings: "unslick"
//    },
//    {
//      breakpoint: 991,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
//});
//  
//  
//  
//
//  var $sidertrrt = $('.home.section__3 .container>.row:nth-child(2)');
//  
//  $sidertrrt.slick({
//     arrows: false, 
//  dots: true,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 2,
//       customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//    },
//  responsive: [
//    {
//           breakpoint: 9999999,
//      settings: "unslick"
//    },
//    {
//      breakpoint: 991,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2
//      }
//    },
//    {
//      breakpoint: 601,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1
//      }
//    }
//    // You can unslick at a given breakpoint now by adding:
//    // settings: "unslick"
//    // instead of a settings object
//  ]
//});
//  
//  
//$("section.home.section__1 .cont__ .box__").one('click', function(e) {
// e.preventDefault();   
//}); 
//  
//  
//
//  
//  
//  
//  
//    
//$('.home.section__8 .left__').click(function() { 
//  $gallery.slick('slickNext');
//});
//
//$('.home.section__8 .right__').click(function() {
//  $gallery.slick('slickPrev');
//});
//
//  
//var $gallery = $('.home.section__8 .box__slider__8');
//
//
//$( document ).ready(function() {
//    $gallery.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    }); 
//});
//
//var slideCount = null;
//
//$gallery.on('init', function(event, slick){
//  slideCount = slick.slideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $el = $('.slide-count-wrap').find('.total');
//  $el.text(slideCount);
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $el = $('.slide-count-wrap').find('.current');
//  $el.text(currentSlide + 1);
//} 
//  
//  
//  
//  
//    $(".home.section__8 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.home.section__8 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".home.section__8 .box__cont").removeClass('open');
//    
//  $(".home.section__8 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.home.section__8 .box__slider__8').slick('refresh');
//
//
//    
//  });
//  
//  
//    
//  $(".interior.section__6 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.interior.section__6 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".interior.section__6 .box__cont").removeClass('open');
//    
//  $(".interior.section__6 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__interior__6').slick('refresh');
//
//
//    
//  });
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  
//  $('.defer').click(function(){
//    $('.open').toggleClass('oppenned');
//  });
//    
////  $('a.ion-close-round').click(function(){
////    $('.open').removeClass('oppenned');
////  });
//      
//  $('.open .sub-menu li a').click(function(){
//    $('.open').toggleClass('oppenned');
////    $('body').toggleClass('back');
//  });
//  
////  $('.section__4 .purl').click(function(e){
////     e.preventDefault();
////      
////     $(this).toggleClass('ion-android-arrow-down ion-android-arrow-up');
////    $('.section__4>.container>.row:nth-child(3)').toggleClass('select__');
////  });
////  
//  
//  
//$(".section__8 .list li").click(function(e){
//  e.preventDefault();
//  
//  $(this).toggleClass('active');
//  
//  $(this).toggleClass('ion-ios-plus ion-ios-minus');
//
//
////   $("[class*='calculators__tab__menu'] a span").removeClass('active');
////  $(this).find("span").addClass('active');
//
////  var activeAdd = $(this).data('minactive');
//  
//
//
////  $(".section__7 .list li:nth-child(" + activeAdd + ")").addClass('active'); 
//   
//});
//  
//
//  
//  
//$(".home.section__9 .list li").click(function(e){
//  
////    e.preventDefault();
//  
//  $(this).toggleClass('active ');
//  
//  $(this).toggleClass('ion-ios-plus-empty ion-ios-minus-empty');
//
//
////   $("[class*='calculators__tab__menu'] a span").removeClass('active');
////  $(this).find("span").addClass('active');
//
////  var activeAdd = $(this).data('minactive');
//
////  $(".section__7 .list li:nth-child(" + activeAdd + ")").addClass('active'); 
//   
//});  
//    
//  
//  
//  
//  
//  $(".home.section__5  .list li").click(function(e){
//  e.preventDefault();
//  
//  $('.home.section__5  .list li').removeClass('active');
//  $(this).addClass('active');
//  const inform = $(this).data('num');
//$(".home.section__5  .row[data-sel*='num']").addClass('none').removeClass('active');
//  $(".home.section__5  .row[data-sel='num" + inform + "']").removeClass('none').addClass('active');
////  $(this).toggleClass('select');
//});
//  
//  $(".home.section__5 ._link").click(function(e){
//    e.preventDefault();
//    $(this).text(($(this).text() == 'Скрыть') ? 'Подробнее' : 'Скрыть');
////    $(this).text(  text == "Подробнее" ? "Подробнее" : "Подробнее1");
////    $(this).find('').toggleClass('active');
//    $(this).prev('').toggleClass('active');
//        $(this).toggleClass('open');
//  });  
//  
//  
//  
//    
//  
//  $(".home.section__8 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.home.section__8 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".home.section__8 .box__cont").removeClass('open');
//    
//  $(".home.section__8 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__slider__8').slick('refresh');
//
//
//    
//  });

  
// =========================================================== ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== 
//  END Section__ Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home Home
// =========================================================== ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  
  
  
  
  
    
//$(".section__6  .list.box__color li").click(function(e){
//  e.preventDefault();
//  $(".section__6  .list.box__color li").removeClass('select');
//  $(this).toggleClass('select');
//});
//    
//  
//$(".section__6  .list.box__list li").click(function(e){
//  e.preventDefault();
//  $(".section__6  .list.box__list li").removeClass('select');
//  $(this).toggleClass('select');
//});
//  
  
  
  
  
//    
//$(".interior.section__7 .list li").click(function(e){
//  e.preventDefault();
//  
//  $(this).toggleClass('active');
//  
//  $(this).toggleClass('ion-ios-plus ion-ios-minus');
//
//
////   $("[class*='calculators__tab__menu'] a span").removeClass('active');
////  $(this).find("span").addClass('active');
//
////  var activeAdd = $(this).data('minactive');
//  
//
//
////  $(".section__7 .list li:nth-child(" + activeAdd + ")").addClass('active'); 
//   
//});
//  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
//$(".turnkey.section__7 .list li").click(function(e){
//  
////    e.preventDefault();
//  
//  $(this).toggleClass('active ');
//  
//  $(this).toggleClass('ion-ios-plus-empty ion-ios-minus-empty');
//
//
////   $("[class*='calculators__tab__menu'] a span").removeClass('active');
////  $(this).find("span").addClass('active');
//
////  var activeAdd = $(this).data('minactive');
//
////  $(".section__7 .list li:nth-child(" + activeAdd + ")").addClass('active'); 
//   
//});
      
  
  
  
//$(".flat.section__7 .list li").click(function(e){
//  
////    e.preventDefault();
//  
//  $(this).toggleClass('active ');
//  
//  $(this).toggleClass('ion-ios-plus-empty ion-ios-minus-empty');
//
//
////   $("[class*='calculators__tab__menu'] a span").removeClass('active');
////  $(this).find("span").addClass('active');
//
////  var activeAdd = $(this).data('minactive');
//
////  $(".section__7 .list li:nth-child(" + activeAdd + ")").addClass('active'); 
//   
//});
    
  
//$(".interior.section__7 .list li").click(function(e){
//  
////    e.preventDefault();
//  
//  $(this).toggleClass('active ');
//  
//  $(this).toggleClass('ion-ios-plus-empty ion-ios-minus-empty');
//
//
////   $("[class*='calculators__tab__menu'] a span").removeClass('active');
////  $(this).find("span").addClass('active');
//
////  var activeAdd = $(this).data('minactive');
//
////  $(".section__7 .list li:nth-child(" + activeAdd + ")").addClass('active'); 
//   
//});
  
  
  
  
  

  
  
  
//  
//  $(".turnkey.section__3 .box__link").click(function(e){
//    e.preventDefault();
//    $(this).text(($(this).text() == 'Скрыть') ? 'Подробнее' : 'Скрыть');
////    $(this).text(  text == "Подробнее" ? "Подробнее" : "Подробнее1");
////    $(this).find('').toggleClass('active');
//    $(this).prev('').toggleClass('active');
//        $(this).toggleClass('open');
//  });
//  
//  $(".flat.section__3 .box__link").click(function(e){
//    e.preventDefault();
//    $(this).text(($(this).text() == 'Скрыть') ? 'Подробнее' : 'Скрыть');
////    $(this).text(  text == "Подробнее" ? "Подробнее" : "Подробнее1");
////    $(this).find('').toggleClass('active');
//    $(this).prev('').toggleClass('active');
//        $(this).toggleClass('open');
//  });
//  
//  
////box__cont 
  

  
  
// =========================================================== 
// END section__8
// =========================================================== 
    
// =========================================================== 
// box__select section__turnkey 6
// =========================================================== 
  
//box__cont 
  
//  $(".turnkey.section__6 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.turnkey.section__6 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".turnkey.section__6 .box__cont").removeClass('open');
//    
//  $(".turnkey.section__6 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__turnkey__6').slick('refresh');
//
//
//    
//  });
  //box__cont 
  
  
// =========================================================== 
// END box__select section__turnkey 6
// =========================================================== 
    
// =========================================================== 
// section__turnkey 6
// =========================================================== 
  
  
//  $(".flat.section__9 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.flat.section__9 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".flat.section__9 .box__cont").removeClass('open');
//    
//  $(".flat.section__9 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__slider__8').slick('refresh');
//
//
//    
//  });
  
//  
//    
//  $(".interior.section__6 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.interior.section__6 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".interior.section__6 .box__cont").removeClass('open');
//    
//  $(".interior.section__6 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__interior__6').slick('refresh');
//
//
//    
//  });
//  
//  
//  
//  


  
 
// =========================================================== 
//  Turnkey
// ===========================================================    
      
  
  
  
// =========================================================== 
// section__interior 
// =========================================================== 
  
  
//  $(".flat.section__9 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.flat.section__9 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".flat.section__9 .box__cont").removeClass('open');
//    
//  $(".flat.section__9 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
    
//     lazySizes.init();
    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__slider__8').slick('refresh');
//
//
//    
//  });
//  
//  
//    
//  $(".interior.section__6 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.interior.section__6 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".interior.section__6 .box__cont").removeClass('open');
//    
//  $(".interior.section__6 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__interior__6').slick('refresh');
//
//
//    
//  });
//  
//  
//  
//  
//$("section.home.section__1 .cont__ .box__").one('click', function(e) {
// e.preventDefault();   
//});
//     
////     $(this).one(function(e){
////               e.preventDefault();   
////     });

  
 
// =========================================================== 
//  Section__interior 
// ===========================================================   
  
  
  
  
  
  
  
  
  
//  
//    $(".interior.section__6 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.interior.section__6 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".interior.section__6 .box__cont").removeClass('open');
//    
//  $(".interior.section__6 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.box__interior__6').slick('refresh');
//
//
//    
//  });
//  
//
//  
//  // ================================================================================================================================================================= 
//  
//  
//  
//$('.interior.section__6 .intright__').click(function() { 
//  $gallery.slick('slickNext');
//});
//
//$('.interior.section__6 .intleft__').click(function() {
//  $gallery.slick('slickPrev');
//});
//
//  
//var $gallery = $('.interior.section__6 .box__interior__6');
//
//
//$( document ).ready(function() {
//    $gallery.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    }); 
//});
//
//var slideCount = null;
//
//$gallery.on('init', function(event, slick){
//  slideCount = slick.slideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $el = $('.intslide-count-wrap').find('.inttotal');
//  $el.text(slideCount);
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $el = $('.intslide-count-wrap').find('.intcurrent');
//  $el.text(currentSlide + 1);
//} 
//  
//  
//  
//// ================================================================================================================================================================= 
//  
  
    
  
    var $sidertrrt = $('.slider__');
  
  $sidertrrt.slick({
     arrows: false, 
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
      adaptiveHeight: true,
       customPaging: function(slider, i) {
      // this example would render "tabs" with titles
      return '<span class="dot"></span>';
    },
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  
  
//  
//// ================================================================================================================================================================= 
//  
//  
//
//  
//    $(".interior.section__3 .box__link").click(function(e){
//    e.preventDefault();
//    $(this).text(($(this).text() == 'Скрыть') ? 'Подробнее' : 'Скрыть');
////    $(this).text(  text == "Подробнее" ? "Подробнее" : "Подробнее1");
////    $(this).find('').toggleClass('active');
//    $(this).prev('').toggleClass('active');
//        $(this).toggleClass('open');
//  });
//  

  
  // =========================================================== 
// END Section__interior 
// ===========================================================   
  
  
  
  
  
  
  
  
  
  
 
// =========================================================== ========== ========== ========== ========== ========== ========== ========== ========== ========== ========== 
//  Section__ Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat Flat
// =========================================================== ========== ========== ========== ========== ========== ========== ========== ========== ========== ==========  
  
//
//  
//  
//  $(".flat.section__9 .box__select a").click(function(e){
//    e.preventDefault();
//
//    $('.flat.section__9 .box__select a').removeClass('active');
//    $(this).addClass('active');
//    
//  var rinform = $(this).data('numrownum');
////    console.log(rinform);
//  $(".flat.section__9 .box__cont").removeClass('open');
//    
//  $(".flat.section__9 .box__cont[data-rrownum='" + rinform + "']").addClass('open');
//    
////     lazySizes.init();
//    
//
////    
////     $('.home.section__8 .right__').click(function() { 
////      $rgallery.slick('slickNext');
////    });
////
////    $('.home.section__8 .left__').click(function() {
////      $rgallery.slick('slickPrev');
////    });
//
//
//     $('.flat.section__9 .box__slider__8').slick('refresh');
//
//
//    
//  });
//  

  
  // ================================================================================================================================================================= 
  
  
  
//$('.flat.section__9 .left__').click(function() { 
//  $gallery.slick('slickNext');
//});
//
//$('.flat.section__9 .right__').click(function() {
//  $gallery.slick('slickPrev');
//});
//
//  
//var $gallery = $('.flat.section__9 .box__slider__8');
//
//
//$( document ).ready(function() {
//    $gallery.slick({
//      arrows: false,
//      speed: 550,
//      fade: true,
//      cssEase: 'linear',
//      swipe: true,
//      swipeToSlide: true,
//      touchThreshold: 10
//    }); 
//});
//
//var slideCount = null;
//
//$gallery.on('init', function(event, slick){
//  slideCount = slick.slideCount;
//  setSlideCount();
//  setCurrentSlideNumber(slick.currentSlide);
//});
//
//$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//  setCurrentSlideNumber(nextSlide);
//});
//
//function setSlideCount() {
//  var $el = $('.rslide-count-wrap').find('.rtotal');
//  $el.text(slideCount);
//}
//
//function setCurrentSlideNumber(currentSlide) {
//  var $el = $('.rslide-count-wrap').find('.rcurrent');
//  $el.text(currentSlide + 1);
//} 
  
// ================================================================================================================================================================= 
  
//  var $sidertrrt = $('.flat.section__2 .container>.row:nth-child(2)');
//  
//  $sidertrrt.slick({
//    arrows: false, 
//    dots: true,
//    infinite: false,
//    speed: 300,
//    slidesToShow: 2,
//    slidesToScroll: 2,
//      adaptiveHeight: true,
//      customPaging: function(slider, i) {
//      // this example would render "tabs" with titles
//      return '<span class="dot"></span>';
//      },
//      responsive: [
//        {
//               breakpoint: 9999999,
//          settings: "unslick"
//        },
//        {
//          breakpoint: 991,
//          settings: {
//            slidesToShow: 2,
//            slidesToScroll: 2
//          }
//        },
//        {
//          breakpoint: 601,
//          settings: {
//            slidesToShow: 1,
//            slidesToScroll: 1
//          }
//        }
//        // You can unslick at a given breakpoint now by adding:
//        // settings: "unslick"
//        // instead of a settings object
//      ]
//  });

// ================================================================================================================================================================= 

//  $(".flat.section__3 .box__link").click(function(e){
//    e.preventDefault();
//    $(this).text(($(this).text() == 'Скрыть') ? 'Подробнее' : 'Скрыть');
////    $(this).text(  text == "Подробнее" ? "Подробнее" : "Подробнее1");
////    $(this).find('').toggleClass('active');
//    $(this).prev('').toggleClass('active');
//        $(this).toggleClass('open');
//  });
  
// ================================================================================================================================================================= 
  

  
  

});

