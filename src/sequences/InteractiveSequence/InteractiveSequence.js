import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power2, TweenMax, Bounce } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SvgHangerBackground from '../../imageComponents/SvgHangerBackground';
import SvgStartOverlayBoxLarge from '../../imageComponents/SvgStartOverlayBoxLarge';

const InteractiveSequence = () => {
  let container = useRef(null);

  const imageReveal = CSSRulePlugin.getRule('.background-container:after');

  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } });
     tl.to(imageReveal, 1.4, { width: '0%', ease: Power2.easeInOut });

  });

  return (
    <section className="main">
      <div className="container" ref={el => (container = el)}>
        <>
          <div className="background-container">
            <div>
              <SvgHangerBackground className="bkg-img-1"></SvgHangerBackground>

            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default InteractiveSequence;
