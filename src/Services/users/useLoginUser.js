import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {authenticationAction} from '../../redux/actions/index';

const useLoginUser = () => {
    const dispatch = useDispatch();

    const URL = "http://10.0.2.2:8080/authenticate";

    const authenticate = (email, pwd) => {
        try {
            const body = {
                email: email,
                pwd: pwd
            }
            
            const response = axios.post(`${URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify(body)
            })

            console.log("res auth: ", response);

            dispatch(authenticationAction(response.data));

        } catch (error) {
            console.log("auth error: " , error)
        }
    }

    return {
        authenticate
    };
}
 
export default useLoginUser;