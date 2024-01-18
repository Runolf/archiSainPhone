import React, { useEffect, useState } from 'react';
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
import Navigation from './src/Screens/navigations/index';
import {store} from './src/redux/store';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  
  const isDarkMode = useColorScheme() === 'dark';
  const [isConnected, setIsConnected] = useState(false);
  let user = AsyncStorage.getItem("user");

  console.log('user exist: ', user);
  // maybe need to use useMemo if it's bugging
 
  useEffect(() => {
    if(user) {
      setIsConnected(!isConnected);
    }
  }, [])

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigation />
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
