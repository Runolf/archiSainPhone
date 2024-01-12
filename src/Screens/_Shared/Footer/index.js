import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ElementFooter from './elementFooter';

const Footer = ({navigation}) => {
    return (
        <View style={styles.footer}>
            <ElementFooter navigation={navigation} title="Objectif" logo="sports-score"/>
            <ElementFooter navigation={navigation} title="Challenge" logo="sports-mma"/>
            <ElementFooter navigation={navigation} title="Options" logo="more-horiz"/>
        </View>
    );
}
 
export default Footer;

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "rgb(54, 99, 99)",
        padding: 15
    }
});