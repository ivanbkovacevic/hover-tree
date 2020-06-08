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
let brVal=500;
window.addEventListener("scroll",getNumVal);
function getNumVal(){
  brVal=window.scrollY;
  console.log(brVal)

}

var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 2750,
    autoplay:false,
  });

  tl.add({
    targets: '.svg-line path',
    strokeDashoffset: [anime.setDashoffset, brVal],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 250 },
    autoplay:false,
    direction: 'linear',
  })

  window.addEventListener("scroll", tl.play);

   
   
  

// anime({
//     targets: '.svg-line path',
//     strokeDashoffset: [anime.setDashoffset, brVal],
//     easing: 'easeInOutSine',
//     duration: 3000,
//     delay: function(el, i) { return i * 250 },
//     direction: 'linear',
//   //  loop: true,
//   });