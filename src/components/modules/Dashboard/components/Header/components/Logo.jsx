import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoIcon from 'images/logo.png';

const StyledLogo = styled(Link)`
`;

const Image = styled.img`
  width: 197px;
`;

const Logo = () => (
  <StyledLogo to="/">
    <Image src={LogoIcon} />
  </StyledLogo>
);

export default Logo;
