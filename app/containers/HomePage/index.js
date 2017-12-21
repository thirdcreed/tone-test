/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import Tone from 'tone';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #4A148C;
    `
    var Synth = Tone.PolySynth;
    var synth = new Synth().toMaster();
    var loop = new Tone.Loop(time => {

      synth.triggerAttackRelease(["C4", "E4", "G4", "Bb4"], "4n");
    },"5n")

    loop.start("1m").stop("5m");
    Tone.Transport.bpm.value = 120
    Tone.Transport.start();



    console.log(synth)

    return (
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
    );
  }
}
