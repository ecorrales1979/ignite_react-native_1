import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

export const App: React.FC = () => {
  return (
    <>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor="#121015" />
    </>
  );
};
