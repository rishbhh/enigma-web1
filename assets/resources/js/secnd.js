
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
        countTimeline.from('.typ ', 0.9, { y: 40, opacity: 0,duration: 0.5,  },"-=1");
        countTimeline.from(".text-rveal .header_title_line", {
            duration: 0.5,
            opacity: 0,
            ease: "power2.In",
            css:{transform:"translateY(100%) rotateX(-80deg)", opacity:'0'},
            stagger: 0.1,
        }, "-=0.9")
        countTimeline.from('.blog-flex ', 0.9, { y: 40, opacity: 0,duration: 0.5,  },"-=0.7");
        countTimeline.from(".hro-img", 1.2, {
            opacity: 0,
            duration: 0.5,
            y: 300,
            ease: "power4.inOut"
        }, "-=0.7")
        countTimeline.from(".he1 .l", 1.6,{
            y: "150",
            opacity: 0,
            duration: 0.5, stagger: 0.3,
            ease: "power4.inOut"
        }, "-=0.8")
        
        countTimeline.from(".module--header__bg", 1, {
            opacity: 0,
            duration: 0.5,
            x: -100,
            ease: "power4.inOut"
        }, "-=0.6")

        countTimeline.from(".about-us-image img", 1, {
            duration: 0.8,
            opacity: 0,
        }, "-=1.2")
        countTimeline.to(".tris_titles span", 2, {
            y: "0",
            duration: 0.5,
            ease: "power4.inOut"
        }, "-=0.9")
        
        
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
        countTimeline.from(".welcome-heading", 1, {
            opacity: 0,
            duration: 0.5,
            ease: "power4.inOut"
        }, "-=2")

        countTimeline.from('.gform_wrapper', 1, {
            opacity: 0,
            duration: 0.5,
            ease: "power4.inOut"
        }, "-=2")
        
       


    }
    preloader()


}




function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}