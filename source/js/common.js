var firstAside = $('#first-aside')[0];
var secondAside = $('#second-aside')[0];

var firstReplace = $('#first-replace')[0];
var secondReplace = $('#second-replace')[0];

var parentAside = $('#parentAside')[0];

window.addEventListener('resize', () => {
  if ( $(window).width() < 992 ) {
    firstReplace.insertAdjacentElement("afterbegin", firstAside);
    secondReplace.insertAdjacentElement("afterbegin", secondAside);
  } else {
    parentAside.insertAdjacentElement("afterbegin", secondAside);
    parentAside.insertAdjacentElement("afterbegin", firstAside);
  }

});

$(function(){
  if ( $(window).width() < 992 ) {
    firstReplace.insertAdjacentElement("afterbegin", firstAside);
    secondReplace.insertAdjacentElement("afterbegin", secondAside);
  }
});



$('[data-fancybox="galery-slider"]').fancybox({
  thumbs : {
    autoStart : true
  }
})


// -----------------  Слайдера --------------------

const Sliders = {
  MAIN_SLIDER: {
    ELEMENT: $('.slider-main'),
    SETTINGS: {
      accessibility: true,
      arrows: false,
      dots: false,
      speed: 1500,
      slidesToShow: 1,
      infinite: false,
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },
  NAV_SLIDER: {
    ELEMENT: $('.galery-nav'),
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

      asNavFor: '.slider-main',
      responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
    ELEMENT: $('.index-slider'),
    SETTINGS: {
      accessibility: true,
      arrows: false,
      dots: false,
      speed: 1500,
      slidesToShow: 1,
      infinite: true,
      asNavFor: '.index-nav',
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },
  NAV_INDEX: {
    ELEMENT: $('.index-nav'),
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

      asNavFor: '.index-slider',
      responsive: [{
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
  DATE_SLIDER: {
    ELEMENT: $('.calendars-slider'),
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
      prevArrow: $('.calendars-btn--prev'),
      nextArrow: $('.calendars-btn--next'),
    },
    // BREAKPOINT: 1600,
    // CLASSNAME: '',
  },
}

function initialazeSlickSlider(slider) {
  const {
    BREAKPOINT,
    SETTINGS,
    ELEMENT
  } = slider;
  (document.documentElement.clientWidth <= BREAKPOINT || BREAKPOINT === undefined) && ELEMENT.slick(SETTINGS);
}

function toggleSlider(slider) {
  const {
    BREAKPOINT,
    ELEMENT,
    SETTINGS
  } = slider;
  document.documentElement.clientWidth > BREAKPOINT && ELEMENT.hasClass('slick-initialized') && ELEMENT.slick('unslick');
  document.documentElement.clientWidth <= BREAKPOINT && !ELEMENT.hasClass('slick-initialized') && ELEMENT.slick(SETTINGS);
}

function toggleExtraClass(slider) {
  const {
    BREAKPOINT,
    ELEMENT,
    CLASSNAME
  } = slider;
  document.documentElement.clientWidth > BREAKPOINT && !ELEMENT.hasClass(CLASSNAME) && ELEMENT.addClass(CLASSNAME);
  document.documentElement.clientWidth <= BREAKPOINT && ELEMENT.hasClass(CLASSNAME) && ELEMENT.removeClass(CLASSNAME);
}

initialazeSlickSlider(Sliders.MAIN_SLIDER);
initialazeSlickSlider(Sliders.NAV_SLIDER);
initialazeSlickSlider(Sliders.NAV_INDEX);
initialazeSlickSlider(Sliders.INDEX_SLIDER);
initialazeSlickSlider(Sliders.DATE_SLIDER);

// window.addEventListener('resize', () => {
//   toggleSlider(Sliders.INFORM);
//   toggleExtraClass(Sliders.INFORM);
// });


// -----------------  Табы  --------------------
$(".nav-wrapp__link").hover(function (e) {
  e.preventDefault();
  $(".news-body-tab").removeClass("news-body-tab--active");
  $(".nav-wrapp__link").removeClass("tab-active");

  $($(this).attr("href")).addClass("news-body-tab--active");
  $(this).addClass("tab-active");
});

$(".tab").click(function (e) {
  e.preventDefault();
  $(".tabs").removeClass("tabs-active");
  $(".tab").removeClass("tab-active");

  $($(this).attr("href")).addClass("tabs-active");
  $(this).addClass("tab-active");
});

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
$(".hamburger").click(function (event) {
  $(".hamburger").toggleClass("hamburger__active"),
    $(".mobile__menu ").toggleClass("mobile__menu__active");
});

// ------------ Поиск --------------

$(".header-search").click(function () {
  $(".search-form").toggleClass("search-form--active")
});


// ----------------- Аккордион --------------------
/**
 * Классы для аккордиона
 */
const accordeon = {
  CLASS: 'accordion',
  CLASS_ACTIVE: 'accordion__active',
}

/**
 * acc - неизменная переменная для работы с аккордионом
 */
const acc = document.querySelectorAll(`.${accordeon.CLASS}`);
let openedAccordeon = null;

/**
 * использует nextElementSibling для открытия или закрытия аккордиона
 */
function closeAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = 0;
  acc.classList.remove(accordeon.CLASS_ACTIVE);
}


function openAccordeon(acc) {
  acc.nextElementSibling.style.maxHeight = `${acc.nextElementSibling.scrollHeight}px`;
  acc.classList.add(accordeon.CLASS_ACTIVE);
}

/**
 * Проверка на открытие аккордиона !nextElementSibling!
 */
function isAccordeonOpen(acc) {
  acc.nextElementSibling && !acc.nextElementSibling.style.maxHeight
}

/**
 * Итерация, реализация переключения открытого аккордиона
 *
 */
for (const accordeon of acc) {
  accordeon.addEventListener("click", function () {
    const currentAccordeon = this;

    openedAccordeon && closeAccordeon(openedAccordeon);

    if (isAccordeonOpen(currentAccordeon)) {
      closeAccordeon(currentAccordeon);
    } else {
      openAccordeon(currentAccordeon);
      openedAccordeon = currentAccordeon;
    }
  });
};

// --------------

const accordionList = document.getElementsByClassName("accordion--multiple");
const classNameActive = "accordion__active";

for (const accordion of accordionList) {
  accordion.addEventListener("click", function () {
    this.classList.toggle(classNameActive);
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}



$(".accordion-wrapper__title").click(function () {
  $(this).toggleClass("accordion-wrapper__title--active");
  $(this).siblings('.filter-list').toggleClass("filter-list--active");
  $('.accordion-wrapper__title').not(this).removeClass("accordion-wrapper__title--active");
  $('.accordion-wrapper__title').not(this).siblings('.filter-list').removeClass("filter-list--active");
});


! function () {
  var i, u, p, y, m, g, e = document.querySelectorAll(".yt-lazyload");
  0 < e.length && (u = document.createElement("div"), p = document.createElement("div"), y = document.createElement("div"), m = document.createElement("a"), g = document.createElement("iframe"), u.classList.add("yt-lazyload-wrap"), p.classList.add("yt-lazyload-content"), y.classList.add("yt-lazyload-playbtn"), m.classList.add("yt-lazyload-logo"), m.target = "_blank", m.rel = "noreferrer", g.setAttribute("allow", "accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"), g.setAttribute("allowfullscreen", ""), i = new IntersectionObserver(function (e) {
    e.forEach(function (e) {
      var t, a, o, n, r, l = e.target,
        d = e.target.dataset.id,
        c = e.target.dataset.thumb,
        s = e.target.dataset.logo;
      !0 === e.isIntersecting && (t = u.cloneNode(), l.append(t), a = p.cloneNode(), t.append(a), a.style.setProperty("--yt-lazyload-img", 'url("https://img.youtube.com/vi/' + d + c + '/maxresdefault.jpg")'), o = y.cloneNode(), a.append(o), "0" !== s && ((n = m.cloneNode()).href = "https://youtu.be/" + d, a.append(n)), o.addEventListener("click", function () {
        (r = g.cloneNode()).src = "https://www.youtube.com/embed/" + d + "?autoplay=1", a.append(r)
      }), i.unobserve(l))
    })
  }, {
    rootMargin: "200px 0px"
  }), e.forEach(function (e) {
    i.observe(e)
  }))
}();


const slider = document.getElementById('playBody');
const prevSlider = document.getElementById('prev');
const nextSlider = document.getElementById('next');


nextSlider && nextSlider.addEventListener('click', (e) => {
    slider.scrollBy(315, 0);
});

prevSlider && prevSlider.addEventListener('click', (e) => {
    slider.scrollBy(-315, 0);
});







