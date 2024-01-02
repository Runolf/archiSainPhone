import React from 'react';
import AppCss from './Var_Css';
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
import ReduxTest from './src/Screens/TryComponent/reduxTest';
import {store} from './src/redux/store';
import { Provider } from 'react-redux';

const App = () => {
  
  const Stack = createNativeStackNavigator();

  const isDarkMode = useColorScheme() === 'dark';

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
            <Stack.Screen name="ReduxTest" component={ReduxTest}/>
          </Stack.Navigator>
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
