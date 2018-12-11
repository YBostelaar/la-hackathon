import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const Camera = lazy(() => import('modules/Camera'));

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Suspense fallback={<span>loading</span>}>
        <Switch>
          <Route path="/camera" component={Camera} exact />
        </Switch>
      </Suspense>
    </main>
  );
};

export default withRouter(App);
