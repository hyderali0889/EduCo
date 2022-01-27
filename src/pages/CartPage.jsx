import "../assets/css/CartPage.css";
import Img1 from "../assets/images/icons/cart-1.png";
import * as RB from "react-bootstrap";
import CartCard from "../components/CartCard";
import { useState } from "react";
import Img5 from "../assets/images/icons/Image 27.png";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import { Link } from "react-router-dom";

function MainCart() {
  const [clicks, addClick] = useState(false);

  return (
    <div>
      <Navbar />
      <RB.Container>
        <RB.Row>
          <RB.Col sm={12} className="d-flex justify-content-center mt-5 testing">
            <img src={Img1} alt="asdd" />
          </RB.Col>
        </RB.Row>
        <RB.Row className="mt-5">
          <RB.Col sm={12} md={8}>
            {clicks === 3 ? (
              <div>
                <div className="d-flex justify-content-center">
                  <RB.Image src={Img5} className=" pt-4" />
                </div>
                <div className="d-flex justify-content-center text-muted mb-4">
                  <p> Your Cart is Empty </p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="button w-50"> Keep Shoping </button>
                </div>
              </div>
            ) : (
              <div>
                <CartCard addClicks={addClick} clicks={clicks} />
                <CartCard addClicks={addClick} clicks={clicks} />
                <CartCard addClicks={addClick} clicks={clicks} />
              </div>
            )}
          </RB.Col>

          <RB.Col sm={12} md={4}>
            <div className="CartSummary mt-4 p-3">
              <p className="text-center fw-bold fs-4">Summary</p>
              <p className="p-4 mainFx">
                <span className="Fx1 fs-5 fw-bold"> Total Items </span>
                <span className="Fx2 fs-5 fw-bold"> 3 </span>
              </p>

              <p className="ps-4 pe-4 mainFx">
                {" "}
                <span className="Fx1 fs-5 fw-bold pt-2"> Total Bill </span>{" "}
                <span className="fw-bold fs-5 Fx2"> 32.97$</span>
              </p>

              <div className="w-100 text-center">
               <Link to ='/Delivery'> <button className="button p-2 fs-5 mt-4 mb-2 w-50">
                  {" "}
                  Next{" "}
                </button></Link>
              </div>
            </div>
          </RB.Col>
        </RB.Row>
      </RB.Container>
      <Footer />
    </div>
  );
}

export default MainCart;
