import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const useFetchUsers = () => {
    const dispatch = useDispatch();

    const URL = "";
    const BEARER = "";

    const getAllRole = async () => {
        try {
            
        } catch (error) {
            console.log("getAllRole: " , error)
        }
    }

    return (
        getAllRole
    );
}
 
export default useFetchUsers;