
import '../assets/css/AmazingLibraries.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import * as RB from 'react-bootstrap';
import LibrariesCard from "../components/LibrariesCard"
import React, { useState } from 'react';

import Img1 from '../assets/images/icons/speaker.png'

function TopProfessors() {

    const [ Books , setBooks ] = useState(true);
    const [ About, setAbout ] = useState(false);

    const aboutFunc = () =>{
        setBooks(false);
        setAbout(true);
    }

    const booksFunc = () =>{
        setBooks(true);
        setAbout(false);
    }

	return (
		<div>
			<Navbar />
			<RB.Container className="mt-3">
				<div className="w-100 text-center">
					<RB.Image src={Img1} className="img-fluid mb-3" />
					<p className="fw-bold fs-3 text-dark"> Top Professors </p>
				</div>
                <div className='w-100 d-flex justify-content-around buttonMain'>
                    <div className='bg-light p-2 buttonWrapper'>
                <button className={`button ${About ? "bg-dark" :""} px-5`} onClick={aboutFunc}> About</button>
                </div>
                <div className='bg-light p-2 buttonWrapper'>
                <button className={`button ${Books ? "bg-dark" :""} px-5`} onClick={booksFunc} > Books </button>
                </div>
                </div>

				<div className=" ">

                    { Books && ( <div className="librariesMain d-flex justify-content-center py-5">
                     <LibrariesCard />
                    <LibrariesCard />
                    <LibrariesCard />
                    <LibrariesCard />  </div> ) }

                    { About && ( <div className='librariesMain p-5'> 
                        <RB.Row>
                            <RB.Col sm={6} > 
                            <div className="text-start ">
                            <p className='fw-bold text-dark fs-5'> About </p>
                            <p className='text-secondary' style={{fontSize:"12px"}} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor totam, necessitatibus minus aliquam eveniet exercitationem tempora doloribus beatae voluptatibus fugiat nostrum aliquid repudiandae! Eum repellendus nostrum similique suscipit laudantium! </p>
                            <p className='text-secondary' style={{fontSize:"12px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor totam, necessitatibus minus aliquam eveniet exercitationem tempora doloribus beatae voluptatibus fugiat nostrum aliquid repudiandae! Eum repellendus nostrum similique suscipit laudantium! </p>

                            </div>
                             </RB.Col>
                            <RB.Col sm={6}> 
                            <div className="text-start ">
                            <p className='fw-bold text-dark fs-5'> Course Detail </p>
                            <p className='text-secondary' style={{fontSize:"12px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor totam, necessitatibus minus aliquam eveniet exercitationem tempora doloribus beatae voluptatibus fugiat nostrum aliquid repudiandae! Eum repellendus nostrum similique suscipit laudantium! </p>
                            <p className='text-secondary' style={{fontSize:"12px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor totam, necessitatibus minus aliquam eveniet exercitationem tempora doloribus beatae voluptatibus fugiat nostrum aliquid repudiandae! Eum repellendus nostrum similique suscipit laudantium! </p>

                            </div> </RB.Col>
                        </RB.Row>
                    </div> )  }
                     
                </div>
			</RB.Container>

			<Footer />
		</div>
	);
}

export default TopProfessors;
