
window.addEventListener('scroll', () => {

    const scrolled= window.scrollY;
        console.log(scrolled);

      const cover= document.querySelector(".cover");
      cover.style.top=scrolled+"px";

      const firstLine=document.querySelector(".firstLine");
      const poly=document.querySelector(".poly");
     
    
      if(scrolled<1000){
     // points="20,20 40,25 60,40 80,120 120,140 200,180"
        poly.setAttribute('points',"100,100" + " "+ scrolled+","+scrolled)
      }else if(scrolled>1000 && scrolled<2000){
          let curveX1=2000-scrolled;
        poly.setAttribute('points',"100,100 1000,1000" + " "+ curveX1+","+scrolled)
    }else if(scrolled>2000 && scrolled<3000){
        let curveX2=100;
      poly.setAttribute('points',"100,100 1000,1000 100,2000" + " "+ curveX2+","+scrolled)
    }
    document.querySelector("html").niceScroll();
    });
    
  
  