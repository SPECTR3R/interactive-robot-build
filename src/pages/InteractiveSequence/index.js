import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';

import { TimelineLite, Power3, Power2, TweenMax, Bounce } from 'gsap';
import { useHistory } from 'react-router-dom';
import { Draggable } from 'gsap/all';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SvgHangerBackground from '../../imageComponents/SvgHangerBackground';
import { addBounceEffect } from '../helperFunctions';

const StartSequence = () => {
  let container = useRef(null);
  let head = useRef(null);
  let torso = useRef(null);
  let leg1 = useRef(null);
  let leg2 = useRef(null);
  let arm1 = useRef(null);
  let arm2 = useRef(null);
  let chest = useRef(null);
  let instructionBox = useRef(null);

  const imageReveal = CSSRulePlugin.getRule(`.${styles.backgroundContainer}:after`);

  const tl = new TimelineLite();

  useEffect(() => {
    const draggables = [head, leg1, leg2, arm1, arm2, chest];
    tl.to(container, 0, { css: { visibility: 'visible' } });
    tl.to(draggables, 0, { opacity: 0, scale: 1, y: -900 });
    tl.to(instructionBox, 0, { opacity: 0, scale: 0, y: 0 });

    tl.to(imageReveal, 0.8, { width: '0%', ease: Power2.easeInOut });
    tl.to(instructionBox, 0.8, { opacity: 100, scale: 1, y: 0 });
    tl.staggerTo(draggables, 0.8, { opacity: 100, scale: 1, y: 0 }, 0.2);

    addBounceEffect(draggables);

    Draggable.create(draggables, {
      bounds: container,
      type: 'x,y',
      onPress: function () {
        console.log('clicked');
      },
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
                headRef={el => (head = el)}
                torsoRef={el => (torso = el)}
                leg1Ref={el => (leg1 = el)}
                leg2Ref={el => (leg2 = el)}
                arm1Ref={el => (arm1 = el)}
                arm2Ref={el => (arm2 = el)}
                chestRef={el => (chest = el)}
                instructionBoxRef={el => (instructionBox = el)}
              ></SvgHangerBackground>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default StartSequence;
