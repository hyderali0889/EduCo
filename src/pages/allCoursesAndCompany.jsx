import React from 'react';
import CompanyCard from '../components/CompanyCard';
import '../assets/css/coursesSwiper.css'
import * as RB from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavbarCourseCard from '../components/card/CoursesNavbarPage';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function AllCoursesAndCompany() {
  return (
    <RB.Container className=''>
			<div className="companyTitle display-5 mt-5 fw-bold text-center">Companies</div>

<Carousel responsive={responsive}>
  
  <div><CompanyCard/></div>
  <div> <CompanyCard/> </div>
  <div><CompanyCard/></div>
  <div><CompanyCard/></div>
  <div><CompanyCard/></div>
  <div><CompanyCard/></div>
  <div><CompanyCard/></div>
  
</Carousel>

<div className="companyTitle display-5 mt-5 fw-bold text-center">All Courses</div>

<div>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
  <RB.Row>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
    <RB.Col sm={12} md={6} lg={3}><NavbarCourseCard/></RB.Col>
  </RB.Row>
</div>




    

        
    </RB.Container>
  );

}

