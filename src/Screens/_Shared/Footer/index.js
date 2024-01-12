import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ElementFooter from './elementFooter';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <ElementFooter title="test1"/>
            <ElementFooter title="test2"/>
            <ElementFooter title="test3"/>
            <ElementFooter title="test4"/>
        </View>
    );
}
 
export default Footer;

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgb(54, 99, 99)",
    }
});