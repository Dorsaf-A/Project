import React,{useState} from 'react';
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css'

import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { addClub } from '../../../js/actions/clubActions';


const Register =(props)=> {
    const [formData,setFormData] = useState(
        {
        clubName:"",
        price:"",
        description:"",
        picture:"",
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFormChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)}
    const handleConfirm = (props)=>{
        dispatch(addClub(formData))
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
                    <label>Club</label>
                    <input  name="clubName" placeholder="Club" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="text"  name='price' placeholder="Price" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text"  name='description' placeholder="Description" onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Picture</label>
                    <input type="path"  name='picture' placeholder="Add a path to a Picture" onChange={handleFormChange}/>
                </div>

        </Modal.Body>
        <Modal.Footer style={{display:'flex',justifyContent:'space-evenly'}}>
        <button type="submit" className="bttn " onClick={()=>handleConfirm(props)} >{props.edit?"Edit":"Save"}</button>  
        <button className='bttn' onClick={props.onHide}>Close</button>
        </Modal.Footer>
    </Modal>
    );
}

function ClubModal() {
    const [modalShow, setModalShow] = React.useState(false);

    return (<div>
        <button className='bttn bttnA' onClick={() => setModalShow(true)}>Add new club</button>
        <Register
        show={modalShow}
        onHide={() => setModalShow(false)}
        edit={false}
        />
    </div>
    );
}

export default ClubModal;