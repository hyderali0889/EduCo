import React from "react";
import * as RB from "react-bootstrap";
import "../../assets/css/button.css";
import "../../assets/css/App.css";
import * as RI from "react-icons/im";
import { Link } from "react-router-dom";

export default function EventCard() {
  return (
    <div className="text-center p-3 pt-0 pb-0">
      <RB.Card className="hover border">
        <div className="mainImgContainer p-3">
          <div className="eventImgPH"> </div>
        </div>
        <RB.Card.Body>
          <RB.Card.Title>Card Title</RB.Card.Title>
          <RB.Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </RB.Card.Text>
          <div className="text-start">
            <RB.Card.Text>
              <RI.ImLocation2 />
              Xyz location
            </RB.Card.Text>
            <RB.Card.Text>10 Dec 2021</RB.Card.Text>
            <RB.Card.Text>06PM to 12AM</RB.Card.Text>
          </div>
          <Link to="/EventDetails">
            {" "}
            <button class="button text-light mt-2">More Details</button>{" "}
          </Link>
        </RB.Card.Body>
      </RB.Card>
    </div>
  );
}
