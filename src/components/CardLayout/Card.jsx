import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.css"


export default function Cards(props) {
  return (
    <div>
      <Card style={{ width: `${(props.width)?props.width:"400px"}` }} className="cards">
        {/* <Card.Img variant="top" src="holder.js/100px180" />
         */}
         <Card.Body className="adj-body" >
          <Card.Title style={{fontSize:"18px"}}>  {/* {props.address} */}ajgdhjasdkjh</Card.Title>
          <Card.Text style={{color:"grey"}}>
            {props.content}
          </Card.Text>
        {(props.link)?<Button variant="warning">{props.link}</Button>:null}
        </Card.Body>
      </Card>
    </div>
  );
}
