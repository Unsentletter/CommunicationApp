import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Friends from './src/Friends';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Friends: Friends
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
