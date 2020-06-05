
   anime({
    targets: '.kvad',
    translateX: 250,
    rotate: '1turn',
    duration: 3800,
    borderRadius: ['0%', '50%'], //ict hub
    scale:1.4
  });

let gigle= anime({
    targets: '.spreading-kvad',
    rotate: ['0deg','-5deg','0deg','5deg'],
    loop:true,
    direction: 'alternate',
    duration: 1800,
    easing: 'easeInOutSine',
  
})

function gigleStop(){
    gigle.pause();
    console.log('gigle')
}

let kvadNum;
   function launching(){
    let min = 1;
    let max = 30;
    kvadNum=Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(kvadNum)
    var objPropLogEl = document.querySelector(`.spreading-kvad:nth-of-type(${kvadNum})`);

    console.log(objPropLogEl);
  
    anime({
        targets: objPropLogEl,
        translateX: 250,
        translateY:200,
        duration: 1200,
        easing: 'easeInOutQuad',
        update: function() {
           objPropLogEl.innerHTML = JSON.stringify(kvadNum);
          }//update
    })
   }



//////////////////////////////

 
   


 
