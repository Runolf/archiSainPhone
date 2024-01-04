import React from 'react';
import { View, Text, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {

    const deconnect = () => {
        AsyncStorage.removeItem("token");

        console.log("remove token ",AsyncStorage.getItem("token"));
        navigation.navigate("Landing");
    }
    return (
        <View>
            <Text>Home screen</Text>
            <Pressable onPress={deconnect}>
                <Text>Deconnect</Text>
            </Pressable>
        </View>
    );
}
 
export default HomeScreen;