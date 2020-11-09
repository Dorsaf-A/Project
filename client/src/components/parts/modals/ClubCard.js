import React from 'react'
import { useSelector } from "react-redux";
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import {Button} from 'react-bootstrap';

function ClubCard() {
    const clubs = useSelector((state) => state.clubReducer.clubs);
    return (
        <div>
            <CardColumns>
            {console.log(clubs)}
              {clubs.map((club,i) => (
            <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src={club.picture} bsPrefix="card-img"/> */}
  <img src={club.picture} style={{width:'285px',height:'200px'}}/>
  <Card.Body>
    <Card.Title>{club.clubName}</Card.Title>
    <Card.Text>
      {club.description}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
              ))}
</CardColumns>
        </div>
    )
}

export default ClubCard
