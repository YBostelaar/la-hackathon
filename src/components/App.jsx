import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Dashboard from 'modules/Dashboard';
import Camera from 'modules/Camera';

const App = () => (
  <main>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/camera" component={Camera} />
    </Switch>
  </main>
);

export default withRouter(App);
