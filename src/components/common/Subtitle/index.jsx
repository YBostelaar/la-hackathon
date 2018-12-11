import styled from 'styled-components';

const Subtitle = styled.h2`
  color: ${(props) => props.green ? props.theme.green : props.theme.white};
  margin: ${(props) => props.green ? '0' : '0 0 42px'};
  font-size: 30px;
`;

export default Subtitle;
