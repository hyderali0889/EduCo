import React from "react";
import "../assets/css/city.css";
import CityMiniCard from "../components/cityMiniCard";
import * as RB from "react-bootstrap";
import '../assets/css/cityMiniCard.css';
import img1 from '../assets/images/icons/lahore.png'
import React, { useState } from 'react';



export default function Lahore() {
  const [ buttonOneClicked, setButtonOneClicked ] = useState(true);
	const [ buttonTwoClicked, setButtonTwoClicked ] = useState(false);
	const [ buttonThreeClicked, setButtonThreeClicked ] = useState(false);

	const setButtonOne = () => {
		setButtonOneClicked(true);
		setButtonTwoClicked(false);
		setButtonThreeClicked(false);
	};

	const setButtonTwo = () => {
		setButtonOneClicked(false);
		setButtonTwoClicked(true);
		setButtonThreeClicked(false);
	};

	const setButtonThree = () => {
		setButtonOneClicked(false);
		setButtonTwoClicked(false);
		setButtonThreeClicked(true);
	};
  return (
    <RB.Container className="mt-5 mb-5">
      <div className="text-center">
        <img src={img1} alt="/" />
        <h1 className="fw-bold">Faisalabad</h1>
      </div>
      <RB.Row>
        <RB.Col sm={12}>
        <RB.Card className="city-card">
        <RB.Card.Header>
          <RB.Nav variant="pills" defaultActiveKey="#first" className="margin-negative d-flex justify-content-around">
            <RB.Nav.Item>
              <RB.Nav.Link href="#first" className="styling"><button
              onClick={setButtonThree}
              className={`button ${buttonThreeClicked ? 'bg-dark' : null} px-5`}
              >About</button></RB.Nav.Link>
            </RB.Nav.Item>
            <RB.Nav.Item>
              <RB.Nav.Link href="#link" className="styling"><button
              onClick={setButtonThree}
              className={`button ${buttonThreeClicked ? 'bg-dark' : null} px-5`}
              >Staf</button></RB.Nav.Link>
            </RB.Nav.Item>
            <RB.Nav.Item>
              <RB.Nav.Link href="#disabled" className="styling"><button
              onClick={setButtonThree}
              className={`button ${buttonThreeClicked ? 'bg-dark' : null} px-5`}
              >Courses</button></RB.Nav.Link>
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
