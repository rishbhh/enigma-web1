
gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
});

gsap.set('.null', { opacity: 0 })

$(document).ready(function() {

    "use strict";
    // scr();
    HeroSection();
    ChangeColor();
    About();
    Marq();
    Horizontal();
    Changehum();
    splt()
    Opaci();
    Works();
    toggel()
    TitleChange();
    Plrax();
    About2();
    Serv();
    worksSlider()
    initShowcases();
    Scrol();
    Footer();
});



// locomotive Scroll

gsap.registerPlugin(ScrollTrigger);

let locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    inertia: 0.8,
    smooth: true,
    getDirection: true,
    
    mobile: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: true,
      getDirection: true,
    },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
        return arguments.length ?
            locoScroll.scrollTo(value, 0, 0) :
            locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },

    // follwoing line is not required to work pinning on touch screen

    pinType: document.querySelector(".smooth-scroll").style.transform ?
        "transform" : "fixed"
});



locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
});





// s
window.addEventListener('orientationchange', () => {
    window.location.reload();
  });
 
// Moobile Js
const mobile_size = window.matchMedia('(max-width: 900px)');


if (mobile_size.matches) {

    ScrollTrigger.config({
        autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    // Hero Section
function HeroSection() {


    Splitting();
    document.querySelector('meta[name=viewport][content*="shrink-to-fit=no"]') ? 'shrink-to-fit=no' : 'Default; shrink-to-fit not specified'

    let fixed_scrol = gsap.timeline({
        id: 'start_1',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: '4000 center',
            scroller: ".smooth-scroll",
            markers: false,
            pin: true,
            pinReparent: true,
            scrub: 2,
        },
    });

    fixed_scrol.to("#e", 2, {
            transform: ('scale(1)'),
            duration: 5,
            ease: 'power1.inOut',
        }, "", ),
        fixed_scrol.to("#n", 2, {
            transform: ('scale(1)'),
            duration: 5,
            ease: 'power1.inOut',
            stagger: 0.3
        }, "-=2")
    fixed_scrol.to(" #i", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.2")
    fixed_scrol.to("#g", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.4")
    fixed_scrol.to("#m", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.8")
    fixed_scrol.to("#a", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.6")
    fixed_scrol.to(".small_heading", {
        opacity: 1,
        y: 20,
        duration: 3,
        ease: "power1.In"
    }, "3.3")

    fixed_scrol.to(".logo", 7, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        zIndex: 2,

    }, 1)

    
    fixed_scrol.from('.en-cicle ', {
        opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 3);

      fixed_scrol.to('.mobli-cont', { opacity: 1, duration: 5, ease: 'power1.inOut' }, 5);
    fixed_scrol.to('.mobli-cont', { display: ('block'), ease: 'power1.inOut' }, 5);
    fixed_scrol.from('.en-cicle ', {
        opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 9);
    fixed_scrol.to('.en-bg ',{ duration: 2, ease: 'power1.inOut',scale:0.7,opacity:1
    }, 10);
    fixed_scrol.to('.en-bg ', { duration: 2, ease: 'power1.inOut',scale:1.2
}, 12);
    fixed_scrol.to('.mobli-cont_content p .word', { opacity: 1, duration: 2, ease: 'power1.inOut', stagger: 0.5, }, 15);
    fixed_scrol.to('.mobli-cont_content p .word', { opacity: 0, duration: 2, ease: 'power1.inOut', }, 17);

    fixed_scrol.to('.lapi-content p ', { opacity: 1, duration: 2, ease: 'power1.inOut', stagger: 0.3, y: 10 }, 19);
  
   
}
HeroSection()
     

    function port() {
        (function () {
            document.addEventListener("DOMContentLoaded", function () {
              "use strict";
          
              Slider.init();
              conf.InfoBox();
            });
          })();
          
          const Slider = {
            init: () => {
              Slider.initialize();
            },
          
            //  Click Handler Button
            // - - - - - - - - - - - - - - - - - - - - - - - - - -
          
            initialize: () => {
              var mySwiper = new Swiper(".swiper-container", {
                direction: "horizontal",
                loop: false,
                grabCursor: true,
                slidesPerView: .9,
                centeredSlides: true,
                spaceBetween: 0,
                roundLengths: true,
                pagination: {
                  el: ".swiper-pagination" } });
          
          
          
              mySwiper.on("slideChange", function () {
                if (mySwiper.activeIndex === 1) {
                  let mobileContainer = conf.qS(".mobile-container");
                  mobileContainer.className = "";
                  mobileContainer.classList.add("mobile-container");
                  mobileContainer.classList.add("image-2");
                } else if (mySwiper.activeIndex === 2) {
                  let mobileContainer = conf.qS(".mobile-container");
                  mobileContainer.className = "";
                  mobileContainer.classList.add("mobile-container");
                  mobileContainer.classList.add("image-3");
                } else if (mySwiper.activeIndex === 0) {
                  let mobileContainer = conf.qS(".mobile-container");
                  mobileContainer.className = "";
                  mobileContainer.classList.add("mobile-container");
                  mobileContainer.classList.add("image-1");
                }
              });
            } };
          
          
          //  Config Functions
          // - - - - - - - - - - - - - - - - - - - - - - - - - -
          
          const conf = {
            qS: selector => {
              return document.querySelector(selector);
            },
            qSA: selector => {
              return document.querySelectorAll(selector);
            },
            CqS: (container, selector) => {
              return container.querySelector(selector);
            },
            InfoBox: () => {
              let toggle = conf.qS(".infobox-container .infobox-toggle"),
              detail = conf.qS(".infobox-container .infobox-detail-container");
          
              if (toggle) {
                toggle.onclick = e => {
                  e.preventDefault();
                  detail.classList.toggle("active");
                };
              }
            } };
}
    port()
    
// ab

}



// Hero


// let allVideoDivs = gsap.utils.toArray('.vid');

// allVideoDivs.forEach((videoDiv, i) => {
  
//   let videoElem = videoDiv.querySelector('video')
  
//   ScrollTrigger.create({
//     trigger: videoElem,
//     start: 'top 70%',
//     end: 'bottom 30%',
//     markers: true,
//     scroller:".smooth-scroll",
//     onEnter: () => videoElem.play(),
//     onEnterBack: () => videoElem.play(),
//     onLeave: () => videoElem.pause(),
//     onLeaveBack: () => videoElem.pause(),
//   });
  
// });


function playVideo(el) {
    let vid = document.getElementById(el);
    vid.play();
    console.log('playing video');
  }
  
  function pauseVideo(el) {
    let vid = document.getElementById(el);
    vid.pause();
    console.log('pausing video');
  }
  
    
    ScrollTrigger.create({
      trigger: '.o-container',
      start: 'top top',
      end: '+=500',
      onToggle: self => self.isActive ? playVideo("beach-waves") : pauseVideo("beach-waves"),
      toggleActions: 'play pause reverse none'
    })

// desktop
// if (desktop_size.matches) { 
//     ScrollTrigger.config({
//         autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
//     });

// }

$(document).ready(function() {
    $(".cl").click(function() {
      $("#search").toggleClass("open");
    });
  });
  

//
window.addEventListener("load", function() {
    const hov = document.querySelectorAll('.hov')

    hov.forEach((el) => {
            const image = el.querySelector('img')

            el.addEventListener('mouseenter', (e) => {
                gsap.to(image, { autoAlpha: 1, width: 400, })
            })

            el.addEventListener('mouseleave', (e) => {
                gsap.to(image, { autoAlpha: 0, width: 0, })
            })

            el.addEventListener('mousemove', (e) => {
                gsap.set(image, { x: e.offsetX - 200 })
            })
        })
        // 
});

// Hero Section
function HeroSection() {


    Splitting();
    document.querySelector('meta[name=viewport][content*="shrink-to-fit=no"]') ? 'shrink-to-fit=no' : 'Default; shrink-to-fit not specified'

    let fixed_scrol = gsap.timeline({
        id: 'start_1',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top top',
            end: '4500 center',
            scroller: ".smooth-scroll",
            markers: false,
            pin: true,
            pinReparent: true,
            scrub: 2,
        },
    });

    fixed_scrol.to("#e", 2, {
            transform: ('scale(1)'),
            duration: 5,
            ease: 'power1.inOut',
        }, "", ),
        fixed_scrol.to("#n", 2, {
            transform: ('scale(1)'),
            duration: 5,
            ease: 'power1.inOut',
            stagger: 0.3
        }, "-=2")
    fixed_scrol.to(" #i", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.2")
    fixed_scrol.to("#g", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.4")
    fixed_scrol.to("#m", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.8")
    fixed_scrol.to("#a", 2, {
        transform: ('scale(1)'),
        duration: 5,
        ease: 'power1.inOut',
        stagger: 0.3
    }, "-=1.2")
    fixed_scrol.from(".small_heading", {
        opacity: 0,
        y: 20,
        duration: 3,
        ease: "power1.In"
    }, "3.8")

    fixed_scrol.to(".logo", 7, {
        opacity: 1,
        duration: 10,
        ease: "power2.inOut",
        zIndex: 2,

    }, 15)

    fixed_scrol.to('.container_word_change_t', { opacity: 1, duration: 5, ease: 'power1.inOut' }, 15);
    fixed_scrol.to('.container_word_change_t', { display: ('block'), ease: 'power1.inOut' }, 15);
    fixed_scrol.to('.we', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 19);
    fixed_scrol.to('.make', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 24);
    fixed_scrol.to('.digital', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 28);
    fixed_scrol.to('.brand', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 32);
    // fixed_scrol.to('.container_word_change_t', { scale: 1.2, duration: 7, ease: 'power2.in' }, 29);
    fixed_scrol.to('.container_word_change_t', { scale: 2.5, duration: 7, ease: 'power2.out' }, 39);
    fixed_scrol.to('.container_hero', { scale: 0.5, duration: 10, ease: 'power2.out' }, 27);
    fixed_scrol.to('.container_word_change_t', { duration: 15, ease: 'power1.inOut' }, 25);
    fixed_scrol.to('.container_hero', { duration: 15, ease: 'power1.inOut' }, 24);
    fixed_scrol.to('.container_hero', { duration: 15, ease: 'power1.inOut' }, 24);
    fixed_scrol.set('.container_lapi', { display: ('block') }, 34);
    fixed_scrol.to('.transition_to_lapi', { opacity: 1, duration: 10, ease: 'power2.out' }, 26);
    fixed_scrol.to('.container_hero', { display: ('none') }, 42);
    fixed_scrol.to('.container_word_change_t', { display: ('none') }, 42);
    fixed_scrol.set('.container_lapi_content_together', {}, 42);
    fixed_scrol.fromTo('.enigma_bg_container', { opacity: 0, scale: 2.5 }, {
        scale: 1,
        opacity: 1,
        duration: 8,
        ease: 'power1.inOut',
    }, 42);
    fixed_scrol.to('.enigma_bg', { duration: 8, ease: 'power1.inOut' }, 44);
    fixed_scrol.fromTo('.lapi_div', { y: 500, scale: 2, opacity: 0 }, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 8,
        ease: 'power1.inOut',
    }, 46);
    fixed_scrol.to('.enigma_bg', { opacity: 1, duration: 8, ease: 'power1.inOut' }, 44);
    fixed_scrol.to('.enigma_bg_container', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 48);
    fixed_scrol.to('.container_lapi_content_together', { duration: 8, ease: 'power1.inOut' }, 43);



    fixed_scrol.set('.macbook_frame', { opacity: 1, duration: 15, ease: 'power1.inOut' }, 45);

    fixed_scrol.to('.lapi_div', {
        scale: 3,
        opacity: 1,
        duration: 5.5,
        ease: 'power1.inOut',
    }, 55);
    fixed_scrol.to('.macbook_frame', { opacity: 0, scale: 1, duration: 5.5, ease: 'power1.inOut' }, 55);
    fixed_scrol.set('.o-page-tail_inner', {
        display: 'block',
        width: "100vw",
        height: "100vh",
        opacity: 0,
    }, 53);
    fixed_scrol.to('.container_lapi_content_together', { display: 'none' }, 57);

    fixed_scrol.to('.enigma_bg', { opacity: 0 }, 60);
    fixed_scrol.to('.o-page-tail_inner', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 59);
    fixed_scrol.fromTo('.c-hm-us_top', { gridTemplateColumns: "50% 0% 50%" }, {
        gridTemplateColumns: "20% 60% 20%",
        opacity: 1,
        duration: 10,
        ease: 'power1.inOut',
    }, 80);
    fixed_scrol.fromTo('.c-hm-us_title, .t-lead ', { y: 50, scale: 0.9 }, {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 8,
        ease: 'power1.inOut',
    }, 90);
}


// Change Color
function ChangeColor() {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".smooth-scroll",
            start: "top 80%",
            onEnter: () =>
                gsap.to("body", {
                    backgroundColor: colorSection.dataset.bgcolor,
                    color: colorSection.dataset.textcolor,
                    overwrite: "auto"
                }),
            onLeaveBack: () =>
                gsap.to("body", {
                    backgroundColor: prevBg,
                    color: prevText,
                    overwrite: "auto"
                })
        });
    });

}

/* Recent Works Carousel */

function worksSlider() {

    var recentWorkCarousel = $('.a-recent-works');


    recentWorkCarousel.each(function() {

        let $this = $(this),
            wrapper = $this.children('.recent-works-wrapper'),
            wrapperWidth = wrapper.outerWidth(),
            wrapTransVal = wrapperWidth - window.outerWidth + window.outerWidth / 2,
            bgText = $this.find('.recent-works-bg-text'),
            parentSec = $this.parents('.wrapper'),
            navType = $this.data('navigate');

        if (navType === 'scroll') {

            $this.addClass('navby-scroll')

            var scrollAn = gsap.to(wrapper, {
                x: "-" + wrapTransVal,

            });

            var cumba = gsap.to(bgText, {
                x: "0%",
                scrollTrigger: {
                    trigger: $this,
                    start: "top top",
                    end: "bottom top",
                    scrub: 4,
                    scroller: ".smooth-scroll",
                    pin: true,
                    snap: false,
                    // pinType: 'fixed',
                    pinSpacing: 'margin'
                }
            })

            ScrollTrigger.create({
                animation: scrollAn,
                trigger: $this,
                start: "top top",
                end: "bottom top",
                scrub: 4,
                scroller: ".smooth-scroll",
                pin: true,
                snap: false,
                pinSpacing: 'false',
                anticipatePin: false,
                // pinType: 'fixed'

            });

            gsap.fromTo($this, {
                x: '100%'
            }, {
                x: '0%',
                scrollTrigger: {
                    trigger: parentSec,
                    pin: false,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: 4,

                }
            })

            gsap.fromTo($this, {
                x: '0%'
            }, {
                x: '-30%',
                scrollTrigger: {
                    trigger: parentSec,
                    pin: false,
                    scrub: 4,
                    start: 'bottom bottom',
                    end: 'bottom top',

                }

            })



        } else if (navType === 'arrows') {

            $this.addClass('navby-arrows');

            let slides = $this.find('.ar-work'),
                totSlides = slides.length,
                slideWidth = $('.ar-work').outerWidth(),
                nextButton = $('.arw-next'),
                prevButton = $('.arw-prev');

            slides.each(function(i) {

                i++
                let $this = $(this);

                $this.attr('data-index', i);
                $this.addClass('slide_' + i)

            })

            $('.ar-work:first-child').addClass('active')

            var arrowClicks = 0;

            nextButton.on('click', function() {

                $('.ar-work').removeClass('active');

                gsap.to('.ar-work', {
                    x: "-100%"
                })

            })

            Draggable.create(wrapper, {
                type: "x",
                bounds: $this,
                autoScroll: true,
                inertia: true,
                edgeResistance: 0.4,
                dragResistance: 0.4,
                throwProps: true,
                onDrag: function(message, num) {
                    console.log("message: " + message + ", num: " + num);
                }
            });

        }

    })





}

// changehum
function Changehum() {
    const scrollColorElems = document.querySelectorAll("[data-humcolor]");
    scrollColorElems.forEach((colorSections, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.humcolor;

        ScrollTrigger.create({
            trigger: colorSections,
            scroller: ".smooth-scroll",
            start: "top 50%",
            onEnter: () =>
                gsap.to(".toggle-line", {
                    backgroundColor: colorSections.dataset.humcolor,
                    overwrite: "auto"
                }),
            onLeaveBack: () =>
                gsap.to(".toggle-line", {
                    backgroundColor: prevBg,
                    overwrite: "auto"
                })
        });
    });

}



// Services Accordian
    function toggel() {
        let accordion = document.querySelector('.accordion-list');
        let items = accordion.querySelectorAll('li');
        let questions = accordion.querySelectorAll('.accordion-title');
        
        questions.forEach(question => question.addEventListener('click', toggleAccordion));
        
        
        function toggleAccordion() {
        
            thisItem = this.parentNode;
        
            items.forEach(item => {
                if (thisItem == item) {
                    thisItem.classList.toggle('open');
                    return;
                }
                item.classList.remove('open');
        
            })
        
        }
}

// horizontal Scrll section
function Horizontal() {
    let work2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.works__inner',
            start: '-300 center',
            end: '300 top',
            scroller: ".smooth-scroll",
            toggleActions: 'restart none none reverse ',

        },
    });

    work2.from(".action-icon", {
        opacity: 0,
        y: -100,
        duration: 0.3,
        ease: "none",
    }, "-=4")
}

