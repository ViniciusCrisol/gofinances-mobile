import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';
import Layout from './components/Layout';

const App: React.FC = () => (
  <Layout>
    <StatusBar barStyle="light-content" backgroundColor="#3d22a8" translucent />
    <Routes />
  </Layout>
);

export default App;
