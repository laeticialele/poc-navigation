import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Accueil from './screens/Accueil';
import Login from './screens/Login';
import Sigin from './screens/Sigin';
import MenuScreen from './screens/MenuScreen';
import AjouterImage from './screens/AjouterImage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Accueil" component={Accueil}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sigin" component={Sigin} />
        <Stack.Screen name="MenuScreen"  component={MenuScreen}/>
        <Stack.Screen name="ajouter"  component={AjouterImage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;