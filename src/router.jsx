import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTab from '@components/BottomTab';
import Splash from '@pages/Splash';
import Introduction from '@pages/Introduction';
import Login from '@pages/Main/Auth/Login';
import Register from '@pages/Main/Auth/Register';
import Camping from '@pages/Main/Home/Camping';
import CampingDetail from '@pages/Main/Home/CampingDetail';
import Articles from '@pages/Main/Article/Articles';
import ArticleDetail from '@pages/Main/Article/ArticleDetail';
import Community from '@pages/Main/Community/Community';
import CommunityDetail from '@pages/Main/Community/CommunityDetail';
import Settings from '@pages/Main/Setting/Settings';
import ProfileDetail from '@pages/Main/Setting/ProfileDetail';
import Add from '@pages/Main/Add';


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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="CampingDetail" component={CampingDetail} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetail} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetail} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
    </Stack.Navigator>
  );
};

export default Router;