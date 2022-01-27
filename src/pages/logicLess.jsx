import React from "react";
import * as RB from "react-bootstrap";
import "../assets/css/App.css";
import "../assets/css/button.css";
import "../assets/css/CompanyProfile.css";
import currentLocation from "../assets/images/icons/current_location.png";
import time from "../assets/images/icons/time.png";
import calender from "../assets/images/icons/calender.png";

export default function LogicLess() {
  return (
    <div>
      <RB.Container className="mb-5 mt-5">
        <RB.Row>
          <RB.Col sm={12} md={6}>
            <div className="ProfileImgMain d-md-none d-lg-flex d-flex justify-content-center align-items-center" style={{height:'370px'}}></div>
          </RB.Col>
          <RB.Col sm={12} lg={6} className="pt-4 pt-md-0">
            <div className="profiletitle">
              <RB.Container>
                <div className="pt-3">
                  <p className="fw-bold text-muted display-6"> Event Name </p>
                  <p className="textColor fs-6 pt-2">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, aspernatur. Molestias ullam dolore sequi numquam sunt
                    blanditiis, quia, incidunt ipsam esse quisquam non quibusdam
                    dolor quos reprehenderit ut nemo voluptatibus?{" "}
                  </p>
                  <div className="text-start">
                    <RB.Card.Text><RB.Image src={currentLocation} alt='ass' height={'20px'} /> Xyz location</RB.Card.Text>
                    <RB.Card.Text><RB.Image src={calender} alt='ass' height={'20px'} />10 Dec 2021</RB.Card.Text>
                    <RB.Card.Text><RB.Image src={time} alt='ass' height={'20px'} /> 06PM to 12AM</RB.Card.Text>
                  </div>
                </div>
              </RB.Container>
            </div>
          </RB.Col>
        </RB.Row>
      </RB.Container>
    </div>
  );
}
