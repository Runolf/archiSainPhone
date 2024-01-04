import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import useDataUser from '../../Services/users/useDataUsers';
import {isAnEmail, isNumbers, doesNotCountainsNumbers} from '../../Components/hooks/validators';
import useValidation from '../../Components/hooks/useValidation';
import Errors from '../_Shared/Errors';

const CreateAccount = ({navigation}) => {
    const {postUser} = useDataUser();

    let errors = [];

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

    const calculateIMC = (tall, weight) => {
        let tallMetter = tall / 100;
        let imc = weight / (tallMetter * tallMetter);
        console.log("IMC: " + imc);
    }
    /*
    const onChangePicture  = (val) => {
        setPicture(val);
    }
    */

    const createUser = (newUser) => {
        postUser(newUser);
    }
    const validateForm = () => {

        if(password === checkPassword){
            const validate_email = useValidation(mail, isAnEmail, "email is invalid");
            //console.log(validate_email.isValid);
            if(!validate_email.isValid) errors.push(validate_email.errorMessage);

            const validate_firstname = useValidation(firstname, doesNotCountainsNumbers, "firstname contain numbers");
            //console.log(validate_firstname.isValid);
            if(!validate_firstname.isValid) errors.push(validate_firstname.errorMessage);

            const validate_lastname = useValidation(lastName, doesNotCountainsNumbers, "lastname contain numbers");
            //console.log(validate_lastname.isValid);
            if(!validate_lastname.isValid) errors.push(validate_lastname.errorMessage);
            
            //console.log(errors);

            const validate_tall = useValidation(tall, isNumbers, "is not a number");
            const validate_weight = useValidation(weight, isNumbers, "is not a number");
            if(validate_tall.isValid && validate_weight.isValid) calculateIMC(tall, weight);

            return validate_email.isValid && validate_firstname.isValid && validate_lastname.isValid;
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(validateForm()){
            let body = {
                mail,
                firstname,
                lastName,
                password,
                phone,
                weight,
                tall
            }
            //createUser(body);
            errors = [];
            // redirection vers connexion
            navigation.navigate("Landing");

        }else{
            errors = [];
            return;
        }

    }

    return (
        <View>
            
            <Errors errorList={errors}/>

            <ScrollView>
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
            </ScrollView>

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