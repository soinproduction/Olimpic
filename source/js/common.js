jQuery(function ($) {
  var c = $.extend({ animationSpeed: 300 });
  $(".aside-news__list").each(function () {
    $(this).on("click", "li a", function (event) {
      var THIS_NEXT = $(this).next();
      if (THIS_NEXT.is(".treeview-menu") && THIS_NEXT.is(":visible"))
        THIS_NEXT.slideUp(c.animationSpeed, function () {
          THIS_NEXT.removeClass("menu-open");
        }),
          THIS_NEXT.parent("li").removeClass("active");
      else if (THIS_NEXT.is(".treeview-menu") && !THIS_NEXT.is(":visible")) {
        var e = $(this).parents("ul").first(),
          f = e.find("ul:visible").slideUp(c.animationSpeed);
        f.removeClass("menu-open");
        var g = $(this).parent("li");
        THIS_NEXT.slideDown(c.animationSpeed, function () {
          THIS_NEXT.addClass("menu-open"),
            e.find("li.active").removeClass("active"),
            g.addClass("active");
        });
      }
      THIS_NEXT.is(".treeview-menu") && event.preventDefault();
    });
  });
});

jQuery(function ($) {
  var c = $.extend({ animationSpeed:300 });
  $('.mobile-menu__list').each(function() {
      $(this).on("click","li a",function(event){
          var THIS_NEXT = $(this).next();
          if(THIS_NEXT.is(".sub-menu")&&THIS_NEXT.is(":visible"))THIS_NEXT.slideUp(c.animationSpeed,function() {
                  THIS_NEXT.removeClass("menu-open")
              }
          ),
              THIS_NEXT.parent("li").removeClass("active");
          else if(THIS_NEXT.is(".sub-menu")&&!THIS_NEXT.is(":visible")) {
              var e=$(this).parents("ul").first(),f=e.find("ul:visible").slideUp(c.animationSpeed);
              f.removeClass("menu-open");
              var g=$(this).parent("li");
              THIS_NEXT.slideDown(c.animationSpeed,function(){
                  THIS_NEXT.addClass("menu-open"),e.find("li.active").removeClass("active"),g.addClass("active")
              })
          }
          THIS_NEXT.is(".sub-menu") && event.preventDefault()
      })
  })

})

