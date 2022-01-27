import '../assets/css/CompanyCard.css';
import * as RB from 'react-bootstrap';
import Img from "../assets/images/icons/Image -13.png"
import { Link } from 'react-router-dom';

function CompanyCard() {
	return (
		<div className="d-flex justify-content-center pt-5">
			<RB.Card className=" cardMain hover" >
				<div className="mainImgContainer p-3 ">
					<div className="mainImg"> </div>
				</div>
				<div className="picOnCard"> <RB.Image src={Img} alt="not Found" className="p-1" width="100%" /> </div>
				<RB.Card.Body className="text-center">
					<RB.Card.Title className="fw-bold textColor"> Company Name </RB.Card.Title>
					<RB.Card.Text className='textColor'>429 Courses</RB.Card.Text>
					<Link to='/Company-Profile'><button className="button"> View Details</button></Link>
				</RB.Card.Body>
			</RB.Card>
		</div>
	);
}

export default CompanyCard;
