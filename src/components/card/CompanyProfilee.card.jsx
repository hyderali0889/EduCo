import '../assets/css/CompanyProfileCard.css';
import * as RB from 'react-bootstrap';
function CompanyProfileCard() {
	return (
		<RB.Card className="CompanyProfileCard">
			<div className="d-flex justify-content-center mt-3">
				<div className="CompanyProfileCardImg" />
			</div>
			<RB.Card.Body>
				<RB.Card.Title className="mt-4">John Smith</RB.Card.Title>
				<RB.Card.Text class="truncate mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quam minus eligendi nemo voluptates,
					sapiente magnam vitae laboriosam quos, beatae cumque cupiditate praesentium numquam culpa, magni
					similique sunt corrupti veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias non,
					soluta, libero molestiae laudantium ipsa, officiis 
				</RB.Card.Text>
			</RB.Card.Body>
		</RB.Card>
	);
}

export default CompanyProfileCard;
