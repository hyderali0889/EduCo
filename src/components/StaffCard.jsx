import '../assets/css/StaffCard.css';
import * as RB from 'react-bootstrap';
import * as BS from 'react-icons/bs';
import Img1 from '../assets/images/icons/comment-1.png';
import Img2 from '../assets/images/icons/group-97.png';
import Img3 from '../assets/images/icons/online-course-187.png';

function StaffCard() {
	return (
		<div className="d-flex justify-content-center pt-5">
			<RB.Card className=" cardMain2">
				<RB.Row>
					<RB.Col sm={7} className="p-0">
						<RB.Card.Body className="text-start ms-3">
							<RB.Card.Title className="fw-bold textColor2 fs-3"> Staff Name </RB.Card.Title>
							<RB.Card.Text className="textColor2 fs-5">
								Designation
								<p>
									<span className="text-muted fontS mt-2">
										<span className="FlexOne">
											{' '}
											<BS.BsFillStarFill color="black" />
										</span>
										<span className="FlexTwo"> 4.4(1045) Instructor Rating </span>
									</span>
									<span className="text-muted fontS mt-1">
										<span className="FlexOne">
											{' '}
											<RB.Image src={Img1} />
										</span>
										<span className="FlexTwo"> 945 Instructor Review </span>
									</span>
									<span className="text-muted fontS mt-1">
										<span className="FlexOne">
											{' '}
											<RB.Image src={Img2} />
										</span>
										<span className="FlexTwo"> 1050 Students </span>
									</span>
									<span className="text-muted fontS mt-1">
										<span className="FlexOne">
											{' '}
											<RB.Image src={Img3} />
										</span>
										<span className="FlexTwo"> 10 Courses </span>
									</span>
								</p>
							</RB.Card.Text>
						</RB.Card.Body>
					</RB.Col>
					<RB.Col sm={5} className="p-0">
						<div className="mainImgContainer w-100 h-100 p-2 pe-4">
							<div className="w-100 h-100 bg-secondary mainImg"> </div>
						</div>
					</RB.Col>
				</RB.Row>
			</RB.Card>
		</div>
	);
}

export default StaffCard;
