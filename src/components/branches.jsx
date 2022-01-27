import React from 'react'
import * as RB from 'react-bootstrap'
import CoursesCard from './card/coursesCard'
import image1 from '../assets/images/icons/CardFaisalabad.png'
import image2 from '../assets/images/icons/islamabad.png'
import image3 from '../assets/images/icons/multan.png'
import image4 from '../assets/images/icons/lahore.png'


export default function Courses() {
    return (
        <RB.Container>
            
        <div className="display-5 fw-bold text-center pt-5">Branches </div>
            <RB.Row className='mt-5'>
                <RB.Col lg={3} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path='/Lahore' name={"Lahore"} clas="img1" imageSourse={image4} width = '16rem' />
                </RB.Col>
                <RB.Col lg={3} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path='/Islamabad' name={"Islamabad"} clas="img2" imageSourse={image2} width = '16rem' />
                </RB.Col>
                <RB.Col lg={3} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path='/Karachi' name={"Karachi"} clas="img3" imageSourse={image3} width = '16rem' />
                </RB.Col>
                <RB.Col lg={3} md={6} className='mt-2 mt-lg-0'>
                    <CoursesCard path='/Faisalabad' name={"Faisalabad"} clas="img4" imageSourse={image1} width = '16rem' />
                </RB.Col>
                

            </RB.Row>
            
        </RB.Container>
    )
}
