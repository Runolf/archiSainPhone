import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CreateAccount from './createAccount';
import ConnectAccount from './connectAccount';
import ReduxTest from '../TryComponent/reduxTest';

const LandingPage = ({navigation}) => {

    const [hasAccount, setHasAccount] = useState(false);

    const onPressButton = () => {
        setHasAccount(!hasAccount);
    }

    return (
        <View style={styles.container}>

            <ReduxTest />

            {hasAccount ? 
            <>
                <Text>connect account</Text>
                <ConnectAccount />  
            </>
            :
            <>
                <Text>Create account</Text>
                <CreateAccount />
            </>
            }

            <Pressable 
                onPress={onPressButton}
                style={styles.button}
            > 
                {hasAccount? <Text style={styles.text}>Doesn't have an account ?</Text> : <Text style={styles.text}>Already has an account ?</Text> }
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