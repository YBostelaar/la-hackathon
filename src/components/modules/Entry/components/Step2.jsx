import React from 'react';

import { talk } from 'services/speach';
import { addConvo } from 'services/conversation';

import Subtitle from 'common/Subtitle';
import ButtonContainer from 'common/ButtonContainer';
import Button from 'common/Button';

class Step2 extends React.Component {
  componentDidMount() {
    talk('How does the car look today?', () => {
      addConvo(':feedback', (feedback) => {
        if (feedback === 'good') {
          talk('That"s great! Let"s start your ride!');
        } else {
          talk(`${feedback}? That does not sound good. Let's fix that!`, () => {
            this.props.changeStep(1);
          });
        }
      });
    });
  }

  render() {
    return (
      <>
        <Subtitle>How does the car look today?</Subtitle>
        <ButtonContainer>
          <Button>Bad</Button>
          <Button>Good</Button>
        </ButtonContainer>
      </>
    );
  }
}

export default Step2;
