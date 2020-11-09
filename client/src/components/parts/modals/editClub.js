import React,{useState} from 'react';
import 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css'

import {useDispatch} from "react-redux"
import { useHistory } from "react-router-dom";
import { editeClub, getClubs } from '../../../js/actions/clubActions';


const Register =(props)=> {
    const [formData,setFormData] = useState(
        {
        clubName:props.club.clubName,
        price:props.club.price,
        description:props.club.description,
        picture:props.club.picture,
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleFormChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        console.log(formData)}
    const handleConfirm = (props)=>{
        dispatch(editeClub(props.club._id,{...formData}))
        console.log(formData)
        dispatch(getClubs())
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
                    <label>Club</label>
                    <input  name="clubName" placeholder="Club..." value={formData.clubName} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Price</label>
                    <input type="text"  name='price' placeholder="Price" value={formData.price} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <input type="text"  name='description' placeholder="Description" value={formData.description} onChange={handleFormChange}/>
                </div>

                <div className="form-group">
                    <label>Picture</label>
                    <input type="text"  name='picture' placeholder="Add a path to aPicture" value={formData.picture} onChange={handleFormChange}/>
                </div>


                
        </Modal.Body>
        <Modal.Footer style={{display:'flex',justifyContent:'space-evenly'}}>
        <button type="submit" className="bttn " onClick={()=>handleConfirm(props)} >{props.edit?"Edit":"Save"}</button>  
        <button className='bttn' onClick={props.onHide}>Close</button>
        </Modal.Footer>
    </Modal>
    );
}

function EditClub({club}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (<div>
        <button className='bttn ' onClick={() => setModalShow(true)}>Edit</button>
        <Register
        show={modalShow}
        onHide={() => setModalShow(false)}
        edit={true}
        club={club}
        />
    </div>
    );
}

export default EditClub;