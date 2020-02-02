import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

import YesNoButton from '../../Components/YesNoButtons';

const RecordMomentQuestionScreen = props => {
  return (
    <View>
      <Text>Terrific.</Text>
      <Text>
        Recording moments like that make us happy can be great to look back on.
        Would you like to save this memory in some more detail?
      </Text>
      <YesNoButton
        onPressYes={() => props.navigation.navigate('RecordMomentScreen')}
        onPressNo={() => props.navigation.navigate('ShareMomentQuestionScreen')}
      />
    </View>
  );
};

export default RecordMomentQuestionScreen;

const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

// <ButtonWrapper>
//         <Button
//           onPress={() => props.navigation.navigate('RecordMomentScreen')}
//           mode='contained'
//         >
//           Yes
//         </Button>
//         <Button
//           onPress={() => props.navigation.navigate('ShareMomentQuestionScreen')}
//           mode='contained'
//         >
//           No
//         </Button>
//       </ButtonWrapper>
