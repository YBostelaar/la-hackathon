import React from 'react';

import { talk } from 'services/speach';
import { addConvo } from 'services/conversation';

import ButtonContainer from 'common/ButtonContainer';
import Button from 'common/Button';
import Title from 'common/Title';
import Subtitle from 'common/Subtitle';

import VideoUrl from 'video/voice.mp4';

class Entry extends React.PureComponent {
  componentDidMount() {
    talk('Goodmorning Jay. Welcome to your Greenwheels for today. How is you car looking?', () => {
      addConvo(':feedback', (feedback) => {
        talk(`${feedback}? That does not sound good. Let's fix that ASAP!`);
      });
    });
  }

  playVideo = () => {
    this.refs.vidRef.play();
  }

  render() {
    return (
      <>
        <Title>Goodmorning Jay</Title>
        <Subtitle green>Welcome to your Greenwheels for today</Subtitle>
        <ButtonContainer>
          <Button>LOOKS GOOD</Button>
          <Button>LOOKS JAAA</Button>
        </ButtonContainer>
        <Video ref="vidRef">
          <source src={VideoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </Video>
        <button onClick={this.playVideo}>PLAY</button>
      </>
    );
  }
};

export default Entry;
