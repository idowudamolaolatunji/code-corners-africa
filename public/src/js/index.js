'use strict';

// gsap.set(".ball", {xPercent: -50, yPercent: -50});

// let xTo = gsap.quickTo(".ball", "x", {duration: 0.6, ease: "power3"}),
//     yTo = gsap.quickTo(".ball", "y", {duration: 0.6, ease: "power3"});

// window.addEventListener("mousemove", e => {
//   xTo(e.clientX);
//   yTo(e.clientY);
// });




const txts=document.querySelector(".animate-text").children, txtsLen=txts.length;
let index=0;
const textInTimer=3000, textOutTimer=2800;

function animateText() {
    for(let i=0; i<txtsLen; i++){
        txts[i].classList.remove("text-in","text-out");  
    }
    txts[index].classList.add("text-in");

    setTimeout(function(){
        txts[index].classList.add("text-out");              
    },textOutTimer)

    setTimeout(function(){

        if(index == txtsLen-1){
            index=0;
        }
        else{
            index++;
            }
        animateText();
    },textInTimer); 
}

window.onload=animateText;



function Marquee(el, speed, num) {
    const marquee = document.querySelector(el);
    const skills = marquee.children;
    const cloneSkills = [...skills, ...skills];
  
    // Clear the original content and append the cloned skills
    marquee.innerHTML = '';
    cloneSkills.forEach(skill => marquee.appendChild(skill));
  
    let position = 0;
    const step = 1;
  
    const moveMarquee = () => {
      position -= step;
      marquee.style.transform = `translateX(${position / num}px)`;
  
      // Check if we've reached the end and reset position
      if (position < -marquee.offsetWidth ) {
        position = 0;
      }
    };
  
    setInterval(moveMarquee, speed * 1000);
}
  
window.addEventListener('load', () => {
  Marquee('.marquee', 0.1, 0.7);

  if(window.innerWidth <= 950) {
    Marquee('.featured__flex', 0.07, 2);
  }
});
