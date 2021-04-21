"use strict";jQuery.fn.exists=function(){return $(this).length};var projectFunc={showBlogPopup:function(e){var t=$(e).find(".blog__popup"),o=$(e).find(".blog__txt"),a=gsap.timeline({paused:!0});a.to(t,{x:0,xPercent:0,duration:1,ease:"power2.out"}).to(o,{autoAlpha:1,y:0,ease:"power2.out",delay:-.2}),a.play()},hideBlogPopup:function(e){var t=$(e).find(".blog__popup"),o=$(e).find(".blog__txt"),a=gsap.timeline({paused:!0});a.to(t,{xPercent:-100,duration:1,ease:"power2.out"}).to(o,{autoAlpha:0,y:-20,ease:"power2.out"}),a.play()},hiddenTabs:function(e){if($(".include--app").exists())try{var t=document.querySelector(".include--app"),o=t.querySelectorAll(".include__item"),a=t.querySelectorAll(".include__btn");o.forEach(function(t,o){o!=e&&(t.classList.remove("mf-show"),a[o].classList.remove("mf-active"))})}catch(e){console.log(e)}},showTabs:function(e){if($(".include--app").exists())try{document.querySelector(".include--app").querySelectorAll(".include__item")[e].classList.add("mf-show")}catch(e){console.log(e)}},getScrollbarWidth:function(){var e,t=projectFunc.getScrollbarWidth.width;return void 0===t&&((e=document.createElement("div")).innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',e=e.firstChild,document.body.appendChild(e),t=projectFunc.getScrollbarWidth.width=e.offsetWidth-e.clientWidth,document.body.removeChild(e)),t}};window.addEventListener("load",function(){document.querySelector("html").style.setProperty("--wScroll",projectFunc.getScrollbarWidth()+"px")});var setTabs=function(){if($(".include__btn").exists())try{var e=document.querySelector(".include--app").querySelectorAll(".include__btn");projectFunc.hiddenTabs(0),e.forEach(function(e,t){e.addEventListener("click",function(){this.classList.add("mf-active"),projectFunc.showTabs(t),projectFunc.hiddenTabs(t)})})}catch(e){console.log(e)}},setAccordion=function(){if($(".js-ac-contacts").exists())try{var e=document.querySelectorAll(".contacts__panel");window.matchMedia("(min-width: 620px)").matches?(console.log(!0),e.forEach(function(e,t){var o=e.nextElementSibling;o.style.maxHeight?o.style.maxHeight=null:(o.style.maxHeight=o.scrollHeight+"px",console.log("accordion"))})):e.forEach(function(e,t){var o=e.nextElementSibling;o.style.maxHeight?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight=null});for(var t=0;t<e.length;t++)e[t].onclick=function(){this.classList.toggle("is-open"),$(this).find(".contacts__pic").toggleClass("contacts__pic--active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}}catch(e){console.log(e)}if($(".accordion__panel").exists()){var o=document.getElementsByClassName("accordion__panel");for(t=0;t<o.length;t++)o[t].onclick=function(){this.classList.toggle("is-open"),$(this).find(".accordion__pic").toggleClass("accordion__pic--active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}}setTimeout(function(){$(".contacts__grid").css("opacity","1")},500)};if($(".blog__item").exists()&&(gsap.to(".blog__item",{autoAlpha:1,stagger:1,duration:1}),$(".blog__item").each(function(){$(this).on("mouseenter",function(){projectFunc.showBlogPopup(this)}),$(this).on("mouseleave",function(){projectFunc.hideBlogPopup(this)})})),$(".header__inner").exists)try{var $window=$(window),$target=$(".header__inner"),$h=$target.offset().top;$window.on("scroll",function(){(window.pageYOffset||document.documentElement.scrollTop)>$h?$target.addClass("mf-fixed"):$target.removeClass("mf-fixed")})}catch(e){console.log(e)}checkPage();var setSlider=function(){if($(".js-rate").exists()){var e=new Slider(!0,".js-rate",3,40,1,!1,!0,!1,"",!1,!1);e.createSlider(),$(window).on("resize load",function(){$(this).width()<=1300&&(e.updateSlider("space",20),e.updateSlider("view",2),e.updateSlider("ratio",!0)),$(this).width()<=1024&&e.updateSlider("space",20),$(this).width()<=800&&e.updateSlider("view",1)})}if($(".js-info-slider").exists()){var t=new Slider(!0,".js-info-slider",1,10,1,!0,!0,!0,"fade",!0);if(t.createSlider(),$(".js-graph-slider").exists()){var o=new Slider(!0,".js-graph-slider",1,10,1,!0,!1,!0,"fade",!1);o.createSlider(),o.slider.controller.control=t.slider,t.slider.controller.control=o.slider}}if($(".js-slider-partners").exists()){var a=new Slider(!1,".js-slider-partners",4,82,8,!1,!1,!1);a.createSlider(),window.matchMedia("(min-width: 1300px)").matches&&(a.updateSlider("space",50),console.log("1300")),window.matchMedia("(max-width: 1024px)").matches&&window.matchMedia("(min-width: 501px)").matches&&(a.updateSlider("space",30),a.updateSlider("view",3),console.log("1024")),window.matchMedia("(max-width: 500px)").matches&&window.matchMedia("(min-width: 319px)").matches&&(a.updateSlider("space",20),a.updateSlider("view",2))}if($(".works").exists()){var i=new Slider(!0,".js-slider",2,40,1,!0,!0,!0);i.createSlider(),window.matchMedia("(max-width: 1300px)").matches&&window.matchMedia("(min-width: 1025px)").matches&&(i.updateSlider("space",30),console.log("1300")),window.matchMedia("(max-width: 1024px)").matches&&window.matchMedia("(min-width: 621px)").matches&&(i.updateSlider("space",20),console.log("1024")),window.matchMedia("(max-width: 620px)").matches&&window.matchMedia("(min-width: 321px)").matches?i.updateSlider("view",1):i.updateSlider("view",2),$(window).on("resize load",function(){$(this).width()<=1300&&i.updateSlider("space",30),$(this).width()<=1024&&i.updateSlider("space",20),$(this).width()<=620?i.updateSlider("view",1):i.updateSlider("view",2)})}if($(".case__slider--1").exists())try{new Swiper(".case__slider--1",{slidesPerView:"auto",spaceBetween:30,breakpoints:{1200:{spaceBetween:65}}})}catch(e){console.log(e)}if($(".case__slider--2").exists())try{new Swiper(".case__slider--2",{slidesPerView:"auto",spaceBetween:30,breakpoints:{1200:{spaceBetween:65}}})}catch(e){console.log(e)}if($(".case__slider--3").exists())try{new Swiper(".case__slider--3",{slidesPerView:"auto",spaceBetween:30,breakpoints:{1200:{spaceBetween:65}}})}catch(e){console.log(e)}};function init(){var e=document.querySelector(".loader");gsap.set(e,{scaleX:0,rotation:10,xPercent:-5,yPercent:-50,transformOrigin:"left center",autoAlpha:1}),initContent()}function checkPage(){["/portfolio"].filter(function(e){console.log(window.location.pathname.indexOf(e)),0===window.location.pathname.indexOf(e)?$(".header").addClass("mf-transparent"):$(".header").removeClass("mf-transparent")}),["/","/index.html"].filter(function(e){0===e.indexOf(window.location.pathname)?$(".header").removeClass("mf-style"):$(".header").addClass("mf-style")})}animateBildboard(),window.addEventListener("load",function(){init()});var setCursor=function(){var e=$(".cursor"),t=$(".cursor-follower"),o=0,a=0,i=0,r=0;TweenMax.to({},.016,{repeat:-1,onRepeat:function(){o+=(i-o)/9,a+=(r-a)/9,TweenMax.set(t,{css:{left:o-12,top:a-12}}),TweenMax.set(e,{css:{left:i,top:r}}),document.body.style.setProperty("--x",i+"px"),document.body.style.setProperty("--y",r+"px")}}),$(document).on("mousemove",function(e){i=e.clientX,r=e.clientY}),$(".link").on("mouseenter",function(){e.addClass("active"),t.addClass("active")}),$(".link").on("mouseleave",function(){e.removeClass("active"),t.removeClass("active")})};function animateBildboard(){var e=new TimelineMax({});if(gsap.set([".bildboard__video",".bildboard__text",".bildboard__title",".bildboard__quote",".header__container"],{autoAlpha:0}),gsap.set(".bildboard__text",{y:-20}),gsap.set(".bildboard__title",{x:-70}),gsap.set(".bildboard__quote",{y:-20}),$(".bildboard__video").exists()){var t=document.querySelector(".bildboard__video");t.currentTime=0,t.load()}e.set([".bildboard__video",".bildboard__text",".bildboard__title",".bildboard__quote",".header__container"],{autoAlpha:0}).set(".bildboard__text",{y:-20}).set(".bildboard__title",{x:-70}).set(".bildboard__quote",{y:-20}).to(".bildboard__video",{autoAlpha:1,duration:4,ease:"power2.out"},"+=1").to(".header__container",{autoAlpha:1,duration:1,ease:"power2.out"},"-=3").to(".bildboard__container",{autoAlpha:1,duration:1,ease:"power2.out"},"-=3").to(".bildboard__text",{autoAlpha:1,y:0,ease:"power2.out"},"-=2.5").to(".bildboard__title",{autoAlpha:1,x:0,ease:"power2.out",duration:1},"-=2").to(".bildboard__quote",{autoAlpha:1,y:0,ease:"power2.out",duration:1},"-=1")}var setWidthBtn=function(){$(".btn--special").exists()&&document.querySelectorAll(".btn--special").forEach(function(e,t){var o=$(e).find(".btn__text").innerWidth();console.log(o),$(e).css({width:o+39+"px"})})};function setGallery(){$("#certificate").exists()&&$("#certificate").lightGallery()}var showPlace=function(){gsap.set(".place__bg",{yPercent:0,transformOrigin:"left center"});gsap.timeline({paused:!0});var e=gsap.timeline({paused:!0});gsap.set(".place__title",{yPercent:-40,autoAlpha:0}),gsap.set(".place__text",{autoAlpha:0}),e.to(".place__title",{yPercent:0,autoAlpha:1,duration:1}).to(".place__text",{autoAlpha:1}),ScrollTrigger.create({trigger:".place",start:"top-=150% top",end:"bottom-=80",animation:e})},showService=function(){gsap.set(".services__item",{xPercent:-5,autoAlpha:0});var e=gsap.timeline({paused:!0});e.to(".services__item",{xPercent:0,autoAlpha:1,stagger:.3,duration:.5}),ScrollTrigger.create({trigger:".services__items",start:"top-=230% top",end:"bottom",animation:e});var t=function(e,t){var o=$(e).find(".services__content"),a=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.5}}),i=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.5}});a.to(e,{backgroundColor:"#00A4AD",color:"white",ease:Back.easeOut.config(1.7)}).to(o,{color:"white",ease:Back.easeOut.config(1.7)},"-=0.5"),i.to(e,{backgroundColor:"transparent",color:"white",ease:Back.easeOut.config(1.7)}).to(o,{color:"#676767",ease:Back.easeOut.config(1.7)},"-=0.5"),t?(a.play(),i.reverse()):(console.log(1),i.play(),a.reverse())};gsap.utils.toArray(".services__item").forEach(function(e){e.addEventListener("mouseenter",function(){t(this,!0)}),e.addEventListener("mouseleave",function(){t(this,!1)})})},showCallForm=function(){gsap.set(".call__grid",{xPercent:-100,autoAlpha:0,duration:1});var e=gsap.timeline({paused:!0});e.to(".call__grid",{xPercent:0,autoAlpha:1,duration:2,ease:Back.easeOut.config(1.7)}),ScrollTrigger.create({trigger:".call",start:"top-=80% top",end:"bottom",animation:e})},setMap=function(e){if($("#map").exists()){ymaps.ready(function(){var t=new ymaps.Map("map",{center:[53.377146,58.985573],zoom:17,controls:[]}),o=new ymaps.Placemark(t.getCenter(),{},{iconLayout:"default#image",iconImageHref:"/img/icon/marker.svg",iconImageSize:[48,64],iconImageOffset:[-24,-64],openBalloonOnClick:!1,hasHint:!1,hasBalloon:!1,cursor:"INHERIT"});t.geoObjects.add(o),t.behaviors.disable("scrollZoom"),t.behaviors.disable("drag"),e&&t.container.fitToViewport()})}};if($(window).on("resize load",function(){$(this).width()<=500&&$(".seo-result__items").exists()&&$(function(){var e=new Object;e.axis="x",e.theme="my-theme",e.advanced={autoExpandHorizontalScroll:!0},e.scrollButtons={scrollType:"pixels",scrollAmount:300},e.mouseWheel={invert:!0}})}),$(".burger").exists())try{var header=document.querySelector(".header"),burgerBtn=header.querySelector(".burger"),panelEl=header.querySelector(".js-nav"),panelHideTl=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6}}),panelShowTl=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6}});panelHideTl.to(panelEl,{autoAlpha:0,xPercent:100,ease:Cubic.easeOut}),panelShowTl.fromTo(panelEl,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0,ease:Cubic.easeOut}),burgerBtn.addEventListener("click",function(){this.classList.toggle("opened"),this.setAttribute("aria-expanded",this.classList.contains("opened")),this.classList.contains("opened")?(panelHideTl.reverse(),panelShowTl.play(),lockedDOM(!0)):(panelShowTl.reverse(),panelHideTl.play(),lockedDOM(!1))}),$(window).on("resize load",function(){changeHeightPage(),$(this).width()>1024&&burgerBtn.classList.contains("opened")&&(burgerBtn.classList.remove("opened"),hideMenu(".js-dropMenu"),panelShowTl.reverse(),panelHideTl.play())})}catch(e){console.log(e)}var getHeight=function(e){return $(e).outerHeight()},showMenu=function(e,t){new TimelineMax({defaults:{duration:.3}}).to(e,{height:t,ease:"power1.out"}).to(e,{autoAlpha:1},"-=0.1")},hideMenu=function(e){new TimelineMax({defaults:{duration:.3}}).to(e,{autoAlpha:0}).to(e,{height:0,ease:"power1.out"},"-=0.1")};if($(".js-list").exists()){var navPanel=document.querySelector(".header__nav--tablet"),btnList=navPanel.querySelector(".js-list");btnList.addEventListener("click",function(e){e.preventDefault(),this.classList.toggle("active"),$(".js-dropMenu").toggle(400)})}if($(".include-menu").exists()){var menu=$(".include-menu__menu"),btn=$(".js-menuBtn");btn.click(function(){$(this).toggleClass("active"),menu.toggleClass("active")})}var lockedDOM=function(e){e?$("html").css("overflow","hidden"):$("html").css("overflow","auto")},stateObject=function(e){formShow(".js-form-request","start"==e)},showOverlay=function(e){if($(".js-overlay").exists()){var t=document.querySelector(".js-overlay"),o=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.6},onStart:lockedDOM,onStartParams:[!0],onComplete:stateObject,onCompleteParams:["start"]}),a=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.3},onStart:stateObject,onStartParams:["end"],onComplete:lockedDOM,onCompleteParams:[!1]});o.to(t,{autoAlpha:1,ease:"power2.out"}),a.to(t,{autoAlpha:0,ease:"power2.out"},"+=0.6"),e?(o.reverse(),o.play()):(a.reverse(),a.play())}},formShow=function(e,t){if(console.log(e),$(e).exists()){var o=document.querySelector(".js-form-request"),a=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.5}}),i=new TimelineMax({reversed:!0,paused:!0,defaults:{duration:.5}});i.to(o,{autoAlpha:0,yPercent:-100,xPercent:-50,ease:"power2.out"}),a.set(o,{yPercent:-100,xPercent:-50}).to(o,{autoAlpha:1,yPercent:-50,ease:"power2.out"}),t?(i.reverse(),a.play()):(a.reverse(),i.play())}};$(".js-overlay").exists()&&$(".js-overlay").on("click",function(){if(showOverlay(!1),$(".request-popup__wrapper").exists())try{$(".request-popup__wrapper").removeClass("active")}catch(e){console.log(e)}}),$(".js-close-form").exists()&&$(".js-close-form").on("click",function(){showOverlay(!1)});var changeHeightPage=function(){var e,t,o;e=document.querySelector(".footer").offsetHeight,t=(o=document.documentElement.clientHeight)-(o-e),$(".b-page").css("padding-bottom",t)};if($("#request").exists())try{$('a[href^="#"]').each(function(){$(this).on("click",function(e){e.preventDefault();var t=$(this).attr("href");return void 0!==t&&""!==t&&$("html").animate({scrollTop:$(t).offset().top-130},{duration:1e3,easing:"linear"}),!1})})}catch(e){console.log(e)}var setPhoneMask=function(){if($(".js-phone-mask").exists())for(var e=document.querySelectorAll(".js-phone-mask"),t=0;t<e.length;t++)$(e[t]).mask("+7(999) 999-99-99")};function checkPacket(){$(".rate__item").exists()&&$(".rate__item").each(function(){$(this).find(".switch").is(":checked")?$(this).find(".rate__right").addClass("rate__right--active"):$(this).find(".rate__right").removeClass("rate__right--active")})}if($(".rate__item .switch").exists())try{$(".rate__item .switch").on("click",function(){checkPacket()})}catch(e){console.log(e)}var checkInput=function(){$('input[type="file"]').change(function(){var e=$(".file .file__label");if(void 0!==this.files)if(0==this.files.length)e.removeClass("withFile").text(e.data("default"));else{var t=this.files[0].name;e.addClass("withFile").text(t)}else{var o=this.value.split("\\");e.addClass("withFile").text(o[o.length-1])}return!1})};function initImageParallax(){gsap.utils.toArray(".with-parallax").forEach(function(e){var t=e.querySelector("picture");gsap.to(t,{yPercent:25,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",scrub:!0}})})}function updateBodyColor(e){document.documentElement.style.setProperty("--bcg-fill-color",e)}function initPinSteps(){if($(".portfolio").exists())try{gsap.utils.toArray(".portfolio__item").forEach(function(e,t){ScrollTrigger.create({trigger:e,start:"top center",end:function(){return"+=".concat(e.clientHeight+Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/10)},onEnter:function(){return updateBodyColor(e.dataset.color)},onEnterBack:function(){return updateBodyColor(e.dataset.color)}})});var e=document.querySelector(".portfolio");ScrollTrigger.create({trigger:e,start:"top center",end:"bottom-=200",onEnter:function(){gsap.utils.toArray(".portfolio__item").length>0&&updateBodyColor(gsap.utils.toArray(".portfolio__item")[0].dataset.color)},onLeave:function(){return updateBodyColor(e.dataset.color)},onLeaveBack:function(){return updateBodyColor(e.dataset.color)},toggleClass:{targets:".portfolio",className:"mf-bg-portfolio"},pinReparent:!0,pinSpacing:!1})}catch(e){console.log(e)}}function initSmoothScrollBar(e){if(window.matchMedia("(max-width:1300px)").matches&&$(".reach__cover").exists())try{Scrollbar.init(document.querySelector("#inner-scrollbar"),{damping:.04,alwaysShowTracks:!1})}catch(e){console.log(e)}if(window.matchMedia("(max-width:1100px)").matches&&window.matchMedia("(min-width:620px)").matches){if($(".progress__cover").exists())try{Scrollbar.init(document.querySelector("#progress-scrollbar"),{damping:.3,alwaysShowTracks:!1})}catch(e){console.log(e)}}else Scrollbar.destroy(document.querySelector("#progress-scrollbar"));var t=Scrollbar.init(document.querySelector("#viewport"),{damping:.04,delegateTo:document});$(".js-form-call").exists()&&$(".js-form-call").on("click",function(e){e.preventDefault(),showOverlay(!0)}),e&&t.setPosition(0,0),$("a").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){e.offset().top;return t.scrollIntoView(document.querySelector("#request"),{offsetBottom:100,alignToTop:!1,onlyScrollIfNeeded:!0}),!1}}}),t.track.xAxis.element.remove(),ScrollTrigger.scrollerProxy("#viewport",{scrollTop:function(e){return t.scrollTop>79?$(".header__inner").addClass("header--scroll"):$(".header__inner").removeClass("header--scroll"),arguments.length&&(t.scrollTop=e),t.scrollTop}}),t.addListener(ScrollTrigger.update),ScrollTrigger.defaults({scroller:"#viewport"})}var moveMainBildboard=function(){gsap.set(".bildboard__video",{yPercent:0});var e=gsap.timeline({paused:!0});e.to(".bildboard__video",{yPercent:50,ease:"none"}),ScrollTrigger.create({trigger:".bildboard",start:"top top",end:"bottom",animation:e,scrub:!0})},setSelect=function(){if($(".call .js-example-basic-single").exists()){var e=$(".call .select");$(".call .js-example-basic-single").select2({minimumResultsForSearch:1/0,dropdownParent:e}).on("select2:open",function(){$(".select2-results__options").niceScroll({scrollspeed:60,mousescrollstep:10,cursorcolor:"#00A4AD"})})}$(".request-popup .js-example-basic-single").exists()&&$(".request-popup .js-example-basic-single").select2({minimumResultsForSearch:1/0}).on("select2:open",function(){$(".select2-results__options").niceScroll({scrollspeed:60,mousescrollstep:10,cursorcolor:"#00A4AD"})})};function initContent(){setSelect(),initSmoothScrollBar(),initImageParallax(),initPinSteps(),checkPacket(),checkInput(),showCallForm(),showPlace(),showService(),moveMainBildboard(),setWidthBtn(),setGallery(),setSlider(),setCursor(),setMap(!0),setPhoneMask(),setAccordion(),setTabs()}