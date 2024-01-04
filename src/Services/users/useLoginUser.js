import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {authenticationAction} from '../../redux/actions/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLoginUser = () => {
    const dispatch = useDispatch();

    const URL = "http://10.0.2.2:8080/authenticate";

    const authenticate = async (email, pwd) => {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
        };

        let body = {
            email: email,
            pwd: pwd
        }
        
       await axios.post(URL, body, { headers })
        .then(res => {
            // console.log("axios post")
            storeData("token", res.data["token"])
            //AsyncStorage.setItem("token", res.data["token"]);
            dispatch(authenticationAction(res.data));
        })
        .catch(error => {
            console.log("auth error: ", error);
        })
    }

    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value)
        } catch (error) {
            console.log("error storeData: ", error);
        }
    }

    const getStoredData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value;
        } catch (error) {
            console.log("error getStoredData: ", error);
        }
    }

    const removeItemStore = async (key) => {
        AsyncStorage.removeItem(key)
    }

    return {
        authenticate,
        storeData,
        getStoredData,
        removeItemStore
    };
}
 
export default useLoginUser;