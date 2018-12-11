import styled, { css } from 'styled-components';

const Video = styled.video`

  ${(props) => props.fullscreen && css`
    position: absolute !important;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0 !important;
    opacity: .8;
    max-width: 100vw;
    max-height: 100vw;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  `}
`;

export default Video;
