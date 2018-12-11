import React from 'react';

class Camera extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();
  photoRef = React.createRef();
  width = 640;
  height = 480;

  state = {
    src: '',
  };

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.video.srcObject = stream;
        this.video.onloadedmetadata = () => {
          this.video.play();
        };
      })
      .catch((err) => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.src !== prevState.src) {
      this.photo.setAttribute('src', this.state.src);
    }
  }

  get video() {
    return this.videoRef.current;
  }

  get canvas() {
    return this.canvasRef.current;
  }

  get photo() {
    return this.photoRef.current;
  }

  get canvasContext() {
    return this.canvas.getContext('2d');
  }

  clearphoto = () => {
    this.canvasContext.fillStyle = '#AAA';
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const src = this.canvas.toDataURL('image/png');
    this.setState({ src });
  }

  takePicture = () => {
    this.clearphoto();

    const context = this.canvas.getContext('2d');

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    const src = this.canvas.toDataURL('image/png');
    this.setState({ src });
  }

  render() {
    return (
      <div onClick={this.takePicture} style={{ height: '100vh', width: '100vw', cursor: 'pointer' }}>
        <video ref={this.videoRef} style={{ display: 'none' }} />
        <canvas ref={this.canvasRef} style={{ display: 'none' }} />
        {this.state.src && <img ref={this.photoRef} alt="output" style={{ display: 'block' }} />}
      </div>
    );
  }
}

export default Camera;
