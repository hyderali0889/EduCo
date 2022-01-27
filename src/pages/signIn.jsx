import React from 'react';
import * as RB from 'react-bootstrap'
import '../assets/css/signIn.css'
import '../assets/css/button.css';
import {Link} from "react-router-dom";



export default function SignIn() {
  return (
  <RB.Container>
      <RB.Row className='justify-content-center align-items-center height'>
          <RB.Col lg={7} className='text-center'>
            <p className='h1'>EduCo</p>
          </RB.Col>
          <RB.Col lg={5} className='ps-5 text-center pe-5'>
          <p className='fs-3 fw-bold'>WELCOME BACK</p>
            <p className='text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's since the 1500s</p>
            <RB.Form>
               <div className='login_input_style text-start d-flex align-items-center mb-4'>
                <i class="fas fa-user" />
                <input type="email" className='w-100' placeholder='ExplicitConcepts' required />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-4'>
               <i class="fas fa-lock" />
                <input type="password" className='w-100' placeholder='xxxxxxxxxx' required />
               </div>
             <Link to="/Home">  <button className="button text-light w-100 fw-bold fs-5">Sign In</button> </Link>
               <div className='d-flex justify-content-between fs-6 mt-2 links'>
                 <Link to='/SignUp'>Create Account</Link> 
                 <a href='/'>Check Our Privacy</a>
               </div>
            </RB.Form>
          </RB.Col>
      </RB.Row>

  </RB.Container>
  );
}
