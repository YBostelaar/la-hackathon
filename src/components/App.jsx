import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Dashboard from 'modules/Dashboard';
import Camera from 'modules/Camera';
import Speech from 'modules/Speech';

const App = () => (
  <main>
    <GlobalStyle />
    <Switch>
      <Route exact path="/camera" component={Camera} />
      <Route exact path="/speech" component={Speech} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </main>
);

export default withRouter(App);
