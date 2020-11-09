import { GET_STUDENTS,EDITE_STUDENT } from "../js/constants/actionTypes"

const initialState ={
    students:[],
    msg:null
}

export default function(state=initialState,{type,payload}){
    switch(type){
        case GET_STUDENTS:
            return {...state,students:payload}
        case EDITE_STUDENT:
            return {...state,students:payload}
        default:return state
    }}