function Works() {
    let work = gsap.timeline({
        scrollTrigger: {
            trigger: '.works__inner',
            start: '-300 top',
            end: '500 top',
            scroller: ".smooth-scroll",
            // toggleActions: 'restart reverse restart reverse ',

        },
    });

    work.from(".works__hero__line", 1, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.In",
    }, "-=0.5")

}


// title change
function TitleChange() {
    var prevTitle = document.title;
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === 'visible') {
            document.title = "aao or Jaao! \ud83d\ude0e";
            setTimeout(function() {
                document.title = prevTitle;
            }, 1000);
        } else {
            document.title = "phir milnge \ud83d\ude2d";
        }
    });

}

function Plrax() {
    let prlx = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-us-section',
            start: '-200 top',
            scroller: ".smooth-scroll",
            scrub: true
                // toggleActions: 'restart reverse restart reverse ',
        },
    });
    prlx.fromTo('.prlx', { y: -100, }, {
        y: 140,
        transition: "cubic-bezier(0,0,0,1)",
    });
}

function About() {
    let about = gsap.timeline({
        scrollTrigger: {
            trigger: '#about2',
            start: '-400 top',
            end: '900 top',
            scroller: ".smooth-scroll",
            // toggleActions: 'restart reverse restart reverse ',
        },
    });

    about.from(".about-p p", { y: -50, opacity: 0, duration: 0.4, ease: "Power2.easeInOut" }, "-=1.8");
    about.from(".re .char", 2, { y: -210, opacity: 0, duration: 0.3, ease: "Power2.easeInOut", stagger: 0.03 }, "-=1.9");
}

