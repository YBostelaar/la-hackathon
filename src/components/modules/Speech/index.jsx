import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';

class Speech extends Component {
  componentDidMount() {
    const recognition = new SpeechRecognition();
    console.log(recognition);

  }

  render() {
    return (
      <div />
    );
  }
}

export default Speech;
