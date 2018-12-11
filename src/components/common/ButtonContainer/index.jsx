import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-right: 18px;
  }
`;

const ButtonContainer = ({ children }) => (
  <Container>{children}</Container>
);

ButtonContainer.propTypes = {
  children: PT.node,
};

export default ButtonContainer;