function About2() {
    let about = gsap.timeline({
        scrollTrigger: {
            trigger: '.overlap',
            start: '-400 top',
            end: '500 top',
            scroller: ".smooth-scroll",
            toggleActions: 'restart reverse restart reverse ',
        },
    });


    about.from(".imag img", 1, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power1.In",
    }, "-=0.2")
    about.from(".right-content p", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power1.In",
    }, "-=0.7")
    about.from(".en-form-submit .cta2", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power1.In",
    }, "-=0.7")

}

// services
function Serv() {
    let why = document.querySelectorAll(".accordion-list li");

    why.forEach((container) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "-100 center",
                end: '500 top',
                scroller: ".smooth-scroll",
                //   toggleActions: 'restart reverse restart reverse ',
            }
        });


        tl.from(container, 1, {
            y: 100,
            duration: 0.5,
            ease: Power2.out,
            opacity: 0
        }, "-=0.7")

    });
}

function Opaci() {

    let op = gsap.timeline({
        scrollTrigger: {
            trigger: "#services",
            start: "-100 center",
            end: '800 top',
            scroller: ".smooth-scroll",
            toggleActions: 'restart reverse restart reverse ',
        },
    });


    op.from(".accordion-container", 1, {
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.7")

}

// pop Form

var ClickForm = new TimelineMax({ paused: true });

ClickForm.to(".form-container", 1, {
    left: 0,
    ease: Expo.easeInOut,
});

ClickForm.staggerFrom(".frm", 0.5, { y: 100, opacity: 0, duration: 0.5, ease: 'power2.In' }, "-=0.3");
// ClickForm.staggerFrom(".form-close", 0.5, {  opacity: 0, duration: 0.5, ease: 'power2.In' });
ClickForm.reverse();
$(document).on("click", ".action-icon", function() {
    ClickForm.reversed(!ClickForm.reversed());
});
$(document).on("click", ".form-close", function() {
    ClickForm.reversed(!ClickForm.reversed());
});


// Footer
function Footer() {
    let footer = gsap.timeline({
        scrollTrigger: {
            trigger: '#footer',
            start: '-700 top',
            scroller: ".smooth-scroll",
            // toggleActions: 'restart reverse restart reverse ',
        },
    });
    footer.from(".top-f h3", 1, { y: 100, opacity: 0, ease: 'power2.In', duration: 0.5 }, "-=0.9");
    footer.from(".ctaa", 1, { y: 100, opacity: 0, ease: 'power2.In', duration: 0.5 }, "-=0.9");
    footer.from(".footer-right a, .so ", 1, { y: 100, opacity: 0, ease: 'power2.In', duration: 0.5, stagger: 0.1 }, "-=0.8");
}

// ab
function Scrol() {

    let pinBoxes = document.querySelectorAll(".pin-wrap > *");
    let pinWrap = document.querySelector(".pin-wrap");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;

    // Pinning and horizontal scrolling

    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scrub: 3,
            trigger: "#sectionPin",
            pin: true,
            scroller: ".smooth-scroll",
            anticipatePin: 1,
            start: "top top",
            end: "+=1000"
        },
        x: -horizontalScrollLength,
        ease: "none",
          stagger: 0.8,
        
    });
    

}



