import styled from 'styled-components';

const Button = styled.button`
  color: ${(props) => props.theme.green};
  text-decoration: none;
  border: 1px solid ${(props) => props.theme.grey};
  -webkit-appearance: none;
  box-shadow: none;
  background-color: ${(props) => props.theme.black};
  height: 75px;
  width: 225px;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat';
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.white};
  }
`;

export default Button;
