
    import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import '../../slyles/buttonStyle.css'
import Table from 'react-bootstrap/Table'

import { deleteClub, editeClub, getClubs } from '../../../js/actions/clubActions';
import ClubModal from '../modals/ClubModal';
import EditClub from '../modals/editClub';


function ClubsManagement() {
    const dispatch = useDispatch();
  const clubs = useSelector((state) => state.clubReducer.clubs);
  useEffect(() => {
    dispatch(getClubs());
  }, []); 

    const deleteclub=(club)=>{
        dispatch(deleteClub(club._id))}

        


    return (<Router>
        <div>
          <div style={{display:'flex',justifyContent:'space-around'}}>
            <h2>Clubs List</h2> <ClubModal/></div>
           
            <div><Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Club</th>
                <th>Price</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {console.log(clubs)}
              {clubs.map((club,i) => (
                    
                    
                      <tr>
                        <td>{i+1}</td>
                        <td>{club.clubName} </td>
                        <td>{club.price}</td>
                        <td>{club.description}</td>
                        <td style={{display:'flex',justifyContent:'space-evenly'}}>
                          <EditClub club={club}/>
                          {' '}
                          <Link to="/clubsManagement" ><button className='bttn' onClick={()=>deleteclub(club)}>Delete</button></Link></td>
                      </tr>
              ))}
              </tbody>
              </Table>
            </div>
         </div>
        </Router>
    )
    }
export default ClubsManagement
