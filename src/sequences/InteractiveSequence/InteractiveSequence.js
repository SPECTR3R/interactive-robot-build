import React, { useRef, useEffect } from 'react';
//import './styles.scss'
import { TimelineLite, Power2, TweenMax, Bounce } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SvgHangerBackground from '../../imageComponents/SvgHangerBackground';
import SvgStartOverlayBoxLarge from '../../imageComponents/SvgStartOverlayBoxLarge';

const InteractiveSequence = () => {
  let container = useRef(null);
  let startButton = useRef(null);
  let startBox = useRef(null);

  const imageReveal = CSSRulePlugin.getRule('.background-container:after');

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } });
    tl.to(startBox, 0, { duration: 0.6, opacity: 0, scale: 0, svgOrigin: '675 143' });
    tl.to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut });
    tl.to(startBox, 2, { duration: 0.6, opacity: 100, scale: 1, svgOrigin: '675 143' });
    startButton.addEventListener('mouseover', () => {
      TweenMax.to(startButton, 0.4, { scale: 1.2, x: -10, y: -10, ease: Bounce.easeOut });
    });
    startButton.addEventListener('mouseout', () => {
      TweenMax.to(startButton, 0.4, { scale: 1, x: 10, y: 10, ease: Bounce.easeOut });
    });
    startButton.addEventListener('click', () => {
      console.log('clicked');
    });
  });

  return (
    <section className="main">
      <div className="container" ref={el => (container = el)}>
        <>
          <div className="background-container">
            <div>
              <SvgHangerBackground className="bkg-img-1"></SvgHangerBackground>
              <SvgStartOverlayBoxLarge
                boxref={el => (startBox = el)}
                buttonref={el => (startButton = el)}
                className="bkg-img-2"
              ></SvgStartOverlayBoxLarge>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default InteractiveSequence;
