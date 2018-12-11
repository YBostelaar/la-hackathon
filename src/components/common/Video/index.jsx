import React from 'react';

import VideoUrl from 'video/voice.mp4';
import StyledVideo from './styled';

class Video extends React.PureComponent {
  playVideo = () => {
    this.refs.vidRef.play();
  };

  render() {
    return (
      <>
        <StyledVideo ref="vidRef">
          <source src={VideoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </StyledVideo>
      </>
    );
  }
};

export default Video;
