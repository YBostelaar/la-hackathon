import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.h3`
  color: ${(props) => props.theme.white};
  margin: 0;
`;

class Time extends React.Component {
  state = {
    time: null,
  }

  componentDidMount() {
    setInterval(this.setTime, 500);
  }

  checkTime = (i) => {
    if (i < 10) { i = '0' + i; };  // add zero in front of numbers < 10
    return i;
  };

  getTime = () => {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    m = this.checkTime(m);

    return `${h}:${m}`;
  };

  setTime = () => {
    this.setState({ time: this.getTime() });
  }

  render() {
    return (
      <StyledTime>
        {this.state.time}
      </StyledTime>
    );
  }
}

export default Time;
