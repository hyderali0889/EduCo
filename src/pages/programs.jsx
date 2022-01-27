import React from "react";
import "../assets/css/city.css";
import CityMiniCard from "../components/cityMiniCard";
import * as RB from "react-bootstrap";
import '../assets/css/cityMiniCard.css';
import img1 from '../assets/images/icons/programs.png'



export default function Programs() {
  return (
    <RB.Container className="mt-5 mb-5">
      <div className="text-center">
        <img src={img1} alt="/" />
        <h1 className="fw-bold">Top Programs</h1>
      </div>
      <RB.Row>
        <RB.Col sm={12}>
        <RB.Card className="city-card">
        <RB.Card.Header>
          <RB.Nav variant="pills" defaultActiveKey="#first" className="margin-negative d-flex justify-content-around">
            <RB.Nav.Item>
              <RB.Nav.Link href="#first" className="styling">About</RB.Nav.Link>
            </RB.Nav.Item>
            <RB.Nav.Item>
              <RB.Nav.Link href="#link" className="styling">Courses</RB.Nav.Link>
            </RB.Nav.Item>
          </RB.Nav>
        </RB.Card.Header>
        <RB.Card.Body> 
          <RB.Card.Text className="city-height p-2">
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
          </RB.Card.Text>
        </RB.Card.Body>
      </RB.Card>
        </RB.Col>
      </RB.Row>
    </RB.Container>
  );
}
