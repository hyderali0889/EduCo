import '../assets/css/CompanyProfile.css';
import * as RB from 'react-bootstrap';
import * as Rbi from 'react-icons/bi';
import * as Rbs from 'react-icons/bs';
import MainSlider from '../components/MainSlider';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';
import * as BS from 'react-icons/bs';

import Footer from '../components/footer';

function BookProfile() {
	const [ clicked, setClicked ] = useState(false);

	const Clickfun = () => {
		setClicked(!clicked);
	};
	return (
		<div>
			<Navbar />
			<RB.Container>
				<div className="mt-5" />
				<RB.Row>
					<RB.Col sm={12} md={6}>
						<div className="ProfileImgMain d-flex justify-content-center align-items-center">
						</div>
					</RB.Col>
					<RB.Col sm={12} md={6} className="pt-4 pt-md-0">
						<div className="profiletitle">
							<RB.Container>
								<div className="pt-3">
									<div className="d-flex justify-content-between">
										<p className="fs-5 ">
											Main Category <Rbi.BiArrowToRight /> Sub Category
										</p>
										<div className=" p-2 heartHover " onClick={Clickfun}>
											{' '}
											<BS.BsHeartFill color={`${clicked ? 'red' : 'black'}`} />{' '}
										</div>
									</div>
									<p className="fw-bold text-muted display-6 "> Book Name </p>
									<div className="d-flex justify-content-between">
										<p className="text-muted display-6 fs-4"> Author Name </p>
									</div>
									<p className="text-muted display-6 fs-4"> 1425 People Get this Books </p>
									<p className="textColor fs-6 pt-2">
										{' '}
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur.
										Molestias ullam dolore sequi numquam sunt blanditiis, quia, incidunt ipsam esse
										quisquam non quibusdam dolor quos reprehenderit ut nemo voluptatibus?{' '}
									</p>
									<RB.ButtonGroup className="w-100 ">
									<Link to="/Cart-Main" className="me-4">	<button className="button w-100 fs-6 pe-4">
											{' '}
											<BS.BsCartPlus size={40} className="pe-3 pb-1" /> Add To Cart{' '}
										</button> </Link>
										<Link to="/Cart-Main">	<button className="button w-100 fs-6 px-5 py-3"> Buy Now </button> </Link>
									</RB.ButtonGroup>
								</div>
							</RB.Container>
						</div>
					</RB.Col>
				</RB.Row>

				<div className="mt-5" />
				<RB.Row>
					<RB.Col sm={12}>
						<div className="aboutMain">
							<RB.Container>
								<p className="fw-bold text-dark fs-4 pt-3"> Topics Included </p>
								<ul className="p-4">
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn what are the relevant tools for UI Designer
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn what how much a UX designer earns
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn what how to reasearch a UX Design
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn what the diifrence between UI and UX
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn what the responsibilities of a UX designer
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll be able to fun your first user testing
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn how to do competetive research
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn how to build profile and personas
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn how to create wireframes
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn how to use invision building mockups
									</li>
									<li className="fs-5 p-2">
										<Rbs.BsCheck /> You'll learn how to report your user testing results
									</li>
								</ul>
							</RB.Container>
						</div>
					</RB.Col>
				</RB.Row>

				<div className="mt-5" />

				<RB.Row>
					<RB.Col sm={12} />
				</RB.Row>
                <div className='d-flex justify-content-center'>
			<RB.ButtonGroup className=" w-50 d-flex justify-content-center  ">
			<Link to="/Cart-Main" className='me-4'><button className="button w-100 me-4  fs-6">
					{' '}
					<BS.BsCartPlus size={40} className="pe-3 pb-1" /> Add To Cart{' '}
				</button> </Link>
				<Link to="/Cart-Main"><button className="button w-100 fs-6 px-5 py-3"> Buy Now </button> </Link>
			</RB.ButtonGroup>
            </div>
			</RB.Container>
            

			<div className="mt-5 ms-3 SliderBack" />
			<MainSlider />

			<Footer />
		</div>
	);
}

export default BookProfile;
