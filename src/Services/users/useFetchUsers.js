import React from 'react';
import axios from 'axios';
import {getAllUsersAction, getOneUserByMailAction} from '../../redux/actions/index';
import { useDispatch } from 'react-redux';


const useFetchUsers = ({bearer}) => {
    const dispatch = useDispatch();

    const URL = "http://10.0.2.2:8080/api/users";
    const BEARER = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGV4YW5kcmVsaXNraWV3aWN6QGhvdG1haWwuY29tIiwiZXhwIjoxNzA0ODA2MTgwLCJpYXQiOjE3MDQyMDEzODB9.FBGjQHKWD5pYxILLmBMEWRlpYF3oYY0n_SIY0lO8Ot8W8HxrCHnMBkDocpjDUzB1aRJ5DLoCj5tz_t4ZNExRKw";

    const getAllRole = async () => {
        try {
            const response = axios.get(`${URL}`, {
                params: {

                },
                headers: {
                    Authorization: `Bearer ${BEARER}`
                }
            })
        } catch (error) {
            console.log("getAllRole: " , error)
        }
    }

    const getAllUsers = async () => {
        try {
            const response = await axios.get(`${URL}/users`, {
                method: 'get',
                mode: "cors",
                params: {
                    
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${BEARER}`,
                    "Access-Control-Allow-Origin": "*",
                }
            })

            dispatch(getAllUsersAction(response.data));
        } catch (error) {
            console.log("getAllUsers: " , error)
        }
    }

    const getOneUserByMail = async (mail) => {
        try {
            const response = await axios.get(`${URL}/userMail/${mail}`, {
                method: 'get',
                mode: "cors",
                params: {
                    
                },
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${BEARER}`,
                    "Access-Control-Allow-Origin": "*",
                }
            })
            
            dispatch(getOneUserByMailAction(response.data));
        } catch (error) {
            
        }
    }

    return {
        getAllRole,
        getAllUsers
    };
}
 
export default useFetchUsers;