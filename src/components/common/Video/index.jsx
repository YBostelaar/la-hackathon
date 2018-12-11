import React from 'react';
import PT from 'prop-types';

import VideoUrl from 'video/voice.mp4';
import StyledVideo from './styled';

class Video extends React.PureComponent {
  componentDidMount() {
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
  }

  render() {
    return (
      <StyledVideo ref="vidRef">
        <source src={VideoUrl} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </StyledVideo>
    );
  }
};

Video.propTypes = {
  playing: PT.bool,
};

Video.defaultProps = {
  playing: false,
};

export default Video;
