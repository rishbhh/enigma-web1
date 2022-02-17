// preloader 


if (!isMobile) {

    let preloader = function() {
        let loadOverlay = document.querySelector(".init-load")
        let overlayInner = document.querySelector(".init-load .inner")
        let count1 = document.querySelector(".c-first .count")
        let count2 = document.querySelector(".c-second .count")
        let count3 = document.querySelector(".c-third .count")
        let percentage = document.querySelector(".init-load .percentage")
        let countHeight1 = document.querySelector(".counter.c-first .count").offsetHeight
        let countHeight2 = document.querySelector(".counter.c-second .count").offsetHeight
        let countHeight3 = document.querySelector(".counter.c-third .count").offsetHeight
        let counterFrag1 = countHeight1 / 2
        let counterFrag2 = countHeight2 / 11
        let counterFrag3 = countHeight3 / 101
        console.log(countHeight3)

        gsap.set(count3, { y: counterFrag3 })
        gsap.set(count2, { y: counterFrag2 })
        gsap.set(count1, { y: counterFrag1 })
        gsap.set(loadOverlay, { opacity: 1 })
        gsap.set(percentage, { opacity: 0 })


        let countTimeline = gsap.timeline()
        countTimeline.to(count3, {
            y: -counterFrag1 * 25,
            duration: 1,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 2,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1")
        countTimeline.to(count1, {
            y: 0,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1")
        countTimeline.to(percentage, {
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1")
        countTimeline.to(count3, {
            y: -counterFrag1 * 48,
            duration: .5,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 4,
            duration: .5,
            ease: "power4.inOut"
        }, "-=.5")
        countTimeline.to(count3, {
            y: -counterFrag1 * 74,
            duration: .8,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 7,
            duration: .8,
            ease: "power4.inOut"
        }, "-=.8")
        countTimeline.to(count3, {
            y: -counterFrag1 * 100,
            duration: .65,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 10,
            duration: .65,
            ease: "power4.inOut",
        }, "-=.65")
        countTimeline.to(count1, {
            y: -counterFrag1,
            duration: .65,
            ease: "power4.inOut",
        }, "-=.65")
        countTimeline.to(overlayInner, {
            scale: 1,
            duration: .3,
            ease: "power4.inOut",
            onComplete: intAnim
        })
        countTimeline.to(loadOverlay, {
            x: "100%",
            duration: 1,
            ease: "power4.inOut"
        }, "-=.4")

    }
    preloader()



} else {


    let intAnim = function() {
        // gsap.timeline({}).from("#b", {
        //     y:100, duration: 2, ease: 'none', opacity: 0
        // }, "-=1")
        gsap.timeline({}).to(".scroll-circle", {
            duration: 1,
            ease: 'power1.inOut',
            opacity: 1,
            alpha: 1,
        }, "1")
        gsap.timeline({}).to(".scroll-circle .scroll-icon", {
            rotation: 136,
            duration: 1,
            ease: 'power1.inOut',
            opacity: 1,
        })
        gsap.timeline({}).to(".scroll-arrow svg", {
            y: -19,
            duration: 1.1,
            ease: 'power1.in',
            opacity: 1,
        })

    }


    let preloader = function() {
        let loadOverlay = document.querySelector(".init-load")
        let overlayInner = document.querySelector(".init-load .inner")
        let count1 = document.querySelector(".c-first .count")
        let count2 = document.querySelector(".c-second .count")
        let count3 = document.querySelector(".c-third .count")
        let percentage = document.querySelector(".init-load .percentage")
        let countHeight1 = document.querySelector(".counter.c-first .count").offsetHeight
        let countHeight2 = document.querySelector(".counter.c-second .count").offsetHeight
        let countHeight3 = document.querySelector(".counter.c-third .count").offsetHeight
        let counterFrag1 = countHeight1 / 2
        let counterFrag2 = countHeight2 / 11
        let counterFrag3 = countHeight3 / 101
        console.log(countHeight3)

        gsap.set(count3, { y: counterFrag3 })
        gsap.set(count2, { y: counterFrag2 })
        gsap.set(count1, { y: counterFrag1 })
        gsap.set(loadOverlay, { opacity: 1 })
        gsap.set(percentage, { opacity: 0 })


        let countTimeline = gsap.timeline()
        countTimeline.to(count3, {
            y: -counterFrag1 * 25,
            duration: 1,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 2,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1")
        countTimeline.to(count1, {
            y: 0,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1")
        countTimeline.to(percentage, {
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1")
        countTimeline.to(count3, {
            y: -counterFrag1 * 48,
            duration: .5,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 4,
            duration: .5,
            ease: "power4.inOut"
        }, "-=.5")
        countTimeline.to(count3, {
            y: -counterFrag1 * 74,
            duration: .8,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 7,
            duration: .8,
            ease: "power4.inOut"
        }, "-=.8")
        countTimeline.to(count3, {
            y: -counterFrag1 * 100,
            duration: .65,
            ease: "power4.inOut"
        })
        countTimeline.to(count2, {
            y: -counterFrag1 * 10,
            duration: .65,
            ease: "power4.inOut",
        }, "-=.65")
        countTimeline.to(count1, {
            y: -counterFrag1,
            duration: .65,
            ease: "power4.inOut",
        }, "-=.65")
        countTimeline.to(".t", {
            y: 100,
            duration: 1.4,
            rotateX: "-80deg",
            scaleX: 0.9,
            scaleY: 0.9,
            opacity: 0,
            stagger: 0.1,
            ease: "power4.inOut",
        }, "-=.65")

        countTimeline.to(overlayInner, {
            scale: 1,
            duration: .3,
            ease: "power4.inOut",
            onComplete: intAnim
        })
        countTimeline.to(loadOverlay, {
            x: "100%",
            duration: 1,
            ease: "power4.inOut"
        }, "-=.4")
        countTimeline.to("#noise2", {
            x: "100%",
            duration: 1,
            alpha: 0,
            ease: "power4.inOut"
        }, "-=.3")
        countTimeline.from(".el-bg", {
            opacity: 0,
            duration: 0.5,
            ease: "power4.inOut"
        }, "-=0.8")
        countTimeline.from(".en-logo img", 1.2, {
            opacity: 0,
            duration: 0.5,
            y: 300,
            ease: "power4.inOut"
        }, "-=0.7")
        countTimeline.from(".hro-img", 1.2, {
            opacity: 0,
            duration: 0.5,
            y: 300,
            ease: "power4.inOut"
        }, "-=0.7")
        countTimeline.from(".module--header__bg", 1, {
            opacity: 0,
            duration: 0.5,
            x: -100,
            ease: "power4.inOut"
        }, "-=0.6")

        countTimeline.from(".about-us-image img", 1, {
            y: "200",
            duration: 1,
            opacity: 0,
            transformOrigin: "bottom",
            ease: "power4.inOut"
        }, "-=1.2")
        countTimeline.to(".tris_titles span", 2, {
            y: "0",
            duration: 0.5,
            ease: "power4.inOut"
        }, "-=0.9")
        countTimeline.from(".text-rveal span", 1, {
            y: "180",
            duration: 0.5,
        }, "-=2")
        countTimeline.from(".element", 1, {
            scale: 0,
            duration: 0.5,
            opacity: 0
        }, "-=1.8")
        countTimeline.from(".top-img img", 1, {
            duration: 0.5,
            opacity: 0,
            transformOrigin: "left",
            x: -100
        }, "-=1.3")
        countTimeline.from(".welcome-heading", 2, {
            opacity: 0,
            duration: 1,
            ease: "power4.inOut"
        }, "-=1.6")



    }
    preloader()


}




function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// 

gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
});

gsap.set('.null', { opacity: 0 })

$(document).ready(function() {

    "use strict";
    // scr();
  
    ChangeColor();
    Horizontal();
    Opaci();
    TitleChange();
    Plrax();
    About2();
    splt()
    About();
    Serv();
    PortfolioS();
    aliothRecentWorks()
    Marq();
    Changehum();
    Scrol();
    Footer();
});



// locomotive Scroll

gsap.registerPlugin(ScrollTrigger);

let locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
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


// Moobile Js
window.addEventListener('orientationchange', () => {
    window.location.reload();
  });
  
 
  const desktop_size = window.matchMedia('(min-width: 1150px)');
  
  const mobile_size = window.matchMedia('(max-width: 1150px)');
  
if (mobile_size.matches) {

    ScrollTrigger.config({
        autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });
    $(document).ready(() => {
        // Hero Section
        function HeroSection() {


            Splitting();
            document.querySelector('meta[name=viewport][content*="shrink-to-fit=no"]') ? 'shrink-to-fit=no' : 'Default; shrink-to-fit not specified'

            let fixed_scrol = gsap.timeline({
                id: 'start_1',
                scrollTrigger: {
                    trigger: '.hero-section',
                    start: 'top top',
                    end: '1000 center',
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
            fixed_scrol.to(".small_heading", {
                opacity: 1,
                y: 20,
                duration: 3,
                ease: "power1.In"
            }, "4")
            // fixed_scrol.to('.container_hero', { display: ('none') }, 2);
            fixed_scrol.to(".logo", 7, {
                opacity: 1,
                duration: 10,
                ease: "power2.inOut",
                zIndex: 2,
        
            }, 15)

    
   
        }
        HeroSection();
    

        function aa() {
                
        const digital_devices = gsap.timeline({
            
            scrollTrigger: {
              trigger: '.mobl',
                start: '-500 top',
                scroller: ".smooth-scroll",
            },
          });
        //   digital_devices.to('.mobli-cont_content p', {
        //     opacity: 1,
        //     y: 0,
        //     duration:0.5,
        //     ease: "power1.In"
        //   }, '-=1')
          digital_devices.from(".mobli-cont_content p .char", 2, { y: -50, opacity: 0, duration: 0.5, ease: Power2.easeInOut, stagger: 0.03 }, "-=2");
          
        }
        aa();

        // Change Color
function ChangeColor() {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".smooth-scroll",
            start: "top 60%",
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
ChangeColor()

// works
function Works() {
    let work = gsap.timeline({
        scrollTrigger: {
            trigger: '.works__inner',
            start: '-300 top',
            end: '500 top',
            scroller: ".smooth-scroll",
            toggleActions: 'restart reverse restart reverse ',

        },
    });

    work.from(".works__hero__line", 1, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.In",
    }, "-=0.5")

}
Works()
    });

    
}

if (desktop_size.matches) {
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
    fixed_scrol.to('.container_word_change_t', { scale: 1.2, duration: 7, ease: 'power2.in' }, 29);
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
    fixed_scrol.to('.macbook_frame', { opacity: 0, scale: 1, duration: 5.5, ease: 'power1.inOut' }, 54);
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
    HeroSection();
    
    function Works() {
        let work = gsap.timeline({
            scrollTrigger: {
                trigger: '.works__inner',
                start: '-300 top',
                end: '500 top',
                scroller: ".smooth-scroll",
                toggleActions: 'restart reverse restart reverse ',
    
            },
        });
    
        work.from(".works__hero__line", 1, {
            opacity: 0,
            duration: 0.3,
            ease: "power1.In",
        }, "-=0.5")
    
    }
    Works()
 }


gsap.to(".navItemLinkInner", { attr: { x: 0 }, duration: 1, repeat: -1, yoyo: true });
// humburger menu
var t1 = new TimelineMax({ paused: true });

t1.to(".nav-container", 1, {
    left: -1,
    ease: Expo.easeInOut,
    duration: 1,
}, "-=0.8");

t1.staggerFrom(
    ".Menu-nav > div, .nav-second > div",
    0.8, { y: 100, opacity: 0, ease: Expo.easeOut },
    "0.1",
    "-=0.2"
);

t1.reverse();
$(document).on("click", ".menu-open", function() {
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".menu-close", function() {
    t1.reversed(!t1.reversed());
});
$(document).on("click", ".nav-num a", function() {
    t1.reversed(!t1.reversed());
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



// Change Color
function ChangeColor() {
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
        const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
        const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

        ScrollTrigger.create({
            trigger: colorSection,
            scroller: ".smooth-scroll",
            start: "top 60%",
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

function aliothRecentWorks() {

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
                    scrub: 2,
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
                scrub: 2,
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
                    scrub: 2,

                }
            })

            gsap.fromTo($this, {
                x: '0%'
            }, {
                x: '-25%',
                scrollTrigger: {
                    trigger: parentSec,
                    pin: false,
                    scrub: 2,
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
                gsap.to(".line", {
                    backgroundColor: colorSections.dataset.humcolor,
                    overwrite: "auto"
                }),
            onLeaveBack: () =>
                gsap.to(".line", {
                    backgroundColor: prevBg,
                    overwrite: "auto"
                })
        });
    });

}



// Services Accordian
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
            toggleActions: 'restart reverse restart reverse ',
        },
    });
    about.to(".about-us-image img", 1, {
        opacity: 0,
        duration: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut"
    }, "-=1.8")
    about.from(".top-p ", { opacity: 0, duration: 0.4, ease: Power2.easeInOut, stagger: 0.03 }, "-=1.2");
    about.from(".about-p p", { y: 50, opacity: 0, duration: 0.4, ease: Power2.easeInOut }, "-=1.3");
    about.from(".res", 2, { y: -100, opacity: 0, duration: 0.3, ease: Power2.easeInOut }, "-=2");
    about.from(".re .char", 2, { y: -210, opacity: 0, duration: 0.3, ease: Power2.easeInOut, stagger: 0.03 }, "-=1.9");
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

// Portfolio section
function PortfolioS() {
    let ports = gsap.timeline({
        scrollTrigger: {
            trigger: '.portfolio',
            start: '-400 top',
            end: '1200 top',
            scroller: ".smooth-scroll",
            toggleActions: 'restart reverse restart reverse ',
        },
    });
    ports.from(
        ".back span",
        1, {
            opacity: 0,
            y: 60,
            ease: "Power2.easeIn",
            duration: 1,
            stagger: 0.1,
        },
        "-=0.7"
    );
    ports.from(
        ".back2 span",
        1, {
            opacity: 0,
            y: 60,
            ease: "Power2.easeIn",
            duration: 1,
            stagger: 0.1,
        },
        "-=0.7"
    );
    ports.from(
        ".headers > div",
        1, {
            opacity: 0,
            y: 60,
            ease: "Power2.easeIn",
            duration: 1,
            stagger: 0.1,
        },
        "-=0.5"
    );
    ports.from(".container-item h3", {
        opacity: 0,
        y: 50,
        display: "none",
        duration: 0.5,
        ease: "back.out",
        stagger: 0.2,
    }, "-=0.5")

    const allcontainer = gsap.utils.toArray(".container-item");
    const venueImageWrap = document.querySelector(".container-img-wrap");
    const venueImage = document.querySelector(".container-img");

    function initcontainer() {
        allcontainer.forEach((link) => {
            link.addEventListener("mouseenter", venueHover);
            link.addEventListener("mouseleave", venueHover);
            link.addEventListener("mousemove", moveVenueImage);
        });
    }

    function moveVenueImage(e) {
        let xpos = e.clientX;
        let ypos = e.clientY;
        const tl = gsap.timeline();
        tl.to(venueImageWrap, {
            x: xpos,
            y: ypos,
        });
    }

    function venueHover(e) {
        if (e.type === "mouseenter") {
            const targetImage = e.target.dataset.img;

            const tl = gsap.timeline();
            tl.set(venueImage, {
                backgroundImage: `url(${targetImage})`,
            }).to(venueImageWrap, {
                duration: 0.5,
                autoAlpha: 1,
            });
        } else if (e.type === "mouseleave") {
            const tl = gsap.timeline();
            tl.to(venueImageWrap, {
                duration: 0.5,
                autoAlpha: 0,
            });
        }
    }

    function init() {
        initcontainer();
    }

    window.addEventListener("load", function() {
        init();
    });

}

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
            // anticipatePin: 1,
            start: "top top",
            end: "+=4000"
        },
        x: -horizontalScrollLength,
        ease: "none",
        //   stagger: 0.8,
    });

}


// Marquee
function Marq() {
    let currentScroll = 0;
    let isScrollingDown = true;

    let tween = gsap.to(".marquees__part", { xPercent: -100, repeat: -1, duration: 10, ease: "linear" }).totalProgress(0.5);

    gsap.set(".marquees__inner", { xPercent: -50 });

    window.addEventListener("scroll", function() {

        if (window.pageYOffset > currentScroll) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        gsap.to(tween, {
            timeScale: isScrollingDown ? 1 : -1
        });

        currentScroll = window.pageYOffset
    });
}

// asa
// function scr(){

//     let op2 = gsap.timeline({

//         scrollTrigger: {
//           trigger: "body",
//           scroller: ".smooth-scroll",
//           scrub: 0.3,
//           start: "top top",
//           end: "500%+",
//         },

//       })
//       op2.to('.progress span', { height: '100px', ease: 'none' }, 0)

// }



// pop Form

var ClickForm = new TimelineMax({ paused: true });

ClickForm.to(".form-container", 1, {
    bottom: 0,
    ease: Expo.easeInOut,
});

ClickForm.staggerFrom(".frm", 0.5, { y: 100, opacity: 0, duration: 0.5, ease: 'power2.In' }, "-=0.3");

ClickForm.reverse();
$(document).on("click", ".action-icon a", function() {
    ClickForm.reversed(!ClickForm.reversed());
});
$(document).on("click", ".form-close", function() {
    ClickForm.reversed(!ClickForm.reversed());
});




// const divArr = document.querySelectorAll('.action-icon a');

// const ClickForms = gsap.timeline({ paused: true,  });
// ClickForms.to(".form-container", 1, {
//     bottom: 0,
//     ease: Expo.easeInOut,
// });
// ClickForms.staggerFrom(".frm", 0.5, { y: 100, opacity: 0, duration: 0.5, ease: 'power2.In' }, );
// divArr.forEach(e => {
//     e.addEventListener('click', function() {
//         if (ClickForms.reversed()) {

//             ClickForms.play();
//         } else {
//             ClickForms.reverse(this);
//         }
//     })
// })



$(document).ready(function() {
    var $cat = $('select[name=country]'),
        $items = $('select[name=items]');

    $cat.change(function() {
        var $this = $(this).find(':selected'),
            rel = $this.attr('rel'),
            $set = $items.find('option.' + rel);

        if ($set.size() < 0) {
            $items.hide();
            return;
        }

        $items.show().find('option').hide();

        $set.show().first().prop('selected', true);
    });


});



function pincodeDropdown(containernew) {
    var pincode = {
        AFG: "+93",
        ALB: "+355",
        ALG: "+213",
        AND: "+376",
        ANG: "+244",
        ANT: "+1-268",
        ARG: "+54",
        ARM: "+374",
        ARU: "+297",
        ASA: "+1-684",
        AUS: "+61",
        AUT: "+43",
        AZE: "+994",
        BAH: "+1-242",
        BAN: "+880",
        BAR: "+1-246",
        BDI: "+257",
        BEL: "+32",
        BEN: "+	229",
        BER: "+1-441",
        BHU: "+975",
        BIH: "+387",
        BIZ: "+501",
        BLR: "+375",
        BOL: "+591",
        BOT: "+267",
        BRA: "+55",
        BRN: "+973",
        BRU: "+673",
        BUL: "+359",
        BUR: "+226",
        CAF: "236",
        CAM: "+855",
        CAN: "+1",
        CAY: "+1-345",
        CGO: "+242",
        CHA: "+235",
        CHI: "+56",
        CHN: "+86",
        CIV: "Cote d'Ivoire",
        CMR: "+237",
        COD: "+243",
        COK: "+682",
        COL: "+57",
        COM: "+269",
        CPV: "+238",
        CRC: "+506",
        CRO: "+385",
        CUB: "+53",
        CYP: "+357",
        CZE: "+420",
        DEN: "+45",
        DJI: "+253",
        DMA: "+1 767",
        DOM: "+1 809",
        ECU: "+593",
        EGY: "+20",
        ERI: "+291",
        ESA: "+503",
        ESP: "+34",
        EST: "+372",
        ETH: "+251",
        FIJ: "+679",
        FIN: "+358",
        FRA: "+33",
        FSM: "+691",
        GAB: "+241",
        GAM: "+220",
        GBR: "+44",
        GBS: "+245",
        GEO: "+995",
        GEQ: "+240",
        GER: "+49",
        GHA: "+233",
        GRE: "+30",
        GRN: "+1 473",
        GUA: "+502",
        GUI: "+224",
        GUM: "+1 671",
        GUY: "+592",
        HAI: "+509",
        HKG: "+852",
        HON: "+504",
        HUN: "+36",
        INA: "+62",
        IND: "+91",
        IRI: "+98",
        IRL: "+353",
        IRQ: "+964",
        ISL: "+354",
        ISR: "+972",
        ISV: "+00 1",
        ITA: "+39",
        IVB: "+1 284",
        JAM: "+1 876",
        JOR: "+962",
        JPN: "+81",
        KAZ: "+7 6",
        KEN: "+254",
        KGZ: "+996",
        KIR: "+686",
        KOR: "+82",
        KOS: "+383",
        KSA: "+966",
        KUW: "+965",
        LAO: "+856",
        LAT: "+371",
        LBA: "+218",
        LBR: "+231",
        LCA: "+1 758",
        LES: "+266",
        LIB: "+961",
        LIE: "+423",
        LTU: "+370",
        LUX: "+352",
        MAD: "+261",
        MAR: "+212",
        MAS: "+60",
        MAW: "+265",
        MDA: "+373",
        MDV: "+960",
        MEX: "+52",
        MGL: "+976",
        MHL: "+692",
        MKD: "+389",
        MLI: "+223",
        MLT: "+356",
        MNE: "+382",
        MON: "+377",
        MOZ: "+258",
        MRI: "+230",
        MTN: "+222",
        MYA: "+95",
        NAM: "+264",
        NCA: "+505",
        NED: "+31",
        NEP: "+977",
        NGR: "+234",
        NIG: "+227",
        NOR: "+47",
        NRU: "+674",
        NZL: "+64",
        OMA: "+968",
        PAK: "+92",
        PAN: "+507",
        PAR: "+595",
        PER: "+51",
        PHI: "+63",
        PLE: "+970",
        PLW: "+680",
        PNG: "+675",
        POL: "+48",
        POR: "+351",
        PRK: "+850",
        PUR: "+1 787",
        QAT: "+974",
        ROU: "+40",
        RSA: "+27",
        RUS: "+7",
        RWA: "+250",
        SAM: "+685",
        SEN: "+221",
        SEY: "+248",
        SIN: "+65",
        SKN: "+1 869",
        SLE: "+232",
        SLO: "+386",
        SMR: "+378",
        SOL: "+677",
        SOM: "+252",
        SRB: "+381",
        SRI: "+94",
        SSD: "+211",
        STP: "+239",
        SUD: "+249",
        SUI: "+41",
        SUR: "+597",
        SVK: "+421",
        SWE: "+46",
        SWZ: "+268",
        SYR: "+963",
        TAN: "+255",
        TGA: "+676",
        THA: "+66",
        TJK: "+992",
        TKM: "+993",
        TLS: "+670",
        TOG: "+228",
        TPE: "+886",
        TTO: "+1 868",
        TUN: "+216",
        TUR: "+90",
        TUV: "+688",
        UAE: "+971",
        UGA: "+256",
        UKR: "+380",
        URU: "+598",
        USA: "+1",
        UZB: "+998",
        VAN: "+678",
        VEN: "+58",
        VIE: "+84",
        VIN: "+1 784",
        YEM: "+967",
        ZAM: "+260",
        ZAN: "+255 24",
        ZIM: "+263"
    }
    var pinout = "<select><option class=''>Pin</option>";
    for (var i in pincode) {
        pinout += "<option class='" + i + "'>" + pincode[i] + "</option>";
    }
    pinout += "</select>";

    document.getElementById(containernew).innerHTML = pinout;
}

pincodeDropdown("pincode");


// upload
function upload() {
    var percentage = null,
        clippaper = document.querySelector(".uploader__clip"),
        clippaperLength = clippaper.getTotalLength();
    clippaper.style.strokeDasharray = clippaperLength;
    clippaper.style.strokeDashoffset = -clippaperLength;

    function Init() {
        var fileSelect = document.querySelector(".uploader__input"),
            fileDrag = document.querySelector(".uploader__label"),
            fileSize = null;

        fileSelect.addEventListener("change", fileSelectHandler, false);

        // Is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
            // File Drop
            fileDrag.addEventListener("dragover", fileDragHover, false);
            fileDrag.addEventListener("dragleave", fileDragHover, false);
            fileDrag.addEventListener("drop", fileSelectHandler, false);
        }
    }

    function fileDragHover(e) {
        var fileDrag = document.querySelector(".uploader__label");

        e.stopPropagation();
        e.preventDefault();

        fileDrag.className =
            e.type === "dragover" ? "uploader__label hover" : "uploader__label";
    }

    function fileSelectHandler(e) {
        document.querySelector(".uploader").classList.add("uploading");

        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files;

        // Cancel event and hover styling
        fileDragHover(e);

        // Process all File objects
        for (var i = 0, f;
            (f = files[i]); i++) {
            parseFile(f);
            uploadFile(f);
        }
    }

    function parseFile(file) {
        // console.log(file.name);

        var imageName = file.name;

        var isGood = /\.(?=gif|jpg|png|jpeg)/gi.test(imageName);
        if (isGood) {
            // Thumbnail Preview
            document.querySelector(".uploader__file").src = URL.createObjectURL(file);
        } else {
            document.querySelector(".uploader").reset();
        }
    }

    function updateFileProgress(e) {
        if (e.lengthComputable) {
            percentage = (e.loaded / fileSize) * 100;
            clippaper.style.strokeDashoffset = -clippaperLength + (percentage * clippaperLength) / 100;

            if (e.loaded === fileSize) {
                document.querySelector(".uploader__file").classList.add("show");
                document.querySelector(".uploader__svg").classList.add("show");
            }
        }
    }

    function uploadFile(file) {
        fileSize = file.size;

        var xhr = new XMLHttpRequest(),
            fileSizeLimit = 1024; // In MB
        if (xhr.upload) {
            // Check if file is less than x MB
            if (file.size <= fileSizeLimit * 1024 * 1024) {
                // Progress bar
                xhr.upload.addEventListener("progress", updateFileProgress, false);

                // File received / failed
                xhr.onreadystatechange = function(e) {
                    if (xhr.readyState == 4) {
                        // Everything is good!
                        // progress.className = (xhr.status == 200 ? "success" : "failure");
                        // document.location.reload(true);
                    }
                };

                // Start upload
                xhr.open("POST", document.querySelector(".uploader").action, true);
                xhr.setRequestHeader("X-File-Name", file.name);
                xhr.setRequestHeader("X-File-Size", file.size);
                xhr.setRequestHeader("Content-Type", "multipart/form-data");
                xhr.send(file);
            } else {
                console.log(
                    "Please upload a smaller file (< " + fileSizeLimit + " MB)."
                );
            }
        }
    }

    // Check for the various File API support.
    if (window.File && window.FileList && window.FileReader) {
        Init();
    } else {
        document.querySelector(".uploader__labele").style.display = "none";
    }
}

upload();


//   price
$('.slider').each(function(e) {

    var slider = $(this),
        width = slider.width(),
        handle,
        handleObj;

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + width + ' 83');

    slider.html(svg);
    slider.append($('<div>').addClass('active').html(svg.cloneNode(true)));

    slider.slider({
        range: true,
        values: [5000, 50000],
        min: 5000,
        step: 5,
        minRange: 1000,
        max: 500000,
        create(event, ui) {

            slider.find('.ui-slider-handle').append($('<div />'));

            $(slider.data('value-0')).html(slider.slider('values', 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('value-1')).html(slider.slider('values', 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('range')).html((slider.slider('values', 1) - slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));

            setCSSVars(slider);

        },
        start(event, ui) {

            $('body').addClass('ui-slider-active');

            handle = $(ui.handle).data('index', ui.handleIndex);
            handleObj = slider.find('.ui-slider-handle');

        },
        change(event, ui) {
            setCSSVars(slider);
        },
        slide(event, ui) {

            let min = slider.slider('option', 'min'),
                minRange = slider.slider('option', 'minRange'),
                max = slider.slider('option', 'max');

            if (ui.handleIndex == 0) {
                if ((ui.values[0] + minRange) >= ui.values[1]) {
                    slider.slider('values', 1, ui.values[0] + minRange);
                }
                if (ui.values[0] > max - minRange) {
                    return false;
                }
            } else if (ui.handleIndex == 1) {
                if ((ui.values[1] - minRange) <= ui.values[0]) {
                    slider.slider('values', 0, ui.values[1] - minRange);
                }
                if (ui.values[1] < min + minRange) {
                    return false;
                }
            }

            $(slider.data('value-0')).html(ui.values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('value-1')).html(ui.values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));
            $(slider.data('range')).html((slider.slider('values', 1) - slider.slider('values', 0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '&thinsp;'));

            setCSSVars(slider);

        },
        stop(event, ui) {

            $('body').removeClass('ui-slider-active');

            let duration = .6,
                ease = Elastic.easeOut.config(1.08, .44);

            TweenMax.to(handle, duration, {
                '--y': 0,
                ease: ease
            });

            TweenMax.to(svgPath, duration, {
                y: 42,
                ease: ease
            });

            handle = null;

        }
    });

    var svgPath = new Proxy({
        x: null,
        y: null,
        b: null,
        a: null
    }, {
        set(target, key, value) {
            target[key] = value;
            if (target.x !== null && target.y !== null && target.b !== null && target.a !== null) {
                slider.find('svg').html(getPath([target.x, target.y], target.b, target.a, width));
            }
            return true;
        },
        get(target, key) {
            return target[key];
        }
    });

    svgPath.x = width / 2;
    svgPath.y = 42;
    svgPath.b = 0;
    svgPath.a = width;

    $(document).on('mousemove touchmove', e => {
        if (handle) {

            let laziness = 4,
                max = 24,
                edge = 52,
                other = handleObj.eq(handle.data('index') == 0 ? 1 : 0),
                currentLeft = handle.position().left,
                otherLeft = other.position().left,
                handleWidth = handle.outerWidth(),
                handleHalf = handleWidth / 2,
                y = e.pageY - handle.offset().top - handle.outerHeight() / 2,
                moveY = (y - laziness >= 0) ? y - laziness : (y + laziness <= 0) ? y + laziness : 0,
                modify = 1;

            moveY = (moveY > max) ? max : (moveY < -max) ? -max : moveY;
            modify = handle.data('index') == 0 ? ((currentLeft + handleHalf <= edge ? (currentLeft + handleHalf) / edge : 1) * (otherLeft - currentLeft - handleWidth <= edge ? (otherLeft - currentLeft - handleWidth) / edge : 1)) : ((currentLeft - (otherLeft + handleHalf * 2) <= edge ? (currentLeft - (otherLeft + handleWidth)) / edge : 1) * (slider.outerWidth() - (currentLeft + handleHalf) <= edge ? (slider.outerWidth() - (currentLeft + handleHalf)) / edge : 1));
            modify = modify > 1 ? 1 : modify < 0 ? 0 : modify;

            if (handle.data('index') == 0) {
                svgPath.b = currentLeft / 2 * modify;
                svgPath.a = otherLeft;
            } else {
                svgPath.b = otherLeft + handleHalf;
                svgPath.a = (slider.outerWidth() - currentLeft) / 2 + currentLeft + handleHalf + ((slider.outerWidth() - currentLeft) / 2) * (1 - modify);
            }

            svgPath.x = currentLeft + handleHalf;
            svgPath.y = moveY * modify + 42;

            handle.css('--y', moveY * modify);

        }
    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, before, after, width) {
    let smoothing = .16,
        points = [
            [0, 42],
            [before <= 0 ? 0 : before, 42],
            update, [after >= width ? width : after, 42],
            [width, 42]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}

function setCSSVars(slider) {
    let handle = slider.find('.ui-slider-handle');
    slider.css({
        '--l': handle.eq(0).position().left + handle.eq(0).outerWidth() / 2,
        '--r': slider.outerWidth() - (handle.eq(1).position().left + handle.eq(1).outerWidth() / 2)
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






console.clear();
console.log('PortfolioS')