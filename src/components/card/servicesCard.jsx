import React from "react";
import * as RB from "react-bootstrap";
import '../../assets/css/button.css';
import { Link } from "react-router-dom";

export default function CoursesCard(props) {
  return (
    <div className="text-center d-flex justify-content-center">
      <Link to={`${props.path}`}>
      <RB.Card className="mt-3 hover backgroundColor p-4 pb-0" style={{ width: `${props.width}`, borderRadius: "12px" }}>
        <RB.Card.Img variant="top" src={props.imageSourse} />
        <RB.Card.Body>
          <RB.Card.Title className="decorationnone">{props.name}</RB.Card.Title>
        </RB.Card.Body>
      </RB.Card>
      </Link>
    </div>
  );
}
