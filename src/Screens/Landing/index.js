import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CreateAccount from './createAccount';
import ConnectAccount from './connectAccount';

const LandingPage = () => {

    const [hasAccount, setHasAccount] = useState(false);

    const onPressButton = () => {
        setHasAccount(!hasAccount);
    }

    return (
        <View style={styles.container}>
            {hasAccount ? 
            <ConnectAccount />
            :
            <CreateAccount />}

            <Pressable 
                onPress={onPressButton}
                style={styles.button}
            > 
                <Text style={styles.text}>Already has an account ?</Text>
            </Pressable>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"column",
        alignItems: "center",
    },
    text: {
        color: "white",
    },
    button: {
        width: "50%",
        backgroundColor:"#841584",
        borderRadius: 8,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export default LandingPage;