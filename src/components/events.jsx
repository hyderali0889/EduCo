import React from "react";
import * as RB from "react-bootstrap";
import EventCard from "./card/eventCard";
import "../assets/css/event.css";
import "../assets/css/button.css";
import EventBigCard from "./card/eventBigCard";

export default function Events() {
  return (
    <RB.Container className="mb-5">
      <div className="display-5 fw-bold text-center pt-5 mb-5">Events</div>
      <RB.Row>
        <RB.Col lg={4} className="d-none d-lg-flex">
          <EventCard  />
        </RB.Col>
        <RB.Col sm={12} lg={8}>
          <div className="overflow">
          <EventBigCard  />
          <EventBigCard  />
          <EventBigCard  />
          <EventBigCard  />
          <EventBigCard  />
          </div>
        </RB.Col>
      </RB.Row>
    </RB.Container>
  );
}
