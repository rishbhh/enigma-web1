
gsap.utils.toArray(".next").forEach((el) => {

    const image = el.querySelector('img.swipeimage'),
        setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px"),
        align = e => {
            const top = el.getBoundingClientRect().top;
            setX(e.clientX);
            setY(e.clientY - top);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, { autoAlpha: 1, opacity: 0.7, scale: 1,duration:0.5, ease: "power2.inOut", paused: true, onReverseComplete: stopFollow },"-=0.5");

    el.addEventListener('mouseenter', (e) => {
        fade.play();
        // startFollow();
        // align(e);
    });

    el.addEventListener('mouseleave', () => fade.reverse());

});

if (document.body.contains(document.getElementById('cover-pr'))) {



    gsap.to('#cover-pr>#cover_d>div', {
        height: '100vh',
        width: '100vw',
        scrollTrigger: {
            trigger: "#cover-pr",
            end: "+=100%",
            scroller: ".smooth-scroll",
            scrub: true
        }
    })

    let tl_2 = gsap.timeline({ defaults: { ease: "none" } })
        .to("#marquee figure img", { scale: 1 })

    ScrollTrigger.create({
        trigger: "#marquee",
        end: "+=200%",
        scroller: ".smooth-scroll",
        animation: tl_2,
        scrub: true,
    })
}

const abt = gsap.timeline({

    scrollTrigger: {
        trigger: '.im',
        start: '-500 top',
        end: '100 center',
        scroller: ".smooth-scroll",
    },
})

abt.from(".cover", 1, { scaleX: 0, transformOrigin: "left" });
abt.to(".cover", 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
abt.from(".fit-im", 1, { opacity: 0 }, "reveal");



const cont = gsap.timeline({

    scrollTrigger: {
        trigger: '.content',
        start: '-100 top',
        scroller: ".smooth-scroll",
    },
})

// cont.from('.typ ', 0.9, { y: 70, opacity: 0, stagger: 0.03 });
const evry_gl = gsap.utils.toArray('.bot-b img');
evry_gl.forEach(evry_gl => {
    gsap.from(evry_gl, {
        scrollTrigger: {
            trigger: ".content",
            // scrub: true,
            start: "top",
            scroller: ".smooth-scroll",
            toggleActions: "play pause resume reverse",
        },
        y: 500,
        duration: 1,
        ease: "circ.out",
        opacity: 0,
        // stagger:0.6
    })
})

// scale
let fixed_scrols = gsap.timeline({
    scrollTrigger: {
        trigger: '.bol-prh',
        start: '-800 top',
        end: '500 center',
        scroller: ".smooth-scroll",
        markers: false,
        // pin: true,
        // pinReparent: true,
        scrub: true,
    },
});
fixed_scrols.fromTo('.p-s ', { y: 50, scale: 0.5 }, {
    y: 0,
    scale: 1,
    duration: 8,
    ease: 'power1.inOut',
},);

// img
window.onload = function() {
    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                scroller: ".smooth-scroll",
                // toggleActions: "restart none none reset"
            }
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
            xPercent: -100,
            ease: Power2.out
        });
        tl.from(image, 1.5, {
            xPercent: 100,
            scale: 1.1,
            delay: -1.5,
            ease: Power2.out
        });

    });
}


// let why = document.querySelectorAll(".flex");

// why.forEach((container) => {
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             start: "-100 center",
//             scroller: ".smooth-scroll",
//         }
//     });

   
//     tl.from(container, 1, {
//         y: 100,
//         duration: 0.5,
//         ease: Power2.out,
//         opacity: 0
//     }, "-=0.9")

// });

// ScrollTrigger.create({
//   trigger: videoElem,
//   onEnter: () => videoElem.play(),
//   onEnterBack: () => videoElem.play(),
//   onLeave: () => videoElem.pause(),
//   onLeaveBack: () => videoElem.pause(),
// });

// Animate the properties individually
gsap.utils.toArray(".move img").forEach(star => {
    tweenProperty(star, "scale", 0.98, 1);
    tweenProperty(star, "x", -30, 30);
    tweenProperty(star, "y", -40, 40);
  });
  
  
  function tweenProperty(target, prop, min, max) {
    
    var randomDur = gsap.utils.random(2, 3, 0.2, true);
    var randomDelay = gsap.utils.random(0.2, 1, 0.2, true);
  
    gsap.to(target,  {
      [prop]: gsap.utils.random(min, max),
      duration: randomDur(), 
      delay: randomDelay(), 
      ease: 'none',
      onComplete: tweenProperty,
      onCompleteParams: [target, prop, min, max]
    });
  
  }
  
  function background(){
    
    var next = gsap.utils.random(0.2, 0.2, 0.2, true);
    
    gsap.to('.about-us-image img', { duration:1, ease:'none'});
    
    var delayedCall = gsap.delayedCall(next, background);
    
  }
  
background();
  

// works
let Workss = document.querySelectorAll(".cnt-rvl");

Workss.forEach((container) => {
    let bl = container.querySelector(".rvl");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scroller: ".smooth-scroll",
            // toggleActions: "restart none none reset"
        }
    });


    tl.to(bl, 1, {
        y: 0,
        duration: 0.5,
        ease: Power2.out,
        opacity: 1
    }, "-=0.7")



});


// blog
let Blog_ = document.querySelectorAll(".p-prj-caption");

Blog_.forEach((container) => {
    let bl = container.querySelector(".p-prj-caption-name");
    let bl2 = container.querySelector("p");
    let bl3 = container.querySelector(".xss");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scroller: ".smooth-scroll",
            // toggleActions: "restart none none reset"
        }
    });


    tl.from(bl, 1, {
        y: 40,
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.7")
    tl.from(bl2, 1, {
        y: 40,
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.5")
    tl.from(bl3, 1, {
        y: 40,
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.5")


});


// let client = document.querySelectorAll(".client-section");

// client.forEach((container) => {
//     let hea = container.querySelector("h2");
//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             start: "-200 top",
//             scroller: ".smooth-scroll",
//             // toggleActions: 'restart reverse restart reverse ',
//         }
//     });


//     tl.from(container, 1, {
//         duration: 0.5,
//         ease: Power2.out,
//         opacity: 0
//     }, "-=0.7")
//     tl.from(hea, 1, {
//         y: 100,
//         duration: 0.5,
//         ease: Power2.out,
//         opacity: 0
//     }, "-=0.7")

// });



var beepOne = $("#beep-one")[0];
$("#clint")
    .mouseenter(function() {
        beepOne.play();
    })
    .mouseleave(function() {
        beepOne.pause();
    });



  
  
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
      }
  };
    
