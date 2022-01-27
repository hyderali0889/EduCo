import React from "react";
import * as RB from "react-bootstrap";
import '../../assets/css/button.css';
import { Link  } from "react-router-dom";

export default function CoursesCard(props) {
  return (
    <div className="text-center d-flex justify-content-center">
      <RB.Card className="mt-3 hover backgroundColor p-2" style={{ width: `${props.width}`, borderRadius: "12px" }}>
        <RB.Card.Img  variant="top" src={props.imageSourse} />
        <RB.Card.Body>
          <RB.Card.Title>{props.name}</RB.Card.Title>
          <Link to={`${props.path}`}><button className="button text-light "> View Details</button></Link>
          
        </RB.Card.Body>
      </RB.Card>
    </div>
  );
}
