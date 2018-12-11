import React from 'react';

import VideoUrl from 'video/voice.mp4';
import Video from './styled';

const Voice = () => {
  const playVideo = () => {
    this.refs.vidRef.play();
  };

  return (
    <>
      <Video ref="vidRef">
        <source src={VideoUrl} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </Video>
      <button onClick={playVideo}>PLAY NU</button>
    </>
  );
};

export default Voice;
