import React from 'react';
import styled from 'styled-components';

import apiUrl from 'config/api';
import { talk } from 'services/speach';
import { addConvo } from 'services/conversation';

import Subtitle from 'common/Subtitle';
import ButtonContainer from 'common/ButtonContainer';
import Button from 'common/Button';

const Image = styled.img`
  height: 200px;
`;

class Step3 extends React.Component {
  componentDidMount() {
    talk('Does the car look like in the picture?', () => {
      addConvo(':feedback', (feedback) => {
        if (feedback === 'yes') {
          talk('That"s great! Let"s start your ride!', () => {
            this.props.changeStep(5);
          });
        } else {
          this.props.changeStep(4);
        }
      });
    });
  }

  render() {
    return (
      <>
        <Subtitle>Does the car look like in the picture?</Subtitle>
        <ButtonContainer>
          <Button onClick={() => this.props.changeStep(4)}>No</Button>
          <Button
            onClick={() => {
              talk('That"s great! Let"s start your ride!', () => {
                this.props.changeStep(5);
              });
            }}
          >
            Yes
          </Button>
        </ButtonContainer>
        <Image src={apiUrl + '/latest/'} alt="image" />
      </>
    );
  }
}

export default Step3;
