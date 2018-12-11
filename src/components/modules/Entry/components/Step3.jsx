import React from 'react';

import { talk } from 'services/speach';
import { addConvo } from 'services/conversation';

import Subtitle from 'common/Subtitle';
import ButtonContainer from 'common/ButtonContainer';
import Button from 'common/Button';

class Step3 extends React.Component {
  componentDidMount() {
    talk('Does the car look like in the picture?', () => {
      addConvo(':feedback', (feedback) => {
        if (feedback === 'yes') {
          talk('That"s great! Let"s start your ride!');
        } else {
          this.props.changeStep(1);
        }
      });
    });
  }

  render() {
    return (
      <>
        <Subtitle>Does the car look like in the picture?</Subtitle>
        <ButtonContainer>
          <Button>No</Button>
          <Button>Yes</Button>
        </ButtonContainer>
      </>
    );
  }
}

export default Step3;
