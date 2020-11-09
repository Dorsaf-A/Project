import {Redirect, Route} from "react-router-dom"
import React from 'react'
import {useSelector} from 'react-redux'

function PrivateRoute({component:Component, ...rest}) {
    const isAuth = useSelector((state)=>state.authReducer.isAuth)

    const isStudent = useSelector((state)=>state.authReducer.isStudent)

    if(!isAuth && !isStudent){
        return <Redirect to="/"/>

    }
    return <Route component={Component} {...rest}/>

}

export default PrivateRoute
