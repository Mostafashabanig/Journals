


(function ($) {

  "use strict";

  // multi level dropdown menu
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
    }
    var $subMenu = $(this).next('.dropdown-menu');
    $subMenu.toggleClass('show');

    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-submenu .show').removeClass('show');
    });
    return false;
  });


  // data-background    
  $(document).on('ready', function () {
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });
  });


  // navbar Search
  if ($('.search-box-outer').length) {
    $('.search-box-outer').on('click', function () {
      $('body').addClass('search-active');
    });
    $('.close-search').on('click', function () {
      $('body').removeClass('search-active');
    });
  }


  // wow init
  new WOW().init();


  // hero slider
  $('.hero-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      "<i class='far fa-long-arrow-left'></i>",
      "<i class='far fa-long-arrow-right'></i>"
    ],

    onInitialized: function (event) {
      var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
      doAnimations($firstAnimatingElements);
    },

    onChanged: function (event) {
      var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
      doAnimations($firstAnimatingElements);
    }
  });

  //hero slider do animations
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationDuration = $this.data('duration');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay,
        'animation-duration': $animationDuration,
        '-webkit-animation-duration': $animationDuration,
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }


  // testimonial-slider
  $('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });


  // event-slider
  $('.event-slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots: true,
    autoplay: false,
    navText: [
      "<i class='far fa-angle-left'></i>",
      "<i class='far fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  // department-slider
  $('.department-slider').owlCarousel({
    loop: true,
    margin: 25,
    nav: true,
    dots: true,
    autoplay: false,
    navText: [
      "<i class='far fa-angle-left'></i>",
      "<i class='far fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });


  // partner-slider
  $('.partner-slider').owlCarousel({
    loop: true,
    margin: 70,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 6
      }
    }
  });


  // preloader
  $(window).on('load', function () {
    $(".preloader").fadeOut("slow");
  });


  // fun fact counter
  $('.counter').countTo();
  $('.counter-box').appear(function () {
    $('.counter').countTo();
  }, {
    accY: -100
  });


  // magnific popup init
  $(".popup-gallery").magnificPopup({
    delegate: '.popup-img',
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });



  // scroll to top
  $(window).on('scroll', function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $("#scroll-top").addClass('active');
    } else {
      $("#scroll-top").removeClass('active');
    }
  });

  $("#scroll-top").on('click', function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });


  // navbar fixed top
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass("fixed-top");
    } else {
      $('.navbar').removeClass("fixed-top");
    }
  });


  // project filter
  $(window).on('load', function () {
    if ($(".filter-box").children().length > 0) {
      $(".filter-box").isotope({
        itemSelector: '.filter-item',
        masonry: {
          columnWidth: 1
        },
      });

      $('.filter-btn').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $(".filter-box").isotope({ filter: filterValue });
      });

      $(".filter-btn li").each(function () {
        $(this).on("click", function () {
          $(this).siblings("li.active").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  });


  // progress bar
  $(document).ready(function () {
    var progressBar = $('.progress');
    if (progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data('value');
          Self.find('.progress-bar').animate({
            width: progressValue + '%'
          }, 1000);
        });
      })
    }
  });


  // countdown
  if ($('#countdown').length) {
    $('#countdown').countdown('2030/01/30', function (event) {
      $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
    });
  }


  // copywrite date
  let date = new Date().getFullYear();
  $("#date").html(date);


})(jQuery);








