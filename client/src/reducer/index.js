import {combineReducers} from "redux"
import authReducer from "./authReducer"
import studentReducer from "./studentReducer"
import clubReducer from "./clubReducer"


export default combineReducers({
    authReducer,
    studentReducer,
    clubReducer,
})