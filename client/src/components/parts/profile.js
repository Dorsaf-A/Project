import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import '../slyles/style.css'

function Profile({note,setNote}) {
    const student = useSelector((state)=>state.authReducer.student)
    const [showForm, setshowForm] = useState(false)

    return (
        <div className='studentCard'>
            <div className='studentDetails'><img className='profileImg' src={student.profilePicture?student.profilePicture : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwGMSwf_66MSeHnmk8E8Er6whNcZ5vJ-iMaQ&usqp=CAU"} alt={student.name}/>
            <div className='detail'><h2>{student.name} {student.lastName}</h2>
            <table>
                <td>
                    <tr>Course</tr>
                    <tr>Birth date</tr>
                    <tr>Gender</tr>
                    <tr>Parent Name</tr>
                    <tr>Parent Phone</tr>
                    <tr>Email</tr>
                    <tr>Note</tr>
                </td>
                <td>
                    <tr>: {student.level}</tr>
                    <tr>: {student.birthDate}</tr>
                    <tr>: {student.gender}</tr>
                    <tr>: {student.parentName} {student.lastName}</tr>
                    <tr>: {student.parentPhone}</tr>
                    <tr>: {student.email}</tr>
                    <tr>: {student.note || note}</tr>
                </td>
            </table>
            {!showForm?
        <button className='bttn bttnA' onClick={()=>setshowForm(true)}>Add Note</button>
         :<form style={{display:'flex',justifyContent:'space-around'}}>
    <input type='text' placeholder='Write your note here...' onChange={(e)=>setNote(e.target.value)}></input>
    <button onClick={()=>setshowForm(false)}>Add</button>
    </form> }
            </div>
           
            </div>
           
        </div>
    )
}

export default Profile
