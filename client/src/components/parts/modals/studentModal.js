import React,{useState} from 'react';
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css'

import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { register } from "../../../js/actions/authActions";


const Register =(props)=> {
    const [formData,setFormData] = useState(
        {
        name:"",
        lastName:"",
        email:"",
        passWord:"",
        birthDate: "",
        gender:"",
        profilePicture:"",
        parentName:"",
        parentPhone:0,
        note:"",
        level:1
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFormChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)}
    const handleConfirm = (props)=>{
        dispatch(register(formData))
        props.onHide()
    }

    return (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    ><h3 style={{textAlign:'center'}}>Student information</h3>
        <Modal.Body>
        <div className="form-group">
                    <label>First name</label>
                    <input  name="name" placeholder="First name" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"  name='lastName' placeholder="Last name" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Birth Date</label>
                    <input type="date"  name='birthDate' placeholder="Birth Date" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" onChange={handleFormChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    </select>
                    {/* <input type="text"  name='gender' placeholder="Gender" onChange={handleFormChange}/> */}
                </div>

                <div className="form-group">
                    <label>Profile Picture</label>
                    <input type="path"  name='profilePicture' placeholder="Add path to your profile Picture" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Parent name</label>
                    <input type="text"  name='parentName' placeholder="Parent name" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Parent phone</label>
                    <input type="text"  name='parentPhone' placeholder="Parent Phone" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Level</label>
                    <input type="number" name="level" min="0" max="6" onChange={handleFormChange}></input>
                    {/* <input type="text"  name='level' placeholder="Level" onChange={handleFormChange}/> */}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  name="email" placeholder="Enter email" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  name="passWord" placeholder="Enter password" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Note</label>
                    <input type="text"  name='note' placeholder="Write a note..." onChange={handleFormChange}/>
                </div>
        </Modal.Body>
        <Modal.Footer style={{display:'flex',justifyContent:'space-evenly'}}>
        <button type="submit" className="bttn " onClick={()=>handleConfirm(props)} >{props.edit?"Edit":"Save"}</button>  
        <button className='bttn' onClick={props.onHide}>Close</button>
        </Modal.Footer>
    </Modal>
    );
}

function StudentModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (<div>
        <button className='bttn bttnA' onClick={() => setModalShow(true)}>Add new student</button>
        <Register
        show={modalShow}
        onHide={() => setModalShow(false)}
        edit={false}
        />
    </div>
    );
}

export default StudentModal;