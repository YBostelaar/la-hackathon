import React from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import styled from 'styled-components';

import CarView from 'images/carview.jpg';
import Title from 'common/Title';

const StyledScene = styled(Scene)`
  position: absolute;
  z-index: 0;
  width: 100vw;
  height: 100vw;
  top: 0;
  left: 0;
`;

const Photo = () => (
  <>
    <Title>Photo</Title>
    <StyledScene>
      <Entity primitive="a-sky" rotation="0 -130 0" src={CarView} />
    </StyledScene>
  </>
);

export default Photo;
