import "../assets/css/CartPage.css";
import Img1 from "../assets/images/icons/cart2.png";
import * as RB from "react-bootstrap";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import { Link } from "react-router-dom";

function Delivery() {
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
          <RB.Col sm={12} md={8} className="d-flex justify-content-center align-items-center">
            <RB.Row>
            <RB.Col sm={12} md={6}>
              <RB.Form>
                <div className="login_input_style text-start d-flex align-items-center mb-2">
                  <input
                    type="email"
                    className="w-100"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="login_input_style text-start d-flex align-items-center mb-2">
                  <input
                    type="email"
                    className="w-100"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="login_input_style text-start d-flex align-items-center mb-2">
                  <input
                    type="password"
                    className="w-100"
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
              </RB.Form>
            </RB.Col>
            <RB.Col sm={12} md={6}>
              <RB.Form>
                <div className="login_input_style text-start d-flex align-items-center mb-2 py-1">
                <select class="form-select option" aria-label="Default select example">
  <option selected disabled className="city">Select your city</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                </div>
                <div className="login_input_style text-start d-flex align-items-center mb-2">
                  <input
                    type="email"
                    className="w-100"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <div className="login_input_style text-start d-flex align-items-center mb-2">
                  <input
                    type="password"
                    className="w-100"
                    placeholder="Enter Your Phone Number"
                    required
                  />
                </div>
              </RB.Form>
            </RB.Col>
            </RB.Row>
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
              <Link to='/Payment'><button className="button p-2 fs-5 mt-4 mb-2 w-50"> Next </button></Link>
              </div>
            </div>
          </RB.Col>
        </RB.Row>
      </RB.Container>
      <Footer />
    </div>
  );
}

export default Delivery;
