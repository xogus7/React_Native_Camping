import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '@pages/Splash';
import Introduction from '@pages/Introduction';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Introduction" component={Introduction} />
    </Stack.Navigator>
  );
};

export default Router;