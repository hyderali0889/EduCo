import * as RB from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Img1 from "../assets/images/icons/visa-light-large-5.png";
import Img2 from "../assets/images/icons/cart3.png";
import Img3 from "../assets/images/icons/bitcoin.png";
import Img4 from "../assets/images/icons/paypal.png";
import "../assets/css/Payment.css";
import { Link } from 'react-router-dom';

function Payment() {

	return (
		<div>
			<Navbar />
			<RB.Container>
				<RB.Row>
					<RB.Col sm={12} className="d-flex justify-content-center mt-5 testing ">

                     <img src={Img2} alt="asd" />   
						
					</RB.Col>
				</RB.Row>
				<RB.Row className="mt-5">
					<RB.Col sm={12} md={8}>
						<RB.Row> 
                            <RB.Col sm={3} >  
                            <div className="PaymentVisa mt-2">
                            <RB.Image src={Img1} className="img-fluid" />
                        </div> 
                        <div className="PaymentVisa my-3">
                            <RB.Image src={Img3} className="img-fluid" />
                        </div> 
                        <div className="PaymentVisa my-3">
                            <RB.Image src={Img4} className="img-fluid" />
                        </div>  </RB.Col>
                        <RB.Col sm={3} />
                            <RB.Col sm={5} className="mt-2"> 
                             <div className=''>
                              <p> Card Number </p>
                              <input type="text" className="ContactInputs " />
                                </div>
                                <div className='py-2'>
                              <p> Card Holder Number </p>
                              <input type="text" className="ContactInputs " />
                                </div>
                                <RB.Row>
                                    <RB.Col sm={6}> 
                                    <div className='py-2'>
                              <p> Card Expiry </p>
                              <input type="date" className="ContactInputs borde " />
                                </div> </RB.Col>
                                    <RB.Col sm={6}>
                                    <div className='py-2'>
                              <p> CVV </p>
                              <input type="text" className="ContactInputs " />
                                </div>
                                    </RB.Col>
                                </RB.Row>
                              </RB.Col>
                         </RB.Row>
					</RB.Col>

					<RB.Col sm={12} md={4}>
						<div className="CartSummary mt-4 p-3">
            <p className="text-center fw-bold fs-4">Summary</p>
              <p className="p-4 mainFx">
                <span className="Fx1 fs-5 fw-bold"> Total Items </span>
                <span className="Fx2 fs-5 fw-bold"> 3 </span>
              </p>

              <p className="ps-4 pe-4 mainFx">
                {" "}
                <span className="Fx1 fs-5 fw-bold pt-2"> Total Bill </span>{" "}
                <span className="fw-bold fs-5 Fx2"> 32.97$</span>
              </p>

              <div className="w-100 text-center">
               <Link to ='/Summary'> <button className="button p-2 fs-5 mt-4 mb-2 w-50">
                  {" "}
                  Next{" "}
                </button></Link>
						</div>
            </div>
					</RB.Col>
				</RB.Row>
			</RB.Container>
			<Footer />
		</div>
	);
}

export default Payment;
