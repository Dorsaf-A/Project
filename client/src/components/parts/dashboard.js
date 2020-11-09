import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'



import 'bootstrap/dist/css/bootstrap.min.css';


import StudentsManagement from './dashboardManager/StudentsManagement'
import TeachersManagement from './dashboardManager/TeachersManagement'
import EventsManagement from './dashboardManager/EventsManagement'
import ClubsManagement from './dashboardManager/ClubsManagement';
import ServicesManagement from './dashboardManager/ServicesManagement';

function Dashboard() {
    
    return (<Router>
<div>


<Nav fill variant="tabs" defaultActiveKey="/studentsManagement">
  <Nav.Item>
    <Nav.Link eventKey="studentsManagement" href="/studentsManagement" active><Link to='/studentsManagement'>Students</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" ><Link to='/teachersManagement'>Teachers</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-2"><Link to='/eventsManagement'>Events</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-3"><Link to='/clubs'>Clubs</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link eventKey="link-4"><Link to='/services'>Services</Link></Nav.Link>
  </Nav.Item>
</Nav>




</div>
        
        <Switch>
            <Route  path='/studentsManagement' component={StudentsManagement} />
            <Route  path='/teachersManagement' component={TeachersManagement} />
            <Route  path='/eventsManagement' component={EventsManagement} />
            <Route  path='/clubs' component={ClubsManagement} />
            <Route path="/services" component={ServicesManagement} />
          </Switch>
         
        </Router>
    )
}

export default Dashboard
