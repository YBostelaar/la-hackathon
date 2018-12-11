import React from 'react';

import VideoUrl from 'video/voice.mp4';
import Video from './styled';

class Voice extends React.PureComponent {
  playVideo = () => {
    this.refs.vidRef.play();
  };

  render() {
    return (
      <>
        <Video ref="vidRef">
          <source src={VideoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </Video>
        <button onClick={this.playVideo}>PLAY NU</button>
      </>
    );
  }
};

export default Voice;
