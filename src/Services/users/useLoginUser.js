import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {authenticationAction} from '../../redux/actions/index';

const useLoginUser = () => {
    const dispatch = useDispatch();

    const URL = "http://10.0.2.2:8080/authenticate";

    const authenticate = (email, pwd) => {
        let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
        };

        let body = {
            email: email,
            pwd: pwd
        }
        
        axios.post(URL, body, { headers })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log("error in post: ", error)
        })
    }

    return {
        authenticate
    };
}
 
export default useLoginUser;