import React from 'react'
import * as RB from 'react-bootstrap'
import ServicesCard from './card/servicesCard'
import image1 from '../assets/images/icons/globe.png'
import image2 from '../assets/images/icons/notes.png'
import image3 from '../assets/images/icons/books.png'
import image4 from '../assets/images/icons/speaker.png'
import image5 from '../assets/images/icons/math.png'
import image6 from '../assets/images/icons/degree.png'

export default function Services() {
    return (
        <RB.Container>
            
        <div className="display-5 fw-bold text-center pt-5">Our Services </div>
            <RB.Row className='mt-5'>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <ServicesCard path='/OnlineCourses' name={"Online Courses"} imageSourse={image1} width = '18rem' />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <ServicesCard path='/IndoorCourses' name={"Indoor Courses"} imageSourse={image2} width = '18rem' />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <ServicesCard path='/AmazingLibrary' name={"Amazing Library"} width = '18rem' imageSourse={image3} />
                </RB.Col>

                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <ServicesCard path='/TopProfessors' name={"Top Professors"} width = '18rem' imageSourse={image4} />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <ServicesCard path='/TopPrograms' name={"Top Programs"} width = '18rem' imageSourse={image5} />
                </RB.Col>
                <RB.Col lg={4} md={6} className='mt-2 mt-lg-0'>
                    <ServicesCard path='/Deploma' name={"Graduate Deploma"} width = '18rem' imageSourse={image6} />
                </RB.Col>

            </RB.Row>

        </RB.Container>
    )
}
