import "../assets/css/CartCard.css";
import * as RB from 'react-bootstrap';
import Img1 from '../assets/images/icons/Image -32.png';
import Img2 from '../assets/images/icons/ReviewIcon-4.png';
import * as RBS from "react-icons/bs"
import { useState } from 'react';


function CartCard(props) {

    const [ remCard , setRemCard ] = useState(false);

   const RemCard =()=>{
       setRemCard(true);  
       props.addClicks(props.clicks+1)   
   }




   

    return ( 

        <div className={`${remCard && "remCard"}  MicroMain mt-4`}>
			<RB.Row>
				<RB.Col sm={12}>
					<div className="p-2 pe-5 ps-5">
						<RB.Row>
							<RB.Col sm={2} >
								{' '}
								<div className="ColImg mt-3 d-none d-lg-flex">
									{' '}
									<RB.Image className="p-3 img-fluid" src={Img1} height="140px" />{' '}
								</div>{' '}
							</RB.Col>
							<RB.Col sm={8}>
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
											<RB.Image src={Img2} height="20px" /> 4.3 (1.4K){' '}
										</p>
									</div>
								</div>
							</RB.Col>
							<RB.Col sm={2} className=" mt-4 mt-lg-0  ">
								
								<div className="RateMain">
									<p className="CrossedRate text-muted"> 49.25$ </p>{' '}
									<p className="ms-2 fw-bold"> 25.25$ </p>
								</div>{' '}
								<div className='RateBtn mt-2'> 
								<button className='button p-2' onClick={RemCard} > <RBS.BsTrash size={20}  /> </button>
								</div>
							</RB.Col>
						</RB.Row>
					</div>
				</RB.Col>
			</RB.Row>
		</div>
     );
}

export default CartCard;