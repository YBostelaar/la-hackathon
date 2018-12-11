import React, { Component } from 'react';
import PT from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    );
  }
}

Dictaphone.propTypes = {
  transcript: PT.string,
  resetTranscript: PT.func,
  browserSupportsSpeechRecognition: PT.bool,
};

export default SpeechRecognition(Dictaphone);
