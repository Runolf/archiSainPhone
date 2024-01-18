import React from 'react';
import { View } from 'react-native'
import LandingPage from './src/Screens/Landing';
import HomeScreen from './src/Screens/Landing/homeScreen';
import ManageAccount from './src/Screens/Account/ManageAccount';

const HomeNavigation = () => {
    return (
        <NavigationContainer theme={Theme}>
        <Stack.Navigator 
          initialRouteName="Landing" 
          screenOptions={{
            headerShown: false
        }}>
          <Stack.Screen name="Landing" component={LandingPage}/>
          <Stack.Screen name="Homescreen" component={HomeScreen}/>
          <Stack.Screen name="ManageAccount" component={ManageAccount}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    );
}
 
export default HomeNavigation;