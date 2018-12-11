import React from 'react';
import styled from 'styled-components';

import AvatarIcon from 'images/avatar.jpg';

const Container = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin-top: -6px;
`;

const Avatar = () => (
  <Container>
  <Image src={AvatarIcon} />
  </Container>
);

export default Avatar;
