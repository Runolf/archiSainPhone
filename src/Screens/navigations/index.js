import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './home';

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs.Navigator initialRouteName='Home'>
                <Tabs.Screen name="Home" component={HomeNavigation}/>
                <Tabs.Screen name="Objectifs" component={() => {}}/>
                <Tabs.Screen name="Challenges" component={() => {}}/>
                <Tabs.Screen name="Options" component={() => {}}/>
            </Tabs.Navigator>
        </NavigationContainer>
    );
}
 
export default AppNavigation;