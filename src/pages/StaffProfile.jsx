import '../assets/css/CompanyProfile.css';
import * as RB from 'react-bootstrap';
import * as BS from 'react-icons/bs';
import MicroProfile from '../components/MicroCompanyProfile';
import MainSlider from '../components/MainSlider';

import Img1 from '../assets/images/icons/comment-1.png';
import Img2 from '../assets/images/icons/group-97.png';
import Img3 from '../assets/images/icons/online-course-187.png';

import Navbar from '../components/navbar';

import Footer from '../components/footer';

function StaffProfile() {
	return (
		<div>
			<Navbar />
			<RB.Container>
				<div className="mt-5" />
				<RB.Row>
					<RB.Col sm={12} md={6}>
						<div className="ProfileImgMain h-100 d-flex justify-content-center align-items-center" />
					</RB.Col>
					<RB.Col sm={12} md={6} className="pt-4 pt-md-0">
						<div className="profiletitle">
							<RB.Container>
								<div className="pt-3 mb-5">
									<p className="fw-bold text-muted display-6 "> Zain Ul Abdeen </p>
									<div className="d-flex justify-content-between">
										<p className="text-muted display-6 fs-4"> UI/UX Designer </p>
									</div>

									<p className="textColor fs-6 pt-2">
										<span className="text-muted fontS mt-2">
											<span className="FlexOne fs-4">
												{' '}
												<BS.BsFillStarFill color="black" />
											</span>
											<span className="FlexTwo fs-4"> 4.4(1045) Instructor Rating </span>
										</span>
										<span className="text-muted fontS mt-1">
											<span className="FlexOne fs-4">
												{' '}
												<RB.Image width={30} src={Img1} />
											</span>
											<span className="FlexTwo fs-4"> 945 Instructor Review </span>
										</span>
										<span className="text-muted fontS mt-1">
											<span className="FlexOne fs-4">
												{' '}
												<RB.Image width={30} src={Img2} />
											</span>
											<span className="FlexTwo fs-4"> 1050 Students </span>
										</span>
										<span className="text-muted fontS mt-1">
											<span className="FlexOne fs-4">
												{' '}
												<RB.Image width={30} src={Img3} />
											</span>
											<span className="FlexTwo fs-4"> 10 Courses </span>
										</span>
									</p>
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
								<p className="fw-bold text-dark fs-4 pt-3"> About Staff </p>
								<ul className="p-4">
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn what are the relevant tools for UI Designer
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn what how much a UX designer earns
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn what how to reasearch a UX Design
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn what the diifrence between UI and UX
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn what the responsibilities of a UX designer
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll be able to fun your first user testing
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn how to do competetive research
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn how to build profile and personas
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn how to create wireframes
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn how to use invision building mockups
									</li>
									<li className="fs-5 p-2">
										<BS.BsCheck /> You'll learn how to report your user testing results
									</li>
								</ul>
							</RB.Container>
						</div>
					</RB.Col>
				</RB.Row>

				<div className="mt-5" />

				<RB.Row>
					<RB.Col sm={12}>
						<div className="aboutMain">
							<RB.Container>
								<p className="fw-bold text-dark fs-4 pt-3"> Courses </p>
								<div className="MainCoursesContainer p-4">
									<div className="coursesMain">
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
										<MicroProfile />
									</div>
								</div>
							</RB.Container>
						</div>
					</RB.Col>
				</RB.Row>
			</RB.Container>

			<div className="mt-5 ms-3 SliderBack" />
			<MainSlider />
			<Footer />
		</div>
	);
}

export default StaffProfile;