$(document).ready(function () {


  $('.searchPage .sidebar input[type="checkbox"]').each(function (index) {
    $(this).attr('id', 'checkbox-' + index);
    $(this).closest('label').attr('for', 'checkbox-' + index);
  });

  $('.searchPage .sidebar .box').each(function (boxIndex) {
    $(this).find('input[type="checkbox"]').attr('name', 'filter-' + boxIndex);

    $(this).find('.boxBody').show();
    // $(this).find('.collapseIcon').addClass('rotated');
  });


  $('.searchPage .sidebar .collapseIcon').on('click', function (e) {
    e.stopPropagation();
    $(this).closest('.box').find('.boxBody').slideToggle('fast');
    $(this).toggleClass('rotated');
    $(this).closest('.box').toggleClass("collapsed");
  });


  $('.searchPage .sidebar input[type="checkbox"]').on('change', function () {
    const anyChecked = $(this).closest('.box').find('input[type="checkbox"]:checked').length > 0;


    if (anyChecked) {
      $(this).closest('.box').find('.cancel').fadeIn('fast');
    } else {
      $(this).closest('.box').find('.cancel').fadeOut('fast');
    }


    const filterData = {};
    $('.searchPage .sidebar .box').each(function () {
      const title = $(this).find('h5').text().trim();
      const checkedValues = [];

      $(this).find('input[type="checkbox"]:checked').each(function () {
        checkedValues.push($(this).val());
      });

      if (checkedValues.length > 0) {
        filterData[title] = checkedValues;
      }
    });


    console.log('filterData: ', filterData);


  });

  // when cancel button clicked
  $('.searchPage .sidebar .cancel').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    $(this).closest('.box').find('input[type="checkbox"]:checked').prop('checked', false).trigger('change');


  });
});




//left to right or vice versa
$(document).ready(function () {
  $(function(){
    var persianRe = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;
    var englishRe = /[A-Za-z]/;
  
    $(".searchPage .sidebar .checkbox-wrapper-65 .cbx+span").each(function(){
      var $span = $(this);
      var txt = $span.text();
      var lang; 
  
     
      for(var i=0, ch; i<txt.length; i++){
        ch = txt.charAt(i);
        if (persianRe.test(ch)) { lang = "fa"; break; }
        if (englishRe.test(ch)) { lang = "en"; break; }
       
      }
      
      if (!lang) lang = "fa";
  
      
      if (lang === "en") {
        $span.css({
          "direction": "ltr",
          "text-align": "left"
        });
        $span.closest('label').css({
          "justify-content":"space-between",
        })
      } else {
        $span.css({
          "direction": "rtl",
          "text-align": "right"
        });
      }
    });


    $(".searchPage .jTitle").each(function(){
      var $span = $(this);
      var txt = $span.text();
      var lang; 
  
     
      for(var i=0, ch; i<txt.length; i++){
        ch = txt.charAt(i);
        if (persianRe.test(ch)) { lang = "fa"; break; }
        if (englishRe.test(ch)) { lang = "en"; break; }
       
      }
      
      if (!lang) lang = "fa";
  
      
      if (lang === "en") {
        $(this).css({
          "direction": "ltr",
          "text-align": "left"
        });
        $(this).closest('td').css({
          "direction": "ltr",
        })
      } else {
        $(this).css({
          "direction": "rtl",
          "text-align": "right"
        });
      }
    });
  });
  
});




