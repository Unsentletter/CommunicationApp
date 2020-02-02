import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-paper';

const RecordMomentScreen = props => {
  return (
    <View>
      <Text>
        Write down your memory and remember to include the names of those
        involved as well as any other details.
      </Text>
      <TextInput></TextInput>
      <Button
        onPress={() => props.navigation.navigate('ShareMomentQuestionScreen')}
        mode='contained'
      >
        Save
      </Button>
    </View>
  );
};

export default RecordMomentScreen;
