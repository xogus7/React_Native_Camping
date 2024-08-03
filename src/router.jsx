import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTab from '@components/BottomTab';
import Splash from '@pages/Splash';
import Introduction from '@pages/Introduction';
import Camping from '@pages/Main/Camping';
import Articles from '@pages/Main/Articles';
import Community from '@pages/Main/Community';
import Settings from '@pages/Main/Settings';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
  const renderTabBar = (props) => (<BottomTab {...props} />);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={renderTabBar}>
      <Tab.Screen name="Camping" component={Camping} />
      <Tab.Screen name="Articles" component={Articles} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Introduction" component={Introduction} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;