// Marquee
function Marq() {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap.to(".marquees__part", { xPercent: -100, repeat: -1, duration: 14, ease: "linear" }).totalProgress(0.6);

    gsap.set(".marquees__inner", { xPercent: -50 });

    window.addEventListener("scroll", function() {

        if (window.pageYOffset > currentScroll) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -4
        });

        currentScroll = window.pageYOffset
    });
}





document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }

                    video.target.load();
                    video.target.classList.remove("lazy");
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});

function splt() {

    // ################ Split in span ##################
    function splitLines(container, opentag, closingtag) {
        // Get the spans in the paragraph 
        var spans = container.children,

            top = 0,

            // set tmp as a string 
            tmp = '';

        // Put spans on each word, for now we use the <n> tag because, we want to save 5 bytes:)
        container.innerHTML = container.textContent.replace(/\S+/g, '<n>$&</n>');

        // Loop through each words (spans) 
        for (let i = 0; i < spans.length; i++) {

            // Get the height of each word
            var rect = spans[i].getBoundingClientRect().top;

            // If top is different as the last height of the word use a closingtag and use an opentag after that
            if (top < rect) tmp += closingtag + opentag;
            top = rect;

            // Add the spans + space between each word
            tmp += spans[i].textContent + ' ';
        }

        // Add the lines back to the paragraph 
        container.innerHTML = tmp += closingtag;
    }
    // ################ END Split in span ################## 
    var loop_split
    var wid_w = window.innerWidth;
    if (wid_w > 440) {
        loop_split = document.querySelectorAll(".spline_p");

        for (var i = 0; i < loop_split.length; i++) {
            splitLines(loop_split[i], '<div><span>', '</span></div>');
        }
    }
}


