import {
  LOGIN_USER,
  LOGOUT,
  REGISTER_STUDENT,
  GET_AUTH_USER,
  AUTH_ERROR,
  SET_LOADING,
  LOGIN_STUDENT,
} from "../js/constants/actionTypes";

const initialState ={
    token:localStorage.getItem("token"),
    user: null,
    student:null,
    isAuth:false,
    isStudent:false,
    isLoading:false,
    msg:null
}

export default function(state=initialState,{type,payload}){
    switch(type){
        case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return {...state,isLoading:false,isAuth:true,...payload}
            case LOGIN_STUDENT:
            localStorage.setItem("token",payload.token)
            return {...state,isLoading:false,isStudent:true,...payload}
            case LOGOUT:
                localStorage.removeItem("token")
                return{...state,user:null,isAuth:false,isStudent:false,token:null}
            case REGISTER_STUDENT:
                localStorage.setItem("token",payload.token)
            return {...state,isLoading:false,isStudent:true,...payload}
        case GET_AUTH_USER:{
            if(!state.student){
            return {...state,isLoading:false,isAuth:true,...payload}
            }
                return {...state,isLoading:false,isStudent:true,...payload}
            }
        case SET_LOADING:
            return {...state,isLoading:true}
    default:
        return state
    }
}