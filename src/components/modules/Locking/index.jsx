import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'html5-device-mockups/dist/device-mockups.min.css';

import Lock from './components/Lock';
import Confirm from './components/Confirm';
import { FrameContainer } from './components/styled';

const Locking = () => (
  <FrameContainer>
    <div className="device-wrapper">
      <div className="device" data-device="iPhone5" data-orientation="portrait" data-color="black">
        <div className="screen">
          <Switch>
            <Route exact path="/locking" component={Lock} />
            <Route exact path="/locking/confirm" component={Confirm} />
          </Switch>
        </div>
        <div className="button" />
      </div>
    </div>
  </FrameContainer>
);

export default Locking;
