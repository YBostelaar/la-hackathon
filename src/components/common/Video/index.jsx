import React from 'react';
import PT from 'prop-types';

import VideoUrl from 'video/voice-short.mp4';
import StyledVideo from './styled';

class Video extends React.PureComponent {
  componentDidMount() {
    document.querySelector('html').click();
    this.handleVideoState(this.props);
  }

  componentDidUpdate(prevProps) {
    this.handleVideoState(prevProps);
  }

  handleVideoState = (prevProps) => {
    if (prevProps.playing !== this.props.playing) {
      this.props.playing ? this.playVideo() : this.stopVideo();
    }
  }

  playVideo = () => {
    this.refs.vidRef.play();
  };

  stopVideo = () => {
    this.refs.vidRef.pause();
    this.refs.vidRef.currentTime = 0;
  }

  render() {
    return (
      <StyledVideo
        ref="vidRef"
        autoPlay={this.props.autoplay}
        playsInline={true}
        fullscreen={this.props.fullscreen}
        muted="muted"
        loop={true}
      >
        <source src={this.props.src ? this.props.src : VideoUrl} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </StyledVideo>
    );
  }
};

Video.propTypes = {
  src: PT.string,
  playing: PT.bool,
  autoplay: PT.oneOf([false, 'autoplay']),
  fullscreen: PT.bool,
};

Video.defaultProps = {
  src: '',
  autoplay: false,
  fullscreen: false,
  playing: false,
};

export default Video;
