function ponovo(){
  location.reload();
}
 



let kvadNum;
let kvadNumArr=[];
let min = 1;
let max = 49;
let clickOrd=-1;
let transFX=-180;
let transX=0;
let transY=0;
let kvadSize=50;
let kvadNumberOf=49;
let kvadOneSide=7;
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

let cln;

kvadCont.style.width=(`${kvadSize*kvadOneSide+10}px`);

kvadCont.style.height=(`${kvadSize*kvadOneSide+10}px`);

for(let i=0; i<kvadOneSide;i++){
  for(let k=0; k<kvadOneSide; k++){
    kvadPos++
    let kvad=document.createElement("div");
    kvadObj={position:kvadPos,height:`${kvadSize}px`,width:`${kvadSize}px` ,bcgImage:`url(beach1.jpg)`,
    bcgPosition:`${kvadSize*k*-1}px ${kvadSize*i*-1}px`, zIndex:`99`,transition:`all 1.5s`,
    xpoz:k*kvadNumberOf,ypoz:i*kvadNumberOf,
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

  let kvadArrayShuffled= kvadOriginalArr.sort(()=>Math.random()-0.5); //shufleing the array of kvads
  let kvadShuffCont= document.querySelector('.kvadShuff');
  
 

  for(let i in kvadArrayShuffled){
    kvadPositionShuffled++
     kvadPositionShuffledArr.push(kvadPositionShuffled)
       kvadShuffCont.appendChild(kvadArrayShuffled[i]);
       cln = kvadArrayShuffled[i].cloneNode(true);
    }

  
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function backToOrder(){
 
  for( let i=0; i<kvadArrayShuffled.length; i++){
  
        if(kvadArrayShuffled[i].style.backgroundPosition==kvadOriginalArr[i].style.backgroundPosition){
        
         let kvadFinal=kvadArrayShuffled[i];
        
          kvadFinal.style.backgroundPosition=kvadObjOrgArr[i].bcgPosition;
          
          kvadFinal.style.transform=(`translateX:${kvadOriginalArr[i].transX*-1}`);
          kvadFinal.style.transform=(`translateY:${kvadOriginalArr[i].transY*-1}`);
          kvadFinal.style.transition=('all 1.5s');
        
          kvadFinalArr.push(kvadFinal);

    }
  }

}





 
   


 
