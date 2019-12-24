import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

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
          <TouchableOpacity
            key={word}
            onPress={() => setDescriptiveWords([...descriptiveWords, word])}
          >
            <Text>{word}</Text>
          </TouchableOpacity>
        );
      })}
      <Button
        title={'Next'}
        onPress={() => props.navigation.navigate('RecordMomentQuestionScreen')}
      />
    </View>
  );
};

export default FeelingDescriptionScreen;
