import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const RecordMomentScreen = props => {
  return (
    <View>
      <Text>
        Write down your memory and remember to include the names of those
        involved as well as any other details.
      </Text>
      <TextInput></TextInput>
      <Button
        title={'Save'}
        onPress={() => props.navigation.navigate('ShareMomentQuestionScreen')}
      />
    </View>
  );
};

export default RecordMomentScreen;
