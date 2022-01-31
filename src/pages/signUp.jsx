import React, { useEffect } from 'react';
import * as RB from 'react-bootstrap'
import '../assets/css/signIn.css'
import '../assets/css/button.css';
import { Link } from 'react-router-dom';
import { useRef,useState } from "react";
import { auth } from '../config/Firebase.Config';
import { createUserWithEmailAndPassword , onAuthStateChanged } from 'firebase/auth';



export default function SignUp() {

  useEffect(()=>{
    const red = onAuthStateChanged(auth , u => addUser(u));
    return red;
  },[])


  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [ user , addUser ] = useState("");

  useEffect(()=>{
    console.log(user);
  },[user])


  const handleClick = (e) =>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth , emailRef.current.value , passwordRef.current.value)
  }

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
                <input type="email" className='w-100' placeholder='Enter Your Name'  />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input ref={emailRef} type="email" className='w-100' placeholder='Enter Your Email'  />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input ref={passwordRef} type="password" className='w-100' placeholder='Enter Your Password'  />
               </div>
               <div className='login_input_style text-start d-flex align-items-center mb-2'>
                <input type="password" className='w-100' placeholder='Re-Enter Your Password'  />
               </div>
               <button onClick={handleClick} className="button text-light w-100 fw-bold fs-5">Sign Up</button>
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
