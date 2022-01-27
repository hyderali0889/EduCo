import * as RB from 'react-bootstrap';
import Img1 from '../assets/images/icons/Image -32.png';
import Img2 from '../assets/images/icons/ReviewIcon-4.png';
import * as RBS from 'react-icons/bs';

function TopandOnline() {
	return (
		<div className="MicroMain mt-4">
			<RB.Row>
				<RB.Col sm={12}>
					<div className="pt-4 pe-2 ps-5 ">
						<RB.Row>
							<RB.Col sm={0} lg={2}>
								{' '}
								<div className="ColImg2 d-none d-lg-flex">
									{' '}
									<RB.Image className="pt-5 pb-5" src={Img1} height="120px" />{' '}
								</div>{' '}
							</RB.Col>
							<RB.Col sm={10} lg={8}>
								{' '}
								<div className="">
									{' '}
									<p className="fw-bold display-6 fs-5 text-muted">
										{' '}
										Course Name Ex. UI/UX Designing(Master Level)
									</p>
									<div className="InstrutorSec">
										<p className="fs-5"> Instructor Name </p>
										<p className="fs-5"> Company Name </p>
										<p className="fs-5">
											{' '}
											<RB.Image src={Img2} height="20px" /> 4.3 (1.4K){' '}
										</p>
									</div>
								</div>
							</RB.Col>
							<RB.Col sm={2} className=" mt-4 mt-lg-0  ">
								<div className="RateBtn mt-4">
									<button className="button p-2">
										{' '}
										<RBS.BsCartPlus size={30} />{' '}
									</button>
									<button className="button ms-4 p-2">
										{' '}
										<RBS.BsDownload size={30} />
									</button>
								</div>
							</RB.Col>
						</RB.Row>
					</div>
				</RB.Col>
			</RB.Row>
		</div>
	);
}

export default TopandOnline;
