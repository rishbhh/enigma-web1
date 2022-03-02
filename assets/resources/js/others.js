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
        fade = gsap.to(image, { autoAlpha: 1, opacity: 0.7, scale: 1, ease: "none", paused: true, onReverseComplete: stopFollow });

    el.addEventListener('mouseenter', (e) => {
        fade.play();
        startFollow();
        align(e);
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

cont.from('.typ ', 0.9, { y: 70, opacity: 0, stagger: 0.03 });
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

const itemss = document.querySelectorAll('.hov-vid')

itemss.forEach((el) => {
        const image = el.querySelector('video')

        el.addEventListener('mouseenter', (e) => {
            gsap.to(image, { autoAlpha: 1, scale: 0.8, })
        })

        el.addEventListener('mouseleave', (e) => {
            gsap.to(image, { autoAlpha: 0, scale: 0.0 })
        })

        // el.addEventListener('mousemove', (e) => {
        //   gsap.set(image, { x: e.offsetX - 200 })
        // })
    })
    // blog
let Ser_ = document.querySelectorAll(".fle");


Ser_.forEach((container) => {
    let ser = container.querySelector("h3");
    let ser2 = container.querySelector("p");
    let Ser = document.querySelectorAll(".hov-vid");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: '-500 top',
            end: '500 center',
            scroller: ".smooth-scroll",
            // toggleActions: "restart none none reset"
            toggleActions: 'play reverse play reverse ',
        }
    });

    tl.to(Ser, 1, {
        duration: 0.5,
        ease: Power2.out,
        opacity: 1
    }, "-=0.5")
    tl.to(ser, 1, {
        y: 0,
        duration: 0.5,
        ease: Power2.out,
        opacity: 1
    }, "-=0.7")
    tl.from(ser2, 1, {
            y: 40,
            duration: 0.5,
            ease: Power2.out,
            opacity: 0
        }, "-=0.8")
        // tl.to(Ser,1,{
        //   y:40,
        //   duration:0.5,
        //   ease: Power2.out,opacity:1},"-=0.5")



});




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
let revealContainers2 = document.querySelectorAll(".pr-main");

revealContainers2.forEach((container) => {
    let cont = container.querySelector("h2");
    let cont2 = container.querySelector("p");
    // let dtl = container.querySelector(".p-prj-caption-credit")
    let shd = container.querySelector(".p-prj-thum-shadow")
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scroller: ".smooth-scroll",
            // toggleActions: "restart none none reset"
        }
    });


    tl.from(cont, 1, {
        y: 40,
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.7")
    tl.from(cont2, 1, {
            y: 40,
            duration: 0.5,
            ease: Power2.out,
            opacity: 0
        }, "-=0.5")
        // tl.from(dtl,1,{ duration:0.5,
        //   ease: Power2.out,opacity:0},"-=0.5")
    tl.from(shd, 1, {
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.5")

});


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
gsap.utils.toArray(".about-us-image img").forEach(star => {
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


});


let client = document.querySelectorAll(".client-section");

client.forEach((container) => {
    let hea = container.querySelector("h2");
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "-200 top",
            scroller: ".smooth-scroll",
            // toggleActions: 'restart reverse restart reverse ',
        }
    });


    tl.from(container, 1, {
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.7")
    tl.from(hea, 1, {
        y: 100,
        duration: 0.5,
        ease: Power2.out,
        opacity: 0
    }, "-=0.7")

});

// let Team = document.querySelectorAll(".team-s");

// Team.forEach((container) => {
//     let he = container.querySelector(".he span");
//     let pr = container.querySelector(".parh");

//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: container,
//             start: "-300 top",
//             scroller: ".smooth-scroll",
//             toggleActions: 'restart reverse restart reverse ',
//         }
//     });


//     tl.from(container, 1, {
//         duration: 0.5,
//         ease: Power2.out,
//         opacity: 0
//     }, "-=0.7")
//     tl.from(he, 1, {
//         y: 200,
//         duration: 0.5,
//         ease: Power2.out,
//         opacity: 0
//     }, "-=0.9")
//     tl.from(pr, 1, {
//         y: 200,
//         duration: 0.5,
//         ease: Power2.out,
//         opacity: 0
//     }, "-=0.9")
  

// });



var beepOne = $("#beep-one")[0];
$("#clint")
    .mouseenter(function() {
        beepOne.play();
    })
    .mouseleave(function() {
        beepOne.pause();
    });



    
// https://www.koby.dev
// Maximilian Kobus | koby

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
        slidesPerView: 1.45,
        centeredSlides: true,
        spaceBetween: 26,
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
      }
  };
    