// search page search inside sidebar box
$(document).ready(function() {
  var $input = $('.filterSearchBox input');
  var $clear = $('.filterSearchBox .bi-x');
  var $items = $('#filterOwner .boxBody ul li');


  $clear.hide();


  $input.on('input', function() {
    var val = $(this).val().trim().toLowerCase();

    
    if (val.length) {
      $clear.css("display","flex");
    } else {
      $clear.hide();
    }


    $items.each(function() {
      var text = $(this).find('label span').last().text().toLowerCase();
      if (text.indexOf(val) !== -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });


  $clear.on('click', function() {
    $input.val('').trigger('input');
    $input.focus();
  });
});






//header: date 
$(document).ready(function () {
    moment.loadPersian({ usePersianDigits: true });

    const todayJalali = moment().format('dddd jD jMMMM jYYYY');
    const formattedDate = `امروز: ${todayJalali}`;

    $('.header-top-left .header-top-social').text(formattedDate);
});







// index: searchBox filters binding
$(document).ready(function() {
  $('.searchBox select').select2({ allowClear: true });
  var originalOptionsMap = {};
  function updateDependencies(parentSelector, childSelector, placeholderText) {
    var $parent = $(parentSelector);
    var $child = $(childSelector);

    if (!originalOptionsMap[childSelector]) {
      originalOptionsMap[childSelector] = $child.html();
    }

    function initializeChild() {
      $child.html('<option value="">' + placeholderText + '</option>');
      $child.select2('destroy').select2({ allowClear: true });
      $child.prop('disabled', false);
    }

    initializeChild();

    $parent.on('change', function() {
      var selectedGroup = $parent.val();

      $child.prop('disabled', true);
      $child.select2('destroy').html('<option value="">درحال بارگیری...</option>').select2({ allowClear: true });

      setTimeout(function() {
        var optionsHtml = '<option value="">' + placeholderText + '</option>';

        if (selectedGroup) {

          $(originalOptionsMap[childSelector]).filter('option').each(function() {
            var $option = $(this);
            if ($option.data('group') == selectedGroup) {
              optionsHtml += $option.prop('outerHTML');
            }
          });
        }

        $child.html(optionsHtml).select2({ allowClear: true });
        $child.prop('disabled', false);
      }, 250);
    });
  }

  updateDependencies('#selectFilter1', '#selectFilter2', 'زیرگروه');
  updateDependencies('#selectFilter4', '#selectFilter5', 'زیرگروه');
});








// alert searched data
//   $(document).ready(function() {
//   $('.indexPage .searchBox input[type="submit"]').click(function(event) {
//     event.preventDefault(); 

//     var title = $('input[name="query"]').val();
//     var group = $('select[name="Group"]').val();
//     var subgroup = $('select[name="SubGroupId"]').val();
//     var language = $('select[name="Language"]').val();
//     var applicant = $('select[name="Applicant"]').val();
//     var university = $('select[name="UniversityId"]').val();
//     var status = $('select[name="Status"]').val();
   
//     alert(title+" "+group);
//   });
// });









//Register popup
$(document).ready(function () {
  $('.registerPopupBackground').on('click', function (event) {
    closeRegisterPopup();
  });

  $('header .theme-btn').on('click', function (event) {
    // alert('ssdfsd');
    openRegisterPopup();
  });

  $('div.registerPopup .box .boxHeader i.bi-x').on('click', function (event) {
    closeRegisterPopup();
  });


  function openRegisterPopup() {
    $('.registerPopup').fadeIn('fast');
    $('.registerPopupBackground').fadeIn('fast');
  }
  function closeRegisterPopup() {
    $('.registerPopup').fadeOut('fast');
    $('.registerPopupBackground').fadeOut('fast');
  }

  $('div.registerPopup a.goRegisterBtn').on('click', function (e) {
    e.preventDefault();


    $(this).closest('.box').hide();
    $('#enterSms.box').show();

  });

  $('div.registerPopup a.goLoginBtn').on('click', function (e) {
    e.preventDefault();

    $(this).closest('.box').hide();
    $('#sendSms.box').show();

  });

});



//submitting the login/reg popup
$(function () {

    $(".submitLogin").on("click", function (e) {
        e.preventDefault();
        let form = $(this).closest("form");
        let allFilled = true;

        form.find("input[type='text'], input[type='password'], input[type='email']").each(function () {
            if ($.trim($(this).val()) === "") {
                allFilled = false;
                return false; 
            }
        });

        if (!allFilled) {
            form.find(".err").fadeIn();
        } else {
         
            form.submit();
        }
    });


    $(".submitRegister").on("click", function (e) {
        e.preventDefault();
        let form = $(this).closest("form");
        let allFilled = true;

        form.find("input[type='text'], input[type='password'], input[type='email']").each(function () {
            if ($.trim($(this).val()) === "") {
                allFilled = false;
                return false;
            }
        });

        if (!allFilled) {
            form.find(".err").fadeIn();
        } else {
            form.submit();
        }
    });

    $("form input").on("focus", function () {
        $(this).closest("form").find(".err").fadeOut();
    });
});