jQuery(function ($) {
  var firstAside = $("#first-aside")[0];
  var secondAside = $("#second-aside")[0];

  var firstReplace = $("#first-replace")[0];
  var secondReplace = $("#second-replace")[0];

  var parentAside = $("#parentAside")[0];

  var asideBox = $("#asideBox")[0];

  window.addEventListener("resize", () => {
    if ($(window).width() < 992) {
      firstReplace &&
        firstReplace.insertAdjacentElement("afterbegin", firstAside);
      secondReplace &&
        secondReplace.insertAdjacentElement("afterbegin", secondAside);
    } else {
      parentAside &&
        parentAside.insertAdjacentElement("afterbegin", secondAside);
      parentAside &&
        parentAside.insertAdjacentElement("afterbegin", firstAside);
    }

    if ($(window).width() > 767 && $(window).width() < 992) {
      asideBox && asideBox.insertAdjacentElement("beforeend", secondAside);
    }
  });

  $(function () {
    if ($(window).width() < 992) {
      firstReplace &&
        firstReplace.insertAdjacentElement("afterbegin", firstAside);
      secondReplace &&
        secondReplace.insertAdjacentElement("afterbegin", secondAside);
    }



    if ($(window).width() > 767 && $(window).width() < 992) {
      asideBox && asideBox.insertAdjacentElement("beforeend", secondAside);
    }
  });

  $('[data-fancybox="galery-slider"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x",
      // width: 175,
      // height: 175,
    },
  });

  $('[data-fancybox="index-galery"]').fancybox({
    thumbs: {
      autoStart: true,
      axis: "x",
      width: 175,
      height: 175,
    },
  });

  jQuery(".trg-btn").on("click", function (e) {
    e.preventDefault();
    jQuery(".tab-trg").trigger("click");
  });

  // -----------------  Слайдера --------------------

  const Sliders = {
    BANERS_SLIDER: {
      ELEMENT: $(".main-baner__slider"),
      SETTINGS: {
        accessibility: true,
        arrows: false,
        dots: false,
        speed: 1500,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
    MAIN_SLIDER: {
      ELEMENT: $(".slider-main"),
      SETTINGS: {
        accessibility: true,
        arrows: false,
        dots: false,
        speed: 1500,
        slidesToShow: 1,
        infinite: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: ("40px"),
              initialSlide: 2,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
    NEW_SLIDER: {
      ELEMENT: $(".news-article__images"),
      SETTINGS: {
        accessibility: true,
        arrows: false,
        dots: true,
        dotsClass: 'main-dots',
        speed: 1500,
        slidesToShow: 2.5,
        infinite: true,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
    NAV_SLIDER: {
      ELEMENT: $(".galery-nav"),
      SETTINGS: {
        accessibility: true,
        dots: false,
        speed: 1500,
        slidesToShow: 3,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        arrows: false,
        draggable: false,
        infinite: false,
        vertical: true,
        swipe: false,
        verticalSwiping: false,

        asNavFor: ".slider-main",
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              variableWidth: true,
              vertical: false,
              swipe: true,
            },
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 3,
              infinite: true,

            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
    INDEX_SLIDER: {
      ELEMENT: $(".index-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: false,
        dots: false,
        speed: 1500,
        slidesToShow: 1,
        infinite: true,
        asNavFor: ".index-nav",
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
    NAV_INDEX: {
      ELEMENT: $(".index-nav"),
      SETTINGS: {
        accessibility: true,
        dots: false,
        speed: 1500,
        slidesToShow: 3,
        arrows: false,
        focusOnSelect: true,
        draggable: false,
        infinite: true,
        vertical: true,
        swipe: false,
        verticalSwiping: false,

        asNavFor: ".index-slider",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              vertical: false,
              infinite: true,
              draggable: true,
              swipe: true,
              variableWidth: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              vertical: false,
              infinite: true,
              draggable: true,
              swipe: true,
              variableWidth: true,
            },
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 3,
              slidesToScroll: 1,
              vertical: false,
              infinite: true,
              draggable: true,
              swipe: true,
              variableWidth: true,
            },
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              vertical: false,
              infinite: true,
              draggable: true,
              swipe: true,
              variableWidth: true,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
    DATE_SLIDER: {
      ELEMENT: $(".calendars-slider"),
      SETTINGS: {
        accessibility: true,
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: $(".calendars-btn--prev"),
        nextArrow: $(".calendars-btn--next"),
        initialSlide: getMonthFormatted(),
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: ''
    },

    GAME_INDEX: {
      ELEMENT: $(".play-box__body"),
      SETTINGS: {
        accessibility: true,
        dots: false,
        speed: 1500,
        slidesToShow: 4,
        initialSlide: -4,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        prevArrow: $("#prev"),
        nextArrow: $("#next"),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              slidesToShow: 3,
              initialSlide: -3,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              slidesToShow: 3,
              initialSlide: -3,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 575,
            settings: {
              arrows: true,
              slidesToShow: 3,
              initialSlide: -3,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      },
      // BREAKPOINT: 1600,
      // CLASSNAME: '',
    },
  };

  function initialazeSlickSlider(slider) {
    const { BREAKPOINT, SETTINGS, ELEMENT } = slider;
    (document.documentElement.clientWidth <= BREAKPOINT ||
      BREAKPOINT === undefined) &&
      ELEMENT.slick(SETTINGS);
  }

  function toggleSlider(slider) {
    const { BREAKPOINT, ELEMENT, SETTINGS } = slider;
    document.documentElement.clientWidth > BREAKPOINT &&
      ELEMENT.hasClass("slick-initialized") &&
      ELEMENT.slick("unslick");
    document.documentElement.clientWidth <= BREAKPOINT &&
      !ELEMENT.hasClass("slick-initialized") &&
      ELEMENT.slick(SETTINGS);
  }

  function toggleExtraClass(slider) {
    const { BREAKPOINT, ELEMENT, CLASSNAME } = slider;
    document.documentElement.clientWidth > BREAKPOINT &&
      !ELEMENT.hasClass(CLASSNAME) &&
      ELEMENT.addClass(CLASSNAME);
    document.documentElement.clientWidth <= BREAKPOINT &&
      ELEMENT.hasClass(CLASSNAME) &&
      ELEMENT.removeClass(CLASSNAME);
  }

  initialazeSlickSlider(Sliders.MAIN_SLIDER);
  initialazeSlickSlider(Sliders.NAV_SLIDER);
  initialazeSlickSlider(Sliders.NAV_INDEX);
  initialazeSlickSlider(Sliders.GAME_INDEX);
  initialazeSlickSlider(Sliders.INDEX_SLIDER);
  initialazeSlickSlider(Sliders.DATE_SLIDER);
  initialazeSlickSlider(Sliders.BANERS_SLIDER);
  initialazeSlickSlider(Sliders.NEW_SLIDER);

  if(!$('.slick-track').children('.slick-slide').length > 0) {
    $('.main-dots').css('display', 'none');
  } else {
    $('.main-dots').css('display', 'flex');
  }



  $( ".aside-slider" ).each(function() {
      $(this).slick({
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true
      });
  });

  // -----------------  Табы  --------------------


  $(".tab").click(function (e) {
    e.preventDefault();
    $(".tabs").removeClass("tabs-active");
    $(".tab").removeClass("tab-active");

    $($(this).attr("href")).addClass("tabs-active");
    $(this).addClass("tab-active");
  });


  $(".nav-wrapp__link").hover(function (event) {
    $(".news-body-tab").removeClass("news-body-tab--active");
    $(".nav-wrapp__link").removeClass("tab-active");
    $(this).addClass("tab-active");

    const tabId = $(this).data("tab");

    $($(`#tab${tabId}`)).addClass("news-body-tab--active");

  });











  const links = $(".nav-wrapp__link");
  const bodyTab = $('.news-body-tab');
  const hoverArea = $('.nav-wrapp__list')[0];

  let speed = $(".news-body").data("speed");

  let delay = speed;



  setInterval(() => {
    $(".nav-wrapp__link").removeClass('tab-active');
    $(".news-body-tab").removeClass('news-body-tab--active');
    [...links].forEach((link, i, links) => {
      setTimeout(() => {
        link.classList.add('tab-active');

        if ( i > 0) {
          links[i -1].classList.remove('tab-active');
        }

        $(".news-body-tab").removeClass("news-body-tab--active");

        const tabId = link.getAttribute("data-tab");

        $($(`#tab${tabId}`)).addClass("news-body-tab--active");

      }, delay);
      delay += speed;
    });
  }, 7000)








  // //мышка уходит с элемента
  // hoverArea.mouseleave(() => {
  //   console.log($(this));
  // });

 // мышка над элементом
  $('.nav-wrapp__list').mouseenter(()=> {
    console.log($(this));
  });
























  // function addClass (link){
  //   $(".news-body-tab").remove("news-body-tab--active");
  //   link.remove("tab-active");
  //   link.classList.add("tab-active");

  //   const tabId = $(this).data("tab");

  //   $($(`#tab${tabId}`)).addClass("news-body-tab--active");
  // };



  // [...images].map((img) => {
  //   setTimeout(() => {
  //     img.classList.add("round-wrapp--visible");
  //   }, delay);
  //   delay += 350;
  // });


  // console.log(speed);


  // -----------------  Селект  --------------------

  // переменная не переназначается, поэтому используем const
  // используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
  const select = document.querySelectorAll(".select");

  // если массив не пустой, пробегаемся в цикле по каждой найденой сущности
  if (select.length) {
    select.forEach((item) => {
      // достаем из текущей сущности .select__current
      const selectCurrent = item.querySelector(".select__current");

      item.addEventListener("click", (event) => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        // Проверяем является ли это choosen и не выбрано ли его значение уже
        if (el === "choosen" && selectCurrent.innerText !== text) {
          selectCurrent.innerText = text;
        }

        item.classList.toggle("is-active");
      });
    });
  }

  // -----------------  Гамбургер  --------------------

  var menu = $(".mobile-menu");
  var more = $(".mobile-more__btn");
  var body = $("body");

  more.click(function (event) {
    more.toggleClass("mobile-more__btn--active"),
      menu.toggleClass("mobile-menu--active");
    body.toggleClass("body--fixed");
    $('.mobile-search').removeClass("mobile-search--active");
  });

  // ------------ Поиск --------------

  $(".header-search").click(function () {
    $(".search-form").toggleClass("search-form--active");

  });


  $(".search-btn").click(function () {
    $('.mobile-search').addClass("mobile-search--active");
    $('.mobile-menu').removeClass("mobile-menu--active");
    $('.mobile-more__btn').removeClass("mobile-more__btn--active");
  });

  $(".mobile-search__back").click(function () {
    $('.mobile-search').removeClass("mobile-search--active");
  });

  $("select").niceSelect();

  $(this).find(".current-menu-ancestor > a").trigger("click");

  $("sidebar-menu .menu-item-has-children > a").click(function (event) {
    event.preventDefault();
  });

  $(".mobile-menu__list .menu-item-has-children > a").click(function (event) {
    event.preventDefault();
  });


  function getMonthFormatted() {
      const date = new Date();
      const month = date.getMonth();
      return month;
  }









});
