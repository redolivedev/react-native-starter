import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Home from './screens/home';
import Test from './screens/test';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} title="Home" />
        <Scene key="test" component={Test} title="Test" />
      </Stack>
    </Router>
  );
};

export default App;
