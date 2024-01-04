import axios from 'axios';
import {postUserAction} from '../../redux/actions/usersActions';
import { useDispatch } from 'react-redux';


const useDataUser = () => {
    const dispatch = useDispatch();
    const URL = "http://10.0.2.2:8080/api/users";
    const BEARER = "";

    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }



    const postUser = async (newUser) => {
        let body = JSON.stringify(newUser);
        
        await axios.post(`${URL}/user`, body, {headers})
        .then(res => {
            dispatch(postUserAction(body));
        })
        .catch(error => {
            console.log("error post user: ", error)
        });
    
    }
    
    return {
        postUser
    };
}
 
export default useDataUser;