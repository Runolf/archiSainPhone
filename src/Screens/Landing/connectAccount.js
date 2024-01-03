import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable,  } from 'react-native';
import useLoginUser from '../../Services/users/useLoginUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConnectAccount = ({navigation}) => {
    let bear = AsyncStorage.getItem("token");
    const {authenticate} = useLoginUser();

    const connectUser = (email, pwd) => {
        authenticate(email, pwd);
        navigation.navigate("Homescreen");
    }

    useEffect(() => {
        
        console.log("bear : ", bear);
    }, [bear])

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