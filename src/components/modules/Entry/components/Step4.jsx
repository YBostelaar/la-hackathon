import React from 'react';

import { talk } from 'services/speach';
import { addConvo } from 'services/conversation';

import Subtitle from 'common/Subtitle';
import ButtonContainer from 'common/ButtonContainer';
import Button from 'common/Button';

class Step4 extends React.Component {
  componentDidMount() {
    talk('What"s the reason?', () => {
      addConvo(':feedback', (feedback) => {
        if (feedback === 'stains') {
          talk('That"s dirty! We will handle this further for you. Enjoy your ride!', () => {
            this.props.changeStep(5);
          }, 5500);
        }
      });
    }, 2000);
  }

  render() {
    return (
      <>
        <Subtitle>What's the reason?</Subtitle>
        <ButtonContainer>
          <Button
            onClick={() => {
              talk('That"s dirty! We will handle this further for you. Enjoy your ride!', () => {
                this.props.changeStep(5);
              }, 5500);
            }}
          >
            Dog hairs
          </Button>
          <Button
            onClick={() => {
              talk('That"s dirty! We will handle this further for you. Enjoy your ride!', () => {
                this.props.changeStep(5);
              }, 5500);
            }}
          >
            Stains
          </Button>
          <Button
            onClick={() => {
              talk('That"s dirty! We will handle this further for you. Enjoy your ride!', () => {
                this.props.changeStep(5);
              }, 5500);
            }}
          >
            Food/drinks
          </Button>
        </ButtonContainer>
      </>
    );
  }
}

export default Step4;
