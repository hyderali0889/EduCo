import '../assets/css/MicroCompanyProfile.css';
import * as RB from 'react-bootstrap';
// import Img1 from '../assets/Images/icons/Image -423.png'
// import Img2 from '../assets/Images/icons/ReviewIcon-4.png';
import * as RBS from "react-icons/bs"

function MicroProfile() {
	return (
		<div className="MicroMain mt-4">
			<RB.Row>
				<RB.Col sm={12}>
					<div className="p-3 pe-5 ps-5">
						<RB.Row>
							<RB.Col sm={0} lg={2} >
								{' '}
								<div className="ColImg  d-none d-lg-flex">
									{' '}
									<RB.Image className="pt-5 pb-5" src={'Img1'} height="120px" />{' '}
								</div>{' '}
							</RB.Col>
							<RB.Col sm={8} lg={6}>
								{' '}
								<div className="">
									{' '}
									<p className="fw-bold display-6 fs-5 text-muted">
										{' '}
										Course Name Ex. UI/UX Designing{' '}
									</p>
									<div className="InstrutorSec">
										<p className="fs-5"> Instructor Name </p>
										<p className="fs-5">
											{' '}
											<RB.Image src={'Img2'} height="20px" /> 4.3 (1.4K){' '}
										</p>
									</div>
								</div>
							</RB.Col>
							<RB.Col sm={4} className=" mt-4 mt-lg-0  ">
								
								<div className="RateMain ">
									<p className="CrossedRate text-muted"> 49.25 $ </p>{' '}
									<p className="ms-2 fw-bold"> 25.25$ </p>
								</div>{' '}
								<div className='RateBtn mt-4'> 
								<button className='button p-2' > <RBS.BsCartPlus size={30}  /> </button>
								<button className='button ms-4 p-2'> <RBS.BsDownload size={30} /></button>

								</div>
							</RB.Col>
						</RB.Row>
					</div>
				</RB.Col>
			</RB.Row>
		</div>
	);
}

export default MicroProfile;
