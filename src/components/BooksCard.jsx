import '../assets/css/BooksCard.css';
import * as RB from "react-bootstrap"
import * as BS from "react-icons/bs"
import {useState} from "react";
import { Link } from 'react-router-dom';

function BookCard() {
    const [ clicked , setClicked ] = useState(false);

    const Clickfun = () =>{
        setClicked(!clicked)
    }
	return (
		<div className="d-flex justify-content-center pt-5">
			<RB.Card className=" cardMain">
				<div className="mainImgContainer p-3 ">
					<div className="mainImg">  
                    <div className='d-flex justify-content-end p-2 heartHover ' onClick={Clickfun}> <BS.BsHeartFill color={ `${clicked ? "red" : "black"}` }  />   </div>
                    
                     </div>
				</div>
				
				<RB.Card.Body className="text-center">
					<RB.Card.Title className="fw-bold textColor"> Book Name </RB.Card.Title>
					<RB.Card.Text className="textColor ">
                        <div className='d-flex justify-content-between'>
                     <p className="text-dark">  Author Name</p> <p> 4.3 (1.4K) </p>
                     </div>
                     <div className='d-flex justify-content-between'>
                     <p>  </p> <p>  <span className='cuttedText me-2'> 28.59$ </span> <span className='fs-5 fw-bold text-dark'> 10.59$ </span>  </p>
                     </div>

                        </RB.Card.Text>
                        <RB.ButtonGroup className='text-start'>
                        <Link to="/Cart-Main">      <button className="button"> <BS.BsCartPlus size={20} /></button> </Link>
				<Link to="/Book-Profile">	<button className="button pe-4 ps-4 ms-3 me-3"> View Details</button></Link>
                <Link to="/Cart-Main">   <button className="button"> <BS.BsDownload size={20} /></button> </Link>
                    </RB.ButtonGroup>
				</RB.Card.Body>
			</RB.Card>
		</div>
	);
}

export default BookCard;
