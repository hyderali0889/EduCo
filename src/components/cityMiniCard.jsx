import React from "react";
import * as RB from "react-bootstrap";
import miniIBM from "../assets/images/icons/Image 26.png";
import '../assets/css/cityMiniCard.css';
import { Link } from "react-router-dom";




export default function CityMiniCard() {
  return (
    <div className="cityMiniCardBoundary p-2 ps-4 mb-3">
      <RB.Row>
        <RB.Col sm={2} className="d-flex justify-content-center align-items-center img-setting">
            <img src={miniIBM} alt="" />
        </RB.Col>
        <RB.Col sm={8}>
          <p className="fw-bold display-6 fs-5 text-muted">
            Course Name Ex. UI/UX Designing (Master Level)
          </p>
          <div className="d-flex justify-content-between middle-line">
            <p>Instructor Name</p>
            <p>Company Name</p>
            <p>
              <i class="fas fa-star"></i>
              4.9 (1001)
            </p>
          </div>
        </RB.Col>
        <RB.Col sm={2} className="d-flex justify-content-center align-items-center icons-setting">
          <Link to="/Cart-Main"><i class="fas fa-cart-plus"></i></Link>
          <Link to="/Cart-Main"><i class="fas fa-download"></i></Link>
        </RB.Col>
      </RB.Row>
    </div>
  );
}
