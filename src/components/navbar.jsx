import React,{useState} from "react";
import * as RB from "react-bootstrap";
import "../assets/css/Navbar.css";
import img1 from "../assets/images/icons/heart.png";
import img2 from "../assets/images/icons/cart.png";
import img3 from "../assets/images/icons/profile.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const[ navDown , setNavDown ] = useState(false);

  const Clicked = () =>{
    setNavDown(!navDown)
  }
  return (
    <>
    <RB.Navbar className="zIndex" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <RB.Container>
        <RB.Navbar.Brand href="#home">EduCO</RB.Navbar.Brand>
        <input type="text" name="search"></input>
        <RB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RB.Navbar.Collapse id="responsive-navbar-nav">
          <div className="settingnav w-100">
            <RB.Nav className="text-light"></RB.Nav>
            <RB.Nav>
            <Link to='/Home'><RB.Nav.Link href="#features" className="links">Home</RB.Nav.Link></Link>
            <Link to='/Courses'><RB.Nav.Link href="#pricing" className="links">Courses</RB.Nav.Link></Link>
            <Link to='/Branches'><RB.Nav.Link href="#branches" className="links">Branches</RB.Nav.Link></Link>
            <Link to='/Contact-us'><RB.Nav.Link href="#Contact" className="links">Contact Us</RB.Nav.Link></Link>
            </RB.Nav>
            <RB.Nav>
            <Link to="/Cart-Main">  <RB.Nav.Link href="/Cart-Main" >
                <img src={img1} width={"25px"} alt="sa" />
              </RB.Nav.Link></Link>
              <Link to="/Cart-Main">   <RB.Nav.Link eventKey={2} href="/Cart-Main">
                <img src={img2} width={"25px"} alt="sa" />
              </RB.Nav.Link></Link>
             <RB.Nav.Link eventKey={2} onClick={Clicked}  >
                <img src={img3} width={"25px"} alt="sa" />
              </RB.Nav.Link> 
            </RB.Nav>
          </div>
        </RB.Navbar.Collapse>
      </RB.Container>
    </RB.Navbar>
    <div className="d-flex justify-content-end marginClass"> 
    <div className={`blue ${navDown ? "heightFull" : " heightnone" }`}> 
    <div className={`${navDown ? "" : " displaynone" }`}>
    <div className={`working d-flex justify-content-center    `}>
      <div className=" workingDiv w-100 d-flex  justify-content-between">
      <div className="imgNavDown ">  </div>
      <div className=" px-1 pt-2 font text-dark"> Your Account </div>
     
      </div>
   <div className="d-flex justify-content-start w-100">
      <ul className="pt-3 ps-2 text-dark text-start">
        <li> Shopping Cart </li>
        <li> Wish List </li>
        <li> Settings </li>
      </ul>
      </div>
     
    </div>
    </div>
    
    </div>
     
     </div>
    </>
  );
}
