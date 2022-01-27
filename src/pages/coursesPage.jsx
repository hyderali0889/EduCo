import React from "react";
import * as RB from "react-bootstrap";
import "../assets/css/button.css";
import "../assets/css/CompanyProfile.css";
import "../assets/css/App.css";
import * as Rbs from "react-icons/bs";
import btnCart from "../assets/images/icons/btn-cart.png";
import arrow from "../assets/images/icons/arrow.png";
import heart from "../assets/images/icons/cardHeart.png";
import MainSlider from "../components/MainSlider";

export default function CoursesPage() {
  return (
    <div>
      <div className="mt-5" />
      <RB.Container className="mb-5">
        <RB.Row>
          <RB.Col sm={12} md={6}>
            <div className="ProfileImgMain d-md-none d-lg-flex d-flex justify-content-center align-items-center"></div>
          </RB.Col>
          <RB.Col sm={12} lg={6} className="pt-4 pt-md-0">
            <div className="profiletitle">
              <RB.Container>
                <div className="pt-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="fs-6 ">
                        Main Category{" "}
                        <RB.Image src={arrow} alt="sdas" className="ms-2" /> Sub
                        Category
                      </p>
                    </div>
                    <div>
                      <RB.Image src={heart} height={"20px"} alt="" />
                    </div>
                  </div>
                  <p className="fw-bold text-muted display-6"> Company Name </p>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted display-6 fs-3">
                      {" "}
                      Instructor Name{" "}
                    </p>
                  </div>
                  <p className="text-muted display-6 fs-4">
                    {" "}
                    1425 Students got this course
                  </p>
                  <p className="textColor fs-6 pt-2">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, aspernatur. Molestias ullam dolore sequi numquam sunt
                    blanditiis, quia, incidunt ipsam esse quisquam non quibusdam
                    dolor quos reprehenderit ut nemo voluptatibus?{" "}
                  </p>
                  <RB.Row>
                    <RB.Col sm={6}>
                      <button className="button text-light w-100 p-2 fs-5 mb-3 mb-md-0">
                        <RB.Image src={btnCart} alt="asas" height={"20px"} />{" "}
                        Add to Cart
                      </button>
                    </RB.Col>
                    <RB.Col sm={6}>
                      <button className="button text-light w-100 p-2 fs-5">
                        {" "}
                        Enroll Now
                      </button>
                    </RB.Col>
                  </RB.Row>
                </div>
              </RB.Container>
            </div>
          </RB.Col>
        </RB.Row>
      </RB.Container>

      <RB.Container>
        <RB.Row className="mb-5">
          <RB.Col sm={12}>
            <div className="aboutMain">
              <RB.Container>
                <p className="fw-bold text-dark fs-4 pt-3">
                  {" "}
                  What you'll Learn
                </p>
                <ul className="p-4">
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn what are the relevant tools for
                    UI Designer
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn what how much a UX designer
                    earns
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn what how to reasearch a UX
                    Design
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn what the diifrence between UI
                    and UX
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn what the responsibilities of a
                    UX designer
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll be able to fun your first user
                    testing
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn how to do competetive research
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn how to build profile and
                    personas
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn how to create wireframes
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn how to use invision building
                    mockups
                  </li>
                  <li className="fs-5 p-2">
                    <Rbs.BsCheck /> You'll learn how to report your user testing
                    results
                  </li>
                </ul>
              </RB.Container>
            </div>
          </RB.Col>
        </RB.Row>

        <RB.Row className="mb-5">
          <RB.Col sm={12}>
            <div className="aboutMain_2">
              <RB.Container>
                <p className="fw-bold text-dark fs-4 pt-3">Requirement</p>
                <ul className="p-4">
                  <li className="fs-5 p-2">
                    You'll learn what are the relevant tools for UI Designer
                  </li>
                  <li className="fs-5 p-2">
                    You'll learn what how much a UX designer earns
                  </li>
                </ul>
              </RB.Container>
            </div>
          </RB.Col>
        </RB.Row>

        <RB.Row className="mb-5">
          <RB.Col sm={12}>
            <div className="aboutMain_2">
              <RB.Container>
                <p className="fw-bold text-dark fs-4 pt-3">Courses Includes</p>
                <ul className="p-4">
                  <li className="fs-5 p-2">2.5 hours on-demand video</li>
                  <li className="fs-5 p-2">Full lifetime access</li>
                  <li className="fs-5 p-2">Access on mobile and TV</li>
                  <li className="fs-5 p-2">Certificate of completion</li>
                </ul>
              </RB.Container>
            </div>
          </RB.Col>
        </RB.Row>
      </RB.Container>

      <RB.Container>
      <RB.Row>
      <RB.Col sm={2}></RB.Col>
      <RB.Col sm={8}>
      <RB.Row>
        <RB.Col sm={6}>
          <button className="button text-light w-100 p-3 fs-5 mb-3 mb-md-0">
            <RB.Image src={btnCart} alt="asas" height={"20px"} /> Add to Cart
          </button>
        </RB.Col>
        <RB.Col sm={6}>
          <button className="button text-light w-100 p-3 fs-5">
            {" "}
            Enroll Now
          </button>
        </RB.Col>
      </RB.Row>
      </RB.Col>
      <RB.Col sm={2}></RB.Col>
      </RB.Row>
      </RB.Container>
      <div className="mb-5" />

      <MainSlider />
      <div className="mb-5" />
    </div>
  );
}
