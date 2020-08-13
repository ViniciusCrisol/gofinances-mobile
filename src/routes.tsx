import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Transactions from './screens/Transactions';

const Tab = createBottomTabNavigator();

const icons: any = {
  Home: 'list',
  Transactions: 'dollar-sign',
};

const Routes: React.FC = () => (
  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const name = icons[route.name];
          return <Feather name={name} size={26} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          flexDirection: 'row',
        },
        activeTintColor: '#FF872C',
        inactiveTintColor: '#363F5F',
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Início' }} />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{ title: 'Criar' }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Routes;
