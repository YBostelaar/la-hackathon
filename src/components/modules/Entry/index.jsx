import React from 'react';

import { talk } from 'services/speach';
import { addConvo } from 'services/conversation';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

class Entry extends React.Component {
  state = {
    step: 1,
  }

  componentDidMount() {
    talk('Goodmorning Jay. Welcome to your Greenwheels for today. How is you car looking?', () => {
      addConvo(':feedback', (feedback) => {
        talk(`${feedback}? That does not sound good. Let's fix that ASAP!`);
      });
    });
  }

  changeStep = (increment) => {
    this.setState({ step: this.state.step + increment });
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      default:
        return <Step1 />;
    }
  }
}

export default Entry;
