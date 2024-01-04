import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native';

const CreateAccount = () => {

    const [mail, setMail] = useState();

    const [password, setPassword] = useState();

    const [checkPassword, setCheckPassword] = useState();

    const [firstname, setFirsname] = useState();

    const [lastName, setLastname] = useState();
    
    const [phone, setPhone] = useState();

    const [weight, setWeight] = useState();

    const [tall, setTall] = useState();

   // const [picture, setPicture] = useState();
    
    const onChangeMail = (val) => {
        setMail(val);
    }

    const onChangePassword = (val) => {
        setPassword(val);
    }

    const onChangeCheckPassword = (val) => {
        setCheckPassword(val);
    }

    const onChangeFirstname  = (val) => {
        setFirsname(val);
    }

    const onChangeLastname  = (val) => {
        setLastname(val);
    }

    const onChangePhone  = (val) => {
        setPhone(val);
    }

    const onChangeWeight  = (val) => {
        setWeight(val);
    }

    const onChangeTall  = (val) => {
        setTall(val);
    }

    /*
    const onChangePicture  = (val) => {
        setPicture(val);
    }
    */
    const submitHandler = (event) => {
        event.preventDefault();

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
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeCheckPassword}
                value={checkPassword}
                placeholder="check password"
                secureTextEntry={true}
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeFirstname}
                value={firstname}
                placeholder="firstname"
            />
            
            <TextInput
                style={styles.input}
                onChangeText={onChangeLastname}
                value={lastName}
                placeholder="lastname"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeWeight}
                value={weight}
                placeholder="weight"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeTall}
                value={tall}
                placeholder="tall"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangePhone}
                value={phone}
                placeholder="phone"
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

export default CreateAccount;