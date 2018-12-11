import React from 'react';
import styled from 'styled-components';
import apiUrl from 'config/api';
import Car from 'images/Car.svg';
import Next from 'images/Next.svg';
import { PhoneContainer, PageTitle } from './styled';

const Container = styled(PhoneContainer)`
  flex-direction: column;
`;

export const Title = styled(PageTitle)`
  z-index: 1;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Buttons = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: space-between;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  background: #fff;
  border-radius: 100%;
  border: 0;

  > * {
    fill: #33ab52;
  }
`;

export const ButtonText = styled.h3`
  color: #fff;
  text-align: center;
  font-size: 12px;
`;

class Confirm extends React.Component {
  render() {
    return (
      <Container>
        <Title>This is how you left the car</Title>
        <Img src={`${apiUrl}/latest/`} alt="latest" />
        <Buttons>
          <ButtonContainer>
            <Button>
              <Car />
            </Button>
            <ButtonText>
              GET BACK INTO THE CAR
            </ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <Button>
              <Next />
            </Button>
            <ButtonText>
              FINISH THE RIDE
            </ButtonText>
          </ButtonContainer>
        </Buttons>
      </Container>
    );
  }
}

export default Confirm;
