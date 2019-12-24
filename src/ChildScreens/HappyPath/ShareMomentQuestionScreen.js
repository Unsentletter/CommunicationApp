import React from 'react';
import { View, Text, Button } from 'react-native';

const ShareMomentQuestionScreen = props => {
  return (
    <View>
      <Text>
        Sharing memories with our parents is another way to build better
        relationships.
      </Text>
      <Text>Would you like to share this with your parents?</Text>
      <Button
        title={'Yes'}
        onPress={() => props.navigation.navigate('MessageSentScreen')}
      />
      <Button
        title={'No'}
        onPress={() => props.navigation.navigate('MessageNotSentScreen')}
      />
    </View>
  );
};

export default ShareMomentQuestionScreen;
