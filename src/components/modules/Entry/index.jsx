import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';


import ButtonContainer from 'common/ButtonContainer';
import Button from 'common/Button';
import Title from 'common/Title';
import Subtitle from 'common/Subtitle';
import Voice from 'common/Voice';

const Entry = () => (
  <>
    <Title>Goodmorning Jay</Title>
    <Subtitle green>Welcome to your Greenwheels for today</Subtitle>
    <ButtonContainer>
      <Button>LOOKS GOOD</Button>
      <Button>LOOKS JAAA</Button>
    </ButtonContainer>
    <Voice />
  </>
);

export default Entry;
