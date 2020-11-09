import React from 'react'
import {useSelector} from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from './slides';

function Home() {
    let isAuth = useSelector(state => state.authReducer.isAuth)
  let isStudent = useSelector(state => state.authReducer.isStudent) 

  let student = useSelector(state => state.authReducer.student)
  let user = useSelector(state => state.authReducer.user)

    return (
        <div>
            {(isAuth || isStudent)&&
            <div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Hello {isStudent?<span>{student.name} {student.lastName} </span>:<span>{user.name} {user.lastName}</span>} !</strong> You successfully logged in!
          </div>}
            <Slideshow/>
        </div>
    )
}

export default Home
