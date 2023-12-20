import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ConnectAccount = () => {

    const [mail, setMail] = useState();

    const onChangeMail = () => {

    }

    return (
        <View>
            <Text>connect account</Text>

            <TextInput 
                style={styles.input}
                onChangeText={onChangeMail}
                value={mail}
                placeholder="email"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})
 
export default ConnectAccount;