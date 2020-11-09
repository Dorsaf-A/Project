import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import '../../slyles/buttonStyle.css'
import Table from 'react-bootstrap/Table'

import { deleteStudent, editeStudent, getStudents } from '../../../js/actions/studentActions';
import StudentModal from '../modals/studentModal';
import Register from '../modals/studentModal';
import { register } from '../../../js/actions/authActions';
import EditStudent from '../modals/editStudent';
 
  function StudentsManagement() {
      const [name, setname] = useState("");
      const [lastName, setLastName] = useState("");
      const [email, setemail] = useState("");
      const [parentName, setName] = useState("");
      const [parentPhone, setPhone] = useState(0);
      const [level, setlevel] = useState(0)
      const [gender, setgender] = useState("")
      const [note, setnote] = useState("")
      const [profilePicture, setprofilePicture] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwGMSwf_66MSeHnmk8E8Er6whNcZ5vJ-iMaQ&usqp=CAU")
      const [id, setId] = useState(0)
      const [edit, setEdit] = useState(false)
  
      const dispatch = useDispatch();
    const students = useSelector((state) => state.studentReducer.students);
    useEffect(() => {
      dispatch(getStudents());
    }, []);
  
      const deletestudent=(student)=>{
          dispatch(deleteStudent(student._id))}
  
    const getPerson=(student)=>{
      setemail(student.email)
      setLastName(student.lastName)
      setName(student.parentName)
      setname(student.name)
      setPhone(student.parentPhone)
      setlevel(student.level)
      setgender(student.gender)
      setnote(student.note)
      setprofilePicture(student.profilePicture)
      setId(student._id)
      setEdit(true)
    }
  
    const [modalShow, setModalShow] = React.useState(false);
      return (<Router>
          <div>
            <div style={{display:'flex',justifyContent:'space-around'}}>
              <h2>Students List</h2> <StudentModal/></div>
             
              <div><Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Course</th>
                  <th>Gender</th>
                  <th>Parent Name</th>
                  <th>Parent Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  {console.log(students)}
                {students.map((student,i) => (
                      
                      
                        <tr>
                          <td>{i+1}</td>
                          <td>{student.name} {student.lastName}</td>
                          <td>{student.level}</td>
                          <td>{student.gender}</td>
                          <td>{student.parentName}</td>
                          <td>{student.parentPhone}</td>
                          <td style={{display:'flex',justifyContent:'space-evenly'}}>
                            {/* <button className='bttn' onClick={()=>getPerson(student)}>Edit</button> */}
                            {/* <button className='bttn' onClick={() => {setModalShow(true);}}>Edit</button> */}
          {/* <Register
          show={modalShow}
          onHide={() => setModalShow(false)}
          edit={edit}
          studentt={getPerson(student)}
          action={edit?editeStudent(student._id):register}
          /> */}
                            <EditStudent student={student}/>
                            {' '}
                            <Link to="/studentsManagement" ><button className='bttn' onClick={()=>deletestudent(student)}>Delete</button></Link></td>
                        </tr>
                ))}
                </tbody>
                </Table>
              </div>
           </div>
          </Router>
      )
  }
  
  export default StudentsManagement

