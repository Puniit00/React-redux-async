import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes";

const initialState = {
    loading: true,
    users: [],
    error: ''
}

export const reducer = (state = initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading : true
            }

            case FETCH_USER_SUCCESS:
                return{
                    users: action.payload,
                    error : '',
                    loading:false
                }
            case FETCH_USER_FAILURE:
                return{
                    users:[],
                    error : action.payload,
                    loading:false
                }
                default : return state
    }
}