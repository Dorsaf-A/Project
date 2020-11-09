import React, {  useState } from "react";
import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import {login} from "../../js/actions/authActions"

function Login () {
        const dispatch = useDispatch()
        let history = useHistory()
        const [formData,setFormData] = useState({
            email:"",
            passWord:"",
            type:"admin"
        })
        const handleFormChange = (e) =>{
            setFormData({...formData,[e.target.name]:e.target.value})
            console.log(formData)}

        const handleConfirm = ()=>{
            dispatch(login(formData));
            history.push("/dashboard")
        }

            return (
            <form>
                <h3>Log In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={handleFormChange} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="passWord" placeholder="Enter password" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={handleConfirm}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }


export default Login