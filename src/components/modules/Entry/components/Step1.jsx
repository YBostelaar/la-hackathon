import React from 'react';

import { talk } from 'services/speach';

import Title from 'common/Title';
import Subtitle from 'common/Subtitle';

class Step1 extends React.Component {
  componentDidMount() {
    talk('Good afternoon Jay. Welcome back to your Greenwheels!', () => {
      this.props.changeStep(2);
    });
  }

  render() {
    return (
      <>
        <Title>Good afternoon Jay</Title>
        <Subtitle green>Welcome back to your Greenwheels</Subtitle>
      </>
    );
  }
}

export default Step1;
