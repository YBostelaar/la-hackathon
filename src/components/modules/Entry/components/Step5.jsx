import React from 'react';
import styled from 'styled-components';

import Title from 'common/Title';

const Icon = styled.span`
  font-size: 60px;
`;

class Step1 extends React.Component {
  render() {
    return (
      <>
        <Icon>👍🏻</Icon>
        <Title>Have a safe ride!</Title>
      </>
    );
  }
}

export default Step1;
