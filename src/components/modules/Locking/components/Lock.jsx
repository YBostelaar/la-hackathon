import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import LockIcon from 'images/lock.svg';
import { PhoneContainer, PageTitle } from './styled';

export const Lock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background: #fff;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  background: #246f36;
  color: #fff;
`;

export const LockImg = styled(LockIcon)`
  width: 25px;
  height: 25px;
  fill: #fff;
`;

class Phone extends React.Component {
  componentDidMount() {
    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 32) {
        this.props.history.push('/locking/confirm');
      }
    });
  }

  render() {
    return (
      <PhoneContainer>
        <PageTitle>Autosleutel</PageTitle>
        <Lock>
          <Inner>
            <LockImg />
          </Inner>
        </Lock>
      </PhoneContainer>
    );
  }
}

export default withRouter(Phone);
