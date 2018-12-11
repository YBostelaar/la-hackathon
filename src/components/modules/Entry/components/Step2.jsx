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
        console.log(feedback);
        if (feedback === 'good') {
          talk('That"s great! Let"s start your ride!', () => {
            this.props.changeStep(5);
          });
        } else {
          talk(`${feedback}? That does not sound good. Let's fix that!`, () => {
            this.props.changeStep(3);
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
          <Button
            onClick={() => {
              talk('That does not sound good. Let"s fix that!', () => {
                this.props.changeStep(3);
              });
            }}
          >
            Bad
          </Button>
          <Button
            onClick={() => {
              talk('That"s great! Let"s start your ride!', () => {
                this.props.changeStep(5);
              });
            }}
          >
            Good
          </Button>
        </ButtonContainer>
      </>
    );
  }
}

export default Step2;