function aliothShowcaseCarousel() {
    var project = $('.cas-project'),
        wrapper = $('.cas-project-wrapper'),
        projectTitles = $('.cas-titles'),
        headline = $('.cas-headline'),
        bgText = $('.cas-bg-text'),
        wrapFirstTrans = $(window).outerWidth() / 100 * 90,
        activeProject;
    new SplitText(headline, {
        type: 'lines',
        linesClass: 'cas-line',
    })
    project.each(function(i) {
        i++
        let $this = $(this),
            title = $this.find('.cs-title'),
            img = $this.find('img').attr('src');
        $this.addClass('cas_project_' + i)
        $this.attr('data-title', '.title_' + i)
        projectTitles.append(title.addClass('title_' + i));
        title.attr('data-project', '.cas_project_' + i)
    });
    projectTitles.wrapInner('<div class="cas-titles-wrap"></div>')
    $('.cas-line').wrapInner('<span></span>')
    gsap.to('.cas-line span', {
        y: '-100%',
        stagger: 0.01,
        ease: 'none',
        scrollTrigger: {
            trigger: '.carousel-showcase',
            scroller: ".smooth-scroll",
            start: 'top top',
            end: '10% top',
            scrub: 1,
            markers: false
        }
    })
    gsap.fromTo(bgText, {
        x: '100%'
    }, {
        x: '-30%',
        scrollTrigger: {
            trigger: '.carousel-showcase',
            scroller: ".smooth-scroll",
            scrub: 1,
            start: 'top top',
            end: 'bottom+=3000 top',
            markers: false
        }
    });
    var totProj = $('.cas-project').length,
        transVal = totProj * 250 - 250
    var mobileQuery = window.matchMedia('(max-width: 450px)'),
        tabletQuery = window.matchMedia('(min-width: 450px) and (max-width: 900px)');
    if (mobileQuery.matches) {
        transVal = totProj * 80 - 80
    }
    if (tabletQuery.matches) {
        transVal = totProj * 200 - 200
    }
    gsap.to('.cas-titles-wrap', {
        y: -transVal,
        scrollTrigger: {
            trigger: '.carousel-showcase',
            scroller: ".smooth-scroll",
            scrub: 1,
            start: 'top top',
            end: 'bottom+=3000 top',
            markers: false
        }
    })
    gsap.set('.showcase-footer', {
        position: 'fixed'
    })
    let csw = gsap.fromTo(wrapper, {
            x: wrapFirstTrans
        }, {
            x: '-' + (wrapper.outerWidth() - $(window).outerWidth() + 350)
        }),
        windowWidth = $(window).outerWidth(),
        css = new ScrollTrigger({
            trigger: '.carousel-showcase',
            scroller: ".smooth-scroll",
            animation: csw,
            pin: true,
            scrub: 1,
            id: 'showcaseScroll',
            start: 'top top',
            end: 'bottom+=3000 top',
            markers: false,
            onUpdate: function(self, progress) {
                let prog = $('.cas-progress span');
                gsap.to(prog, {
                    width: self.progress * 100 + '%'
                })
                project.each(function() {
                    let $this = $(this)
                })
            },
            onLeave: function() {
                gsap.to('.showcase-footer', {
                    opacity: 0
                })
            },
            onEnterBack: function() {
                gsap.to('.showcase-footer', {
                    opacity: 1
                })
            },
        });
    $('.cs-title').on('mouseenter', function() {
        let $this = $(this);
        $this.addClass('active')
    })
    $('.cs-title').on('mouseleave', function() {
        let $this = $(this);
        $this.removeClass('active')
    })
}



