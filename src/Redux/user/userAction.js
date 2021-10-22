import axios from "axios";
import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

export const fetchUserRequest =()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (payload)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload
    }
}

export const fetchUserFailure = (payload)=>{
    return{
        type: FETCH_USER_FAILURE,
        payload
    }
}

export const fetchUsers= ()=>{
    return function(dispatch){
        dispatch(fetchUserRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            // response will return array of users
            const users = response.data.map((item)=>item.id);
            dispatch(fetchUserSuccess(users))
        }).catch((error)=>{
            const errors = error.message;
            dispatch(fetchUserFailure(errors))
        })
    }
}


