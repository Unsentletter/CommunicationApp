import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/Home';
import FeelingDescriptionScreen from './src/ChildScreens/HappyPath/FeelingDescriptionScreen';
import RecordMomentQuestionScreen from './src/ChildScreens/HappyPath/RecordMomentQuestionScreen';
import RecordMomentScreen from './src/ChildScreens/HappyPath/RecordMomentScreen';
import ShareMomentQuestionScreen from './src/ChildScreens/HappyPath/ShareMomentQuestionScreen';
import MessageSentScreen from './src/ChildScreens/HappyPath/MessageSentScreen';
import MessageNotSentScreen from './src/ChildScreens/HappyPath/MessageNotSentScreen';
import DescribeFeelingsScreen from './src/ChildScreens/SadPath/DescribeFeelingsScreen';
import LevelOneScreen from './src/ChildScreens/SadPath/LevelOneScreen';
import LevelTwoScreen from './src/ChildScreens/SadPath/LevelTwoScreen';
import LevelThreeScreen from './src/ChildScreens/SadPath/LevelThreeScreen';

const RootStack = createStackNavigator(
  {
    Home,
    FeelingDescriptionScreen,
    RecordMomentQuestionScreen,
    RecordMomentScreen,
    ShareMomentQuestionScreen,
    MessageSentScreen,
    MessageNotSentScreen,
    DescribeFeelingsScreen,
    LevelOneScreen,
    LevelTwoScreen,
    LevelThreeScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
