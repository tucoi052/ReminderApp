import React, { useEffect } from 'react';

import BootSplash from 'react-native-bootsplash';
import { useSelector } from 'react-redux';

import { APP_SCREEN, RootStackParamList } from '@navigation/screen-types';
import { createStackNavigator } from '@react-navigation/stack';
import { selectAppToken } from '@redux-selector/app';
import { DateReminder } from '@features/date-time-reminder';
import { DescriptionReminder } from '@features/descriotion-reminder';
import { Home } from '@features/home';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state
  const token = useSelector(selectAppToken);

  // effect
  useEffect(() => {
    const id = setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 1000);
    return () => clearTimeout(id);
  }, []);

  // render
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {/* {token ? (
        <RootStack.Group
          screenOptions={{
            animationTypeForReplace: 'pop',
            gestureEnabled: false,
          }}>
          <RootStack.Screen name={APP_SCREEN.LOGIN} component={Login} />
        </RootStack.Group>
      ) : ( */}
      <RootStack.Group screenOptions={{}}>
        <RootStack.Screen name={APP_SCREEN.HOME} component={Home} />
        <RootStack.Screen
          name={APP_SCREEN.DATE_REMINDER}
          component={DateReminder}
        />
        <RootStack.Screen
          name={APP_SCREEN.DESCRIPTION_REMINDER}
          component={DescriptionReminder}
        />
      </RootStack.Group>
      {/* )} */}
    </RootStack.Navigator>
  );
};
