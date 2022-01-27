import * as RB from 'react-bootstrap';
import * as BS from "react-icons/bs"
import {Link } from "react-router-dom";

function LibrariesCard() {
	return (
		<div className="d-flex justify-content-center  ps-3">
			<RB.Card style={{width:"250px" , borderRadius:"12px"  }}>
				<div className="mainImgContainer p-1 ">
					<div className="mainImg"> </div>
				</div>
				<RB.Card.Body className="text-center">
					<RB.Card.Title className="fw-bold textColor"> Book Name </RB.Card.Title>
					<RB.Card.Text className='textColor'>Instructors Name</RB.Card.Text>
					<Link to="/Cart-Main">   <button className="button"> <BS.BsCartPlus size={20} /></button> </Link>
					<Link to="/Cart-Main">	<button className="button  px-4 ms-1"> Buy Now</button> </Link>
				</RB.Card.Body>
			</RB.Card>
		</div>
	);
}

export default LibrariesCard;
