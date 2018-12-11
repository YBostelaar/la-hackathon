import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Dashboard from 'modules/Dashboard';

const App = () => (
  <main>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  </main>
);

export default withRouter(App);
