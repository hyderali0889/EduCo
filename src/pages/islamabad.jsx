import '../assets/css/LahoreMain.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import * as RB from 'react-bootstrap';
import Img1 from '../assets/images/icons/islamabad.png';
// import LahoreCard from '../components/LahoreCard';
import CityMiniCard from "../components/cityMiniCard";
import StaffCard from '../components/StaffCard';
import React, { useState } from 'react';
import * as Hi from 'react-icons/hi';
import * as BS from 'react-icons/bs';
import * as AI from 'react-icons/ai';

function LahoreMain() {
	const [ buttonOneClicked, setButtonOneClicked ] = useState(true);
	const [ buttonTwoClicked, setButtonTwoClicked ] = useState(false);
	const [ buttonThreeClicked, setButtonThreeClicked ] = useState(false);

	const setButtonOne = () => {
		setButtonOneClicked(true);
		setButtonTwoClicked(false);
		setButtonThreeClicked(false);
	};

	const setButtonTwo = () => {
		setButtonOneClicked(false);
		setButtonTwoClicked(true);
		setButtonThreeClicked(false);
	};

	const setButtonThree = () => {
		setButtonOneClicked(false);
		setButtonTwoClicked(false);
		setButtonThreeClicked(true);
	};
	return (
		<div>
			<div>
				<Navbar />
				<RB.Container className="mt-3">
					<div className="w-100 text-center">
						<RB.Image src={Img1} className="img-fluid mb-3"  />
						<p className="fw-bold fs-3 text-dark"> Islamabad </p>
					</div>
					<div className="w-100 d-flex justify-content-around buttonMain">
						<div className="bg-light p-2 buttonWrapper">
							<button
								onClick={setButtonThree}
								className={`button ${buttonThreeClicked ? 'bg-dark' : null} px-5`}
							>
								{' '}
								About
							</button>
						</div>
						<div className="bg-light p-2 buttonWrapper">
							<button
								onClick={setButtonTwo}
								className={`button  ${buttonTwoClicked ? 'bg-dark' : null} px-5`}
							>
								{' '}
								Staff{' '}
							</button>
						</div>
						<div className="bg-light p-2 buttonWrapper">
							<button
								onClick={setButtonOne}
								className={`button  ${buttonOneClicked ? 'bg-dark' : null} px-5`}
							>
								{' '}
								Courses{' '}
							</button>
						</div>
					</div>

					<div className=" librariesMain2 p-5 mb-5">
						{buttonOneClicked && (
							<div>
								<CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
            <CityMiniCard />
							</div>
						)}
						{buttonTwoClicked && (
							<div>
								<RB.Row>
									<RB.Col sm={12} md={6}>
										<StaffCard />
									</RB.Col>
									<RB.Col sm={12} md={6}>
										<StaffCard />
									</RB.Col>
								</RB.Row>
								<RB.Row>
									<RB.Col sm={12} md={6}>
										<StaffCard />
									</RB.Col>
									<RB.Col sm={12} md={6}>
										<StaffCard />
									</RB.Col>
								</RB.Row>
							</div>
						)}
						{buttonThreeClicked && (
							<div >
								<RB.Row>
									<RB.Col sm={12} >
										<p className="textLahore fw-bold fs-4"> About Campus </p>
										<div className="px-4">
											<p className=" lead textLahore2">
												{' '}
												Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
												commodi sed quod deleniti voluptate pariatur porro et architecto ullam
												culpa magni ea nemo maiores velit suscipit, fuga debitis, sunt
												asperiores! Ea laudantium rerum commodi dolor veritatis, ut quaerat
												consequatur minima sunt facere illo optio itaque inventore illum
												exercitationem voluptatibus ipsum eveniet molestiae ex animi assumenda.{' '}
											</p>
										</div>
									</RB.Col>
									<RB.Col sm={12}>
										<RB.Row>
											<RB.Col sm={6} className='borderLeft '>
												<p className="textLahore fw-bold fs-4"> Contact US </p>
												<div className="px-4">
													<p className="textLahore">
														{' '}
														<Hi.HiOutlineLocationMarker /> &nbsp; Xyz Street , New York ,
														USA{' '}
													</p>
													<p className="textLahore">
														{' '}
														<BS.BsArrowDownCircleFill /> &nbsp; 09:00 am to 08:00 pm{' '}
													</p>
													<p className="textLahore">
														{' '}
														<BS.BsFillTelephoneFill /> &nbsp; +01 123 4465 78
													</p>
												</div>
											</RB.Col>
											<RB.Col sm={6}>
												<p className="textLahore fw-bold fs-4"> Follow US </p>
												<div>
													<p>
														{' '}
														<BS.BsFacebook color="blue" /> &nbsp;{' '}
														<a
															className="links"
															href="https://www.facebook.com/educo/islamabad"
														>
															{' '}
															https://www.facebook.com/educo/islamabad{' '}
														</a>{' '}
													</p>
													<p>
														{' '}
														<AI.AiFillTwitterCircle color="#3A9DD8" /> &nbsp;{' '}
														<a
															className="links"
															href="https://www.twitter.com/educo/islamabad"
														>
															{' '}
															https://www.twitter.com/educo/islamabad{' '}
														</a>{' '}
													</p>
													<p>
														{' '}
														<BS.BsInstagram color="red" /> &nbsp;{' '}
														<a
															className="links"
															href="https://www.instagram.com/educo/islamabad"
														>
															{' '}
															https://www.instagram.com/educo/islamabad{' '}
														</a>{' '}
													</p>
													<p>
														{' '}
														<AI.AiFillYoutube color="red" /> &nbsp;{' '}
														<a
															className="links"
															href="https://www.youtube.com/educo/islamabad"
														>
															{' '}
															https://www.youtube.com/educo/islamabad{' '}
														</a>{' '}
													</p>
												</div>
											</RB.Col>
										</RB.Row>{' '}
									</RB.Col>
								</RB.Row>
							</div>
						)}
					</div>
				</RB.Container>

				<Footer />
			</div>
		</div>
	);
}

export default LahoreMain;
