import axios from "axios"
import { GET_CLUBS ,EDITE_CLUB,REGISTER_CLUB} from "../constants/actionTypes"



export const getClubs=()=>async dispatch=>{
    try {
        const res = await axios.get('/api/club/allClubs');
        dispatch({
          type: GET_CLUBS,
          payload: res.data, 
        });
      } catch (error) {
        console.log(error);
      }
} 

export const addClub = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/club/addClub", formData);
    dispatch({
      type: REGISTER_CLUB,
      payload: res.data, 
    });
    dispatch(getClubs())
  } catch (error) {
    console.log(error);
  }
};

export const editeClub=(id,updateClub)=>async dispatch=>{
  try {
    const res = await axios.put(`/api/club/editClub/${id}`,updateClub);
    dispatch(getClubs());
  } catch (error) {
    console.log(error);
  }
}

export const deleteClub=(id)=>async dispatch=>{
  try {
    const res = await axios.delete(`/api/club/deleteClub/${id}`)
    dispatch(
     getClubs() 
    );
  } catch (error) {
    console.log(error);
  }
 
}