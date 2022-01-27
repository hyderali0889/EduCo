import React from 'react';
import * as RB from 'react-bootstrap'
import '../assets/css/signIn.css'
import '../assets/css/button.css';
import { Link } from 'react-router-dom';



export default function SignUp() {
  return (
  <RB.Container>
      <RB.Row className='justify-content-center align-items-center height'>
          <RB.Col lg={7} className='text-center'>
            <p className='h1'>EduCo</p>
          </RB.Col>
          <RB.Col lg={5} className='ps-5 text-center pe-5'>
          <p className='fs-3 fw-bold'>Register Now</p>
            <RB.Form>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input type="email" className='w-100' placeholder='Enter Your Name' required />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input type="email" className='w-100' placeholder='Enter Your Email' required />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input type="password" className='w-100' placeholder='Enter Your Password' required />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input type="password" className='w-100' placeholder='Re-Enter Your Password' required />
               </div>
               <button className="button text-light w-100 fw-bold fs-5">Sign Up</button>
               <div className='d-flex justify-content-between fs-6 mt-2 links'>
                 <Link to="/">Sign In</Link>
                 <a href='/'>Check Our Privacy</a>
               </div>
            </RB.Form>
          </RB.Col>
      </RB.Row>

  </RB.Container>
  );
}
