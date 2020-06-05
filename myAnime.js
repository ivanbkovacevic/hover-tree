
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
let niz=[];
let min = 1;
let max = 30;
let clickOrd=0;

let temp
  
for(let i=0; i<30;i++){
    niz.push(i);
  }

  for (var j = niz.length - 1; j > 0; j--) {
    kvadNum=Math.floor(Math.random() * (max - min + 1)) + min;
     
         temp = niz[j];
        niz[j] = niz[kvadNum];
        niz[kvadNum] = temp;
  }

   function launching(){
      
    console.log(kvadNum)
    console.log(temp)
    let kvadNumstring=JSON.stringify(temp);
    var objPropLogEl = document.querySelector(`.spreading-kvad:nth-of-type(${temp})`);
     clickOrd++;
    console.log(objPropLogEl);
  
    anime({
        targets: objPropLogEl,
        translateX: 250,
        translateY:200,
        duration: 400,
        easing: 'easeInOutQuad',
        update: function() {
           objPropLogEl.innerHTML = JSON.stringify(kvadNum);
          }//update
    })
   }





//////////////////////////////

 
   


 
