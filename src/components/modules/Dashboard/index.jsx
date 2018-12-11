import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Entry from 'modules/Entry';
import Driving from 'modules/Driving';
import Locking from 'modules/Locking';
import Parking from 'modules/Parking';

import Header from './components/Header';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.black};
  width: 100%;
`;

const State = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

const Dashboard = () => (
  <Container>
    <Content>
      <Header />
      <State>
        <Switch>
          <Route path="/" component={Entry} exact />
          <Route path="/driving" component={Driving} exact />
          <Route path="/parking" component={Parking} exact />
          <Route path="/locking" component={Locking} exact />
        </Switch>
      </State>
    </Content>
  </Container>
);

export default Dashboard;