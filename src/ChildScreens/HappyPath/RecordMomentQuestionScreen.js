import React from 'react';
import { View, Button, Text } from 'react-native';

const RecordMomentQuestionScreen = props => {
  return (
    <View>
      <Text>Terrific.</Text>
      <Text>
        Recording moments like that make us happy can be great to look back on.
        Would you like to save this memory in some more detail?
      </Text>
      <Button
        title={'Yes'}
        onPress={() => props.navigation.navigate('RecordMomentScreen')}
      />
      <Button
        title={'No'}
        onPress={() => props.navigation.navigate('ShareMomentQuestionScreen')}
      />
    </View>
  );
};

export default RecordMomentQuestionScreen;
