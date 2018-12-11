import React from 'react';
import PT from 'prop-types';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Video from 'common/Video';

import Entry from 'modules/Entry';
import Driving from 'modules/Driving';
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

  > * {
    position: relative;
    z-index: 1;
  }
`;

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Header />
          <State>
            <Switch>
              <Route path="/" component={Entry} exact />
              <Route path="/driving" component={Driving} exact />
              <Route path="/parking" component={Parking} exact />
            </Switch>
          </State>
          <Video playing={this.props.speaking} />
        </Content>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  speaking: PT.bool,
};

export default compose(
  withRouter,
  connect((state) => ({
    speaking: state.voice.speaking,
  }))
)(Dashboard);
