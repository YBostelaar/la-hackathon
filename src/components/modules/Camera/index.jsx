import React from 'react';
import { CameraContainer, Video, InvisibleCanvas, OutputImage } from './styled';

class Camera extends React.Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();
  photoRef = React.createRef();
  width = 640;
  height = 480;

  state = {
    allow: false,
    src: '',
  };

  componentDidMount() {
    this.init();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.src !== prevState.src) {
      this.photo.setAttribute('src', this.state.src);

      const form = new FormData();
      form.append('image', this.state.src.replace('data:image/png;base64,', ''));

      fetch('http://10.10.6.5:8000/compare', {
        method: 'POST',
        body: form,
      });
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

  init = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      this.video.srcObject = stream;
      this.setState({ allow: true });
    } catch (err) { console.error(err); };
  }

  clearphoto = () => {
    this.canvasContext.fillStyle = '#AAA';
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const src = this.canvas.toDataURL('image/png');
    this.setState({ src });
  }

  takePicture = () => {
    if (!this.state.allow) return this.init();

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
      <CameraContainer onTouch={this.takePicture} onClick={this.takePicture}>
        <Video ref={this.videoRef} autoPlay playsInline />
        <InvisibleCanvas ref={this.canvasRef} />
        {this.state.src && <OutputImage ref={this.photoRef} alt="output" />}
      </CameraContainer>
    );
  }
}

export default Camera;
