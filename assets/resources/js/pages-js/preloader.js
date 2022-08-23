(function($) {
    "use strict";
    console.clear();
    gsap.registerPlugin( ScrollTrigger,);
    var pageSet, siteLoader, headerStick, siteHeader, pageLayout, headerLayout, menuLayout, menuStyle;

    function pageSettings() {
        pageSet = $('body');
        siteLoader = pageSet.data('page-loader');
        menuStyle, headerLayout, headerStick = pageSet.data('menu-style');
        siteLoader = pageSet.data('page-loader');
        headerStick = pageSet.data('header-sticky');
        menuStyle = pageSet.data('menu-style');
        pageLayout = pageSet.data('page-layout');
        headerLayout = pageSet.data('header-layout');
        menuLayout = pageSet.data('menu-layout');
        pageSet.addClass(pageLayout)
    }
    pageSettings()
    
    var loader, loaderOv, loadAn;

    function pageLoader() {
        loader = $('.en-page-loader');
        if (siteLoader == true) {
            $('.apl-count').wrap('<div class="apl-wrapper"></div>');
            var loaderLayout = loader.data('layout');
            loader.addClass(loaderLayout)
            const nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1],
                nums2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
            let num1Text = '';
            let num2Text = '';
            for (let i = 0; i < nums1.length; i++) {
                num1Text += '<span>' + nums1[i] + '</span>';
            }
            for (let i = 0; i < nums2.length; i++) {
                num2Text += '<span>' + nums2[i] + '</span>';
            }
            $('.apl-count').append('<div class="apl-num apl-num-1"></div><div class="apl-num apl-num-2"></div><div class="apl-num apl-num-3"></div>')
            $('.apl-num-1').html(num1Text);
            $('.apl-num-2').html(num2Text);
            $('.apl-num-3').html('<span>%</span><span>0</span>');
            $('.apl-num').wrapInner('<div class="apl-num-wrapper"></div>')
            var aplCount = loader.find('.apl-count'),
                num1wrap = aplCount.find('.apl-num-1 .apl-num-wrapper'),
                num2wrap = aplCount.find('.apl-num-2 .apl-num-wrapper'),
                num3wrap = aplCount.find('.apl-num-3 .apl-num-wrapper'),
                duration = loader.data('duration');
            loadAn = gsap.timeline({
                yoyo: true,
                id: 'pageLoader',
                once: true,
                onStart: function() {
                    $('body').addClass('loading');
                },
            });
            loadAn.to(num1wrap, duration, {
                y: '-91%',
                ease: 'power2.inOut',
            }, .25)
            loadAn.to(num2wrap, duration, {
                y: '-95.3%',
                ease: 'power2.inOut',
            }, .25)
            loadAn.to(num3wrap, 2, {
                y: '0%',
                ease: 'power2.Out',
            }, .5)
            loadAn.to(num3wrap, 1, {
                y: '-50%',
                ease: 'power2.Out',
            }, duration - .6)
            loadAn.to('.apl-num-wrapper', .6, {
                y: '-100%',
                ease: 'power2.in',
                stagger: .1,
            }, duration + .6)
            
            loadAn.to(num3wrap, 1, {
                y: '-50%',
                ease: 'power2.Out',
            }, duration - .6)
            loadAn.to('.apl-num-wrapper', .6, {
                y: '-100%',
                ease: 'power2.in',
                stagger: .1,
            }, duration + .6)
        } else {
          
            loader.hide();
        }
        
    }
    function buttonsHover() {
        $(".button button .line, .button a .line").length && ($(".button button, .button a").mouseenter(function() {
            $(this);
            TweenMax.to($(this).find(".line"), .3, {
                left: "20%",
                width: "100%",
                ease: Power1.easeInOut
            }), TweenMax.to($(this).find(".text"), .3, {
                x: "10%",
                ease: Power1.easeInOut
            })
        }), $(".button button, .button a").mouseleave(function() {
            var e = $(this);
            TweenMax.to($(this).find(".text"), .3, {
                x: "0%",
                ease: Power1.easeInOut
            }), $(this).find(".line").css("transform-origin", "right 0"), TweenMax.to(e.find(".line"), .3, {
                scaleX: 0,
                ease: Power1.easeInOut,
                onComplete: function() {
                    e.find(".line").css({
                        left: "",
                        width: 0,
                        transform: "",
                        "transform-origin": "0 0"
                    }), TweenMax.to(e.find(".line"), .5, {
                        width: 20,
                        scaleX: 1,
                        ease: Power1.easeInOut
                    })
                }
            })
        }))
    }
    function siteHeaderSet() {
        siteHeader = $('.site-header');
        gsap.set(siteHeader, {
            clearProps: 'all'
        })
        var siteNav = $('.site-navigation'),
            headerHeight = siteHeader.outerHeight(),
            siteContent = $('#page'),
            headerWrapper = $('.header-wrapper');
        let mobileQuery = window.matchMedia('(max-width: 900px)');
        if (mobileQuery.matches) {
            siteHeader.addClass('fullscreen_menu');
            siteNav.addClass('fullscreen')
        } else {
            if ((menuStyle === 'classic') || (menuStyle == null)) {
                siteHeader.addClass('classic_menu')
                siteNav.addClass('classic')
            } else if (menuStyle === 'overlay') {
                siteHeader.addClass('fullscreen_menu');
                siteNav.addClass('fullscreen')
            }
        }
        siteHeader.addClass(headerLayout)
        if ((headerStick == true) || (headerStick == null)) {
            siteHeader.addClass('sticky_header')
        } else if (headerStick === "always") {
            siteHeader.addClass('sticky_header always_stick')
        }
        if (siteHeader.hasClass('sticky_header')) {
            var showcaseScroll = ScrollTrigger.getById('showcaseScroll'),
                stickyStart = 500,
                stickyBg = '#fff';
            if (siteHeader.hasClass('light')) {
                var stickyBg = "rgba(19,19,19,1)"
            }
            if (showcaseScroll) {
                var stickyStart = showcaseScroll.end;
                gsap.set(siteHeader, {
                    position: 'fixed'
                })
                var sitkcyHdr = ScrollTrigger.create({
                    trigger: siteHeader,
                    start: stickyStart + 'bottom',
                    id: 'stickyHeader',
                    markers: false,
                    onLeaveBack: function() {
                        gsap.to(siteHeader, {
                            position: 'fixed',
                            y: '0%',
                            height: 150,
                            duration: .75,
                            backgroundColor: 'transparent',
                            delay: .5,
                            ease: 'power2.out'
                        })
                        gsap.to(headerWrapper, {
                            top: '60%',
                            delay: .5,
                            duration: .75,
                            ease: 'power2.out'
                        })
                    },
                    onEnter: function() {
                        gsap.set(siteHeader, {
                            position: 'absolute',
                            top: stickyStart
                        })
                        ScrollTrigger.create({
                            trigger: 'body',
                            markers: false,
                            start: stickyStart + 500 + 'top',
                            end: 'bottom bottom',
                            onEnter: function() {
                                gsap.set(siteHeader, {
                                    position: 'fixed',
                                    top: 0,
                                    y: '-100%',
                                    height: 100,
                                    backgroundColor: stickyBg,
                                })
                                gsap.set(headerWrapper, {
                                    top: '45%'
                                })
                            },
                            onUpdate: function(self, direction, progress) {
                                if (self.direction == -1) {
                                    gsap.to(siteHeader, {
                                        y: '0%',
                                    })
                                } else {
                                    gsap.to(siteHeader, {
                                        y: '-100%',
                                    })
                                }
                            },
                            onLeaveBack: function(self) {
                                self.kill();
                            }
                        })
                    },
                    onEnterBack: function() {
                        gsap.set(siteHeader, {
                            position: 'fixed',
                            top: 0
                        })
                    }
                })
            } else {
                gsap.set(siteHeader, {
                    position: 'absolute'
                })
                ScrollTrigger.create({
                    trigger: 'body',
                    start: 'top+=500 top',
                    end: 'bottom bottom',
                    id: 'stickyHeader',
                    markers: false,
                    onEnter: function() {
                        if (pageSet.hasClass('dark')) {
                            var curBg = 'rgba(19,19,19,1)'
                        } else {
                            var curBg = '#ebebeb'
                        }
                        gsap.set(siteHeader, {
                            position: 'fixed',
                            top: 0,
                            y: '-100%',
                            height: 100,
                            backgroundColor: curBg,
                        })
                        gsap.set(headerWrapper, {
                            top: '45%'
                        })
                        ScrollTrigger.create({
                            trigger: 'body',
                            markers: false,
                            start: 'top top',
                            end: 'bottom bottom',
                            onUpdate: function(self, direction, progress) {
                                if (self.direction == -1) {
                                    gsap.to(siteHeader, {
                                        y: '0%',
                                    })
                                } else {
                                    gsap.to(siteHeader, {
                                        y: '-100%',
                                    })
                                }
                            },
                            onLeaveBack: function(self) {
                                self.kill();
                                gsap.to(siteHeader, {
                                    position: 'absolute',
                                    y: '0%',
                                    height: 150,
                                    duration: .75,
                                    backgroundColor: 'transparent',
                                    delay: .5,
                                    clearProps: 'all',
                                    ease: 'power2.out'
                                })
                                gsap.to(headerWrapper, {
                                    top: '60%',
                                    delay: .5,
                                    duration: .75,
                                    clearProps: 'all',
                                    ease: 'power2.out'
                                })
                            }
                        })
                    },
                })
            };
        }
    }
    function fullscreenNavigation() {
        if ($('.site-navigation').hasClass('fullscreen')) {
            var siteNav = $('.site-navigation'),
                menuItemHasSub = $('.menu-item.has-children > a'),
                subMenu = $('.site-navigation .menu li .sub-menu'),
                headerWrapper = $('.header-wrapper'),
                mainMenu = $('.main-menu');
            siteHeader.addClass('menu_' + menuLayout)
            siteNav.wrapInner("<div class='fs-menu-wrapper'></div>")
            var menuWrapper = $('.fs-menu-wrapper');
            menuItemHasSub.each(function() {
                let $this = $(this);
                $this.append('<span class="sub-toggle"><span class="sub-togg-line"></span><span class="sub-togg-line"></span></span>');
            });
            menuItemHasSub.on('click', function() {
                $('.sub-back').addClass('is-active');
                var $this = $(this);
                let parentLi = $this.parent('li'),
                    currentMenu = parentLi.parent('ul'),
                    menuItemLi = currentMenu.children('li'),
                    menuItemA = menuItemLi.children('a');
                var menuOut = gsap.fromTo(menuItemA, {
                    translateY: '0%',
                }, {
                    translateY: '-100%',
                    stagger: 0.03,
                    duration: .4,
                    ease: "power2.in",
                    overwrite: true,
                    onComplete: function() {
                        currentMenu.addClass('hidden');
                        currentMenu.removeClass('opened');
                        $('.sub-back').addClass('is-active')
                    }
                });
                let subMenu = parentLi.children('ul');
                let subMenuLi = subMenu.children('li');
                let subMenuLiA = subMenuLi.children('a')
                var subAnim = gsap.fromTo(subMenuLiA, {
                    translateY: "100%",
                }, {
                    translateY: "0%",
                    delay: .4,
                    stagger: .05,
                    overwrite: true,
                    ease: "power2.out",
                    onStart: function() {
                        subMenu.addClass('opened')
                    },
                });
            });
            $('.sub-back').on('click', function() {
                let currentMenu = $('.sub-menu.opened'),
                    currentMenuLi = currentMenu.children('li'),
                    currentMenuA = currentMenuLi.children('a');
                gsap.fromTo(currentMenuA, {
                    translateY: "0%",
                }, {
                    translateY: "100%",
                    stagger: -0.05,
                    overwrite: true,
                    ease: "power2.in",
                    onComplete: function() {
                        currentMenu.removeClass('opened')
                        currentMenu.addClass('hidden')
                    }
                })
                let parentMenu = currentMenu.parent('li').parent('ul')
                let parentMenuA = parentMenu.children('li').children('a');
                gsap.fromTo(parentMenuA, {
                    translateY: "-100%",
                }, {
                    translateY: "0%",
                    delay: .4,
                    stagger: -0.05,
                    overwrite: true,
                    ease: "power2.out",
                    onStart: function() {
                        parentMenu.removeClass('hidden');
                        parentMenu.addClass('opened');
                        if ($('.main-menu').hasClass('opened')) {
                            $('.sub-back').removeClass('is-active');
                        }
                    }
                })
            });
            var menuItemA = $('.menu.main-menu li a');
            menuItemA.each(function() {
                let $this = $(this),
                    text = $this.text();
                $this.attr('data-hover', text);
                let datHov = $this.data('hover');
                datHov.replace(/\s/g, "&nbsp;");
            })
            menuItemA.on('mouseenter', function(e) {
                let $this = $(this),
                    parentLi = $this.parent('li'),
                    miPosTop = parentLi.position().top;
                mainMenu.addClass('hovered')
                $this.addClass('hovered');
                gsap.to($this, .75, {
                    x: 15,
                    ease: 'CustomEase.create("cubic", "0.63,0.03,0.21,1")',
                })
            })
            menuItemA.on('mouseleave', function(e) {
                let $this = $(this);
                menuItemA.removeClass('hovered')
                mainMenu.removeClass('hovered');
                gsap.to($this, .75, {
                    x: 0,
                    ease: 'CustomEase.create("cubic", "0.63,0.03,0.21,1")',
                })
            })
            mainMenu.on('mouseleave', function() {
                if ($('.menu-item-active').css("visibility") === "visible") {}
            })
            var menuToggle = $('.menu-toggle'),
                toggleLine = $('.toggle-line');
            var menuAin = gsap.to('.main-menu > li > a', {
                translateY: 0,
                overwrite: true,
                stagger: .05,
                delay: .4,
                paused: true,
                onReverseComplete: function() {
                    siteNav.removeClass('menu-opened');
                    headerWrapper.removeClass('menu-opened');
                    menuToggle.removeClass('is-active');
                    $('.site-header').removeClass('menu-has-open');
                    // enableScroll();
                    menuItemHasSub.removeClass('has-sub-in')
                },
                onComplete: function() {
                    menuItemHasSub.addClass('has-sub-in')
                }
            })
            var socialListAnim = gsap.fromTo('.social-list li a', {
                translateY: "100%",
                skewY: 10,
                opacity:0
            }, {
                translateY: "0%",
                skewY: 0,
                opacity: 1,
                overwrite: true,
                stagger: .05,
                paused: true,
                delay: 1
            })
            var gitButtonAnim = gsap.fromTo('.git-button', {
                translateY: "50%",
            }, {
                translateY: "0%",
                opacity: 1,
                paused: true,
                delay: 1.3
            })
            menuToggle.on('click', function() {
                siteNav.removeClass('open');
                var clicks = $(this).data('clicks');
                var $this = $(this);
                if (clicks) {
                    if ($('.sub-menu').hasClass('opened')) {
                        $('ul.opened > li > a').addClass('cakomako')
                        gsap.fromTo('ul.opened > li > a', {
                            translateY: "0%"
                        }, {
                            translateY: "100%",
                            overwrite: true,
                            stagger: -0.05,
                            ease: "power2.in",
                            onStart: function() {
                                $('.sub-back').removeClass('is-active')
                            },
                            onComplete: function() {
                                siteNav.removeClass('menu-opened');
                                headerWrapper.removeClass('menu-opened');
                                menuToggle.removeClass('is-active');
                                // enableScroll();
                                $('.site-header').removeClass('menu-has-open');
                                $('.site-navigation ul').removeClass('hidden')
                                $('.site-navigation ul').removeClass('opened');
                            }
                        })
                    } else {
                        menuAin.reverse();
                    }
                    socialListAnim.reverse();
                    gitButtonAnim.reverse();
                } else {
                    if (pageLayout !== menuLayout) {
                        if (menuLayout === 'light') {
                            $('.site-header').removeClass('light')
                            $('.site-header').addClass('dark')
                        } else if (menuLayout === 'dark') {
                            $('.site-header').removeClass('dark')
                            $('.site-header').addClass('light')
                        }
                    }
                    // disableScroll();
                    $this.addClass('is-active');
                    siteNav.addClass('menu-opened');
                    headerWrapper.addClass('menu-opened');
                    $('.site-header').addClass('menu-has-open');
                    var menuHeight = $('.main-menu').outerHeight(),
                        siteHeader = $('.site-header'),
                        winHeight = $(window).outerHeight(),
                        winWidth = $(window).outerWidth(),
                        plusHeight = winHeight / 100 * 25,
                        menuTop = $('.main-menu').position().top,
                        wWidth = $(window).outerWidth() / 100 * 17 / 2;
                    let mobileQuery = window.matchMedia('(max-width: 1024px)')
                    if (!mobileQuery.matches) {
                        gsap.set('.sub-back', {
                            top: menuTop
                        })
                    }
                    var rule = CSSRulePlugin.getRule(".site-header.fullscreen_menu.menu-has-open::before");
                    if (mobileQuery.matches) {
                        gsap.set(rule, {
                            cssRule: {
                                height: '100vh'
                            }
                        });
                    } else {
                        gsap.set(menuWrapper, {
                            height: menuHeight + plusHeight
                        })
                        gsap.set(rule, {
                            cssRule: {
                                height: menuHeight + plusHeight + 50
                            }
                        });
                    }
                    let menuUls = $('.site-navigation').find('ul');
                    menuUls.each(function() {
                        let $this = $(this),
                            selfHeight = $this.outerHeight();
                        if (selfHeight > menuHeight) {
                            $this.addClass('ulcol')
                        }
                    })
                    menuAin.restart(true);
                    socialListAnim.restart(true);
                    gitButtonAnim.restart(true);
                }
                $(this).data("clicks", !clicks);
            });
        }
    }
    function initShort() {
        alitohNumberCt();

    }
    let mobileQuery = window.matchMedia('(max-width: 450px)');
    if (!mobileQuery.matches) {
       
    }
    function showcaseOpenings() {
        var showcaseCheck = $('.portfolio-showcase');
        if (showcaseCheck.length > 0) {
            if (showcaseCheck.hasClass('showcase-list')) {
                var scWelcome = gsap.timeline();
                scWelcome.fromTo('.sl-project-title', 2, {
                    y: '110%'
                }, {
                    y: '0%',
                    ease: 'power2.out',
                    stagger: 0.1,
                }, 0)
                scWelcome.fromTo('.sl-project-meta', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    ease: 'power2.out',
                    stagger: 0.05,
                }, 1)
                var slBef = CSSRulePlugin.getRule('.sl-project::before');
                scWelcome.to(slBef, .4, {
                    cssRule: {
                        opacity: 1,
                    },
                }, 1.3)
                scWelcome.fromTo('.showcase-footer', .6, {
                    opacity: 0
                }, {
                    opacity: 1,
                }, 2)
            } else if (showcaseCheck.hasClass('showcase-wall')) {
                var wallOpen = gsap.timeline({
                    once: true,
                    delay: 0,
                    onStart: function() {
                        $('body').addClass('loading')
                    },
                    onComplete: function() {
                        $('body').removeClass('loading')
                    }
                })
                wallOpen.fromTo('.wall-projects-top', 4, {
                    x: '-110%'
                }, {
                    x: '10%',
                    ease: 'power4.out'
                }, 0)
                wallOpen.fromTo('.wall-projects-bottom', 4, {
                    x: '110%'
                }, {
                    x: '-10%',
                    ease: 'power4.out'
                }, 0)
                wallOpen.fromTo('.wall-drag', 2, {
                    width: '0%'
                }, {
                    width: '50%',
                    ease: 'power2.out'
                }, 2)
                wallOpen.fromTo('.showcase-footer', 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power2.out'
                }, 3)
            } else if (showcaseCheck.hasClass('showcase-slideshow-v2')) {
                var ss2Welcome = gsap.timeline({
                    once: true
                });
                ss2Welcome.fromTo('.title-char', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                }, 0)
                ss2Welcome.fromTo('.ss2-project-cat span', .75, {
                    y: '100%'
                }, {
                    y: '0%',
                    ease: 'power2.out',
                }, 1)
                ss2Welcome.fromTo('.excerpt-line span', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.05,
                    ease: 'power2.out',
                }, 1)
                ss2Welcome.fromTo('.ss2-dot', .5, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power2.out',
                }, 1)
                ss2Welcome.fromTo('.ss2-nav', .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                }, 1)
                ss2Welcome.fromTo('.showcase-footer', .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power1.out',
                }, 1)
            } else if (showcaseCheck.hasClass('showcase-slideshow')) {
                let ssWelcome = gsap.timeline({
                    once: true,
                    onStart: function() {
                        // disableScroll();
                        gsap.set('.ss-project.active .ss1-cat', {
                            visibility: 'hidden'
                        })
                        gsap.set('.ss-project.active .ss1-summary', {
                            visibility: 'hidden'
                        })
                    }
                });
                let butWidth = $('.ss1-button').outerWidth();
                ssWelcome.fromTo('.st-char', 1.5, {
                    y: '110%',
                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                }, 0)
                ssWelcome.fromTo('.cat_char', 1, {
                    y: '110%',
                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                    onStart: function() {
                        gsap.set('.ss-project.active .ss1-cat', {
                            visibility: 'visible',
                            delay: .2
                        })
                    }
                }, 1)
                ssWelcome.fromTo('.ss1-button', .7, {
                    width: 0,
                }, {
                    width: butWidth,
                    ease: 'power2.inOut',
                }, 1.3)
                ssWelcome.fromTo('.ssum-line', 1.5, {
                    y: '110%',
                }, {
                    y: '0%',
                    stagger: 0.02,
                    ease: 'power2.out',
                    onStart: function() {
                        gsap.set('.ss-project.active .ss1-summary', {
                            visibility: 'visible',
                            delay: .1
                        })
                    }
                }, 1)
                ssWelcome.fromTo('.ss1-nav', 1, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    ease: 'power2.out',
                }, 2)
                ssWelcome.fromTo('.ss1-fraction', 1, {
                    opacity: 0,
                }, {
                    opacity: 1,
                    ease: 'power2.out',
                }, 2.5)
                ssWelcome.fromTo('.ss1-dots .swiper-pagination-bullet', 1.5, {
                    opacity: 0,
                    x: 50,
                }, {
                    x: 0,
                    opacity: 1,
                    stagger: 0.05,
                    ease: 'power2.out',
                    onComplete: function() {
                        gsap.to('.ss1-dots .swiper-pagination-bullet', {
                            clearProps: 'opacity'
                        })
                    }
                }, 1.55)
            } else if (showcaseCheck.hasClass('carousel-showcase')) {
                let sCarouselWelcome = gsap.timeline({
                        onStart: function() {
                            // disableScroll();
                        },
                        onComplete: function() {
                            // enableScroll();
                        }
                    }),
                    wrapper = $('.cas-project-wrapper'),
                    wrapFirstTrans = $(window).outerWidth() / 100 * 90,
                    wrapWidth = -wrapper.outerWidth();
                sCarouselWelcome.fromTo('.cas-line span', 1, {
                    y: '100%'
                }, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power3.out'
                }, 2)
                sCarouselWelcome.fromTo(wrapper, 2.5, {
                    x: wrapWidth
                }, {
                    x: wrapFirstTrans,
                    ease: 'circ.inOut',
                }, .2)
                sCarouselWelcome.fromTo('.cas-bg-text', 1.5, {
                    x: '-100%'
                }, {
                    x: '100%',
                    ease: 'power2.out',
                }, .7)
                sCarouselWelcome.fromTo('.cas-progress', 1.5, {
                    width: '0%'
                }, {
                    width: '50%',
                    ease: 'power2.out',
                }, 2.2)
                sCarouselWelcome.fromTo('.showcase-footer', 1, {
                    opacity: 0,
                }, {
                    opacity: 1
                }, 2.7)
            } else if (showcaseCheck.hasClass('fullscreen-slider-showcase')) {
                let welcomeAnim = gsap.timeline({
                        once: true
                    }),
                    currentSlide = $('.swiper-slide-active'),
                    nextSlide = $('.swiper-slide-next'),
                    prevSlide = $('.swiper-slide-prev'),
                    actImg = $(currentSlide).find('img'),
                    nextImg = $(nextSlide).find('img'),
                    prevImg = $(prevSlide).find('img'),
                    activeProj = $(currentSlide).data('project'),
                    actIndex = $(currentSlide).data('index'),
                    titLines = $(activeProj).find('.fs-tit-char > span');
                welcomeAnim.fromTo(titLines, 1.5, {
                    x: -100,
                }, {
                    x: -0,
                    stagger: 0.01,
                    ease: 'power2.out',
                }, .3)
                welcomeAnim.fromTo('.fs-fraction span', .6, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: 'power2.out',
                }, 1)
                welcomeAnim.fromTo('.fs-meta > span', 1, {
                    x: -30,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    ease: 'power2.out',
                }, 1);
                welcomeAnim.fromTo('.fs-button a', 1.5, {
                    x: '-100%',
                    opacity: 0
                }, {
                    x: '0%',
                    opacity: 1,
                    ease: 'power2.out',
                }, 1.5)
                welcomeAnim.fromTo('.showcase-footer', 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power2.out',
                }, 1.7)
            } else if (showcaseCheck.hasClass('fullscreen-wall-showcase')) {
                let fsWallWelcome = gsap.timeline({
                        once: true
                    }),
                    dashs = CSSRulePlugin.getRule('.fw-project::after');
                fsWallWelcome.fromTo('.fw-project a', 1.5, {
                    y: '150%',
                }, {
                    y: '0%',
                    stagger: 0.1,
                    ease: 'power2.out',
                }, 0)
                fsWallWelcome.fromTo(dashs, 1.5, {
                    cssRule: {
                        y: '150%',
                    }
                }, {
                    cssRule: {
                        y: '0%',
                    },
                    stagger: 0.1,
                    ease: 'power2.out',
                }, 1)
                fsWallWelcome.fromTo('.showcase-footer', .75, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: 'power2.out',
                }, 2)
            }
        }
    }

    $(window).on('load', function() {
        siteHeaderSet()
        fullscreenNavigation()
        buttonsHover()
        pageLoader();
        if (siteLoader == true) {
            loadAn.eventCallback('onComplete', function() {
                $('body').removeClass('loading');
                gsap.set('#page', {
                    visibility: 'visible'
                })
                gsap.to('.apl-background', .7, {
                    height: '0%',
                    ease: 'power2.inOut',
                    onComplete: function() {
                        loader.hide();
                    }
                })
               
                
                    gsap.to('.site-logo', 2, {
                        y: '0%',
                        ease: 'power2.out',
                    }, )
                  
                    if (siteHeader.hasClass('classic_menu')) {
                        gsap.set('.main-menu > li', {
                            overflow: 'hidden'
                        })
                        gsap.fromTo('.main-menu > li > a', 0.5, {
                            y: '100%'
                        }, {
                            y: '0%',
                            stagger: .1,
                            ease: 'power2.out',
                            onComplete: function() {
                                gsap.set('.main-menu > li', {
                                    clearProps: 'all'
                                })
                            }
                        }, )
                    } else {
                        gsap.to('.toggle-line', 0.8, {
                            width: 50,
                            ease: 'power2.out',
                            stagger: .3
                        }, )
                    }
                    gsap.to('.header-widget', 0.5, {
                        x: 0,
                        opacity: 1,
                        ease: 'power2.out',
                    }, )
                    
                
                gsap.from(".text-rveal .header_title_line", {
                    duration: 1,
                    opacity: 0,
                    ease: "power2.In",
                    css:{transform:"translateY(100%) rotateX(-80deg)", opacity:'0'},
                    stagger: 0.1,
                })
                gsap.from(".he1 .l", 1.6,{
                    y: "100",
                    opacity: 0,
                    duration: 0.3, stagger: 0.3,
                    ease: "power4.inOut"
                }, "-=0.9")
                gsap.from(".hro-img", 1, {
                    opacity: 0,
                    duration: 0.2,
                    y: 100,
                    ease: "power4.inOut"
                }, )
                gsap.from(".about-us-image img", 1, {
                    duration:0.5,
                    opacity: 0,
                }, "+=0.1")
                
                gsap.from('.blog-flex ', 0.9, { y: 40, opacity: 0,duration: 0.5,  },"-=0.7");
              
                gsap.to(".scroll-circle", {
                    duration: 0.5,
                    ease: 'power1.inOut',
                    opacity: 1,
                    alpha: 1,
                },"-=0.8")
                
                
                gsap.from(".module--header__bg", 1, {
                    opacity: 0,
                    duration: 0.1,
                    x: -100,
                    ease: "power4.inOut"
                }, )
        
                
                gsap.to(".tris_titles span", 2, {
                    y: "0",
                    duration: 0.5,
                    ease: "power4.inOut"
                }, "-=0.9")
                
                
                gsap.from(".element", 1, {
                    scale: 0,
                    duration: 0.5,
                    opacity: 0
                }, "-=1.8")
                gsap.from(".top-img img", 1, {
                    duration: 0.5,
                    opacity: 0,
                    transformOrigin: "left",
                    x: -100
                }, "-=1.3")
                gsap.from(".welcome-heading", 1, {
                    opacity: 0,
                    duration: 1.7,
                    ease: "power4.inOut"
                }, )
        
                gsap.from('.gform_wrapper', 1, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power4.inOut"
                }, "-=2")
                showcaseOpenings();
                initShort();
                let mobileQuery = window.matchMedia('(max-width: 900px)');
                if (!mobileQuery.matches) {
                   
                }
                ScrollTrigger.refresh(true)
            })
        } else {
            loader.hide();
            initShort();
            gsap.set('.site-logo', {
                y: '0%',
            })
            gsap.set('.toggle-line', {
                width: 50,
            })
            gsap.set('.header-widget', {
                x: 0,
                opacity: 1,
            })
            
            let mobileQuery = window.matchMedia('(max-width: 900px)');
            if (!mobileQuery.matches) {
               
            }
            ScrollTrigger.refresh(true)
        }
    })
   
}(jQuery));