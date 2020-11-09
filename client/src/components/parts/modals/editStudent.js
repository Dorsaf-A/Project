import React,{useState} from 'react';
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css'

import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { editeStudent, getStudents } from '../../../js/actions/studentActions';


const Register =(props)=> {
    const [formData,setFormData] = useState(
        {
        name:props.student.name,
        lastName:props.student.lastName,
        email:props.student.email,
        passWord:props.student.passWord,
        birthDate:props.student.birthDate,
        gender:props.student.gender,
        profilePicture:props.student.profilePicture,
        parentName:props.student.parentName,
        parentPhone:props.student.parentPhone,
        note:props.student.note,
        level:props.student.level
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFormChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)}
    const handleConfirm = (props)=>{
        dispatch(editeStudent(props.student._id,{...formData}))
        console.log(formData)
        dispatch(getStudents())
        props.onHide()
        history.push('/dashboard')
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
                    <input  name="name" placeholder="First name" value={formData.name} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"  name='lastName' placeholder="Last name" value={formData.lastName} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Birth Date</label>
                    <input type="date"  name='birthDate' placeholder="Birth Date" value={formData.birthDate} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleFormChange}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    </select>
                    {/* <input type="text"  name='gender' placeholder="Gender" onChange={handleFormChange}/> */}
                </div>

                <div className="form-group">
                    <label>Profile Picture</label>
                    <input type="path"  name='profilePicture' placeholder="Add path to your profile Picture" value={formData.profilePicture} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Parent name</label>
                    <input type="text"  name='parentName' placeholder="Parent name" value={formData.parentName} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Parent phone</label>
                    <input type="text"  name='parentPhone' placeholder="Parent Phone" value={formData.parentPhone} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Level</label>
                    <input type="number" name="level" min="0" max="6" value={formData.level} onChange={handleFormChange}></input>
                    {/* <input type="text"  name='level' placeholder="Level" onChange={handleFormChange}/> */}
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"  name="email" placeholder="Enter email" value={formData.email} onChange={handleFormChange}/>
                </div>

                {/* <div className="form-group">
                    <label>Password</label>
                    <input type="password"  name="passWord" placeholder="Enter password" onChange={handleFormChange}/>
                </div> */}

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

function EditStudent({student}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (<div>
        <button className='bttn ' onClick={() => setModalShow(true)}>Edit</button>
        <Register
        show={modalShow}
        onHide={() => setModalShow(false)}
        edit={true}
        student={student}
        />
    </div>
    );
}

export default EditStudent;