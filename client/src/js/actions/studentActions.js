import axios from "axios"
import { GET_STUDENTS ,EDITE_STUDENT} from "../constants/actionTypes"

export const getStudents=()=>async dispatch=>{
    try {
        const res = await axios.get('/api/student/allStudents');
        dispatch({
          type: GET_STUDENTS,
          payload: res.data, 
        });
      } catch (error) {
        console.log(error);
      }
}

export const editeStudent=(id,updateStudent)=>async dispatch=>{
  try {
    const res = await axios.put(`/api/student/editStudent/${id}`,updateStudent);
    dispatch(getStudents());
  } catch (error) {
    console.log(error);
  }
}

export const deleteStudent=(id)=>async dispatch=>{
  try {
    const res = await axios.delete(`/api/student/deleteStudent/${id}`)
    dispatch(
     getStudents() 
    );
  } catch (error) {
    console.log(error);
  }
 
}  