import { GET_CLUBS,EDITE_CLUB } from "../js/constants/actionTypes"

const initialState ={
    clubs:[],
    msg:null
}

export default function(state=initialState,{type,payload}){
    switch(type){
        case GET_CLUBS:
            return {...state,clubs:payload}
        case EDITE_CLUB:
            return {...state,clubs:payload}
        default:return state
    }}