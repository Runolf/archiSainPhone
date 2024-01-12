import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ElementFooter from './elementFooter';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <ElementFooter title="Objectif" logo="sports-score"/>
            <ElementFooter title="Challenge" logo="sports-mma"/>
            <ElementFooter title="Compte" logo="account-box"/>
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