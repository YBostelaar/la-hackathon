import React from 'react';
import PT from 'prop-types';

import VideoUrl from 'video/voice.mp4';
import StyledVideo from './styled';

class Video extends React.PureComponent {
  playVideo = () => {
    this.refs.vidRef.play();
  };

  render() {
    return (
      <>
        <StyledVideo
          ref="vidRef"
          autoplay={this.props.autoplay}
          fullscreen={this.props.fullscreen}
        >
          <source src={this.props.src ? this.props.src : VideoUrl} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </StyledVideo>
      </>
    );
  }
};

Video.propTypes = {
  src: PT.string,
  autoplay: PT.oneOf([false, 'autoplay']),
  fullscreen: PT.bool,
};

Video.defaultProps = {
  src: false,
  autoplay: false,
  fullscreen: false,
};

export default Video;
