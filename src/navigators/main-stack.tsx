import React from 'react';
import { SCREENS } from 'src/constants';
import { AppScreen } from 'src/screens/apps/app.screen';

import { Stack } from './Stack';

export const MainStack: React.FC = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // navigationBarColor: colors.background,
          orientation: 'landscape',
        }}
        // initialRouteName={SCREENS.Main}
        initialRouteName={SCREENS.Home}
      >
        <Stack.Group>
          <Stack.Screen name={SCREENS.Home} component={AppScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </>
  );
};
