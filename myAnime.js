function ponovo(){
  location.reload();
}
let kvadOneSide=null;
let kvadSize=null;
let kvadNumberOf=kvadOneSide*kvadOneSide;
let kvadNum;
let kvadNumArr=[];
let min = 1;
let max = kvadNumberOf;
let clickOrd=-1;
let transFX=-180;
let transX=0;
let transY=0;
let cln;
 let kvadCont= document.querySelector('.kvadShuff');
  let kvadOriginalArr=[];
  let kvadObj={};
  let kvadObjOrgArr=[];
  let kvadPos=-1;
  let kvadPosArr=[];
  let kvadPositionShuffled=-1;
  let kvadPositionShuffledArr=[];
  let kvadRetOrd=0;
  let kvadFinalArr=[];
  let kvadArrayShuffled;
  let kvadShuffCont;
  let myImg;

  function defaultImg(){
    myImg="beach1.jpg"
    document.getElementById('mySpan').innerText="Cool!";
    document.getElementById('defImgBtn').disabled=true;

    if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
      prikazi();

     }
  }

  function myImgF(){
    myImg=document.getElementById('myImg').value;
    if(myImg.length!=0){
     document.getElementById('defImgBtn').disabled=true;
    }
   if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
    prikazi();
    console.log("prikayi")

   }
 }

 function brojKvadrata(id,broj,klasaBr){
  document.getElementById(id).classList.add("active");
 
  document.getElementById(id).disabled = true;
  let dugmadBr=document.querySelectorAll(klasaBr);
  console.log(dugmadBr)
  for(let i=0; i<dugmadBr.length;i++){
    dugmadBr[i].classList.add("deactive");
    dugmadBr[i].disabled=true;
   
  }
 
    kvadOneSide=broj;
   console.log(id,broj,kvadOneSide)

   if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
    prikazi();

   }
 }

 function velKvadrata(id,vel,klasaVel){
    document.getElementById(id).classList.add("active");
  document.getElementById(id).disabled = true;
  let dugmadVel=document.querySelectorAll(klasaVel);
  console.log(dugmadVel)
  for(let i=0; i<dugmadVel.length;i++){
    dugmadVel[i].classList.add("deactive");
    dugmadVel[i].disabled=true;
  }

   kvadSize=vel;
   console.log(typeof(vel))
   console.log(kvadSize)
   if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
    prikazi();

  
   }
}


function prikazi(){
  
  kvadCont.style.width=(`${kvadSize*kvadOneSide+10}px`);
  
  kvadCont.style.height=(`${kvadSize*kvadOneSide+10}px`);
  
  for(let i=0; i<kvadOneSide;i++){
    for(let k=0; k<kvadOneSide; k++){
      kvadPos++
      let kvad=document.createElement("div");
      kvadObj={position:kvadPos,height:`${kvadSize}px`,width:`${kvadSize}px` ,bcgImage:`url(${myImg})`,
      bcgPosition:`${kvadSize*k*-1}px ${kvadSize*i*-1}px`, zIndex:`99`,
      xpoz:k*kvadNumberOf,yoz:i*kvadNumberOf,
     bcgSize:`${kvadOneSide*kvadSize}px ${kvadOneSide*kvadSize}px`
    };
  
      kvad.style.height=(kvadObj.height);
      kvad.style.width=(kvadObj.width);
      kvad.style.backgroundImage=(kvadObj.bcgImage);
      kvad.style.backgroundPosition=(kvadObj.bcgPosition);
      kvad.style.backgroundSize=(kvadObj.bcgSize);
      kvadOriginalArr.push(kvad);
      kvadObjOrgArr.push(kvadObj);  
    }}
  
    kvadPosArr.push(kvadObj.kvadPos)
  
     kvadArrayShuffled= kvadOriginalArr.sort(()=>Math.random()-0.5); //shufleing the array of kvads
     kvadShuffCont= document.querySelector('.kvadShuff');
    
    for(let i in kvadArrayShuffled){
      kvadPositionShuffled++
       kvadPositionShuffledArr.push(kvadPositionShuffled)
         kvadShuffCont.appendChild(kvadArrayShuffled[i]);
         cln = kvadArrayShuffled[i].cloneNode(true); 
      }
  
 
     /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
}/////////////////////////////////prikazi sliku

function backToOrder(){
   
  for( let i=0; i<kvadArrayShuffled.length; i++){
  
        if(kvadArrayShuffled[i].style.backgroundPosition==kvadOriginalArr[i].style.backgroundPosition){
        
         let kvadFinal=kvadArrayShuffled[i];
        
          kvadFinal.style.backgroundPosition=kvadObjOrgArr[i].bcgPosition;
          
          kvadFinal.style.transform=(`translateX:${kvadOriginalArr[i].transX*-1}`);
          kvadFinal.style.transform=(`translateY:${kvadOriginalArr[i].transY*-1}`);
          kvadFinal.style.transition=('all 4s ease-out');
        
          kvadFinalArr.push(kvadFinal);

    }
  }

  let btnSloziJe= document.getElementById('sloziJe');
  btnSloziJe.classList.add('slozije-deactiv');
  btnSloziJe.disabled=true;
}///////////back to order



 
   


 
