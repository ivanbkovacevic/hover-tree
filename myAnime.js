function ponovo(){
  location.reload();
}
let kvadOneSide=null;
let kvadSize=null;
let kvadNumberOf=kvadOneSide*kvadOneSide;
let kvadNum;
let kvadNumArr=[];
let min = 1;
let max = 49;
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
    document.getElementById('myImg').disabled=true;

    if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
      prikazi();
      document.getElementById('mySelectBr').disabled = true;
      document.getElementById('mySelectVe').disabled = true;
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
    document.getElementById('mySelectBr').disabled = true;
    document.getElementById('mySelectVe').disabled = true;
   }
 }

 function brojKvadrata(){
    kvadOneSide=document.getElementById('mySelectBr').value;
   console.log(kvadOneSide)

   if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
    prikazi();
  
    document.getElementById('mySelectBr').disabled = true;
    document.getElementById('mySelectVe').disabled = true;
   }
 }

 function velKvadrata(){
   kvadSize=document.getElementById('mySelectVe').value;
   console.log(kvadSize)
   if(kvadSize!=null && kvadNumberOf!=null && myImg.length!=0){
    prikazi();
   
    document.getElementById('mySelectBr').disabled = true;
    document.getElementById('mySelectVe').disabled = true;
  
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
      bcgPosition:`${kvadSize*k*-1}px ${kvadSize*i*-1}px`, zIndex:`99`,transition:`all 3.5s ease-out`,
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
          kvadFinal.style.transition=('all 3.5s ease-out');
        
          kvadFinalArr.push(kvadFinal);

    }
  }

}///////////back to order



 
   


 
