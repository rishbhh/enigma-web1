(function($) {
    "use strict";
    console.clear();
    gsap.registerPlugin( ScrollTrigger,);
    var pageSet, pageCursor, siteLoader, headerStick, smoothScroll, siteHeader, pageLayout, headerLayout, footerLayout, menuLayout, menuStyle;

    function pageSettings() {
        pageSet = $('body');
        pageCursor = pageSet.data('cursor');
        siteLoader = pageSet.data('page-loader');
        headerStick = pageSet.data('header-sticky');
        smoothScroll = pageSet.data('smoothScroll');
        menuStyle = pageSet.data('menu-style');
        pageLayout = pageSet.data('page-layout');
        headerLayout = pageSet.data('header-layout');
        menuLayout = pageSet.data('menu-layout');
        footerLayout = pageSet.data('footer-layout');
        pageSet.addClass(pageLayout)
        $('.site-footer').addClass(footerLayout);
    }
    pageSettings()
    var loader, loaderOv, loadAn;

    function pageLoader() {
        loader = $('.alioth-page-loader');
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
            loadAn.to(num3wrap, 1.5, {
                y: '0%',
                ease: 'power2.Out',
            }, .5)
            loadAn.to('.site-logo', 1, {
                y: '0%',
                ease: 'power2.out',
            }, 2)
        
           
        }
    }
   

 
    let mobileQuery = window.matchMedia('(max-width: 450px)');
    if (!mobileQuery.matches) {
       
    }
    $(window).on('load', function() {
        if ($('.section.fullscreen').length) {
            $('#footer').hide()
        } else {
            $('#footer').show()
        }
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
                showcaseOpenings();
                initShortcodes();
                initPages();
                let mobileQuery = window.matchMedia('(max-width: 900px)');
                if (!mobileQuery.matches) {
                    aliothParallaxScroll();
                }
                enableScroll()
                aliothScrollAnimations();
                ScrollTrigger.refresh(true)
            })
        } else {
            loader.hide();
            if ($('.section.fullscreen').length) {
                $('#footer').hide()
            } else {
                $('#footer').show()
            }
            showcaseOpenings();
            initShortcodes();
            initPages();
            let mobileQuery = window.matchMedia('(max-width: 900px)');
            if (!mobileQuery.matches) {
                aliothParallaxScroll();
            }
            enableScroll()
            aliothScrollAnimations();
            ScrollTrigger.refresh(true)
        }
    })
   
}(jQuery));