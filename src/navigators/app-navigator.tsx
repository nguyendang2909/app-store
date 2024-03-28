import React from 'react';

import { MainStack } from './main-stack';

export const AppNavigator: React.FC = () => {
  // const isAuthenticated = useAppSelector(state => state.app.accessToken);

  // return <>{isAuthenticated ? <MainStack /> : <AuthStack />}</>;
  return <MainStack />;
};
