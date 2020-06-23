import React, { useState, useEffect } from 'react';

import '../styles.scss';
import SvgHangerBackgroud from '../imageComponents/SvgHangerBackground';
import { Draggable } from 'gsap/all';
import { gsap } from 'gsap';

class startSequence extends React.Component {

  componentDidMount() {
    Draggable.create('.draggable', {
      type:"x,y",
      onPress: function () {
        console.log('clicked');
      },
    });
  }

  render() {
    return (
      <section className="main">
        <div className="container">
          <SvgHangerBackgroud></SvgHangerBackgroud>
        </div>
      </section>
    );
  }
}

export default startSequence;