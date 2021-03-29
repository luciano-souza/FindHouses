import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SplashScreen, HomeScreen, DetailScreen } from '../screens';

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export function Navigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ cardStyleInterpolator: forFade }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ cardStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}
