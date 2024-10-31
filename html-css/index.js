document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  gsap.registerPlugin(ScrollTrigger);

  // Lenis
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  const cardsWrapper = gsap.utils.toArray(".cards__item"); 
  const cardsEl = gsap.utils.toArray(".cards_el");
  
  cardsWrapper.forEach((e, i) => {
    
      const card = cardsEl[i];
      let scale = 1,rotate = 0;
  
      if (i !== cardsEl.length - 1) {
          scale = 0.9 + 0.025 * i;
          rotate = -10;
      }
      console.log(`Card Index: ${i}, Scale: ${scale}, Rotate: ${rotate}`);

  
      gsap.to(card, {
          scale: scale,
        //   rotationX: rotate,
          transformOrigin: "top center",
          ease: 'none',
          scrollTrigger: {
              trigger: e,
              start: "top " +(70+40*i), // corrected syntax
              end: "bottom +=650px",
              endTrigger: '.end-anim', // corrected to use e for endTrigger
              pin: e,
              pinSpacing: false, // added a value for pinSpacing
              scrub: true
          }
      });
  });
  
});
