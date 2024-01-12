import React, { useState } from 'react';
import AppCss from './Var_Css';
import Footer from './src/Screens/_Shared/Footer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/Screens/Landing';
import HomeScreen from './src/Screens/Landing/homeScreen';
import {store} from './src/redux/store';
import { Provider } from 'react-redux';
import ManageAccount from './src/Screens/Account/ManageAccount';


const App = () => {
  
  const Stack = createNativeStackNavigator();

  const isDarkMode = useColorScheme() === 'dark';
  const [isConnected, setIsConnected] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
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
          {isConnected && <Footer />}
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'red',
    background: 'teal',    
    card: 'rgb(255, 255, 255)',
    text: 'white',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default App;
