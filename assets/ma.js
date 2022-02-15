import Scrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';
import $ from 'jquery';
import Cookies from 'js-cookie';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { GSDevTools } from 'gsap/GSDevTools';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Instafeed from './assets/js_components/instafeed.min.js';
import '@lottiefiles/lottie-player';

const language_switch = window.location.href;

if (language_switch.indexOf('de-DE') > -1) {
  var language1 = 'schließen';
  var language2 = 'aktiv';
  var language3 = 'Backends';
  var language4 = 'Realität.';
  var language5 = 'Schmeckt gut, wa? 🎉';
} else {
  var language1 = 'close';
  var language2 = 'Disable';
  var language3 = 'about your backend security.';
  var language4 = 'Reality.';
  var language5 = 'Cookies accepted bro 🎉';
}

window.addEventListener('orientationchange', () => {
  window.location.reload();
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { location.reload(); });

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { location.reload(); });

gsap.registerPlugin(CSSRulePlugin, MotionPathPlugin, TextPlugin, ScrollToPlugin, ScrollTrigger, DrawSVGPlugin, GSDevTools, MorphSVGPlugin, ScrambleTextPlugin);

const desktop_size = window.matchMedia('(min-width: 1150px)');

const mobile_size = window.matchMedia('(max-width: 1150px)');

const light_mode_apply = window.matchMedia('(prefers-color-scheme: light)');

function changeStartVideo() {

  var video_start = document.getElementById('pre_entry_animation_video_content');
  var source_start = document.createElement('source');

  if (light_mode_apply.matches) {
    source_start.setAttribute('src', '../../assets/video/video_2_pre_entry_light.mp4');
  } else {
    source_start.setAttribute('src', '../../assets/video/video_2_pre_entry_dark.mp4');
  }

  video_start.appendChild(source_start);

}

changeStartVideo();

function changeDevicesVideo() {

  var video_devices = document.getElementById('digital_devices_picture_container_inner_content');
  var source_devices = document.createElement('source');

  if (light_mode_apply.matches) {
    source_devices.setAttribute('src', '../../assets/video/scene1_light_premiere.mp4');
  } else {
    source_devices.setAttribute('src', '../../assets/video/scene1_dark_premiere.mp4');
  }

  video_devices.appendChild(source_devices);

}

changeDevicesVideo();

