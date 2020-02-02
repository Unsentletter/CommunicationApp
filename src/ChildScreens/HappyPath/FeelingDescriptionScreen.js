import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';

const words = ['Confident', 'Excited', 'Loved', 'Proud', 'Relaxed', 'Thankful'];

const FeelingDescriptionScreen = props => {
  const [descriptiveWords, setDescriptiveWords] = useState([]);
  console.log(descriptiveWords);
  return (
    <View>
      <Text>Fantastic! Lets look a little closer at that.</Text>
      <Text>
        What other words would you use to describe how you are feeling?
      </Text>
      {words.map(word => {
        return (
          <Button
            key={word}
            onPress={() => setDescriptiveWords([...descriptiveWords, word])}
          >
            {word}
          </Button>
        );
      })}
      <Button
        onPress={() => props.navigation.navigate('RecordMomentQuestionScreen')}
        mode='contained'
      >
        Next
      </Button>
    </View>
  );
};

export default FeelingDescriptionScreen;
