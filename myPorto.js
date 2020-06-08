// var path = anime.path('path');

// anime({
//   targets: '.krug',
//   translateX: path('x'),
//   translateY: path('y'),
//   rotate: path('angle'),
//   easing: 'linear',
//   duration: 20000,
//   loop: true
// });
let scroll;
$(document).ready(function(){
    $(window).scroll(function (event) {
         scroll = $(window).scrollTop();
        console.log(scroll);
    });


let brVal=1000;


 var animation = anime({
    targets: '.svg-line path',
    strokeDashoffset: [anime.setDashoffset, 10],
    easing: 'easeInOutSine',
    duration: 3000,
   // autoplay:false,
    delay: function(el, i) { return i * 250 },
    direction: 'linear',
   
  });

  if( scroll > 100){
    animation.pause();
  }


  



// var tl = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 2750,
//     autoplay:false,
//   });

//   tl.add({
//     targets: '.svg-line path',
//     strokeDashoffset: [anime.setDashoffset, brVal],
//     easing: 'easeInOutSine',
//     duration: 3000,
//     delay: function(el, i) { return i * 250 },
//     autoplay:false,
//     direction: 'linear',
//   })

//   window.addEventListener("scroll", tl.play);

   
   
  

// anime({
//     targets: '.svg-line path',
//     strokeDashoffset: [anime.setDashoffset, brVal],
//     easing: 'easeInOutSine',
//     duration: 3000,
//     delay: function(el, i) { return i * 250 },
//     direction: 'linear',
//   //  loop: true,
//   });  
});