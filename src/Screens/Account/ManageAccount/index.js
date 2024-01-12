import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import useDataUser from '../../../Services/users/useDataUsers';
import {isAnEmail, isNumbers, doesNotCountainsNumbers, isInami} from '../../../Components/hooks/validators';
import useValidation from '../../../Components/hooks/useValidation';
import Errors from '../../_Shared/Errors';

const ManageAccount = ({navigation}) => {
    const {postUser} = useDataUser();

    let errors = [];

    const [mail, setMail] = useState();

    const [password, setPassword] = useState();

    const [checkPassword, setCheckPassword] = useState();

    const [firstname, setFirsname] = useState();

    const [lastname, setLastname] = useState();
    
    const [phone, setPhone] = useState();

    const [weight, setWeight] = useState();

    const [tall, setTall] = useState();

    const [inami, setInami] = useState();

    const [displayPage1, setDisplayPage1] = useState("");

    const [displayPage2, setDisplayPage2] = useState("none");

    const [displayPage3, setDisplayPage3] = useState("none");
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

    const onChangeInami = (val) => {
        setInami(val);
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

            const validate_lastname = useValidation(lastname, doesNotCountainsNumbers, "lastname contain numbers");
            //console.log(validate_lastname.isValid);
            if(!validate_lastname.isValid) errors.push(validate_lastname.errorMessage);
            
            console.log(errors);

            const validate_tall = useValidation(tall, isNumbers, "is not a number");
            const validate_weight = useValidation(weight, isNumbers, "is not a number");
            if(validate_tall.isValid && validate_weight.isValid) calculateIMC(tall, weight);

            const validate_inami = isInami(inami);
            return validate_email.isValid && validate_firstname.isValid && validate_lastname.isValid && validate_inami;
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if(validateForm()){
            let body = {
                email: mail,
                firstname,
                lastname,
                pwd: password,
                phone,
                weight,
                tall,
                inami
            }

            console.log(body);
            //createUser(body);
            errors = [];
            // redirection vers connexion
            //navigation.navigate("Landing");

        }else{
            errors = [];
            return;
        }

    }
    const changePage = () => {
        
        setDisplayPage1("none");
        setDisplayPage2("");
        setDisplayPage3("");
    }
    // bug of scrolling. We could choose to display the inami OR the weight/tall info as we dont need the weight/tall info for nutritionnist
    return (
        <View>
            
            <Errors errorList={errors}/>

            <ScrollView>

                <View style={{display: displayPage1}} id='page1'>
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
                </View>
                
                <View style={{display: displayPage2}}  id='page2'>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeFirstname}
                        value={firstname}
                        placeholder="firstname"
                    />
                    
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeLastname}
                        value={lastname}
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

                </View>
                <View style={{display: displayPage3}} id='page3'>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeInami}
                        value={inami}
                        placeholder="inami"
                    />
                </View>
                <Pressable style={styles.button} title="changePage" onPress={changePage}>
                    <Text>Change page</Text>
                </Pressable>
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

export default ManageAccount;