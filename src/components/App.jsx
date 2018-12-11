import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Dashboard from 'modules/Dashboard';
import Camera from 'modules/Camera';
import Locking from 'modules/Locking';

const App = () => (
  <main>
    <GlobalStyle />
    <Switch>
      <Route exact path="/camera" component={Camera} />
      <Route path="/locking" component={Locking} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </main>
);

export default withRouter(App);
