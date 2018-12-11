import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 90px;
  height: 100%;
  background-color: ${(props) => props.theme.green};
`;

const Sidebar = () => (
  <Container>
    Menu
  </Container>
);

export default Sidebar;
