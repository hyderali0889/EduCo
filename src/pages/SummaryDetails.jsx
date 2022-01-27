import * as RB from "react-bootstrap";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/Payment.css";
import Img4 from "../assets/images/icons/cart4.png";
import Img5 from "../assets/images/icons/cart5.png";
import Img6 from "../assets/images/icons/Theend.png";
import React, { useState } from "react";

function Summary() {
  const [clicked, setClicked] = useState(false);

  const ChangeScren = () => {
	  setClicked(true);
  }
  return (
    <div>
      <Navbar />
      <RB.Container>
        <RB.Row>
          <RB.Col sm={12} className="d-flex justify-content-center mt-5 testing">
            <img src={`${clicked ? Img5 : Img4}`} alt="hehegdf" />
          </RB.Col>
        </RB.Row>

        {clicked ? (
          <div> 
			  <RB.Row className="d-flex justify-content-center">
				  <RB.Row>
          <RB.Col sm={12} className="text-center">
			  <img src={Img6} className="img-fluid" style={{width:"auto" , height:"250px"}} alt="hehegdf" />
			  </RB.Col>
			  </RB.Row>
              <RB.Col sm={12} md={4} className="">
                <div className=" mt-4 p-3 text-center">
                  <p className="text-muted fs-4 fw-bold"> Thank You For Shopping </p>
				  <p className="fs-5"> Keep Learning </p>
                  
                </div>
              </RB.Col>
            </RB.Row> </div>
        ) : (
          <div>
            <RB.Row className="d-flex justify-content-center">
              <RB.Col sm={12} md={4} className="">
                <div className="CartSummary mt-4 p-3">
                  <p className="text-center fw-bold fs-4">Summary</p>
                  <p className="p-4 mainFx">
                    <span className="Fx1 fs-5 fw-bold"> Total Items </span>
                    <span className="Fx2 fs-5 fw-bold"> 3 </span>
                  </p>

                  <p className="ps-4 pe-4 mainFx">
                    {" "}
                    <span className="Fx1 fs-5 fw-bold pt-2">
                      {" "}
                      Total Bill{" "}
                    </span>{" "}
                    <span className="fw-bold fs-5 Fx2"> 32.97$</span>
                  </p>

                  <div className="w-100 text-center">
                    <button className="button p-2 fs-5 mt-4 mb-2 w-50" onClick={ChangeScren} >
                      {" "}
                      Next{" "}
                    </button>
                  </div>
                </div>
              </RB.Col>
            </RB.Row>
          </div>
        )}
      </RB.Container>
      <Footer />   

	  </div> 
  );
}

export default Summary;