function initShowcases() {
    aliothShowcaseCarousel();
}


let mobileQuery = window.matchMedia('(max-width: 450px)');
$(window).on('load', function() {
    initShowcases();
    
})
    
 //count
 function alitohNumberCt() {
    var aCount = $('.a-number-counter');
    aCount.each(function() {
        let $this = $(this),
            acNumber = $this.children('.ac-number'),
            sign = $this.children('.ac-sign'),
            acTitle = $this.children('.ac-title');
        acTitle.wrapInner('<span></span>')
        sign.wrapInner('<span></span>');
        let signSpan = sign.children('span');
        gsap.set(signSpan, {
            y: '100%',
            display: 'block'
        })
        acNumber.each(function() {
            let $this = $(this),
                countParent = $this.parent(aCount);
            let numVal = $this.text(),
                num1 = "<span class='num_val_anim'>" + (numVal - 3) + "</span>",
                num2 = "<span class='num_val_anim'>" + (numVal - 2) + "</span>",
                num3 = "<span class='num_val_anim'>" + (numVal - 1) + "</span>";
            $this.prepend(num1, num2, num3);
            $this.wrapInner("<div class='numbers-wrapper'></div>");
            var numWrapper = $this.children('.numbers-wrapper'),
                parent = $this.parents(aCount),
                delay = parent.data('delay'),
                nums = $this.find('.num_val_anim');
            gsap.to(numWrapper, 1.5, {
                y: "-75%",
                delay: delay,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: parent,
                    position: "bottom bottom",
                    scroller: ".smooth-scroll",
                },
                onStart: function() {
                    countParent.addClass('count_inview')
                },
                onComplete: function() {
                    gsap.to(signSpan, {
                        y: '0%'
                    })
                    countParent.addClass('count_anim_end')
                }
            })
        });
    })
}   
