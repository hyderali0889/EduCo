import "../assets/css/BranchesMain.css";
import * as RB from "react-bootstrap";
import Lahore from "../assets/images/icons/Image 23.png";
import Islamabad from "../assets/images/icons/Image 20.png";
import Karachi from "../assets/images/icons/Image 24.png";
import Fsd from "../assets/images/icons/Image 25.png";
import Navbar from "../components/navbar";
import "../assets/css/CompanyCard.css";
import { Link } from "react-router-dom";

import Footer from "../components/footer";

function BranchesMain() {
  return (
    <div>
      <Navbar />
      <RB.Container className="mt-5 mb-5 ">
        <div className="setCard">
          <div className="d-flex justify-content-center pt-5 me-2">
            <RB.Card className=" cardMain hover">
              <div className="mainImgContainer p-3 d-flex justify-content-center ">
                <RB.Image src={Lahore} height={150} />
              </div>
              <RB.Card.Body className="text-center">
                <RB.Card.Title className="fw-bold pb-4 textColor">
                  {" "}
                  Lahore{" "}
                </RB.Card.Title>
                <Link to="/Lahore">
                  {" "}
                  <button className="button pe-4 ps-4">
                    {" "}
                    View Details
                  </button>{" "}
                </Link>
              </RB.Card.Body>
            </RB.Card>
          </div>
          {/* Second Card */}
          <div className="d-flex justify-content-center pt-5 me-2">
            <RB.Card className=" cardMain hover">
              <div className="mainImgContainer p-3 d-flex justify-content-center ">
                <RB.Image src={Islamabad} height={150} />
              </div>
              <RB.Card.Body className="text-center">
                <RB.Card.Title className="fw-bold pb-4 textColor">
                  {" "}
                  Islamabad{" "}
                </RB.Card.Title>
                <Link to="/Islamabad">
                  {" "}
                  <button className="button pe-4 ps-4"> View Details</button>
                </Link>
              </RB.Card.Body>
            </RB.Card>
          </div>
          {/* Third Card */}
          <div className="d-flex justify-content-center pt-5 me-2">
            <RB.Card className=" cardMain hover">
              <div className="mainImgContainer p-3 d-flex justify-content-center ">
                <RB.Image src={Karachi} height={150} />
              </div>
              <RB.Card.Body className="text-center">
                <RB.Card.Title className="fw-bold pb-4 textColor">
                  {" "}
                  Karachi{" "}
                </RB.Card.Title>
                <Link to="/Karachi">
                  {" "}
                  <button className="button pe-4 ps-4"> View Details</button>
                </Link>
              </RB.Card.Body>
            </RB.Card>
          </div>
          {/* Fourth Card */}
          <div className="d-flex justify-content-center pt-5 me-2">
            <RB.Card className=" cardMain hover">
              <div className="mainImgContainer p-3 d-flex justify-content-center ">
                <RB.Image src={Fsd} height={150} />
              </div>
              <RB.Card.Body className="text-center">
                <RB.Card.Title className="fw-bold pb-4 textColor">
                  {" "}
                  Faisalabad{" "}
                </RB.Card.Title>
                <Link to="/Faisalabad">
                  {" "}
                  <button className="button pe-4 ps-4">
                    {" "}
                    View Details
                  </button>{" "}
                </Link>
              </RB.Card.Body>
            </RB.Card>
          </div>
        </div>
      </RB.Container>
      <Footer />
    </div>
  );
}

export default BranchesMain;
