import React from 'react'
import * as RB from 'react-bootstrap'
import CoursesCard from './card/coursesCard'
import image1 from '../assets/images/icons/designing.png'
import image2 from '../assets/images/icons/development.png'
import image3 from '../assets/images/icons/marketing.png'
import image4 from '../assets/images/icons/networking.png'
import image5 from '../assets/images/icons/buisness.png'
import image6 from '../assets/images/icons/photography.png'


export default function Courses() {
    return (
        <RB.Container>
            
        <div className="display-5 fw-bold text-center pt-5">Courses </div>
            <RB.Row className='mt-5'>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path="/Courses" name={"Designing"} imageSourse={image1} width = '18rem' />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path="/Courses" name={"Development"} imageSourse={image2} width = '18rem' />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path="/Courses" name={"Marketing"} imageSourse={image3} width = '18rem' />
                </RB.Col>

            
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path="/Courses" name={"Networking"} imageSourse={image4} width = '18rem' />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path="/Courses" name={"Buisness"} imageSourse={image5} width = '18rem' />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path="/Courses" name={"Photography"} imageSourse={image6} width = '18rem' />
                </RB.Col>
            </RB.Row>

        </RB.Container>
    )
}
