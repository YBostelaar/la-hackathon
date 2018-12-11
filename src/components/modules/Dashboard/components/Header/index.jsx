import React from 'react';
import styled from 'styled-components';

import Time from './components/Time';
import Logo from './components/Logo';
import Avatar from './components/Avatar';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 40px 20px 40px;
  position: relative;
  z-index: 1;
`;

const Header = () => (
  <Container>
    <Time />
    <Logo />
    <Avatar />
  </Container>
);

export default Header;