// MOBILE-1150PX < START
if (mobile_size.matches) {

  ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
  });

  var targetElement = document.getElementsByClassName('nav_bar_modal');
  var targetElement_2 = document.getElementsByClassName('pre_entry_animation');

  $(document).ready(() => {
    
    disableBodyScroll(targetElement_2);

    function first_animation_check() {
      if (Cookies.get('entry_animation', 'played')) {
        const gsap_home_entry_animation = gsap.timeline({
          id: 'home_entry_animation',
          paused: true,
        });
  
        gsap_home_entry_animation.set('.pre_entry_animation', { display: 'none' }, 0);
        gsap_home_entry_animation.to('main', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0);
        gsap_home_entry_animation.to('.logo_bar', {
          opacity: 1, duration: 2, ease: 'power3.inOut',
        }, 0);
        gsap_home_entry_animation.to('.menu_bar', {
          opacity: 1, duration: 2, ease: 'power3.inOut',
        }, 0);
        gsap_home_entry_animation.to('.nav_bar', {
          opacity: 1, duration: 2, ease: 'power3.inOut',
        }, 0);
        gsap_home_entry_animation.add(
          () => {
            enableBodyScroll(targetElement_2);
          }, null, 2,
        );
        gsap_home_entry_animation.play();
      } else {
        const gsap_pre_entry_animation = gsap.timeline({
          id: 'pre_entry_animation',
          paused: true,
        });
  
        gsap_pre_entry_animation.to('.pre_entry_animation', { opacity: 1, duration: 0.1 }, 0);
        gsap_pre_entry_animation.fromTo('.pre_entry_animation_heading_first', { y: 50 }, {
          y: 0, opacity: 1, duration: 5, ease: 'power3.inOut',
        }, 0);
        gsap_pre_entry_animation.add(
          () => {
              pre_entry_animation_video_control.play();
          }, null, 5,
        );
        gsap_pre_entry_animation.to('.pre_entry_animation_heading_first', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 4);
        gsap_pre_entry_animation.to('.pre_entry_animation_video', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 4);
        gsap_pre_entry_animation.to('main', { opacity: 1, duration: 3, ease: 'power3.inOut' }, 7);
        gsap_pre_entry_animation.to('.logo_bar', {
          opacity: 1, duration: 3, ease: 'power3.inOut',
        }, 7);
        gsap_pre_entry_animation.to('.menu_bar', {
          opacity: 1, duration: 3, ease: 'power3.inOut',
        }, 7);
        gsap_pre_entry_animation.to('.nav_bar', {
          opacity: 1, duration: 3, ease: 'power3.inOut',
        }, 7);
        gsap_pre_entry_animation.to('.pre_entry_animation', { opacity: 0, duration: 3, ease: 'power3.inOut' }, 7);
        gsap_pre_entry_animation.add(
          () => {
            enableBodyScroll(targetElement_2);
          }, null, 10,
        );
        gsap_pre_entry_animation.set('.pre_entry_animation', { display: 'none' }, 10);
  
        gsap_pre_entry_animation.play();
        Cookies.set('entry_animation', 'played', { expires: 7 });
      }
    }
  
    first_animation_check();

    function changeDigitalVideo() {

      var video_digital = document.getElementById('second_container_inner_icon_video_content_mobile');
      var source_digital = document.createElement('source');

      if (light_mode_apply.matches) {
        source_digital.setAttribute('src', '../../assets/video/scene4_light_premiere.mp4');
      } else {
        source_digital.setAttribute('src', '../../assets/video/scene4_dark_premiere.mp4');
      }
  
      video_digital.appendChild(source_digital);
  
    }

    changeDigitalVideo();

    function changePrintVideo() {

      var video_print = document.getElementById('third_container_inner_icon_video_content_mobile');
      var source_print = document.createElement('source');

      if (light_mode_apply.matches) {
        source_print.setAttribute('src', '../../assets/video/scene2_light_premiere.mp4');
      } else {
        source_print.setAttribute('src', '../../assets/video/scene2_dark_premiere.mp4');
      }
  
      video_print.appendChild(source_print);
  
    }

    changePrintVideo();


    function changeBackendVideo() {

      var video_backend = document.getElementById('fourth_container_inner_icon_video_content_mobile');
      var source_backend = document.createElement('source');

      if (light_mode_apply.matches) {
        source_backend.setAttribute('src', '../../assets/video/scene3_light_premiere.mp4');
      } else {
        source_backend.setAttribute('src', '../../assets/video/scene3_dark_premiere.mp4');
      }
  
      video_backend.appendChild(source_backend);
  
    }

    changeBackendVideo();

    function cookie_notification() {
      if (Cookies.get('cookies', 'accepted')) {
        (function (d, w, c) {
          w.ChatraID = 'bRth8u6fmZR6ZN8ym';
          const s = d.createElement('script');
          w[c] = w[c] || function () {
            (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
        }(document, window, 'Chatra'));
      } else {
        gsap_cookie_notification.play();
      }
    }

    cookie_notification();

    window.cookie_accepted = function cookie_accepted_func() {
      Cookies.set('cookies', 'accepted', { expires: 30 });
      gsap_cookie_notification_accepted.play();
    };
  });

  var feed = new Instafeed({
    accessToken: InstagramToken,
    target: 'instagram_feed',
    limit: 3,
    template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>',
  });
  feed.run();

  const pre_entry_animation_video_control = document.getElementById('pre_entry_animation_video_content');

  const menu_button = document.getElementById('menu_magnetic_target');

  const menu_button_svg = document.getElementById('menu_icon_svg');

  window.menu_logical = function menu_logical() {
    if (menu_button.classList.contains('active')) {
      enableBodyScroll(targetElement);
      gsap_menu_animation.reverse();
      menu_button.classList.remove('active');
      menu_button_svg.classList.remove('active');
    } else {
      disableBodyScroll(targetElement);
      gsap_menu_animation.play();
      menu_button.classList.add('active');
      menu_button_svg.classList.add('active');
    }
  };

  const teaser_video = document.getElementById('teaser_video');

  window.teaser_video_sound = function teaser_video_sound_func() {
    if (teaser_video.classList.contains('sound_on')) {
      function teaser_video_sound_func_disable() {
        teaser_video.muted = true;
        teaser_video.classList.remove('sound_on');
        gsap_teaser_video_sound_toggle.reverse();
      }
      teaser_video_sound_func_disable();
    } else {
      gsap_teaser_video_sound_toggle.play();
      teaser_video.classList.add('sound_on');
      teaser_video.muted = false;
    }
  };

  var gsap_cookie_notification = gsap.timeline({
    id: 'cookie_notification',
    paused: true,
  });

  gsap_cookie_notification.set('.cookie_notification_box', { display: 'block' }, 0);
  gsap_cookie_notification.fromTo('.cookie_notification', { y: 150 }, {
    y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
  }, 0);

  let gsap_cookie_notification_accepted = gsap.timeline({
    id: 'cookie_notification_accepted',
    paused: true,
  });

  gsap_cookie_notification_accepted.to('.cookie_notification_content a', { opacity: 0, duration: 0.5, ease: 'power3.inOut' }, 0);
  gsap_cookie_notification_accepted.to('.cookie_notification_content p', { text: { value: language5 }, duration: 2, ease: 'power3.inOut' }, 0.5);
  gsap_cookie_notification_accepted.to('.cookie_notification', {
    filter: 'blur(15px)', opacity: 0, duration: 1, ease: 'power3.inOut',
  }, 4.5);
  gsap_cookie_notification_accepted.set('.cookie_notification_box', { display: 'none' }, 5.5);
  gsap_cookie_notification_accepted.add(
    () => {
      (function (d, w, c) {
        w.ChatraID = 'bRth8u6fmZR6ZN8ym';
        const s = d.createElement('script');
        w[c] = w[c] || function () {
          (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
      }(document, window, 'Chatra'));
    }, null, 5.5,
  );

  let gsap_teaser_video_sound_toggle = gsap.timeline({
    id: 'gsap_teaser_video_sound_toggle',
    paused: true,
  });

  gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_text_animation', { text: { value: 'Disable' }, duration: 2, ease: 'power3.inOut' }, 0);
  gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_1', { opacity: 1, duration: 1, ease: 'power3.inOut' }, 0);
  gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_2', { opacity: 2, duration: 2, ease: 'power3.inOut' }, 0);

  let gsap_menu_animation = gsap.timeline({
    id: 'menu_animation',
    paused: true,
  });

  gsap_menu_animation.to('main', { filter: 'grayscale(1)', duration: 2, ease: 'power3.inOut' }, 0);
  gsap_menu_animation.fromTo('.nav_bar', { backdropFilter: 'blur(15px)' }, { backdropFilter: 'blur(0px)', duration: 2, ease: 'power3.inOut' }, 0);
  gsap_menu_animation.to('.nav_bar_background', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
  gsap_menu_animation.fromTo('.nav_bar_modal_mobile', { display: 'none' }, { display: 'block', duration: 0.1 }, 0);
  gsap_menu_animation.fromTo('.nav_bar_modal_mobile', { x: 600 }, {
    opacity: 1, x: 0, duration: 2, ease: 'power3.inOut',
  }, 0);
  gsap_menu_animation.fromTo('.nav_bar_modal_mobile .nav_bar_modal_content_first', { y: 50 }, {
    y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
  }, 1.75);
  gsap_menu_animation.fromTo('.nav_bar_modal_mobile .nav_bar_modal_content_second_mobile', { y: 50 }, {
    y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
  }, 2);
  gsap_menu_animation.fromTo('.nav_bar_modal_mobile .nav_bar_modal_content_third', { y: 50 }, {
    y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
  }, 2.25);

  $(document).ready(() => {
    const gsap_nav_animation = gsap.timeline({
      id: 'nav_animation',
      scrollTrigger: {
        trigger: '.nav_bar',
        start: 'top top',
        end: '950 center',
        markers: false,
      },
    });

    gsap_nav_animation.to('.nav_bar_background', { opacity: 0.2, duration: 2, ease: 'power3.inOut' }, 5);
    gsap_nav_animation.to('.logo_svg_icon', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_nav_animation.to('.logo_schrift', {
      width: '200px', x: -49, duration: 2, ease: 'power3.inOut',
    }, 0);

    const digital_devices = gsap.timeline({
      id: 'digital_devices',
      paused: true,
      repeat: 0,
      scrollTrigger: {
        trigger: '.digital_devices',
        start: '300 bottom',
        end: 'bottom top',
        markers: false,
        toggleActions: 'play pause resume pause',
      },
    });

    digital_devices.fromTo('.digital_devices_picture_container_inner', {
      opacity: 0, scale: 0.5, y: 50,
    }, {
      opacity: 1, duration: 1, scale: 1, y: 0, ease: 'power1.inOut',
    }, 0);
    digital_devices.fromTo('.digital_devices_font', { opacity: 0, y: 50 }, {
      opacity: 1, duration: 2, y: 0, ease: 'power1.inOut',
    }, 0);
    digital_devices.fromTo('.digital_devices_font_change', { opacity: 0 }, {
      opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 0.25);
    digital_devices.fromTo('.digital_devices_subfont', { opacity: 0 }, {
      opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 0.5);
    digital_devices.fromTo('.mobile', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 1);
    digital_devices.fromTo('.tablets', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 1.25);
    digital_devices.fromTo('.smart_tv', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 1.5);
    digital_devices.fromTo('.desktop', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 1.75);
    digital_devices.fromTo('.smart_watch', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 2);
    digital_devices.fromTo('.smart_car', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
    }, 2.25);
    digital_devices.to('.digital_devices_font_change', { text: { value: language4, newClass: '.digital_devices_font_change_2' }, duration: 2, ease: 'power1.inOut' }, 3);

    const gsap_weltkarte = gsap.timeline({
      id: 'weltkarte',
      paused: true,
      repeat: -1,
      scrollTrigger: {
        start: '-500 center',
        end: '800 top',
        markers: false,
        trigger: '.weltkarte',
        toggleActions: 'play pause resume reset',
      },
    });

    gsap_weltkarte.set('.weltkarte_gsap_1', { opacity: 0 }, 0);
    gsap_weltkarte.set('.weltkarte_gsap_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('.weltkarte_gsap_3', { opacity: 0 }, 0);
    gsap_weltkarte.set('.weltkarte_gsap_4', { opacity: 0 }, 0);
    gsap_weltkarte.set('.weltkarte_gsap_5', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_1', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_1_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_2_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_3', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_3_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_4', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_4_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_5', { opacity: 0 }, 0);
    gsap_weltkarte.set('#dot_5_2', { opacity: 0 }, 0);
    gsap_weltkarte.set('.weltkarte_text', { opacity: 0 }, 0);
    gsap_weltkarte.fromTo('.weltkarte', { opacity: 0 }, {
      opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);
    gsap_weltkarte.fromTo('.weltkarte_gsap_1', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
    }, 2);
    gsap_weltkarte.fromTo('#dot_1', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
    gsap_weltkarte.fromTo('#path_1', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 3);
    gsap_weltkarte.fromTo('#dot_1_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 3);
    gsap_weltkarte.to('#dot_1', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
    gsap_weltkarte.to('#dot_1_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
    gsap_weltkarte.to('#path_1', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
    gsap_weltkarte.to('.weltkarte_gsap_1', {
      opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
    }, 5);
    gsap_weltkarte.fromTo('.weltkarte_gsap_2', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
    }, 7);
    gsap_weltkarte.fromTo('#dot_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 7);
    gsap_weltkarte.fromTo('#path_2', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 8);
    gsap_weltkarte.fromTo('#dot_2_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 8);
    gsap_weltkarte.to('#dot_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
    gsap_weltkarte.to('#dot_2_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
    gsap_weltkarte.to('#path_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
    gsap_weltkarte.to('.weltkarte_gsap_2', {
      opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
    }, 10);
    gsap_weltkarte.fromTo('.weltkarte_gsap_3', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
    }, 12);
    gsap_weltkarte.fromTo('#dot_3', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 12);
    gsap_weltkarte.fromTo('#path_3', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 13);
    gsap_weltkarte.fromTo('#dot_3_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 13);
    gsap_weltkarte.to('#dot_3', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
    gsap_weltkarte.to('#dot_3_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
    gsap_weltkarte.to('#path_3', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
    gsap_weltkarte.to('.weltkarte_gsap_3', {
      opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
    }, 15);
    gsap_weltkarte.fromTo('.weltkarte_gsap_4', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
    }, 17);
    gsap_weltkarte.fromTo('#dot_4', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 17);
    gsap_weltkarte.fromTo('#path_4', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 18);
    gsap_weltkarte.fromTo('#dot_4_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 18);
    gsap_weltkarte.to('#dot_4', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
    gsap_weltkarte.to('#dot_4_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
    gsap_weltkarte.to('#path_4', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
    gsap_weltkarte.to('.weltkarte_gsap_4', {
      opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
    }, 20);
    gsap_weltkarte.fromTo('.weltkarte_gsap_5', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
    }, 22);
    gsap_weltkarte.fromTo('#dot_5', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 22);
    gsap_weltkarte.fromTo('#path_5', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 23);
    gsap_weltkarte.fromTo('#dot_5_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 23);
    gsap_weltkarte.to('#dot_5', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
    gsap_weltkarte.to('#dot_5_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
    gsap_weltkarte.to('#path_5', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
    gsap_weltkarte.to('.weltkarte_gsap_5', {
      opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
    }, 25);
    gsap_weltkarte.to('.weltkarte_picture', {
      opacity: 0, duration: 2, ease: 'power3.inOut',
    }, 24.5);
    gsap_weltkarte.to('.weltkarte_dots', {
      opacity: 0, duration: 2, ease: 'power3.inOut',
    }, 24.5);
    gsap_weltkarte.fromTo('#weltkarte_logo_black', { opacity: 0, scale: 0.5 }, {
      scale: 1, opacity: 1, duration: 3, ease: 'power3.inOut',
    }, 24.5);
    gsap_weltkarte.fromTo('.logo_path_1', { drawSVG: '0%' }, { drawSVG: '100%', duration: 5, ease: 'power3.inOut' }, 24.5);
    gsap_weltkarte.to('#weltkarte_logo_black', { fill: 'white', duration: 2, ease: 'power3.inOut' }, 27.5);
    gsap_weltkarte.to('#weltkarte_logo_black', {
      y: -100, scale: 0.75, duration: 3, ease: 'power3.inOut',
    }, 28);
    gsap_weltkarte.fromTo('.weltkarte_text', { opacity: 0, scale: 0.5 }, {
      scale: 1, opacity: 1, duration: 3, ease: 'power3.inOut',
    }, 28);
    gsap_weltkarte.fromTo('.weltkarte_subhead', { opacity: 0, y: -50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 30);
    gsap_weltkarte.to('.weltkarte', {
      scale: 1, opacity: 0, duration: 1, ease: 'power3.inOut',
    }, 37);

    const gsap_talents_entry = gsap.timeline({
      id: 'talents_entry',
      paused: true,
      repeat: 0,
      scrollTrigger: {
        start: '-30% center',
        end: '0 top',
        markers: false,
        trigger: '.philosophy',
      },
    });

    gsap_talents_entry.fromTo('.philosophy_row_left_heading', { y: -50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);
    gsap_talents_entry.fromTo('.philosophy_row_right_heading', { opacity: 0, x: 300 }, {
      x: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);
    gsap_talents_entry.fromTo('.philosophy_row_right_text', { opacity: 0, x: 300 }, {
      x: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);

    const gsap_talents_guys = gsap.timeline({
      id: 'talents_guys',
      paused: true,
      repeat: 0,
      scrollTrigger: {
        start: '-500 center',
        end: '1000 top',
        markers: false,
        trigger: '.talents',
      },
    });

    gsap_talents_guys.fromTo('.one_talent', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 0);
    gsap_talents_guys.fromTo('.two_talent', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 0.25);
    gsap_talents_guys.fromTo('.three_talent', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 0.5);
    gsap_talents_guys.fromTo('.four_talent', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 0.75);
    gsap_talents_guys.fromTo('.five_talent', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1);
    gsap_talents_guys.fromTo('.six_talent', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.25);
    gsap_talents_guys.fromTo('.founders_heading', { y: 100 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 2);
    gsap_talents_guys.fromTo('.founders_text', { y: 100 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 2);
    gsap_talents_guys.fromTo('.steve', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 3, ease: 'power3.inOut',
    }, 2);

    const scrolling_text = gsap.timeline({
      scrollTrigger: {
        start: '-500 center',
        end: '350 top',
        markers: false,
        trigger: '.scrolling_text',
        scrub: 1,
      },
    });

    scrolling_text.fromTo('.scrolling_text', { opacity: 1, x: 1000 }, { x: -1500, opacity: 1, duration: 15 }, 0);

    const gsap_laptop_pre_animation = gsap.timeline({
      id: 'laptop_anim',
      scrollTrigger: {
        start: '-100 center',
        end: '650 bottom',
        markers: false,
        trigger: '.laptop_anim',
        scrub: 1,
      },
    });

    gsap_laptop_pre_animation.fromTo('.lottie_heart', { }, { duration: 10 }, 0);
    gsap_laptop_pre_animation.add(
      () => {
        const heart_lottie = document.getElementById('heart_lottie');
        heart_lottie.play();
      }, null, 0,
    );
    gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_font', { }, { duration: 10 }, 3);

    const gsap_aspects_second_l = gsap.timeline({
      id: 'aspects_second_l',
      scrollTrigger: {
        start: '-300 center',
        end: '700 bottom',
        markers: false,
        trigger: '.aspects_inner_container_second_l',
        scrub: 1,
      },
    });

    gsap_aspects_second_l.to('.aspects_logo', { morphSVG: '.aspects_lock_icon', duration: 20, ease: 'power3.inOut' }, 0);
    gsap_aspects_second_l.to('.protected_animation', { duration: 40, text: { value: language3 }, ease: 'power3.inOut' }, 5);
    gsap_aspects_second_l.fromTo('.protected_animation_2', { opacity: 0 }, {
      opacity: 1, duration: 10, ease: 'power3.inOut',
    }, 30);

    const gsap_aspects_first = gsap.timeline({
      id: 'aspects_first',
      scrollTrigger: {
        start: '-1000 center',
        end: '600 bottom',
        markers: false,
        trigger: '.aspects_inner_container_first',
        scrub: 1,
      },
    });

    gsap_aspects_first.fromTo('.aspects_inner_container_first_box_background', { opacity: 0 }, {
      opacity: 0.6, duration: 40, ease: 'power3.inOut',
    }, 0);
    gsap_aspects_first.fromTo('.aspects_inner_container_first_box_heading', { scale: 0.8, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 20, ease: 'power3.inOut',
    }, 20);
    gsap_aspects_first.fromTo('.aspects_inner_container_first_box_subheading', { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 20, ease: 'power3.inOut',
    }, 25);

    const gsap_day_night = gsap.timeline({
      id: 'day_night_element',
      paused: true,
      scrollTrigger: {
        start: '150 center',
        end: 'bottom bottom',
        markers: false,
        trigger: '.aspects_inner_container_fifth_r',
      },
    });

    gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_main', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_day_night.fromTo('.aspects_inner_container_fifth_r_box_image_day', { scale: 0.75, opacity: 0 }, {
      opacity: 1, scale: 1, duration: 3, ease: 'power3.inOut',
    }, 0);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_day', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
    gsap_day_night.fromTo('.day_mode_icon', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 2);
    gsap_day_night.fromTo('.day_mode_heading', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 2.5);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_day', { opacity: 0, duration: 2.5, ease: 'power3.inOut' }, 4);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_background_main', { backgroundColor: '#000000', duration: 2.5, ease: 'power3.inOut' }, 4);
    gsap_day_night.set('.aspects_inner_container_fifth_r_box_night', { display: 'block', ease: 'power3.inOut' }, 4);
    gsap_day_night.fromTo('.aspects_inner_container_fifth_r_box_image_night', { scale: 0.75, opacity: 0 }, {
      opacity: 1, scale: 1, duration: 2.5, ease: 'power3.inOut',
    }, 4);
    gsap_day_night.set('.aspects_inner_container_fifth_r_box_day', { display: 'none', ease: 'power3.inOut' }, 6.5);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_image_night', { duration: 2, ease: 'power3.inOut' }, 6.5);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_night', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 6.5);
    gsap_day_night.fromTo('.night_mode_icon', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 6.5);
    gsap_day_night.fromTo('.night_mode_heading', { opacity: 0, y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 7);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_night', { opacity: 0, duration: 2.5, ease: 'power3.inOut' }, 10);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_background_main', { backgroundColor: 'rgba(28, 28, 30, 1)', duration: 2.5, ease: 'power3.inOut' }, 10);
    gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_main', { opacity: 1, duration: 2.5, ease: 'power3.inOut' }, 11);

    window.repeat_day_night_animation = function repeat_day_night_animation() {
      gsap_day_night.restart();
    };

    const gsap_sticker = gsap.timeline({
      id: 'sticker_element',
      paused: true,
      scrollTrigger: {
        start: '150 center',
        end: 'bottom bottom',
        markers: false,
        trigger: '.aspects_inner_container_second_r',
      },
    });

    gsap_sticker.fromTo('.aspects_inner_container_second_r_box_heading', { y: 50 }, {
      y: 0, opacity: 1, duration: 3, ease: 'power3.inOut',
    }, 0);
    gsap_sticker.to('.aspects_inner_container_second_r_box_link', { opacity: 1, duration: 3, ease: 'power3.inOut' }, 2);
    gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_one', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_second', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0.5);
    gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_third', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 1);
    gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_fourth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 1.5);
    gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_fifth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
    gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_sixth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2.5);

    const gsap_react = gsap.timeline({
      id: 'react_speed',
      paused: true,
      scrollTrigger: {
        start: '150 center',
        end: 'bottom bottom',
        markers: false,
        trigger: '.aspects_inner_container_fifth_l',
      },
    });

    gsap_react.fromTo('.aspects_inner_container_fifth_l_box_content h3', { y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);
    gsap_react.fromTo('.react_logo_container', { }, {
      opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 1);
    gsap_react.fromTo('.fifth_p1', { y: 50 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 2);
    gsap_react.to('.aspects_inner_container_fifth_l_box_background', { filter: 'brightness(.6)', duration: 2, ease: 'power3.inOut' }, 2);

    const gsap_footer_anim = gsap.timeline({
      id: 'footer_anim',
      paused: true,
      scrollTrigger: {
        start: '80% center',
        end: '110% bottom',
        markers: false,
        trigger: '.aspects',
        scrub: 1,
      },
    });

    gsap_footer_anim.to('body', { backgroundColor: 'rgba(28, 28, 30, 1) !important', duration: 1, ease: 'power3.inOut' }, 0);
    gsap_footer_anim.to('.aspects', {
      scale: 0.9, duration: 10, ease: 'power3.inOut',
    }, 0);
  });
}
// MOBILE-1150PX < END

// TABLET/LAPTOP/DESKTOP-1150PX > START
if (navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
  // touch mode
  if (desktop_size.matches) {

    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    });

    disableBodyScroll(targetElement_2);

    var targetElement = document.getElementsByClassName('nav_bar_modal');
    var targetElement_2 = document.getElementsByClassName('pre_entry_animation');

    $(document).ready(() => {

      function first_animation_check() {
        if (Cookies.get('entry_animation', 'played')) {
          const gsap_home_entry_animation = gsap.timeline({
            id: 'home_entry_animation',
            paused: true,
          });
  
          gsap_home_entry_animation.set('.pre_entry_animation', { display: 'none' }, 0);
          gsap_home_entry_animation.to('main', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0);
          gsap_home_entry_animation.to('.logo_bar', {
            opacity: 1, duration: 2, ease: 'power3.inOut',
          }, 0);
          gsap_home_entry_animation.to('.menu_bar', {
            opacity: 1, duration: 2, ease: 'power3.inOut',
          }, 0);
          gsap_home_entry_animation.to('.nav_bar', {
            opacity: 1, duration: 2, ease: 'power3.inOut',
          }, 0);
          gsap_home_entry_animation.add(
            () => {
              enableBodyScroll(targetElement_2);
            }, null, 2,
          );
          gsap_home_entry_animation.play();
        } else {
          const gsap_pre_entry_animation = gsap.timeline({
            id: 'pre_entry_animation',
            paused: true,
          });
  
          gsap_pre_entry_animation.to('.pre_entry_animation', { opacity: 1, duration: 0.1 }, 0);
          gsap_pre_entry_animation.fromTo('.pre_entry_animation_heading_first', { y: 50 }, {
            y: 0, opacity: 1, duration: 5, ease: 'power3.inOut',
          }, 0);
          gsap_pre_entry_animation.add(
            () => {
                pre_entry_animation_video_control.play();
            }, null, 5,
          );
          gsap_pre_entry_animation.to('.pre_entry_animation_heading_first', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
          gsap_pre_entry_animation.to('.pre_entry_animation_video', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 4);
          gsap_pre_entry_animation.to('main', { opacity: 1, duration: 3, ease: 'power3.inOut' }, 7);
          gsap_pre_entry_animation.to('.logo_bar', {
            opacity: 1, duration: 3, ease: 'power3.inOut',
          }, 7);
          gsap_pre_entry_animation.to('.menu_bar', {
            opacity: 1, duration: 3, ease: 'power3.inOut',
          }, 7);
          gsap_pre_entry_animation.to('.nav_bar', {
            opacity: 1, duration: 3, ease: 'power3.inOut',
          }, 7);
          gsap_pre_entry_animation.to('.pre_entry_animation', { opacity: 0, duration: 3, ease: 'power3.inOut' }, 7);
          gsap_pre_entry_animation.add(
            () => {
              enableBodyScroll(targetElement_2);
            }, null, 10,
          );
          gsap_pre_entry_animation.set('.pre_entry_animation', { display: 'none' }, 10);
  
          gsap_pre_entry_animation.play();
          Cookies.set('entry_animation', 'played', { expires: 7 });
        }
      }
  
      first_animation_check();
  

      function changeDigitalVideo() {

        var video_digital = document.getElementById('second_container_inner_icon_video_content_desktop');
        var source_digital = document.createElement('source');

        if (light_mode_apply.matches) {
          source_digital.setAttribute('src', '../../assets/video/scene4_light_premiere.mp4');
        } else {
          source_digital.setAttribute('src', '../../assets/video/scene4_dark_premiere.mp4');
        }
    
        video_digital.appendChild(source_digital);
    
      }
  
      changeDigitalVideo();

      function changePrintVideo() {

        var video_print = document.getElementById('third_container_inner_icon_video_content_desktop');
        var source_print = document.createElement('source');

        if (light_mode_apply.matches) {
          source_print.setAttribute('src', '../../assets/video/scene2_light_premiere.mp4');
        } else {
          source_print.setAttribute('src', '../../assets/video/scene2_dark_premiere.mp4');
        }
    
        video_print.appendChild(source_print);
    
      }
  
      changePrintVideo();


      function changeBackendVideo() {

        var video_backend = document.getElementById('fourth_container_inner_icon_video_content_desktop');
        var source_backend = document.createElement('source');

        if (light_mode_apply.matches) {
          source_backend.setAttribute('src', '../../assets/video/scene3_light_premiere.mp4');
        } else {
          source_backend.setAttribute('src', '../../assets/video/scene3_dark_premiere.mp4');
        }
    
        video_backend.appendChild(source_backend);
    
      }
  
      changeBackendVideo();

      function cookie_notification() {
        if (Cookies.get('cookies', 'accepted')) {
          (function (d, w, c) {
            w.ChatraID = 'bRth8u6fmZR6ZN8ym';
            const s = d.createElement('script');
            w[c] = w[c] || function () {
              (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
          }(document, window, 'Chatra'));
        } else {
          gsap_cookie_notification.play();
        }
      }

      cookie_notification();

      window.cookie_accepted = function cookie_accepted_func() {
        Cookies.set('cookies', 'accepted', { expires: 30 });
        gsap_cookie_notification_accepted.play();
      };
    });

    var feed = new Instafeed({
      accessToken: InstagramToken,
      target: 'instagram_feed',
      limit: 3,
      template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>',
    });
    feed.run();

    const canvas = document.getElementById('laptop_anim_inner_canvas');
    const context = canvas.getContext('2d');

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 195;

    if (light_mode_apply.matches) {
      var currentFrame = (index) => (
        `assets/images/laptop_animation/light_${(index + 15).toString().padStart(5, '0')}.jpg`
      );
    } else {
      var currentFrame = (index) => (
        `assets/images/laptop_animation/dark_${(index + 15).toString().padStart(5, '0')}.jpg`
      );
    }

    const images = [];
    const laptop = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[laptop.frame], 0, 0);
    }

    const pre_entry_animation_video_control = document.getElementById('pre_entry_animation_video_content');

    const menu_button = document.getElementById('menu_magnetic_target');

    const menu_button_svg = document.getElementById('menu_icon_svg');

    window.menu_logical = function menu_logical() {
      if (menu_button.classList.contains('active')) {
        enableBodyScroll(targetElement);
        gsap_menu_animation.reverse();
        menu_button.classList.remove('active');
        menu_button_svg.classList.remove('active');
      } else {
        disableBodyScroll(targetElement);
        gsap_menu_animation.play();
        menu_button.classList.add('active');
        menu_button_svg.classList.add('active');
      }
    };

    const teaser_video = document.getElementById('teaser_video');

    window.teaser_video_sound = function teaser_video_sound_func() {
      if (teaser_video.classList.contains('sound_on')) {
        function teaser_video_sound_func_disable() {
          teaser_video.muted = true;
          teaser_video.classList.remove('sound_on');
          gsap_teaser_video_sound_toggle.reverse();
        }
        teaser_video_sound_func_disable();
      } else {
        gsap_teaser_video_sound_toggle.play();
        teaser_video.classList.add('sound_on');
        teaser_video.muted = false;
      }
    };

    let gsap_cookie_notification = gsap.timeline({
      id: 'cookie_notification',
      paused: true,
    });

    gsap_cookie_notification.set('.cookie_notification_box', { display: 'block' }, 0);
    gsap_cookie_notification.fromTo('.cookie_notification', { y: 150 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);

    let gsap_cookie_notification_accepted = gsap.timeline({
      id: 'cookie_notification_accepted',
      paused: true,
    });

    gsap_cookie_notification_accepted.to('.cookie_notification_content a', { opacity: 0, duration: 0.5, ease: 'power3.inOut' }, 0);
    gsap_cookie_notification_accepted.to('.cookie_notification_content p', { text: { value: language5 }, duration: 2, ease: 'power3.inOut' }, 0.5);
    gsap_cookie_notification_accepted.to('.cookie_notification', {
      filter: 'blur(15px)', opacity: 0, duration: 1, ease: 'power3.inOut',
    }, 4.5);
    gsap_cookie_notification_accepted.set('.cookie_notification_box', { display: 'none' }, 5.5);
    gsap_cookie_notification_accepted.add(
      () => {
        (function (d, w, c) {
          w.ChatraID = 'bRth8u6fmZR6ZN8ym';
          const s = d.createElement('script');
          w[c] = w[c] || function () {
            (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
        }(document, window, 'Chatra'));
      }, null, 5.5,
    );

    let gsap_teaser_video_sound_toggle = gsap.timeline({
      id: 'gsap_teaser_video_sound_toggle',
      paused: true,
    });

    gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_text_animation', { text: { value: language2 }, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_1', { opacity: 1, duration: 1, ease: 'power3.inOut' }, 0);
    gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_2', { opacity: 2, duration: 2, ease: 'power3.inOut' }, 0);

    let gsap_menu_animation = gsap.timeline({
      id: 'menu_animation',
      paused: true,
    });

    gsap_menu_animation.to('.menu_font_animation', { text: { value: language1 }, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.to('main', { filter: 'grayscale(1)', duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.fromTo('.nav_bar', { backdropFilter: 'blur(15px)' }, { backdropFilter: 'blur(0px)', duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.to('.nav_bar_background', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.fromTo('.nav_bar_modal', { display: 'none' }, { display: 'block', duration: 0.1 }, 0);
    gsap_menu_animation.fromTo('.nav_bar_modal', { x: 600 }, {
      opacity: 1, x: 0, duration: 2, ease: 'power3.inOut',
    }, 0);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_logo', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_heading', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.25);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_subheading', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.5);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_heading_first', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_heading_second', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_socials', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_menu', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_third_text', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 2);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_third_mail', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 2.25);

    $(document).ready(() => { 
      const gsap_nav_animation = gsap.timeline({
        id: 'nav_animation',
        scrollTrigger: {
          trigger: '.nav_bar',
          start: 'top top',
          end: '950 center',
          markers: false,
          scrub: true,
        },
      });

      gsap_nav_animation.to('.nav_bar_background', { opacity: 0.2, duration: 10, ease: 'power3.inOut' }, 5);
      gsap_nav_animation.to('.logo_svg_icon', { opacity: 0, duration: 5, ease: 'power3.inOut' }, 0);
      gsap_nav_animation.to('.logo_schrift', {
        width: '200px', x: -49, duration: 10, ease: 'power3.inOut',
      }, 0);

      const clip = document.querySelector('.iphone_aufnahme_2');
      function redrawClipPath() {
        clip.style.clipPath = 'none';
        clip.offsetWidth; // force a style recalculation
        clip.style.clipPath = 'url(#myClip)';
      }

      const home_start = gsap.timeline({
        id: 'start_1',
        scrollTrigger: {
          trigger: '.start',
          start: 'top top',
          end: '5000 center',
          markers: false,
          pin: true,
          pinReparent: true,
          scrub: 2,
        },
      });

      if (light_mode_apply.matches) {
        home_start.to('.container_start_background', { backgroundColor: ('rgba(242, 242, 247, 1)'), duration: 5, ease: 'power1.inOut' }, 0);
        home_start.to('.start', { backgroundColor: ('white'), duration: 4, ease: 'power1.inOut' }, 10);
      } else {
        home_start.to('.container_start_background', { backgroundColor: ('rgba(28, 28, 30, 1)'), duration: 5, ease: 'power1.inOut' }, 0);
        home_start.to('.start', { backgroundColor: ('black'), duration: 4, ease: 'power1.inOut' }, 10);
      }
      home_start.to('.container_start', {
        borderRadius: ('25px'), transform: ('scale(0.7)'), boxShadow: ('0px 0px 100px -20px rgba(0,0,0,0.4)'), duration: 5, ease: 'power1.inOut',
      }, 0);
      home_start.fromTo('.container_start_browser', { y: -100 }, {
        y: 0, opacity: 1, duration: 5, ease: 'power1.inOut',
      }, 0);
      home_start.to('.container_start', { opacity: 0.2, duration: 5, ease: 'power1.inOut' }, 5);
      home_start.to('.container_start_content', { duration: 4, ease: 'power1.inOut' }, 10);
      home_start.to('.container_lets_get_shit', { opacity: 1, duration: 5, ease: 'power1.inOut' }, 5);
      home_start.to('.container_lets_get_shit', { display: ('block'), ease: 'power1.inOut' }, 4);
      home_start.to('.lets', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 11);
      home_start.to('.get', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 13);
      home_start.to('.shit', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 15);
      home_start.to('.done', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 1.5, duration: 10, ease: 'power2.in' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 3, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_start', { scale: 0.5, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_lets_get_shit', { duration: 15, ease: 'power1.inOut' }, 25);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.set('.container_phone', { display: ('block') }, 30);
      home_start.to('.transition_to_phone', { opacity: 1, duration: 10, ease: 'power2.out' }, 26);
      home_start.to('.container_start', { display: ('none') }, 31);
      home_start.to('.container_lets_get_shit', { display: ('none') }, 31);
      home_start.set('.container_phone_content_together', {}, 31);
      home_start.fromTo('.iphone_bg_font_container', { opacity: 0, scale: 2.5 }, {
        scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.to('.iphone_bg_font', { text: { value: 'push beyond imagination.', newClass: 'iphone_bg_font_2' }, duration: 8, ease: 'power1.inOut' }, 33);
      home_start.fromTo('.phone_x_box', { y: 500, scale: 2, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.fromTo('.iphone_2', { opacity: 0 }, {
        x: -170, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.fromTo('.iphone_3', { opacity: 0 }, {
        x: 250, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.to('.iphone_bg_font', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.iphone_bg_font_container', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.container_phone_content_together', { duration: 8, ease: 'power1.inOut' }, 43);
      home_start.fromTo('.iphone_bg_font_2', { opacity: 0, scale: 0.5 }, {
        opacity: 0.2, scale: 1, duration: 10, ease: 'power1.inOut',
      }, 43);
      home_start.set('.iphone_aufnahme', { opacity: 1, duration: 15, ease: 'power1.inOut' }, 45);
      home_start.set('.tablet_container', { display: ('block') }, 45);
      home_start.to('.iphone_2', {
        x: -300, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.iphone_3', {
        x: 350, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.phone_x_box', { rotate: 90, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.iphone_aufnahme', { opacity: 0, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.phone_x_box', {
        scale: 3, opacity: 1, duration: 5.5, ease: 'power1.inOut',
      }, 65);
      home_start.set('.iphone_aufnahme_2', {
        display: 'block', width: "100vw", height: "100vh", opacity: 0,
      }, 65);
      home_start.set('.iphone_aufnahme_2_player_ui', { display: 'block', opacity: 0 }, 65);
      home_start.to('.iphone_aufnahme_2', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 68);
      home_start.to('.container_phone_content_together', { display: 'none' }, 70);
      home_start.add(
        () => {
          teaser_video.pause();
        }, null, 67,
      );
      home_start.add(
        () => {
          teaser_video.play();
        }, null, 68,
      );
      home_start.to('.iphone_bg_font', { opacity: 0 }, 72);
      home_start.fromTo('.iphone_aufnahme_2_player_ui', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 5, ease: 'power1.inOut',
      }, 72);
      home_start.to('.iphone_bg_font_2', { opacity: 0 }, 72);
      home_start.to('.iphone_reel_teaser', { opacity: 0 }, 72);
      home_start.to('.iphone_aufnahme_2', { duration: 20, ease: 'power1.inOut' }, 72);
      const responsive_1 = window.matchMedia('(min-width:1100px) and (max-width: 1200px)');
      const responsive_2 = window.matchMedia('(min-width:1200px) and (max-width: 1300px)');
      const responsive_3 = window.matchMedia('(min-width:1300px) and (max-width: 1400px)');
      const responsive_4 = window.matchMedia('(min-width:1400px) and (max-width: 1500px)');
      const responsive_5 = window.matchMedia('(min-width:1500px) and (max-width: 1600px)');
      const responsive_6 = window.matchMedia('(min-width:1600px) and (max-width: 1700px)');
      const responsive_7 = window.matchMedia('(min-width:1700px) and (max-width: 1800px)');
      const responsive_8 = window.matchMedia('(min-width:1800px) and (max-width: 1900px)');
      const responsive_9 = window.matchMedia('(min-width:1900px) and (max-width: 2000px)');
      const responsive_10 = window.matchMedia('(min-width:2000px)');
      if (responsive_1.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '30vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_2.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '33vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_3.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_4.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_5.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '35vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_6.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '36vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_7.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '37vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_8.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '38vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_9.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_10.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else {

      }
      home_start.to('.iphone_aufnahme_2_player_ui', {
        opacity: 0, y: 50, duration: 5, ease: 'power1.inOut',
      }, 90);
      home_start.to('.iphone_x', { display: ('none') }, 90);
      home_start.to('.iphone_2', { display: ('none') }, 90);
      home_start.to('.iphone_3', { display: ('none') }, 90);
      home_start.to('.iphone_aufnahme_2', { duration: 10, ease: 'power1.inOut' }, 100);
      home_start.to('.iphone_aufnahme_2', { y: -50, duration: 10, ease: 'power1.inOut' }, 110);
      home_start.fromTo('.tablet_font', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power1.inOut',
      }, 110);
      home_start.add(
        () => {
          teaser_video.muted = true;
          teaser_video.classList.remove('sound_on');
          gsap_teaser_video_sound_toggle.reverse();
        }, null, 120,
      );

      const digital_devices = gsap.timeline({
        id: 'digital_devices',
        paused: true,
        repeat: 0,
        scrollTrigger: {
          trigger: '.digital_devices',
          start: '300 bottom',
          end: 'bottom top',
          markers: false,
          toggleActions: 'play pause resume pause',
        },
      });

      digital_devices.fromTo('.digital_devices_picture_container_inner', {
        opacity: 0, scale: 0.5, y: 50,
      }, {
        opacity: 1, duration: 1, scale: 1, y: 0, ease: 'power1.inOut',
      }, 0);
      digital_devices.fromTo('.digital_devices_font', { opacity: 0, y: 50 }, {
        opacity: 1, duration: 2, y: 0, ease: 'power1.inOut',
      }, 0);
      digital_devices.fromTo('.digital_devices_font_change', { opacity: 0 }, {
        opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 0.25);
      digital_devices.fromTo('.digital_devices_subfont', { opacity: 0 }, {
        opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 0.5);
      digital_devices.fromTo('.mobile', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1);
      digital_devices.fromTo('.tablets', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1.25);
      digital_devices.fromTo('.smart_tv', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1.5);
      digital_devices.fromTo('.desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1.75);
      digital_devices.fromTo('.smart_watch', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 2);
      digital_devices.fromTo('.smart_car', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 2.25);
      digital_devices.to('.digital_devices_font_change', { text: { value: language4, newClass: '.digital_devices_font_change_2' }, duration: 2, ease: 'power1.inOut' }, 3);

      const gsap_weltkarte = gsap.timeline({
        id: 'weltkarte',
        paused: true,
        repeat: -1,
        scrollTrigger: {
          start: '-500 center',
          end: '800 top',
          markers: false,
          trigger: '.weltkarte',
          toggleActions: 'play pause resume reset',
        },
      });

      if (light_mode_apply.matches) {
        gsap_weltkarte.to('#weltkarte_logo_black', { fill: 'black', duration: 2, ease: 'power3.inOut' }, 27.5);
      } else {
        gsap_weltkarte.to('#weltkarte_logo_black', { fill: 'white', duration: 2, ease: 'power3.inOut' }, 27.5);
      }

      gsap_weltkarte.set('.weltkarte_gsap_1', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_3', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_4', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_5', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_1', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_1_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_2_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_3', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_3_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_4', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_4_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_5', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_5_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_text', { opacity: 0 }, 0);
      gsap_weltkarte.fromTo('.weltkarte', { opacity: 0 }, {
        opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_weltkarte.fromTo('.weltkarte_gsap_1', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_weltkarte.fromTo('#dot_1', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
      gsap_weltkarte.fromTo('#path_1', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 3);
      gsap_weltkarte.fromTo('#dot_1_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 3);
      gsap_weltkarte.to('#dot_1', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
      gsap_weltkarte.to('#dot_1_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
      gsap_weltkarte.to('#path_1', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
      gsap_weltkarte.to('.weltkarte_gsap_1', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 5);
      gsap_weltkarte.fromTo('.weltkarte_gsap_2', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 7);
      gsap_weltkarte.fromTo('#dot_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 7);
      gsap_weltkarte.fromTo('#path_2', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 8);
      gsap_weltkarte.fromTo('#dot_2_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 8);
      gsap_weltkarte.to('#dot_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
      gsap_weltkarte.to('#dot_2_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
      gsap_weltkarte.to('#path_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
      gsap_weltkarte.to('.weltkarte_gsap_2', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 10);
      gsap_weltkarte.fromTo('.weltkarte_gsap_3', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 12);
      gsap_weltkarte.fromTo('#dot_3', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 12);
      gsap_weltkarte.fromTo('#path_3', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 13);
      gsap_weltkarte.fromTo('#dot_3_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 13);
      gsap_weltkarte.to('#dot_3', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
      gsap_weltkarte.to('#dot_3_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
      gsap_weltkarte.to('#path_3', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
      gsap_weltkarte.to('.weltkarte_gsap_3', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 15);
      gsap_weltkarte.fromTo('.weltkarte_gsap_4', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 17);
      gsap_weltkarte.fromTo('#dot_4', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 17);
      gsap_weltkarte.fromTo('#path_4', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 18);
      gsap_weltkarte.fromTo('#dot_4_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 18);
      gsap_weltkarte.to('#dot_4', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
      gsap_weltkarte.to('#dot_4_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
      gsap_weltkarte.to('#path_4', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
      gsap_weltkarte.to('.weltkarte_gsap_4', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 20);
      gsap_weltkarte.fromTo('.weltkarte_gsap_5', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 22);
      gsap_weltkarte.fromTo('#dot_5', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 22);
      gsap_weltkarte.fromTo('#path_5', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 23);
      gsap_weltkarte.fromTo('#dot_5_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 23);
      gsap_weltkarte.to('#dot_5', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
      gsap_weltkarte.to('#dot_5_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
      gsap_weltkarte.to('#path_5', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
      gsap_weltkarte.to('.weltkarte_gsap_5', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 25);
      gsap_weltkarte.to('.weltkarte_picture', {
        opacity: 0, duration: 2, ease: 'power3.inOut',
      }, 24.5);
      gsap_weltkarte.to('.weltkarte_dots', {
        opacity: 0, duration: 2, ease: 'power3.inOut',
      }, 24.5);
      gsap_weltkarte.fromTo('#weltkarte_logo_black', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 24.5);
      gsap_weltkarte.fromTo('.logo_path_1', { drawSVG: '0%' }, { drawSVG: '100%', duration: 5, ease: 'power3.inOut' }, 24.5);
      gsap_weltkarte.to('#weltkarte_logo_black', {
        y: -150, scale: 0.5, duration: 3, ease: 'power3.inOut',
      }, 28);
      gsap_weltkarte.fromTo('.weltkarte_text', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 28);
      gsap_weltkarte.fromTo('.weltkarte_subhead', { opacity: 0, y: -50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 30);
      gsap_weltkarte.to('.weltkarte', {
        scale: 1, opacity: 0, duration: 1, ease: 'power3.inOut',
      }, 37);

      const gsap_talents_entry = gsap.timeline({
        id: 'talents_entry',
        paused: true,
        repeat: 0,
        scrollTrigger: {
          start: '-30% center',
          end: '0 top',
          markers: false,
          trigger: '.philosophy',
        },
      });

      gsap_talents_entry.fromTo('.philosophy_row_left_heading', { y: -50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_talents_entry.fromTo('.philosophy_row_right_heading', { opacity: 0, x: 300 }, {
        x: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_talents_entry.fromTo('.philosophy_row_right_text', { opacity: 0, x: 300 }, {
        x: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);

      const gsap_talents_guys = gsap.timeline({
        id: 'talents_guys',
        paused: true,
        repeat: 0,
        scrollTrigger: {
          start: '-500 center',
          end: '1000 top',
          markers: false,
          trigger: '.talents',
        },
      });

      gsap_talents_guys.fromTo('.one_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0);
      gsap_talents_guys.fromTo('.two_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0.25);
      gsap_talents_guys.fromTo('.three_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0.5);
      gsap_talents_guys.fromTo('.four_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0.75);
      gsap_talents_guys.fromTo('.five_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 1);
      gsap_talents_guys.fromTo('.six_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 1.25);
      gsap_talents_guys.fromTo('.founders_heading', { y: 100 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_talents_guys.fromTo('.founders_text', { y: 100 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_talents_guys.fromTo('.steve', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 2);

      const scrolling_text = gsap.timeline({
        scrollTrigger: {
          start: '-500 center',
          end: '350 top',
          markers: false,
          trigger: '.scrolling_text',
          scrub: 1,
        },
      });

      scrolling_text.fromTo('.scrolling_text', { opacity: 1, x: 1000 }, { x: -1500, opacity: 1, duration: 15 }, 0);

      const gsap_case_1 = gsap.timeline({
        id: 'case_1',
        scrollTrigger: {
          start: '0 top',
          end: '9500 top',
          markers: false,
          trigger: '.case_studies',
          pin: true,
          pinReparent: true,
          scrub: 2,
        },
      });

      gsap_case_1.to('.scrolling_text_container', {
        y: -200, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 10);
      gsap_case_1.fromTo('.case_studies_projects_item_first', { scale: 0.5, y: 600, opacity: 0 }, {
        scale: 1, y: 0, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 0);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 12);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 12);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 13);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_first', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_first', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.to('.case_studies_projects_item_image_first_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 25);
      gsap_case_1.to('.case_studies_projects_item_image_first_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 26);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 25);
      gsap_case_1.fromTo('.case_studies_background_evolves_first', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 30);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 30);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_description_first', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_first', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_first', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.to('.case_studies_projects_item_first', { duration: 40, ease: 'power3.inOut' }, 40);

      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.75, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 80);
      gsap_case_1.to('.case_studies_projects_wrapper_second', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 80);
      gsap_case_1.fromTo('.case_studies_projects_item_second', {
        display: 'block', x: '100%', scale: 0.8,
      }, {
        x: '0%', scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 80);
      gsap_case_1.fromTo('.case_studies_project_item_background_second', { opacity: 0.3 }, { opacity: 0.9, duration: 10, ease: 'power3.inOut' }, 80);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 92);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 92);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 93);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_second', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_second', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.to('.case_studies_projects_item_image_second_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 105);
      gsap_case_1.to('.case_studies_projects_item_image_second_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 106);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 105);
      gsap_case_1.fromTo('.case_studies_background_evolves_second', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 110);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 110);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_description_second', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_second', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_second', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.to('.case_studies_projects_item_second', { duration: 40, ease: 'power3.inOut' }, 120);

      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.5, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 160);
      gsap_case_1.to('.case_studies_projects_item_second', {
        scale: 0.75, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 160);
      gsap_case_1.to('.case_studies_projects_wrapper_third', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 160);
      gsap_case_1.fromTo('.case_studies_projects_item_third', {
        display: 'block', x: '100%', scale: 0.8,
      }, {
        x: '0%', scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 160);
      gsap_case_1.fromTo('.case_studies_project_item_background_third', { opacity: 0.3 }, { opacity: 0.9, duration: 10, ease: 'power3.inOut' }, 160);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 172);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 172);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 173);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_third', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_third', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.to('.case_studies_projects_item_image_third_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 185);
      gsap_case_1.to('.case_studies_projects_item_image_third_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 186);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 185);
      gsap_case_1.fromTo('.case_studies_background_evolves_third', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 190);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 190);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_description_third', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_third', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_third', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.to('.case_studies_projects_item_third', { duration: 40, ease: 'power3.inOut' }, 200);

      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.25, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);
      gsap_case_1.to('.case_studies_projects_item_second', {
        scale: 0.5, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);
      gsap_case_1.to('.case_studies_projects_item_third', {
        scale: 0.75, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);

      gsap_case_1.to('.case_studies_projects_wrapper_fourth', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 240);
      gsap_case_1.fromTo('.case_studies_projects_item_fourth', {
        display: 'block', x: '100%', scale: 0.8,
      }, {
        x: '0%', scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);
      gsap_case_1.fromTo('.case_studies_project_item_background_fourth', { opacity: 0.3 }, { opacity: 0.9, duration: 10, ease: 'power3.inOut' }, 240);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 252);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 252);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 253);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_fourth', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_fourth', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.to('.case_studies_projects_item_image_fourth_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 265);
      gsap_case_1.to('.case_studies_projects_item_image_fourth_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 266);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 265);
      gsap_case_1.fromTo('.case_studies_background_evolves_fourth', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 270);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 270);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_description_fourth', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_fourth', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_fourth', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.to('.case_studies_projects_item_fourth', { duration: 40, ease: 'power3.inOut' }, 280);

      gsap_case_1.to('.case_studies_projects_item_fourth', {
        opacity: 0, scale: 0.75, duration: 10, ease: 'power3.inOut',
      }, 310);
      gsap_case_1.to('.case_studies_projects_item_third', {
        opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 312);
      gsap_case_1.to('.case_studies_projects_item_second', {
        opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 314);
      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.5, y: '-27%', x: '-26%', duration: 10, ease: 'power3.inOut',
      }, 317);
      gsap_case_1.set('.case_studies_projects_item_second', {
        opacity: 0, y: '-27%', x: '26%', scale: 0.5, duration: 1, ease: 'power3.inOut',
      }, 324);
      gsap_case_1.set('.case_studies_projects_item_third', {
        opacity: 0, y: '27%', x: '-26%', scale: 0.5, duration: 1, ease: 'power3.inOut',
      }, 324);
      gsap_case_1.set('.case_studies_projects_item_fourth', {
        opacity: 0, y: '27%', x: '26%', scale: 0.5, duration: 1, ease: 'power3.inOut',
      }, 324);

      gsap_case_1.to('.case_studies_projects_item_second', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 324);
      gsap_case_1.to('.case_studies_projects_item_third', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 328);
      gsap_case_1.to('.case_studies_projects_item_fourth', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 332);

      const gsap_power_digital = gsap.timeline({
        id: 'power_digital',
        scrollTrigger: {
          start: '0 top',
          end: '2000 top',
          markers: false,
          trigger: '.services',
          scrub: 1,
          pin: true,
          pinReparent: true,
        },
      });

      gsap_power_digital.fromTo('.first_container_inner_main_subhead', { y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 2);
      gsap_power_digital.fromTo('.first_container_inner_main_text', { y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_power_digital.fromTo('.first_container_inner_second_text', { y: 25 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);
      gsap_power_digital.to('.first_container_inner_main_text', { opacity: 0, duration: 10, ease: 'power3.inOut' }, 10);
      gsap_power_digital.to('.first_container_inner_second_text', { opacity: 0, duration: 10, ease: 'power3.inOut' }, 10);
      gsap_power_digital.to('.first_container_inner_main_subhead', {
        text: { value: 'with evolves.', delimiter: ' ' }, y: 250, duration: 10, ease: 'power3.inOut',
      }, 12);
      gsap_power_digital.fromTo('.first_container_inner_image_container', { opacity: 0 }, {
        opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 12);
      gsap_power_digital.to('.first_container_inner_image_container', { duration: 10 }, 17);

      const gsap_paper_plane = gsap.timeline({
        id: 'paper_plane_gsap',
        scrollTrigger: {
          start: '1600 center',
          end: '3000 bottom',
          markers: false,
          trigger: '.second_container',
          scrub: 2,
        },
      });
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .icon_second_container', { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .heading_small', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0.5);
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1);
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .subheading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1.5);
      gsap_paper_plane.fromTo('.second_container_inner_right_desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);

      const gsap_paper_plane_2 = gsap.timeline({
        id: 'paper_plane_gsap_2',
        scrollTrigger: {
          start: '1600 center',
          end: '3000 bottom',
          markers: false,
          trigger: '.third_container',
          scrub: 2,
        },
      });

      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .icon_third_container', { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .heading_small', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0.5);
      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1);
      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .subheading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1.5);
      gsap_paper_plane_2.fromTo('.third_container_inner_left_desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);

      const gsap_paper_plane_3 = gsap.timeline({
        id: 'paper_plane_gsap_3',
        scrollTrigger: {
          start: '1600 center',
          end: '3000 bottom',
          markers: false,
          trigger: '.fourth_container',
          scrub: 2,
        },
      });

      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .icon_fourth_container', { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .heading_small', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0.5);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .subheading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1.5);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_right_desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);

      const gsap_laptop_pre_animation = gsap.timeline({
        id: 'laptop_anim',
        scrollTrigger: {
          start: '0 top',
          end: '6500 bottom',
          pin: true,
          pinReparent: true,
          markers: false,
          trigger: '.laptop_anim',
          scrub: 2,
        },
      });

      gsap_laptop_pre_animation.to('.services', { duration: 20, ease: 'power3.inOut' }, 0);
      gsap_laptop_pre_animation.fromTo('.lottie_heart', { y: 100 }, {
        opacity: 1, y: 0, duration: 20, ease: 'power3.inOut',
      }, 7);
      gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_font', { y: 100 }, {
        opacity: 1, y: 0, duration: 20, ease: 'power3.inOut',
      }, 10);
      gsap_laptop_pre_animation.add(
        () => {
          const heart_lottie = document.getElementById('heart_lottie');
          heart_lottie.play();
        }, null, 15,
      );
      gsap_laptop_pre_animation.to('.lottie_heart', {
        y: -100, opacity: 0, duration: 20, ease: 'power3.inOut',
      }, 45);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_font', {
        y: -100, opacity: 0, duration: 20, ease: 'power3.inOut',
      }, 48);
      gsap_laptop_pre_animation.fromTo('#laptop_anim_inner_canvas', { y: 50 }, {
        y: -50, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 60);
      gsap_laptop_pre_animation.to(laptop, {
        duration: 60, frame: frameCount - 1, snap: 'frame', onUpdate: render,
      }, 63);
      gsap_laptop_pre_animation.to('#laptop_anim_inner_canvas', { duration: 40, ease: 'power3.inOut' }, 110);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_second', {
        opacity: 1, duration: 40, ease: 'power3.inOut',
      }, 110);
      gsap_laptop_pre_animation.fromTo('#laptop_anim_upper_inner_second_logo', { y: 100 }, {
        y: 0, duration: 40, ease: 'power3.inOut',
      }, 110);
      gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_second_logo_svg', { drawSVG: '0%' }, { drawSVG: '100%', duration: 40, ease: 'power3.inOut' }, 120);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_second', { y: -300, duration: 40, ease: 'power3.inOut' }, 160);
      gsap_laptop_pre_animation.to('.laptop_anim_inner', { y: -300, duration: 40, ease: 'power3.inOut' }, 160);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_second', {
        opacity: 0, duration: 40, ease: 'power3.inOut',
      }, 160);
      gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_third_font', { y: 150, opacity: 0 }, {
        y: 0, opacity: 1, duration: 40, ease: 'power3.inOut',
      }, 165);

      const gsap_laptop_pre_animation_second = gsap.timeline({
        id: 'laptop_anim_second',
        scrollTrigger: {
          start: '5000 center',
          end: '6800 bottom',
          markers: false,
          trigger: '.laptop_anim_upper_inner_third',
          scrub: 2,
        },
      });

      gsap_laptop_pre_animation_second.fromTo('.laptop_anim_upper_inner_third_subhead', { opacity: 0, y: 100 }, {
        y: 0, opacity: 1, duration: 40, ease: 'power3.inOut',
      }, 0);
      gsap_laptop_pre_animation_second.to('body', { duration: 40, ease: 'power3.inOut' }, 30);
      gsap_laptop_pre_animation_second.to('.laptop_anim_inner', { duration: 20, ease: 'power3.inOut' }, 20);
      gsap_laptop_pre_animation_second.to('.laptop_anim_upper_inner_third_subhead', { duration: 40, ease: 'power3.inOut' }, 30);

      const gsap_aspects_second_l = gsap.timeline({
        id: 'aspects_second_l',
        scrollTrigger: {
          start: '0 center',
          end: '1000 bottom',
          markers: false,
          trigger: '.aspects_inner_container_second_l',
          scrub: 1,
        },
      });

      gsap_aspects_second_l.to('.aspects_logo', { morphSVG: '.aspects_lock_icon', duration: 20, ease: 'power3.inOut' }, 0);
      gsap_aspects_second_l.to('.protected_animation', { duration: 40, text: { value: language3 }, ease: 'power3.inOut' }, 5);
      gsap_aspects_second_l.fromTo('.protected_animation_2', { opacity: 0 }, {
        opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 30);

      const gsap_aspects_first = gsap.timeline({
        id: 'aspects_first',
        scrollTrigger: {
          start: '-300 center',
          end: '850 bottom',
          markers: false,
          trigger: '.aspects_inner_container_first',
          scrub: 1,
        },
      });

      if (light_mode_apply.matches) {
        gsap_aspects_first.fromTo('.aspects_inner_container_first_box_background', { opacity: 0 }, {
          opacity: 1, duration: 40, ease: 'power3.inOut',
        }, 0);
      } else {
        gsap_aspects_first.fromTo('.aspects_inner_container_first_box_background', { opacity: 0 }, {
          opacity: 0.4, duration: 40, ease: 'power3.inOut',
        }, 0);
      }

      gsap_aspects_first.fromTo('.aspects_inner_container_first_box_heading', { scale: 0.8, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 20);
      gsap_aspects_first.fromTo('.aspects_inner_container_first_box_subheading', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 25);

      const gsap_day_night = gsap.timeline({
        id: 'day_night_element',
        paused: true,
        scrollTrigger: {
          start: '150 center',
          end: 'bottom bottom',
          markers: false,
          trigger: '.aspects_inner_container_fifth_r',
        },
      });

      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_main', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
      gsap_day_night.fromTo('.aspects_inner_container_fifth_r_box_image_day', { scale: 0.75, opacity: 0 }, {
        opacity: 1, scale: 1, duration: 3, ease: 'power3.inOut',
      }, 0);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_image_day', { duration: 2, ease: 'power3.inOut' }, 2);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_day', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);

      gsap_day_night.fromTo('.day_mode_icon', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_day_night.fromTo('.day_mode_heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2.5);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_day', {
        opacity: 0, duration: 2.5, ease: 'power3.inOut',
      }, 4);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_background_main', { backgroundColor: '#000000', duration: 2.5, ease: 'power3.inOut' }, 4);
      gsap_day_night.set('.aspects_inner_container_fifth_r_box_night', { display: 'block', ease: 'power3.inOut' }, 4);
      gsap_day_night.fromTo('.aspects_inner_container_fifth_r_box_image_night', { scale: 0.75, opacity: 0 }, {
        opacity: 1, scale: 1, duration: 2.5, ease: 'power3.inOut',
      }, 4);
      gsap_day_night.set('.aspects_inner_container_fifth_r_box_day', { display: 'none', ease: 'power3.inOut' }, 6.5);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_image_night', { duration: 2, ease: 'power3.inOut' }, 6.5);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_night', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 6.5);
      gsap_day_night.fromTo('.night_mode_icon', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 6.5);
      gsap_day_night.fromTo('.night_mode_heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 7);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_night', {
        opacity: 0, duration: 2.5, ease: 'power3.inOut',
      }, 10);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_background_main', { backgroundColor: 'rgba(28, 28, 30, 1)', duration: 2.5, ease: 'power3.inOut' }, 10);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_main', { opacity: 1, duration: 2.5, ease: 'power3.inOut' }, 11);

      window.repeat_day_night_animation = function repeat_day_night_animation() {
        gsap_day_night.restart();
      };

      const gsap_sticker = gsap.timeline({
        id: 'sticker_element',
        paused: true,
        scrollTrigger: {
          start: '150 center',
          end: 'bottom bottom',
          markers: false,
          trigger: '.aspects_inner_container_second_r',
        },
      });

      gsap_sticker.fromTo('.aspects_inner_container_second_r_box_heading', { y: 50 }, {
        y: 0, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 0);
      gsap_sticker.to('.aspects_inner_container_second_r_box_link', { opacity: 1, duration: 3, ease: 'power3.inOut' }, 2);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_one', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_second', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0.5);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_third', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 1);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_fourth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 1.5);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_fifth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_sixth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2.5);

      const gsap_react = gsap.timeline({
        id: 'react_speed',
        paused: true,
        scrollTrigger: {
          start: '150 center',
          end: 'bottom bottom',
          markers: false,
          trigger: '.aspects_inner_container_fifth_l',
        },
      });

      gsap_react.fromTo('.aspects_inner_container_fifth_l_box_content h3', { y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_react.fromTo('.react_logo_container', { }, {
        opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 1);
      gsap_react.fromTo('.fifth_p1', { y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_react.to('.aspects_inner_container_fifth_l_box_background', { filter: 'brightness(.6)', duration: 2, ease: 'power3.inOut' }, 2);

      const gsap_footer_anim = gsap.timeline({
        id: 'footer_anim',
        paused: true,
        scrollTrigger: {
          start: '80% center',
          end: '130% bottom',
          markers: false,
          trigger: '.aspects',
          scrub: 1,
        },
      });

      gsap_footer_anim.to('.aspects', {
        scale: 0.9, duration: 10, opacity: 0.2, ease: 'power3.inOut',
      }, 0);
    });

    jQuery(document).ready(($) => {
      const bArray = [];
      const sArray = [4, 6, 8, 10];

      for (let i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
      }

      function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      setInterval(() => {
        const size = randomValue(sArray);
        $('.bubbles').append(`<div class="individual-bubble" style="left: ${randomValue(bArray)}px; width: ${size}px; height:${size}px;"></div>`);

        $('.individual-bubble').animate({
          bottom: '100%',
          opacity: '-=0.7',
        }, 3000, function () {
          $(this).remove();
        });
      }, 350);
    });
  }
  //
} else {
  // no-touch-mode
  if (desktop_size.matches) {

    $(document).ready(() => {

      function changeDigitalVideo() {

        var video_digital = document.getElementById('second_container_inner_icon_video_content_desktop');
        var source_digital = document.createElement('source');

        if (light_mode_apply.matches) {
          source_digital.setAttribute('src', '../../assets/video/scene4_light_premiere.mp4');
        } else {
          source_digital.setAttribute('src', '../../assets/video/scene4_dark_premiere.mp4');
        }
    
        video_digital.appendChild(source_digital);
    
      }
  
      changeDigitalVideo();

      function changePrintVideo() {

        var video_print = document.getElementById('third_container_inner_icon_video_content_desktop');
        var source_print = document.createElement('source');

        if (light_mode_apply.matches) {
          source_print.setAttribute('src', '../../assets/video/scene2_light_premiere.mp4');
        } else {
          source_print.setAttribute('src', '../../assets/video/scene2_dark_premiere.mp4');
        }
    
        video_print.appendChild(source_print);
    
      }
  
      changePrintVideo();


      function changeBackendVideo() {

        var video_backend = document.getElementById('fourth_container_inner_icon_video_content_desktop');
        var source_backend = document.createElement('source');

        if (light_mode_apply.matches) {
          source_backend.setAttribute('src', '../../assets/video/scene3_light_premiere.mp4');
        } else {
          source_backend.setAttribute('src', '../../assets/video/scene3_dark_premiere.mp4');
        }
    
        video_backend.appendChild(source_backend);
    
      }
  
      changeBackendVideo();

      function first_animation_check() {
        if (Cookies.get('entry_animation', 'played')) {
          const gsap_home_entry_animation = gsap.timeline({
            id: 'home_entry_animation',
            paused: true,
          });
  
          gsap_home_entry_animation.set('.pre_entry_animation', { display: 'none' }, 0);
          gsap_home_entry_animation.to('main', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0);
          gsap_home_entry_animation.to('.logo_bar', {
            opacity: 1, duration: 2, ease: 'power3.inOut',
          }, 0);
          gsap_home_entry_animation.to('.menu_bar', {
            opacity: 1, duration: 2, ease: 'power3.inOut',
          }, 0);
          gsap_home_entry_animation.to('.nav_bar', {
            opacity: 1, duration: 2, ease: 'power3.inOut',
          }, 0);
          gsap_home_entry_animation.play();
        } else {
          const gsap_pre_entry_animation = gsap.timeline({
            id: 'pre_entry_animation',
            paused: true,
          });
  
          gsap_pre_entry_animation.to('.pre_entry_animation', { opacity: 1, duration: 0.1 }, 0);
          gsap_pre_entry_animation.fromTo('.pre_entry_animation_heading_first', { y: 50 }, {
            y: 0, opacity: 1, duration: 5, ease: 'power3.inOut',
          }, 0);
          gsap_pre_entry_animation.add(
            () => {
                pre_entry_animation_video_control.play();
            }, null, 5,
          );
          gsap_pre_entry_animation.to('.pre_entry_animation_heading_first', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
          gsap_pre_entry_animation.to('.pre_entry_animation_video', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 4);
          gsap_pre_entry_animation.to('main', { opacity: 1, duration: 3, ease: 'power3.inOut' }, 7);
          gsap_pre_entry_animation.to('.logo_bar', {
            opacity: 1, duration: 3, ease: 'power3.inOut',
          }, 7);
          gsap_pre_entry_animation.to('.menu_bar', {
            opacity: 1, duration: 3, ease: 'power3.inOut',
          }, 7);
          gsap_pre_entry_animation.to('.nav_bar', {
            opacity: 1, duration: 3, ease: 'power3.inOut',
          }, 7);
          gsap_pre_entry_animation.to('.pre_entry_animation', { opacity: 0, duration: 3, ease: 'power3.inOut' }, 7);
          gsap_pre_entry_animation.add(
            () => {
              bodyScrollBar.updatePluginOptions('modal', { open: false });
            }, null, 10,
          );
          gsap_pre_entry_animation.set('.pre_entry_animation', { display: 'none' }, 10);
  
          gsap_pre_entry_animation.play();
          bodyScrollBar.updatePluginOptions('modal', { open: true });
          Cookies.set('entry_animation', 'played', { expires: 7 });
        }
      }
  
      first_animation_check();

      function cookie_notification() {
        if (Cookies.get('cookies', 'accepted')) {
          (function (d, w, c) {
            w.ChatraID = 'bRth8u6fmZR6ZN8ym';
            const s = d.createElement('script');
            w[c] = w[c] || function () {
              (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
          }(document, window, 'Chatra'));
        } else {
          gsap_cookie_notification.play();
        }
      }

      cookie_notification();

      window.cookie_accepted = function cookie_accepted_func() {
        Cookies.set('cookies', 'accepted', { expires: 30 });
        gsap_cookie_notification_accepted.play();
      };
    });

    var feed = new Instafeed({
      accessToken: InstagramToken,
      target: 'instagram_feed',
      limit: 3,
      template: '<div class="instagram_feed_picture"><a href="{{link}}"><img class="instagram_feed_picture_img" title="{{caption}}" src="{{image}}" /><span class="instagram_feed_text">{{caption}}</span></a></div>',
    });
    feed.run();

    function magnetic_system() {
      const element = document.querySelector('.cursor');
      const target = document.querySelector('.menu_magnetic_target');
      const text = document.querySelector('.menu_magnetic_icon');

      class Cursor {
        constructor(el) {
          this.el = el;
          this.bind();
        }

        bind() {
          document.addEventListener('mousemove', this.move.bind(this), false);
        }

        move(e) {
          const cursorPosition = {
            left: e.clientX,
            top: e.clientY,
          };

          document.querySelectorAll(('.menu_magnetic_target')).forEach((single) => {
            const triggerDistance = single.getBoundingClientRect().width;

            const targetPosition = {
              left:
              single.getBoundingClientRect().left
              + single.getBoundingClientRect().width / 2,
              top:
              single.getBoundingClientRect().top
              + single.getBoundingClientRect().height / 2,
            };

            const distance = {
              x: targetPosition.left - cursorPosition.left,
              y: targetPosition.top - cursorPosition.top,
            };

            const angle = Math.atan2(distance.x, distance.y);
            const hypotenuse = Math.sqrt(
              distance.x * distance.x + distance.y * distance.y,
            );

            if (hypotenuse < triggerDistance) {
              gsap.to(this.el, {
                left: targetPosition.left - Math.sin(angle) * hypotenuse / 3,
                top: targetPosition.top - Math.cos(angle) * hypotenuse / 3,
                height: '75px',
                width: '75px',
                duration: 0.5,
              });

              gsap.to(text, {
                x: -(Math.sin(angle) * hypotenuse / 3),
                y: -(Math.cos(angle) * hypotenuse / 3),
                duration: 0.5,
              });
            } else {
              gsap.to(this.el, {
                left: cursorPosition.left,
                top: cursorPosition.top,
                height: '12px',
                width: '12px',
                duration: 0.5,
              });

              gsap.to(text, {
                x: 0,
                y: 0,
                duration: 0.5,
              });
            }
          });
        }
      }

      const cursor = new Cursor(element, target);
    }

    magnetic_system();

    const targetElement = document.getElementsByClassName('pre_entry_animation');

    class ModalPlugin extends ScrollbarPlugin {
        static pluginName = 'modal';

        static defaultOptions = {
          open: false,
        };

        transformDelta(delta) {
          return this.options.open ? { x: 0, y: 0 } : delta;
        }
    }

    Scrollbar.use(ModalPlugin);

    const scroller = document.querySelector('.scroller');

    const bodyScrollBar = Scrollbar.init(scroller, {
      damping: 0.1, renderByPixels: true, thumbMinSize: 100, delegateTo: document, alwaysShowTracks: false, syncCallbacks: true,
    });

    ScrollTrigger.scrollerProxy('.scroller', {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller });

    bodyScrollBar.track.xAxis.element.remove();

    const fixedElem = document.getElementsByClassName('menu_bar')[0];
    const fixedElem_2 = document.getElementsByClassName('nav_bar_modal')[0];
    const fixedElem_3 = document.getElementsByClassName('cursor_container')[0];
    const fixedElem_4 = document.getElementsByClassName('logo_bar')[0];
    const fixedElem_5 = document.getElementsByClassName('nav_bar')[0];
    const fixedElem_6 = document.getElementsByClassName('cookie_notification_box')[0];

    bodyScrollBar.addListener((status) => {
      const { offset } = status;

      fixedElem.style.top = `${offset.y}px`,
      fixedElem_2.style.top = `${offset.y}px`,
      fixedElem_3.style.top = `${offset.y}px`,
      fixedElem_4.style.top = `${offset.y}px`,
      fixedElem_5.style.top = `${offset.y}px`,
      fixedElem_6.style.top = `${offset.y}px`;
    });

    const canvas = document.getElementById('laptop_anim_inner_canvas');
    const context = canvas.getContext('2d');

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 195;

    if (light_mode_apply.matches) {
      var currentFrame = (index) => (
        `../../assets/images/laptop_animation/light_${(index + 15).toString().padStart(5, '0')}.jpg`
      );
    } else {
      var currentFrame = (index) => (
        `../../assets/images/laptop_animation/dark_${(index + 15).toString().padStart(5, '0')}.jpg`
      );
    }

    const images = [];
    const laptop = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[laptop.frame], 0, 0);
    }

    const pre_entry_animation_video_control = document.getElementById('pre_entry_animation_video_content');

    const menu_button = document.getElementById('menu_magnetic_target');

    const menu_button_svg = document.getElementById('menu_icon_svg');

    window.menu_logical = function menu_logical() {
      if (menu_button.classList.contains('active')) {
        bodyScrollBar.updatePluginOptions('modal', { open: false });
        gsap_menu_animation.reverse();
        menu_button.classList.remove('active');
        menu_button_svg.classList.remove('active');
      } else {
        bodyScrollBar.updatePluginOptions('modal', { open: true });
        gsap_menu_animation.play();
        menu_button.classList.add('active');
        menu_button_svg.classList.add('active');
      }
    };

    const teaser_video = document.getElementById('teaser_video');

    window.teaser_video_sound = function teaser_video_sound_func() {
      if (teaser_video.classList.contains('sound_on')) {
        function teaser_video_sound_func_disable() {
          teaser_video.muted = true;
          teaser_video.classList.remove('sound_on');
          gsap_teaser_video_sound_toggle.reverse();
        }
        teaser_video_sound_func_disable();
      } else {
        gsap_teaser_video_sound_toggle.play();
        teaser_video.classList.add('sound_on');
        teaser_video.muted = false;
      }
    };

    let gsap_cookie_notification = gsap.timeline({
      id: 'cookie_notification',
      paused: true,
    });

    gsap_cookie_notification.set('.cookie_notification_box', { display: 'block' }, 0);
    gsap_cookie_notification.fromTo('.cookie_notification', { y: 150 }, {
      y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
    }, 0);

    let gsap_cookie_notification_accepted = gsap.timeline({
      id: 'cookie_notification_accepted',
      paused: true,
    });

    gsap_cookie_notification_accepted.to('.cookie_notification_content a', { opacity: 0, duration: 0.5, ease: 'power3.inOut' }, 0);
    gsap_cookie_notification_accepted.to('.cookie_notification_content p', { text: { value: language5 }, duration: 2, ease: 'power3.inOut' }, 0.5);
    gsap_cookie_notification_accepted.to('.cookie_notification', {
      filter: 'blur(15px)', opacity: 0, duration: 1, ease: 'power3.inOut',
    }, 4.5);
    gsap_cookie_notification_accepted.set('.cookie_notification_box', { display: 'none' }, 5.5);
    gsap_cookie_notification_accepted.add(
      () => {
        (function (d, w, c) {
          w.ChatraID = 'bRth8u6fmZR6ZN8ym';
          const s = d.createElement('script');
          w[c] = w[c] || function () {
            (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
        }(document, window, 'Chatra'));
      }, null, 5.5,
    );

    let gsap_teaser_video_sound_toggle = gsap.timeline({
      id: 'gsap_teaser_video_sound_toggle',
      paused: true,
    });

    gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_text_animation', { text: { value: language2 }, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_1', { opacity: 1, duration: 1, ease: 'power3.inOut' }, 0);
    gsap_teaser_video_sound_toggle.to('.iphone_aufnahme_2_player_ui_icon_animation_2', { opacity: 2, duration: 2, ease: 'power3.inOut' }, 0);

    let gsap_menu_animation = gsap.timeline({
      id: 'menu_animation',
      paused: true,
    });

    gsap_menu_animation.to('.menu_font_animation', { text: { value: language1 }, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.to('main', { filter: 'grayscale(1)', duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.fromTo('.nav_bar', { backdropFilter: 'blur(15px)' }, { backdropFilter: 'blur(0px)', duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.to('.nav_bar_background', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
    gsap_menu_animation.fromTo('.nav_bar_modal', { display: 'none' }, { display: 'block', duration: 0.1 }, 0);
    gsap_menu_animation.fromTo('.nav_bar_modal', { x: 600 }, {
      opacity: 1, x: 0, duration: 2, ease: 'power3.inOut',
    }, 0);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_logo', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_heading', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.25);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_subheading', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.5);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_heading_first', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_heading_second', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_socials', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_second_inner_menu_menu', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 1.75);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_third_text', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 2);
    gsap_menu_animation.fromTo('.nav_bar_modal_content_third_mail', { y: 50 }, {
      y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
    }, 2.25);

    $(document).ready(() => {
      const gsap_nav_animation = gsap.timeline({
        id: 'nav_animation',
        scrollTrigger: {
          trigger: '.nav_bar',
          start: 'top top',
          end: '950 center',
          markers: false,
          scrub: true,
        },
      });

      gsap_nav_animation.to('.nav_bar_background', { opacity: 0.2, duration: 10, ease: 'power3.inOut' }, 5);
      gsap_nav_animation.to('.logo_svg_icon', { opacity: 0, duration: 5, ease: 'power3.inOut' }, 0);
      gsap_nav_animation.to('.logo_schrift', {
        width: '200px', x: -49, duration: 10, ease: 'power3.inOut',
      }, 0);

      const clip = document.querySelector('.iphone_aufnahme_2');
      function redrawClipPath() {
        clip.style.clipPath = 'none';
        clip.offsetWidth; // force a style recalculation
        clip.style.clipPath = 'url(#myClip)';
      }

      const home_start = gsap.timeline({
        id: 'start_1',
        scrollTrigger: {
          trigger: '.start',
          start: 'top top',
          end: '5000 center',
          markers: false,
          pin: true,
          pinType: 'transform',
          pinReparent: true,
          scrub: 2,
        },
      });

      if (light_mode_apply.matches) {
        home_start.to('.container_start_background', { backgroundColor: ('rgba(242, 242, 247, 1)'), duration: 5, ease: 'power1.inOut' }, 0);
        home_start.to('.start', { backgroundColor: ('white'), duration: 4, ease: 'power1.inOut' }, 10);
      } else {
        home_start.to('.container_start_background', { backgroundColor: ('rgba(28, 28, 30, 1)'), duration: 5, ease: 'power1.inOut' }, 0);
        home_start.to('.start', { backgroundColor: ('black'), duration: 4, ease: 'power1.inOut' }, 10);
      }
      home_start.to('.container_start', {
        borderRadius: ('25px'), transform: ('scale(0.7)'), boxShadow: ('0px 0px 100px -20px rgba(0,0,0,0.4)'), duration: 5, ease: 'power1.inOut',
      }, 0);
      home_start.fromTo('.container_start_browser', { y: -100 }, {
        y: 0, opacity: 1, duration: 5, ease: 'power1.inOut',
      }, 0);
      home_start.to('.container_start', { opacity: 0.2, duration: 5, ease: 'power1.inOut' }, 5);
      home_start.to('.container_start_content', { duration: 4, ease: 'power1.inOut' }, 10);
      home_start.to('.container_lets_get_shit', { opacity: 1, duration: 5, ease: 'power1.inOut' }, 5);
      home_start.to('.container_lets_get_shit', { display: ('block'), ease: 'power1.inOut' }, 4);
      home_start.to('.lets', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 11);
      home_start.to('.get', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 13);
      home_start.to('.shit', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 15);
      home_start.to('.done', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 1.5, duration: 10, ease: 'power2.in' }, 17);
      home_start.to('.container_lets_get_shit', { scale: 3, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_start', { scale: 0.5, duration: 10, ease: 'power2.out' }, 27);
      home_start.to('.container_lets_get_shit', { duration: 15, ease: 'power1.inOut' }, 25);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.to('.container_start', { duration: 15, ease: 'power1.inOut' }, 24);
      home_start.set('.container_phone', { display: ('block') }, 30);
      home_start.to('.transition_to_phone', { opacity: 1, duration: 10, ease: 'power2.out' }, 26);
      home_start.to('.container_start', { display: ('none') }, 31);
      home_start.to('.container_lets_get_shit', { display: ('none') }, 31);
      home_start.set('.container_phone_content_together', {}, 31);
      home_start.fromTo('.iphone_bg_font_container', { opacity: 0, scale: 2.5 }, {
        scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.to('.iphone_bg_font', { text: { value: 'push beyond imagination.', newClass: 'iphone_bg_font_2' }, duration: 8, ease: 'power1.inOut' }, 33);
      home_start.fromTo('.phone_x_box', { y: 500, scale: 2, opacity: 0 }, {
        y: 0, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 31);
      home_start.fromTo('.iphone_2', { opacity: 0 }, {
        x: -170, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.fromTo('.iphone_3', { opacity: 0 }, {
        x: 250, scale: 1, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 38);
      home_start.to('.iphone_bg_font', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.iphone_bg_font_container', { opacity: 0, duration: 8, ease: 'power1.inOut' }, 44);
      home_start.to('.container_phone_content_together', { duration: 8, ease: 'power1.inOut' }, 43);
      home_start.fromTo('.iphone_bg_font_2', { opacity: 0, scale: 0.5 }, {
        opacity: 0.2, scale: 1, duration: 10, ease: 'power1.inOut',
      }, 43);
      home_start.set('.iphone_aufnahme', { opacity: 1, duration: 15, ease: 'power1.inOut' }, 45);
      home_start.set('.tablet_container', { display: ('block') }, 45);
      home_start.to('.iphone_2', {
        x: -300, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.iphone_3', {
        x: 350, opacity: 1, duration: 8, ease: 'power1.inOut',
      }, 57);
      home_start.to('.phone_x_box', { rotate: 90, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.iphone_aufnahme', { opacity: 0, duration: 5, ease: 'power1.inOut' }, 60);
      home_start.to('.phone_x_box', {
        scale: 3, opacity: 1, duration: 5.5, ease: 'power1.inOut',
      }, 65);
      home_start.set('.iphone_aufnahme_2', {
        display: 'block', width: "100vw", height: "100vh", opacity: 0,
      }, 65);
      home_start.set('.iphone_aufnahme_2_player_ui', { display: 'block', opacity: 0 }, 65);
      home_start.to('.iphone_aufnahme_2', { opacity: 1, duration: 2, ease: 'power1.inOut' }, 68);
      home_start.to('.container_phone_content_together', { display: 'none' }, 70);
      home_start.add(
        () => {
          teaser_video.pause();
        }, null, 67,
      );
      home_start.add(
        () => {
          teaser_video.play();
        }, null, 68,
      );
      home_start.to('.iphone_bg_font', { opacity: 0 }, 72);
      home_start.fromTo('.iphone_aufnahme_2_player_ui', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 5, ease: 'power1.inOut',
      }, 72);
      home_start.to('.iphone_bg_font_2', { opacity: 0 }, 72);
      home_start.to('.iphone_reel_teaser', { opacity: 0 }, 72);
      home_start.to('.iphone_aufnahme_2', { duration: 20, ease: 'power1.inOut' }, 72);
      const responsive_1 = window.matchMedia('(min-width:1100px) and (max-width: 1200px)');
      const responsive_2 = window.matchMedia('(min-width:1200px) and (max-width: 1300px)');
      const responsive_3 = window.matchMedia('(min-width:1300px) and (max-width: 1400px)');
      const responsive_4 = window.matchMedia('(min-width:1400px) and (max-width: 1500px)');
      const responsive_5 = window.matchMedia('(min-width:1500px) and (max-width: 1600px)');
      const responsive_6 = window.matchMedia('(min-width:1600px) and (max-width: 1700px)');
      const responsive_7 = window.matchMedia('(min-width:1700px) and (max-width: 1800px)');
      const responsive_8 = window.matchMedia('(min-width:1800px) and (max-width: 1900px)');
      const responsive_9 = window.matchMedia('(min-width:1900px) and (max-width: 2000px)');
      const responsive_10 = window.matchMedia('(min-width:2000px)');
      if (responsive_1.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '30vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_2.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '33vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_3.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_4.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '34vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_5.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '35vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_6.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '36vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_7.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '37vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_8.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '38vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_9.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else if (responsive_10.matches) {
        home_start.to('.iphone_aufnahme_2_evolves_mask_logo_path', {
          scale: 1, translateX: '39vw', translateY: '15vh', duration: 10, ease: 'power1.inOut', onUpdate: redrawClipPath,
        }, 90);
      } else {

      }
      home_start.to('.iphone_aufnahme_2_player_ui', {
        opacity: 0, y: 50, duration: 5, ease: 'power1.inOut',
      }, 90);
      home_start.to('.iphone_x', { display: ('none') }, 90);
      home_start.to('.iphone_2', { display: ('none') }, 90);
      home_start.to('.iphone_3', { display: ('none') }, 90);
      home_start.to('.iphone_aufnahme_2', { duration: 10, ease: 'power1.inOut' }, 100);
      home_start.to('.iphone_aufnahme_2', { y: -50, duration: 10, ease: 'power1.inOut' }, 110);
      home_start.fromTo('.tablet_font', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power1.inOut',
      }, 110);
      home_start.add(
        () => {
          teaser_video.muted = true;
          teaser_video.classList.remove('sound_on');
          gsap_teaser_video_sound_toggle.reverse();
        }, null, 120,
      );

      const digital_devices = gsap.timeline({
        id: 'digital_devices',
        paused: true,
        repeat: 0,
        scrollTrigger: {
          trigger: '.digital_devices',
          start: '300 bottom',
          end: 'bottom top',
          markers: false,
          toggleActions: 'play pause resume pause',
        },
      });

      digital_devices.fromTo('.digital_devices_picture_container_inner', {
        opacity: 0, scale: 0.5, y: 50,
      }, {
        opacity: 1, duration: 1, scale: 1, y: 0, ease: 'power1.inOut',
      }, 0);
      digital_devices.fromTo('.digital_devices_font', { opacity: 0, y: 50 }, {
        opacity: 1, duration: 2, y: 0, ease: 'power1.inOut',
      }, 0);
      digital_devices.fromTo('.digital_devices_font_change', { opacity: 0 }, {
        opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 0.25);
      digital_devices.fromTo('.digital_devices_subfont', { opacity: 0 }, {
        opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 0.5);
      digital_devices.fromTo('.mobile', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1);
      digital_devices.fromTo('.tablets', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1.25);
      digital_devices.fromTo('.smart_tv', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1.5);
      digital_devices.fromTo('.desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 1.75);
      digital_devices.fromTo('.smart_watch', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 2);
      digital_devices.fromTo('.smart_car', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power1.inOut',
      }, 2.25);
      digital_devices.to('.digital_devices_font_change', { text: { value: language4, newClass: '.digital_devices_font_change_2' }, duration: 2, ease: 'power1.inOut' }, 3);

      const gsap_weltkarte = gsap.timeline({
        id: 'weltkarte',
        paused: true,
        repeat: -1,
        scrollTrigger: {
          start: '-500 center',
          end: '800 top',
          markers: false,
          trigger: '.weltkarte',
          toggleActions: 'play pause resume reset',
        },
      });

      if (light_mode_apply.matches) {
        gsap_weltkarte.to('#weltkarte_logo_black', { fill: 'black', duration: 2, ease: 'power3.inOut' }, 27.5);
      } else {
        gsap_weltkarte.to('#weltkarte_logo_black', { fill: 'white', duration: 2, ease: 'power3.inOut' }, 27.5);
      }

      gsap_weltkarte.set('.weltkarte_gsap_1', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_3', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_4', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_gsap_5', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_1', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_1_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_2_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_3', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_3_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_4', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_4_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_5', { opacity: 0 }, 0);
      gsap_weltkarte.set('#dot_5_2', { opacity: 0 }, 0);
      gsap_weltkarte.set('.weltkarte_text', { opacity: 0 }, 0);
      gsap_weltkarte.fromTo('.weltkarte', { opacity: 0 }, {
        opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_weltkarte.fromTo('.weltkarte_gsap_1', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_weltkarte.fromTo('#dot_1', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
      gsap_weltkarte.fromTo('#path_1', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 3);
      gsap_weltkarte.fromTo('#dot_1_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 3);
      gsap_weltkarte.to('#dot_1', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
      gsap_weltkarte.to('#dot_1_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
      gsap_weltkarte.to('#path_1', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 5);
      gsap_weltkarte.to('.weltkarte_gsap_1', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 5);
      gsap_weltkarte.fromTo('.weltkarte_gsap_2', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 7);
      gsap_weltkarte.fromTo('#dot_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 7);
      gsap_weltkarte.fromTo('#path_2', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 8);
      gsap_weltkarte.fromTo('#dot_2_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 8);
      gsap_weltkarte.to('#dot_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
      gsap_weltkarte.to('#dot_2_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
      gsap_weltkarte.to('#path_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 10);
      gsap_weltkarte.to('.weltkarte_gsap_2', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 10);
      gsap_weltkarte.fromTo('.weltkarte_gsap_3', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 12);
      gsap_weltkarte.fromTo('#dot_3', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 12);
      gsap_weltkarte.fromTo('#path_3', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 13);
      gsap_weltkarte.fromTo('#dot_3_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 13);
      gsap_weltkarte.to('#dot_3', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
      gsap_weltkarte.to('#dot_3_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
      gsap_weltkarte.to('#path_3', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 15);
      gsap_weltkarte.to('.weltkarte_gsap_3', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 15);
      gsap_weltkarte.fromTo('.weltkarte_gsap_4', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 17);
      gsap_weltkarte.fromTo('#dot_4', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 17);
      gsap_weltkarte.fromTo('#path_4', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 18);
      gsap_weltkarte.fromTo('#dot_4_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 18);
      gsap_weltkarte.to('#dot_4', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
      gsap_weltkarte.to('#dot_4_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
      gsap_weltkarte.to('#path_4', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 20);
      gsap_weltkarte.to('.weltkarte_gsap_4', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 20);
      gsap_weltkarte.fromTo('.weltkarte_gsap_5', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 2, ease: 'power3.inOut',
      }, 22);
      gsap_weltkarte.fromTo('#dot_5', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 22);
      gsap_weltkarte.fromTo('#path_5', { drawSVG: '100% 80%' }, { opacity: 1, duration: 2, drawSVG: '0%' }, 23);
      gsap_weltkarte.fromTo('#dot_5_2', {}, { opacity: 1, duration: 2, ease: 'power3.inOut' }, 23);
      gsap_weltkarte.to('#dot_5', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
      gsap_weltkarte.to('#dot_5_2', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
      gsap_weltkarte.to('#path_5', { opacity: 0, duration: 1, ease: 'power3.inOut' }, 25);
      gsap_weltkarte.to('.weltkarte_gsap_5', {
        opacity: 0, y: -50, duration: 1, ease: 'power3.inOut',
      }, 25);
      gsap_weltkarte.to('.weltkarte_picture', {
        opacity: 0, duration: 2, ease: 'power3.inOut',
      }, 24.5);
      gsap_weltkarte.to('.weltkarte_dots', {
        opacity: 0, duration: 2, ease: 'power3.inOut',
      }, 24.5);
      gsap_weltkarte.fromTo('#weltkarte_logo_black', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 24.5);
      gsap_weltkarte.fromTo('.logo_path_1', { drawSVG: '0%' }, { drawSVG: '100%', duration: 5, ease: 'power3.inOut' }, 24.5);
      gsap_weltkarte.to('#weltkarte_logo_black', {
        y: -150, scale: 0.5, duration: 3, ease: 'power3.inOut',
      }, 28);
      gsap_weltkarte.fromTo('.weltkarte_text', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 28);
      gsap_weltkarte.fromTo('.weltkarte_subhead', { opacity: 0, y: -50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 30);
      gsap_weltkarte.to('.weltkarte', {
        scale: 1, opacity: 0, duration: 1, ease: 'power3.inOut',
      }, 37);

      const gsap_talents_entry = gsap.timeline({
        id: 'talents_entry',
        paused: true,
        repeat: 0,
        scrollTrigger: {
          start: '-30% center',
          end: '0 top',
          markers: false,
          trigger: '.philosophy',
        },
      });

      gsap_talents_entry.fromTo('.philosophy_row_left_heading', { y: -50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_talents_entry.fromTo('.philosophy_row_right_heading', { opacity: 0, x: 300 }, {
        x: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_talents_entry.fromTo('.philosophy_row_right_text', { opacity: 0, x: 300 }, {
        x: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);

      const gsap_talents_guys = gsap.timeline({
        id: 'talents_guys',
        paused: true,
        repeat: 0,
        scrollTrigger: {
          start: '-500 center',
          end: '1000 top',
          markers: false,
          trigger: '.talents',
        },
      });

      gsap_talents_guys.fromTo('.one_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0);
      gsap_talents_guys.fromTo('.two_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0.25);
      gsap_talents_guys.fromTo('.three_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0.5);
      gsap_talents_guys.fromTo('.four_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 0.75);
      gsap_talents_guys.fromTo('.five_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 1);
      gsap_talents_guys.fromTo('.six_talent', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.5, ease: 'power3.inOut',
      }, 1.25);
      gsap_talents_guys.fromTo('.founders_heading', { y: 100 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_talents_guys.fromTo('.founders_text', { y: 100 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_talents_guys.fromTo('.steve', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 2);

      const scrolling_text = gsap.timeline({
        scrollTrigger: {
          start: '-500 center',
          end: '350 top',
          markers: false,
          trigger: '.scrolling_text',
          scrub: 1,
        },
      });

      scrolling_text.fromTo('.scrolling_text', { opacity: 1, x: 1000 }, { x: -1500, opacity: 1, duration: 15 }, 0);

      const gsap_case_1 = gsap.timeline({
        id: 'case_1',
        scrollTrigger: {
          start: '0 top',
          end: '9500 top',
          markers: false,
          trigger: '.case_studies',
          pin: true,
          pinType: 'transform',
          pinReparent: true,
          scrub: 2,
        },
      });

      gsap_case_1.to('.scrolling_text_container', {
        y: -200, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 10);
      gsap_case_1.fromTo('.case_studies_projects_item_first', { scale: 0.5, y: 600, opacity: 0 }, {
        scale: 1, y: 0, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 0);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 12);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 12);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 13);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_first', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_first', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.to('.case_studies_projects_item_image_first_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 25);
      gsap_case_1.to('.case_studies_projects_item_image_first_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 26);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 25);
      gsap_case_1.fromTo('.case_studies_background_evolves_first', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 30);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 30);
      gsap_case_1.fromTo('.case_studies_projects_item_image_first_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_description_first', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_first', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_first', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 35);
      gsap_case_1.to('.case_studies_projects_item_first', { duration: 40, ease: 'power3.inOut' }, 40);

      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.75, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 80);
      gsap_case_1.to('.case_studies_projects_wrapper_second', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 80);
      gsap_case_1.fromTo('.case_studies_projects_item_second', {
        display: 'block', x: '100%', scale: 0.8,
      }, {
        x: '0%', scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 80);
      gsap_case_1.fromTo('.case_studies_project_item_background_second', { opacity: 0.3 }, { opacity: 0.9, duration: 10, ease: 'power3.inOut' }, 80);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 92);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 92);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 93);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_second', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_second', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.to('.case_studies_projects_item_image_second_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 105);
      gsap_case_1.to('.case_studies_projects_item_image_second_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 106);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 105);
      gsap_case_1.fromTo('.case_studies_background_evolves_second', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 110);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 110);
      gsap_case_1.fromTo('.case_studies_projects_item_image_second_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_description_second', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_second', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_second', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 115);
      gsap_case_1.to('.case_studies_projects_item_second', { duration: 40, ease: 'power3.inOut' }, 120);

      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.5, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 160);
      gsap_case_1.to('.case_studies_projects_item_second', {
        scale: 0.75, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 160);
      gsap_case_1.to('.case_studies_projects_wrapper_third', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 160);
      gsap_case_1.fromTo('.case_studies_projects_item_third', {
        display: 'block', x: '100%', scale: 0.8,
      }, {
        x: '0%', scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 160);
      gsap_case_1.fromTo('.case_studies_project_item_background_third', { opacity: 0.3 }, { opacity: 0.9, duration: 10, ease: 'power3.inOut' }, 160);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 172);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 172);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 173);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_third', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_third', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.to('.case_studies_projects_item_image_third_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 185);
      gsap_case_1.to('.case_studies_projects_item_image_third_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 186);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 185);
      gsap_case_1.fromTo('.case_studies_background_evolves_third', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 190);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 190);
      gsap_case_1.fromTo('.case_studies_projects_item_image_third_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_description_third', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_third', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_third', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 195);
      gsap_case_1.to('.case_studies_projects_item_third', { duration: 40, ease: 'power3.inOut' }, 200);

      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.25, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);
      gsap_case_1.to('.case_studies_projects_item_second', {
        scale: 0.5, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);
      gsap_case_1.to('.case_studies_projects_item_third', {
        scale: 0.75, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);

      gsap_case_1.to('.case_studies_projects_wrapper_fourth', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 240);
      gsap_case_1.fromTo('.case_studies_projects_item_fourth', {
        display: 'block', x: '100%', scale: 0.8,
      }, {
        x: '0%', scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 240);
      gsap_case_1.fromTo('.case_studies_project_item_background_fourth', { opacity: 0.3 }, { opacity: 0.9, duration: 10, ease: 'power3.inOut' }, 240);
      gsap_case_1.fromTo('.evolves_logo_black_2', { drawSVG: '0%' }, { drawSVG: '100%', duration: 10, ease: 'power3.inOut' }, 252);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_one', { x: -200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 252);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_one_second', { x: 200, scale: 0.5, y: 800 }, {
        x: 0, scale: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 253);
      gsap_case_1.fromTo('.case_studies_projects_item_logo_fourth', { scale: 0.5 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_categories_fourth', { y: -20 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.to('.case_studies_projects_item_image_fourth_one', {
        x: 200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 265);
      gsap_case_1.to('.case_studies_projects_item_image_fourth_one_second', {
        x: -200, scale: 1.5, y: -700, opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 266);
      gsap_case_1.to('.evolves_logo_black_2', { drawSVG: '0%', duration: 10, ease: 'power3.inOut' }, 265);
      gsap_case_1.fromTo('.case_studies_background_evolves_fourth', { opacity: 0, scale: 0.5 }, {
        scale: 1, opacity: 0.15, duration: 10, ease: 'power3.inOut',
      }, 270);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_two', { x: 100, scale: 0.75 }, {
        opacity: 1, x: 0, scale: 1, duration: 10, ease: 'power3.inOut',
      }, 270);
      gsap_case_1.fromTo('.case_studies_projects_item_image_fourth_two_second', { transform: 'rotate(0deg)' }, {
        x: -73, transform: 'rotate(-17deg)', opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_description_fourth', { y: -50, opacity: 0 }, {
        opacity: 1, y: 0, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_fourth', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.fromTo('.case_studies_projects_item_cta_icon_fourth', { x: -25, opacity: 0 }, {
        opacity: 1, x: 0, duration: 10, ease: 'power3.inOut',
      }, 275);
      gsap_case_1.to('.case_studies_projects_item_fourth', { duration: 40, ease: 'power3.inOut' }, 280);

      gsap_case_1.to('.case_studies_projects_item_fourth', {
        opacity: 0, scale: 0.75, duration: 10, ease: 'power3.inOut',
      }, 310);
      gsap_case_1.to('.case_studies_projects_item_third', {
        opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 312);
      gsap_case_1.to('.case_studies_projects_item_second', {
        opacity: 0, duration: 10, ease: 'power3.inOut',
      }, 314);
      gsap_case_1.to('.case_studies_projects_item_first', {
        scale: 0.5, y: '-27%', x: '-26%', duration: 10, ease: 'power3.inOut',
      }, 317);
      gsap_case_1.set('.case_studies_projects_item_second', {
        opacity: 0, y: '-27%', x: '26%', scale: 0.5, duration: 1, ease: 'power3.inOut',
      }, 324);
      gsap_case_1.set('.case_studies_projects_item_third', {
        opacity: 0, y: '27%', x: '-26%', scale: 0.5, duration: 1, ease: 'power3.inOut',
      }, 324);
      gsap_case_1.set('.case_studies_projects_item_fourth', {
        opacity: 0, y: '27%', x: '26%', scale: 0.5, duration: 1, ease: 'power3.inOut',
      }, 324);

      gsap_case_1.to('.case_studies_projects_item_second', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 324);
      gsap_case_1.to('.case_studies_projects_item_third', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 328);
      gsap_case_1.to('.case_studies_projects_item_fourth', { opacity: 1, duration: 10, ease: 'power3.inOut' }, 332);

      const gsap_power_digital = gsap.timeline({
        id: 'power_digital',
        scrollTrigger: {
          start: '0 top',
          end: '2000 top',
          markers: false,
          trigger: '.services',
          scrub: 1,
          pin: true,
          pinType: 'transform',
          pinReparent: true,
        },
      });

      gsap_power_digital.fromTo('.first_container_inner_main_subhead', { y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 2);
      gsap_power_digital.fromTo('.first_container_inner_main_text', { y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_power_digital.fromTo('.first_container_inner_second_text', { y: 25 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);
      gsap_power_digital.to('.first_container_inner_main_text', { opacity: 0, duration: 10, ease: 'power3.inOut' }, 10);
      gsap_power_digital.to('.first_container_inner_second_text', { opacity: 0, duration: 10, ease: 'power3.inOut' }, 10);
      gsap_power_digital.to('.first_container_inner_main_subhead', {
        text: { value: 'with evolves.', delimiter: ' ' }, y: 250, duration: 10, ease: 'power3.inOut',
      }, 12);
      gsap_power_digital.fromTo('.first_container_inner_image_container', { opacity: 0 }, {
        opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 12);
      gsap_power_digital.to('.first_container_inner_image_container', { duration: 10 }, 17);

      const gsap_paper_plane = gsap.timeline({
        id: 'paper_plane_gsap',
        scrollTrigger: {
          start: '1600 center',
          end: '3000 bottom',
          markers: false,
          trigger: '.second_container',
          scrub: 2,
        },
      });
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .icon_second_container', { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .heading_small', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0.5);
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1);
      gsap_paper_plane.fromTo('.second_container_inner_left_desktop .subheading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1.5);
      gsap_paper_plane.fromTo('.second_container_inner_right_desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);

      const gsap_paper_plane_2 = gsap.timeline({
        id: 'paper_plane_gsap_2',
        scrollTrigger: {
          start: '1600 center',
          end: '3000 bottom',
          markers: false,
          trigger: '.third_container',
          scrub: 2,
        },
      });

      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .icon_third_container', { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .heading_small', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0.5);
      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1);
      gsap_paper_plane_2.fromTo('.third_container_inner_right_desktop .subheading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1.5);
      gsap_paper_plane_2.fromTo('.third_container_inner_left_desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);

      const gsap_paper_plane_3 = gsap.timeline({
        id: 'paper_plane_gsap_3',
        scrollTrigger: {
          start: '1600 center',
          end: '3000 bottom',
          markers: false,
          trigger: '.fourth_container',
          scrub: 2,
        },
      });

      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .icon_fourth_container', { scale: 0.5, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .heading_small', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 0.5);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_left_desktop .subheading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 1.5);
      gsap_paper_plane_3.fromTo('.fourth_container_inner_right_desktop', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 3);

      const gsap_laptop_pre_animation = gsap.timeline({
        id: 'laptop_anim',
        scrollTrigger: {
          start: '0 top',
          end: '6500 bottom',
          pin: true,
          pinType: 'transform',
          pinReparent: true,
          markers: false,
          trigger: '.laptop_anim',
          scrub: 2,
        },
      });

      gsap_laptop_pre_animation.to('.services', { duration: 20, ease: 'power3.inOut' }, 0);
      gsap_laptop_pre_animation.fromTo('.lottie_heart', { y: 100 }, {
        opacity: 1, y: 0, duration: 20, ease: 'power3.inOut',
      }, 7);
      gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_font', { y: 100 }, {
        opacity: 1, y: 0, duration: 20, ease: 'power3.inOut',
      }, 10);
      gsap_laptop_pre_animation.add(
        () => {
          const heart_lottie = document.getElementById('heart_lottie');
          heart_lottie.play();
        }, null, 15,
      );
      gsap_laptop_pre_animation.to('.lottie_heart', {
        y: -100, opacity: 0, duration: 20, ease: 'power3.inOut',
      }, 45);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_font', {
        y: -100, opacity: 0, duration: 20, ease: 'power3.inOut',
      }, 48);
      gsap_laptop_pre_animation.fromTo('#laptop_anim_inner_canvas', { y: 50 }, {
        y: -50, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 60);
      gsap_laptop_pre_animation.to(laptop, {
        duration: 60, frame: frameCount - 1, snap: 'frame', onUpdate: render,
      }, 63);
      gsap_laptop_pre_animation.to('#laptop_anim_inner_canvas', { duration: 40, ease: 'power3.inOut' }, 110);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_second', {
        opacity: 1, duration: 40, ease: 'power3.inOut',
      }, 110);
      gsap_laptop_pre_animation.fromTo('#laptop_anim_upper_inner_second_logo', { y: 100 }, {
        y: 0, duration: 40, ease: 'power3.inOut',
      }, 110);
      gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_second_logo_svg', { drawSVG: '0%' }, { drawSVG: '100%', duration: 40, ease: 'power3.inOut' }, 120);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_second', { y: -300, duration: 40, ease: 'power3.inOut' }, 160);
      gsap_laptop_pre_animation.to('.laptop_anim_inner', { y: -300, duration: 40, ease: 'power3.inOut' }, 160);
      gsap_laptop_pre_animation.to('.laptop_anim_upper_inner_second', {
        opacity: 0, duration: 40, ease: 'power3.inOut',
      }, 160);
      gsap_laptop_pre_animation.fromTo('.laptop_anim_upper_inner_third_font', { y: 150, opacity: 0 }, {
        y: 0, opacity: 1, duration: 40, ease: 'power3.inOut',
      }, 165);

      const gsap_laptop_pre_animation_second = gsap.timeline({
        id: 'laptop_anim_second',
        scrollTrigger: {
          start: '5000 center',
          end: '6800 bottom',
          markers: false,
          trigger: '.laptop_anim_upper_inner_third',
          scrub: 2,
        },
      });

      gsap_laptop_pre_animation_second.fromTo('.laptop_anim_upper_inner_third_subhead', { opacity: 0, y: 100 }, {
        y: 0, opacity: 1, duration: 40, ease: 'power3.inOut',
      }, 0);
      gsap_laptop_pre_animation_second.to('body', { duration: 40, ease: 'power3.inOut' }, 30);
      gsap_laptop_pre_animation_second.to('.laptop_anim_inner', { duration: 20, ease: 'power3.inOut' }, 20);
      gsap_laptop_pre_animation_second.to('.laptop_anim_upper_inner_third_subhead', { duration: 40, ease: 'power3.inOut' }, 30);

      const gsap_aspects_second_l = gsap.timeline({
        id: 'aspects_second_l',
        scrollTrigger: {
          start: '0 center',
          end: '1000 bottom',
          markers: false,
          trigger: '.aspects_inner_container_second_l',
          scrub: 1,
        },
      });

      gsap_aspects_second_l.to('.aspects_logo', { morphSVG: '.aspects_lock_icon', duration: 20, ease: 'power3.inOut' }, 0);
      gsap_aspects_second_l.to('.protected_animation', { duration: 40, text: { value: language3 }, ease: 'power3.inOut' }, 5);
      gsap_aspects_second_l.fromTo('.protected_animation_2', { opacity: 0 }, {
        opacity: 1, duration: 10, ease: 'power3.inOut',
      }, 30);

      const gsap_aspects_first = gsap.timeline({
        id: 'aspects_first',
        scrollTrigger: {
          start: '-300 center',
          end: '850 bottom',
          markers: false,
          trigger: '.aspects_inner_container_first',
          scrub: 1,
        },
      });

      if (light_mode_apply.matches) {
        gsap_aspects_first.fromTo('.aspects_inner_container_first_box_background', { opacity: 0 }, {
          opacity: 1, duration: 40, ease: 'power3.inOut',
        }, 0);
      } else {
        gsap_aspects_first.fromTo('.aspects_inner_container_first_box_background', { opacity: 0 }, {
          opacity: 0.4, duration: 40, ease: 'power3.inOut',
        }, 0);
      }

      gsap_aspects_first.fromTo('.aspects_inner_container_first_box_heading', { scale: 0.8, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 20);
      gsap_aspects_first.fromTo('.aspects_inner_container_first_box_subheading', { y: 100, opacity: 0 }, {
        y: 0, opacity: 1, duration: 20, ease: 'power3.inOut',
      }, 25);

      const gsap_day_night = gsap.timeline({
        id: 'day_night_element',
        paused: true,
        scrollTrigger: {
          start: '150 center',
          end: 'bottom bottom',
          markers: false,
          trigger: '.aspects_inner_container_fifth_r',
        },
      });

      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_main', { opacity: 0, duration: 2, ease: 'power3.inOut' }, 0);
      gsap_day_night.fromTo('.aspects_inner_container_fifth_r_box_image_day', { scale: 0.75, opacity: 0 }, {
        opacity: 1, scale: 1, duration: 3, ease: 'power3.inOut',
      }, 0);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_image_day', { duration: 2, ease: 'power3.inOut' }, 2);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_day', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);

      gsap_day_night.fromTo('.day_mode_icon', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_day_night.fromTo('.day_mode_heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2.5);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_day', {
        opacity: 0, duration: 2.5, ease: 'power3.inOut',
      }, 4);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_background_main', { backgroundColor: '#000000', duration: 2.5, ease: 'power3.inOut' }, 4);
      gsap_day_night.set('.aspects_inner_container_fifth_r_box_night', { display: 'block', ease: 'power3.inOut' }, 4);
      gsap_day_night.fromTo('.aspects_inner_container_fifth_r_box_image_night', { scale: 0.75, opacity: 0 }, {
        opacity: 1, scale: 1, duration: 2.5, ease: 'power3.inOut',
      }, 4);
      gsap_day_night.set('.aspects_inner_container_fifth_r_box_day', { display: 'none', ease: 'power3.inOut' }, 6.5);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_image_night', { duration: 2, ease: 'power3.inOut' }, 6.5);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_night', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 6.5);
      gsap_day_night.fromTo('.night_mode_icon', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 6.5);
      gsap_day_night.fromTo('.night_mode_heading', { opacity: 0, y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 7);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_night', {
        opacity: 0, duration: 2.5, ease: 'power3.inOut',
      }, 10);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_background_main', { backgroundColor: 'rgba(28, 28, 30, 1)', duration: 2.5, ease: 'power3.inOut' }, 10);
      gsap_day_night.to('.aspects_inner_container_fifth_r_box_content_main', { opacity: 1, duration: 2.5, ease: 'power3.inOut' }, 11);

      window.repeat_day_night_animation = function repeat_day_night_animation() {
        gsap_day_night.restart();
      };

      const gsap_sticker = gsap.timeline({
        id: 'sticker_element',
        paused: true,
        scrollTrigger: {
          start: '150 center',
          end: 'bottom bottom',
          markers: false,
          trigger: '.aspects_inner_container_second_r',
        },
      });

      gsap_sticker.fromTo('.aspects_inner_container_second_r_box_heading', { y: 50 }, {
        y: 0, opacity: 1, duration: 3, ease: 'power3.inOut',
      }, 0);
      gsap_sticker.to('.aspects_inner_container_second_r_box_link', { opacity: 1, duration: 3, ease: 'power3.inOut' }, 2);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_one', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_second', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 0.5);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_third', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 1);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_fourth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 1.5);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_fifth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2);
      gsap_sticker.to('.aspects_inner_container_second_r_box_stickers_sixth', { opacity: 1, duration: 2, ease: 'power3.inOut' }, 2.5);

      const gsap_react = gsap.timeline({
        id: 'react_speed',
        paused: true,
        scrollTrigger: {
          start: '150 center',
          end: 'bottom bottom',
          markers: false,
          trigger: '.aspects_inner_container_fifth_l',
        },
      });

      gsap_react.fromTo('.aspects_inner_container_fifth_l_box_content h3', { y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 0);
      gsap_react.fromTo('.react_logo_container', { }, {
        opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 1);
      gsap_react.fromTo('.fifth_p1', { y: 50 }, {
        y: 0, opacity: 1, duration: 2, ease: 'power3.inOut',
      }, 2);
      gsap_react.to('.aspects_inner_container_fifth_l_box_background', { filter: 'brightness(.6)', duration: 2, ease: 'power3.inOut' }, 2);

      const gsap_footer_anim = gsap.timeline({
        id: 'footer_anim',
        paused: true,
        scrollTrigger: {
          start: '80% center',
          end: '130% bottom',
          markers: false,
          trigger: '.aspects',
          scrub: 1,
        },
      });

      gsap_footer_anim.to('.aspects', {
        scale: 0.9, duration: 10, opacity: 0.2, ease: 'power3.inOut',
      }, 0);
    });

    jQuery(document).ready(($) => {
      const bArray = [];
      const sArray = [4, 6, 8, 10];

      for (let i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
      }

      function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      setInterval(() => {
        const size = randomValue(sArray);
        $('.bubbles').append(`<div class="individual-bubble" style="left: ${randomValue(bArray)}px; width: ${size}px; height:${size}px;"></div>`);

        $('.individual-bubble').animate({
          bottom: '100%',
          opacity: '-=0.7',
        }, 3000, function () {
          $(this).remove();
        });
      }, 350);
    });
  }
  //
}
// TABLET/LAPTOP/DESKTOP-1150PX > END
