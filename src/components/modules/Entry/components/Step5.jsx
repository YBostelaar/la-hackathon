import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import Title from 'common/Title';

const Icon = styled.span`
  font-size: 60px;
`;

class Step5 extends React.Component {
  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 32) {
        this.props.history.push('/parking');
      }
    });
  }

  render() {
    return (
      <>
        <Icon>👍🏻</Icon>
        <Title>Have a safe ride!</Title>
      </>
    );
  }
}

export default withRouter(Step5);
