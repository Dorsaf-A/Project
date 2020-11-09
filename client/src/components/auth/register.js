import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { register } from "../../js/actions/authActions";

const Register =()=> {
    const [formData,setFormData] = useState({
        name:"",
        lastName:"",
        email:"",
        passWord:""
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFormChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)}
    const handleConfirm = ()=>{
        dispatch(register(formData))
        history.push("/profile")
    }
        return (<Router>
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input className="form-control" name="name" placeholder="First name" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" name='lastName' placeholder="Last name" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="passWord" placeholder="Enter password" onChange={handleFormChange}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleConfirm}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered ? <Link ><a onClick={() => { document.location.href = "/login"; }}>Log in</a></Link>
                </p>
            </form>
            </Router>
        );
    }

    export default Register