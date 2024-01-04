import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable,  } from 'react-native';
import useLoginUser from '../../Services/users/useLoginUser';

const ConnectAccount = ({navigation}) => {
    const {authenticate, getStoredData} = useLoginUser();

    const connectUser = async (email, pwd) => {
        await authenticate(email, pwd);
        let bearer = await getStoredData('token');
        
        // console.log("Bearer from connect user: ", bearer);
        
        if(typeof bearer == "string") {
            navigation.navigate("Homescreen");
        } else {
            // here need to be implemented the errors that must be displayed
            return
        }
        
    }

    const [mail, setMail] = useState();

    const [password, setPassword] = useState();

    const onChangeMail = (val) => {
        setMail(val);
    }

    const onChangePassword = (val) => {
        setPassword(val);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        connectUser(mail, password);
    }

    return (
        <View>

            <TextInput 
                style={styles.input}
                onChangeText={onChangeMail}
                value={mail}
                placeholder="email"
            />

            <TextInput 
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="password"
                secureTextEntry={true}
            />

            <Pressable style={styles.button} title='onSubmit' onPress={submitHandler}>
                <Text>Submit</Text>
            </Pressable>
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
    },
    button: {
        width: "auto",
        backgroundColor:"#841584",
        borderRadius: 8,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})
 
export default ConnectAccount;