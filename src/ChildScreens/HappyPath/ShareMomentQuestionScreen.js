import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import YesNoButtons from '../../Components/YesNoButtons';

const ShareMomentQuestionScreen = props => {
  return (
    <View>
      <Text>
        Sharing memories with our parents is another way to build better
        relationships.
      </Text>
      <Text>Would you like to share this with your parents?</Text>
      <YesNoButtons
        onPressYes={() => props.navigation.navigate('MessageSentScreen')}
        onPressNo={() => props.navigation.navigate('MessageNotSentScreen')}
      />
    </View>
  );
};

export default ShareMomentQuestionScreen;
