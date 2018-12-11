import styled from 'styled-components';

export const CameraContainer = styled.section`
  height: 100vh;
  width: 100vw;
  cursor: pointer;
  position: relative;
  z-index: 3;
`;

export const Video = styled.video`
  opacity: 0;
`;

export const InvisibleCanvas = styled.canvas`
  display: none;
`;

export const OutputImage = styled.img`
  display: none;
`;
