import '../assets/css/ContactUs.css';
import * as RB from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import * as BS from 'react-icons/bs';
import * as FI from 'react-icons/fi';
import * as IO from 'react-icons/io5';
import { Link } from 'react-router-dom';

function ContactUs() {
	return (
		<div>
			<Navbar />
			<RB.Container className='my-5'>
				<RB.Row>
					<RB.Col sm={12} md={6}>
						<div>
							<p className="fw-bold fs-3"> Lets Connect </p>
							<p className="text-dark fs-6 ms-3 ">
								{' '}
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita rerum minima pariatur
								quo dignissimos unde dolorem optio inventore quisquam earum rem, tempora iusto enim
								molestias, architecto asperiores aut necessitatibus molestiae. Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Eos error debitis ex vel exercitationem laboriosam ab
								odit tempora numquam. Tenetur sunt accusamus enim modi aut ullam
							</p>

							<div className="mt-3 ms-3">
								<p className="py-2">
									{' '}
									<BS.BsPhone size={30} /> +92-32-9246745
								</p>
								<p className="py-2">
									{' '}
									<FI.FiMail size={30} /> educo@gmail.com
								</p>
								<p className="py-2">
									{' '}
									<IO.IoEarth size={30} /> Faisalbad, Pakistan
								</p>
							</div>
						</div>
					</RB.Col>
					<RB.Col sm={12} md={6}>
						<div className="ContactMain w-100">
							<div className="text-center">
								<p className="fw-bold fs-3 pt-2"> Send Us a Message </p>
							</div>
							<div className="mt-2">
								<RB.Container>
									<RB.Row>
										<RB.Col sm={12}>
											<span className="fw-bold text-muted"> Name </span>
											<input
												type="text"
												name=""
												id=""
												placeholder="Enter Your Full Name Here!"
												className="ContactInputs form-control mt-2"
											/>
										</RB.Col>
									</RB.Row>
									<RB.Row className="mt-2">
										<RB.Col sm={6}>
                                        <span className="fw-bold text-muted"> Phone Number </span>

											<input
												type="text"
												name=""
												id=""
												placeholder="Enter Your Phone Number Here!"
												className="ContactInputs form-control mt-2"
											/>
										</RB.Col>
										<RB.Col sm={6}>
                                        <span className="fw-bold text-muted"> Email </span>

											<input
												type="text"
												name=""
												id=""
												placeholder="Enter Your Email Here!"
												className="ContactInputs form-control mt-2"
											/>
										</RB.Col>
									</RB.Row>
                                    <RB.Row className="mt-2">
                                        <RB.Col sm={12}>
                                        <span className="fw-bold text-muted"> Message </span>
                                        <textarea name="" className='form-control ContactInputs mt-2' id="" cols="30" placeholder='Enter your Message Here!' rows="5"></textarea>
    <div className='d-flex justify-content-center'>
                                  <Link to="/Home" className='my-3 py-2 w-100 text-center' > <button className='button  my-3 py-2 w-25' > Submit</button> </Link>
                                        </div>

                                             </RB.Col>

                                    </RB.Row>
								</RB.Container>
							</div>
						</div>
					</RB.Col>
				</RB.Row>
			</RB.Container>
			<Footer />
		</div>
	);
}

export default ContactUs;
