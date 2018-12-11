import React from 'react';
import { withRouter } from 'react-router-dom';

import { talk } from 'services/speach';

import Subtitle from 'common/Subtitle';

class Parking extends React.Component {
  componentDidMount() {
    talk('Do not forget your belongings when you leave the car', () => {
      // this.props.changeStep(2);
    });

    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 32) {
        this.props.history.push('/locking');
      }
    });
  }

  render() {
    return (
      <>
        <Subtitle>
          Do not forget your belongings when you leave the car
        </Subtitle>
      </>
    );
  }
}

export default withRouter(Parking);
