import '../assets/css/CompanyProfile.css';
import * as RB from 'react-bootstrap';
import Img1 from '../assets/Images/icons/Image -32.png';
import * as Rbi from 'react-icons/bi';
import Img2 from '../assets/Images/icons/ReviewIcon-4.png';
import * as Rbs from 'react-icons/bs';
import MicroProfile from '../components/MicroCompanyProfile';
import MainSlider from "../components/MainSlider";
function CompanyProfile() {
	return (
		<div>
			<RB.Container>
				<div className="mt-5" />
				<RB.Row>
					<RB.Col sm={12} md={6}>
						<div className="ProfileImgMain d-flex justify-content-center align-items-center">
							<RB.Image src={Img1} width="100%" height="60%" alt="Not Fount" />
						</div>
					</RB.Col>
					<RB.Col sm={12} md={6} className="pt-4 pt-md-0">
						<div className="profiletitle">
							<RB.Container>
								<div className="pt-3">
									<p className="fs-4 ">
										Main Category <Rbi.BiArrowToRight /> Sub Category
									</p>
									<p className="fw-bold text-muted display-6"> Company Name </p>
									<div className="d-flex justify-content-between">
										<p className="text-muted display-6 fs-2"> 104 Courses </p>
										<p className="text-secondary display-6 fs-2">
											{' '}
											<RB.Image
												src={Img2}
												className="starmain"
												alt="Not Found"
												width="30px"
												height="30px"
											/>{' '}
											4.5 (1.3 K){' '}
										</p>
									</div>
									<p className="text-muted display-6 fs-2"> 1425 Students Connected with us </p>
									<p className="textColor fs-5 pt-2">
										{' '}
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur.
										Molestias ullam dolore sequi numquam sunt blanditiis, quia, incidunt ipsam esse
										quisquam non quibusdam dolor quos reprehenderit ut nemo voluptatibus?{' '}
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
								<p className="fw-bold text-dark fs-4 pt-3"> About Us </p>
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
			
		</div>
	);
}

export default CompanyProfile;
