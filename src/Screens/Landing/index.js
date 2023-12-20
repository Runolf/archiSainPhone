import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LandingPage = () => {
    return (
        <View>
            <Text  style={styles.container}>
                Landing page
            </Text>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        color: "white",
    }
});

export default LandingPage;