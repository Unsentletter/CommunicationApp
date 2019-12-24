import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';

const feelings = {
  Ashamed: 1,
  Disappointed: 1,
  Hurt: 1,
  Lonely: 1,
  Miserable: 2,
  Unloved: 2,
  Annoyed: 1,
  Irritated: 1,
  Scared: 1,
  Worthless: 3,
  Insignificant: 3,
  Embarrased: 2
};

const DescribeFeelingsScreen = props => {
  const [feelingsObject, setFeelingsObject] = useState([]);

  const renderFeelings = () => {
    return Object.entries(feelings).map(([key, value]) => {
      return (
        <TouchableOpacity
          onPress={() => setFeelingsObject([...feelingsObject, value])}
          key={key}
        >
          <Text>{key}</Text>
        </TouchableOpacity>
      );
    });
  };

  const navigateToRelevantPage = () => {
    if (feelingsObject.includes(3)) {
      return props.navigation.navigate('LevelThreeScreen');
    }
    if (feelingsObject.includes(2)) {
      console.log('2');
      return props.navigation.navigate('LevelTwoScreen');
    }
    if (feelingsObject.includes(1)) {
      console.log('1');
      return props.navigation.navigate('LevelOneScreen');
    }
  };

  console.log(feelingsObject);

  return (
    <View>
      <Text>It looks like you are having a difficult time at the moment.</Text>
      <Text>
        It is really important to talk about things when they are not going
        well.
      </Text>
      <Text>What other words would describe how you are feeling?</Text>
      <View>{renderFeelings()}</View>
      <Button title={'Next'} onPress={navigateToRelevantPage} />
    </View>
  );
};

export default DescribeFeelingsScreen;
