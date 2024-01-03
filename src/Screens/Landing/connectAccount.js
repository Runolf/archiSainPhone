import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import useLoginUser from '../../Services/users/useLoginUser';

const ConnectAccount = () => {

    const {authenticate} = useLoginUser();

    const connectUser = (email, pwd) => {
        authenticate(email, pwd)
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

            <Text>your mail is {mail}</Text>
            <Text> your password is {password}</Text>

            <Button title='onSubmit' onPress={submitHandler}/>
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