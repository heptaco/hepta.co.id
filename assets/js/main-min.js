$((function(){function o(){window.location=newLocation}$(window).scroll((function(){$(this).scrollTop()>800?$(".back-to-top").addClass("show-back-to-top"):$(".back-to-top").removeClass("show-back-to-top")})),$(".back-to-top").click((function(){return $("html, body").animate({scrollTop:0},800),!1})),$(".counter").counterUp({delay:10,time:2e3}),$(".menu-toggle-icon").on("click",(function(){$(".mobile-menu").slideToggle()})),$(document).ready((function(){$(".navbar-burger").click((function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")}))})),$("#owl1").owlCarousel({margin:20,loop:!0,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}},autoplay:!0,autoplayTimeout:2e3}),$("#owl2").owlCarousel({loop:!0,autoWidth:!1,responsiveClass:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}},autoplay:!0,autoplayTimeout:4e3}),$(".testi3").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!0,responsiveClass:!0,responsive:{0:{items:1,nav:!1},1024:{items:2}}})
/*! Fades out the whole page when clicking links */,$(".fade-page").click((function(s){s.preventDefault(),newLocation=this.href,$("body").fadeOut("slow",o)})),$(".work-boxes-slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".testi-boxes-slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".blog-boxes-slick").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:760,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".feautures-boxes-slick").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:2e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".header-slick").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".clients-slick").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!1,responsive:[{breakpoint:950,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),feather.replace(),AOS.init(),AOS.init({offset:10,once:!0})})),$(document).ready((function(){$("img.lazy").lazyload({effect:"fadeIn",placeholder:"data:image/gif;base64,R0lGODlhEALAPQAPzl5uLr9Nrl8e7..."})})),$(".se-pre-con").fadeOut("slow");var btn=$(".to-top");btn.on("click",(function(o){o.preventDefault(),$("html, body").animate({scrollTop:0},"300")}));