import React from 'react';

import CarView from 'video/car.mp4';
import Title from 'common/Title';
import Video from 'common/Video';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rotation: -95,
      zas: -100,
      endTime: 0,
      startTime: 0,
    };

    this.slideIntervalTime = 40000;
  }

  componentDidMount() {
    this.resetTimes();
    this.createTimeout();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animation);
  }

  resetTimes = () => {
    const startTime = new Date().getTime();

    this.setState({
      rotation: -95,
      zas: -100,
      endTime: startTime + this.slideIntervalTime,
      startTime,
    });
  }

  createTimeout = () => {
    const now = new Date().getTime();

    if (now >= this.state.endTime) {
      this.resetTimes();
    } else {
      const rotation = ((now - this.state.startTime) / this.slideIntervalTime) * 360;

      let zas = -20;
      if (rotation > 30 && rotation < 31) {
        zas = 100;
      } else if (rotation === 200) {
        zas = 100;
      }

      this.setState({ rotation, zas });
    }

    this.animation = requestAnimationFrame(this.createTimeout);
  }

  render() {
    return (
      <>
        <Title>Photo</Title>
        <Video src={CarView} autoplay={true} />
      </>
    );
  }
}

export default Photo;
