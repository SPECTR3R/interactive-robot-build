import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

import { TimelineLite, Power2, TweenMax, Bounce } from 'gsap';
import { useHistory } from 'react-router-dom';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SvgHangerBackground from '../../imageComponents/SvgHangerBackground';
import SvgStartOverlayBoxLarge from '../../imageComponents/SvgStartOverlayBoxLarge';

const StartSequence = () => {
  let container = useRef(null);
  let startButton = useRef(null);
  let startBox = useRef(null);

  const imageReveal = CSSRulePlugin.getRule(`.${styles.backgroundContainer}:after`);
  const tl = new TimelineLite();
  const history = useHistory();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } });
    tl.to(startBox, 0, { duration: 0.6, opacity: 0, scale: 0, svgOrigin: '675 143' });
    tl.to(imageReveal, 3, { width: '0%', ease: Power2.easeInOut });
    tl.to(startBox, .5, { opacity: 100, scale: 1, svgOrigin: '675 143' });
    startButton.addEventListener('mouseover', () => {
      TweenMax.to(startButton, 0.4, { scale: 1.2, x: -10, y: -10, ease: Bounce.easeOut });
    });
    startButton.addEventListener('mouseout', () => {
      TweenMax.to(startButton, 0.4, { scale: 1, x: 10, y: 10, ease: Bounce.easeOut });
    });
    startButton.addEventListener('click', () => {
      tl.to(startBox, .5, { duration: 0.6, opacity: 0, scale: 0, svgOrigin: '675 143' });
      setTimeout(function () {
        history.push('/interactiveSequence');
      }, 1000);
    });
  });
  return (
    <section className={styles.main}>
      <div className={styles.container} ref={el => (container = el)}>
        <>
          <div className={styles.backgroundContainer}>
            <div>
              <SvgHangerBackground
                classNames={styles}
                className={styles.bkgImg1}
              ></SvgHangerBackground>
              <SvgStartOverlayBoxLarge
                boxref={el => (startBox = el)}
                buttonref={el => (startButton = el)}
                className={styles.bkgImg2}
              ></SvgStartOverlayBoxLarge>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default StartSequence;
