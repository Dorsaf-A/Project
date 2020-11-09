import React,{useEffect,useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux"

import Login from "./auth/login";
import Register from "./auth/register"
import Home from "../components/parts/home/home"
import About from "../components/parts/about"
import Clubs from "../components/parts/clubs"
import Services from "../components/parts/services"
import ContactUs from "../components/parts/contactUs"
import { logout,getAuthUser } from '../js/actions/authActions';
import PrivateRoute from './route/PrivateRoute';
import Profile from './parts/profile';
import Dashboard from './parts/dashboard';
import StudentLogin from './auth/studentLogin';
import { editeStudent } from '../js/actions/studentActions';

function AppNavBar() {
  const dispatch = useDispatch()
  const getUser = () => dispatch(getAuthUser())
  useEffect(() => {
    getUser()
  }, [])

  let isAuth = useSelector(state => state.authReducer.isAuth)
  let isStudent = useSelector(state => state.authReducer.isStudent) 
  
  const [note, setNote] = useState("")

  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="navbarTogglerDemo02">
        <div className="container">
          {/* <img src="https://www.freelogodesign.org/file/app/client/thumb/59c867c9-fb29-4849-851e-45053a83d774_200x200.png?1603683579786" alt="logo"/> */}
          <Link className="navbar-brand" to={"/"}>Home</Link>
          <Link className="navbar-brand" to={"/about"}>About</Link>
          <Link className="navbar-brand" to={"/clubs"}>Clubs</Link>
          <Link className="navbar-brand" to={"/services"}>Services</Link>
          <Link className="navbar-brand" to={"/contact us"}>Contact us</Link>
          {isAuth? (
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"} onClick={()=>dispatch(logout())}>Logout</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" to={"/dashboard"} ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwGMSwf_66MSeHnmk8E8Er6whNcZ5vJ-iMaQ&usqp=CAU" /></Link>
              </li>
            </ul>
          </div>
          ):(isStudent?
            (<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"} onClick={()=>dispatch(logout())}>Logout</Link>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" data-toggle="tooltip" data-placement="left" title="visit your profile" to={"/profile"} ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwGMSwf_66MSeHnmk8E8Er6whNcZ5vJ-iMaQ&usqp=CAU" /></Link>
              </li>
            </ul>
          </div>
          ):(
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Login
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <Link className="nav-link" to={"/login"} >
    <Dropdown.Item href="#/action-1">Admin</Dropdown.Item></Link>
    <Link className="nav-link" to={"/loginStudent"} >
    <Dropdown.Item href="#/action-2">Student</Dropdown.Item></Link>
  </Dropdown.Menu>
</Dropdown>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/register"} >Sign up</Link>
              </li> */}
            </ul>
          </div>
          ))}
        </div>
      </nav>

      <div className="auth-wrapper">
        
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/clubs' component={Clubs} />
            <Route exact path='/services' component={Services} />
            <PrivateRoute path="/profile" render={()=><Profile note={note} setNote={setNote} />} />
            <PrivateRoute path="/dashboard" component={Dashboard} />

            <div className="auth-inner">
            <Route exact path='/contact us' component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/loginStudent" component={StudentLogin} />
            <Route path="/register" component={Register} />
            </div>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default AppNavBar;