import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

const YesNoButtons = props => {
  return (
    <ButtonWrapper>
      <Button mode='contained' onPress={props.onPressYes}>
        Yes
      </Button>
      <Button mode='contained' onPress={props.onPressNo}>
        No
      </Button>
    </ButtonWrapper>
  );
};

export default YesNoButtons;

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;
