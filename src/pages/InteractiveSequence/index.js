import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.scss';

import { TimelineLite, Power3, Power2, TweenMax, Bounce } from 'gsap';
import { useHistory } from 'react-router-dom';
import { Draggable } from 'gsap/all';

import CSSRulePlugin from 'gsap/CSSRulePlugin';
import SvgHangerBackground from '../../imageComponents/SvgHangerBackground';
import { addBounceEffect } from '../helperFunctions';

const StartSequence = () => {
  let snapCount = 0;
  let container = useRef(null);
  let head = useRef(null);
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
      liveSnap: {
        points: [],
        radius: 50,
      },
      snap: function (value) {
        return Math.round(value / 90) * 90;
      },
      onDragEnd: function () {


        switch (this.target.id) {
          case 'head':
            if (this.x === -671.7008797653959 && this.y === -472.73460410557175) {
              snapCount++;
              this.dragResistance = 1;
            }
            break;

          case 'chest':
            if (this.x === -690.2052785923752 && this.y === -89.60410557184741) {
              snapCount++;
              this.dragResistance = 1;
            }
            break;

          case 'leg1':
            if (this.x === -458.8929618768327 && this.y === 118.13049853372422) {
              snapCount++;
              this.dragResistance = 1;
            }
            break;

          case 'leg2':
            if (this.x === -431.20234604105576  && this.y === 114.8020527859237) {
              snapCount++;
              this.dragResistance = 1;
            }
            break;

          case 'arm1':
            if (this.x === -1071.6642228739001 && this.y === -68.33577712609963) {
              snapCount++;
              this.dragResistance = 1;
            }
            break;
          case 'arm2':
            if (this.x === -853.4970674486806 && this.y === -72.11876832844564) {
              snapCount++;
              this.dragResistance = 1;
            }
            break;

          default:
            break;
        }

        console.log(this.target.id,snapCount)
        console.log(this.x, ',y:', this.y);


      },
      onPress: function () {
        switch (this.target.id) {
          case 'head':
            this.vars.liveSnap.points[0] = { x: -671.7008797653959, y: -472.73460410557175 };
            break;
          case 'chest':
            this.vars.liveSnap.points[0] = { x: -690.2052785923752, y: -89.60410557184741 };
            break;
          case 'leg1':
            this.vars.liveSnap.points[0] = { x: -458.8929618768327, y: 118.13049853372422 };
            break;
          case 'leg2':
            this.vars.liveSnap.points[0] = { x: -431.20234604105576, y: 114.8020527859237 };
            break;
          case 'arm1':
            this.vars.liveSnap.points[0] = { x: -1071.6642228739001, y: -68.33577712609963 };
            break;
          case 'arm2':
            this.vars.liveSnap.points[0] = { x: -853.4970674486806, y: -72.11876832844564 };
            break;
          default:
            break;
        }
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
