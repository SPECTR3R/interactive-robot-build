import { TweenMax, Bounce } from 'gsap';


export const addBounceEffect = arr =>
  arr.forEach(el => {
    el.addEventListener('mouseover', () => {
      TweenMax.to(el, 0.4, { scale: 1.1, ease: Bounce.easeOut });
    });
    el.addEventListener('mouseout', () => {
      TweenMax.to(el, 0.4, { scale: 1, ease: Bounce.easeOut });
    });
  });
