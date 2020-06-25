import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { TimelineLite, Power2 } from 'gsap';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SvgHangerBackground from '../../imageComponents/SvgHangerBackground';
import SvgFeedbackOverlay from '../../imageComponents/SvgFeedbackOverlay';

const OutroSequence = () => {
  let container = useRef(null);
  let startBox = useRef(null);
  let restartLinkBox = useRef(null);
  const imageReveal = CSSRulePlugin.getRule(`.${styles.backgroundContainer}:after`);
  const tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: 'visible' } });
    tl.to(imageReveal, 0, { css: { width: '0px' } });
    tl.to(startBox, 0, { duration: 0.6, opacity: 0, scale: 0, svgOrigin: '675 143' });
    tl.to(startBox, 0.5, { opacity: 100, scale: 1, svgOrigin: '675 143' });
    tl.to(imageReveal, 3, { width: '100%', ease: Power2.easeOut }, 3);
    tl.to(restartLinkBox, 0, { css: { visibility: 'visible' } });
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
              <SvgFeedbackOverlay
                boxref={el => (startBox = el)}
                className={styles.bkgImg2}
              ></SvgFeedbackOverlay>
              <a href="/">
                <div ref={el => (restartLinkBox = el)} className={styles.restartLink}></div>
              </a>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default OutroSequence;
