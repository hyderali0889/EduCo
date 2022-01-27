import React from "react";
import * as RB from "react-bootstrap";
import img1 from "../assets/images/icons/linked_in.png";
import img2 from "../assets/images/icons/pinterest.png";
import img3 from "../assets/images/icons/twitter.png";
import img4 from "../assets/images/icons/facebook.png";
import mobile from "../assets/images/icons/mobile.png";
import mail from "../assets/images/icons/mail.png";
import location from "../assets/images/icons/location.png";
import "../assets/css/App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <RB.Container fluid className="bg-dark text-light p-4 pb-2 mt-5">
      <RB.Container className="ps-4 pe-4">
        {/* Section First */}
        <RB.Row className="d-flex justify-content-between footer_icons">
          <RB.Col md={4} sm={6} className=" pt-3">
            <a href="/">
              <img src={img1} alt="as" />
            </a>
            <a href="/">
              <img src={img2} alt="as" />
            </a>
            <a href="/">
              <img src={img3} alt="as" />
            </a>
            <a href="/">
              <img src={img4} alt="as" />
            </a>
          </RB.Col>
          <RB.Col md={4} sm={6} className="text-center pt-3">
            <RB.Navbar.Brand href="#home" className="text-light">
              EduCo
            </RB.Navbar.Brand>
          </RB.Col>
          <RB.Col md={4} sm={6} className="footer_links pt-3 text-end">
            <Link to='/Events'>Events</Link>
            <Link to='/Books'>Books</Link>
            <Link to='/Staff'>Staff</Link>
            <Link to='/Companies' className="m-0">
              Companies
            </Link>
          </RB.Col>
        </RB.Row>
        <div className="p-3 pt-0">
          <hr />
        </div>

        {/* Section second */}
        <RB.Row className="d-flex justify-content-between pt-4 pb-4">
          <RB.Col md={4} sm={12} className="text-center">
            <img src={mobile} alt="as" />
            <p className="mt-3">+92-322-7854065</p>
          </RB.Col>
          <RB.Col md={4} sm={12} className="text-center">
            <img src={mail} alt="as" />
            <p className="mt-3">educo@gmail.com</p>
          </RB.Col>
          <RB.Col md={4} sm={12} className="text-center">
            <img src={location} alt="as" />
            <p className="mt-3">Faisalabad, Pakistan</p>
          </RB.Col>
        </RB.Row>
        <div className="p-3 pb-1 pt-0">
          <hr />
        </div>
        {/* Section third */}
        <div className="text-center">
          <p>Copyright @ EduCo. All rights reserved.</p>
        </div>
      </RB.Container>
    </RB.Container>
  );
}
