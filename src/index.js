import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Home from './pages/home';
import LogicLess from './pages/logicLess';
import Events from './components/events';
import Deploma from './pages/deploma';
import AmazingLibraries from './pages/AmazingLibraries';
import TopProfessors from './pages/TopProfessors';
import TopPrograms from './pages/TopPrograms';
import Faisalabad from './pages/faisalabad';
import Karachi from './pages/karachi';
import Islamabad from './pages/islamabad';
import Lahore from './pages/LahoreMain';
import ContactUs from './pages/ContactUs'
import Footer from './components/footer';
import Branches from './pages/BranchesMain'
import Payment from './pages/Payment'
import SummaryDetails from './pages/SummaryDetails'
import CartMain from './pages/CartPage'
import IndorCourses from './pages/indorCourses'
import OnlineCourses from './pages/OnlineCourses'
import BooksMain from './pages/BooksMain'
import StaffMain from './pages/StaffMain'
import CompanyMain from './pages/CompanyMain'
import CompanyProfile from './pages/CompanyProfile'
import BookProfile from './pages/BookProfile'
import CartPage from "./pages/CartPage"
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import AllCoursesAndCompany from "./pages/allCoursesAndCompany";
import Delivery from './pages/Deliver';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/EduCo' element={<SignIn />} />
        <Route path='/' element={<SignIn />} />
        <Route path='/Cart-Main' element={<CartMain />} />
        <Route path='/Delivery' element={<Delivery />} />
        <Route path='/Summary' element={<SummaryDetails />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Home' element={<><Navbar /><Home /><Footer /></>} />
        <Route path='/Branches' element={<Branches />} />
        <Route path='/Contact-us' element={<ContactUs />} />
        <Route path='/Lahore' element={<Lahore />} />
        <Route path='/Faisalabad' element={<Faisalabad />} />
        <Route path='/Karachi' element={<Karachi />} />
        <Route path='/Islamabad' element={<Islamabad />} />
        <Route path='/IndoorCourses' element={<IndorCourses />} />
        <Route path='/OnlineCourses' element={<OnlineCourses />} />
        <Route path='/AmazingLibrary' element={<AmazingLibraries />} />
        <Route path='/Deploma' element={<Deploma />} />
        <Route path='/Events' element={<><Navbar /><Events /><Footer /></>} />
        <Route path='/TopProfessors' element={<TopProfessors />} />
        <Route path='/TopPrograms' element={<TopPrograms />} />
        <Route path='/Books' element={<><Navbar /><BooksMain /><Footer /></>} />
        <Route path='/Staff' element={<StaffMain />} />
        <Route path='/Cart-Main' element={<CartPage />} />
        <Route path='/Companies' element={<CompanyMain />} />
        <Route path='/Company-Profile' element={<CompanyProfile />} />
        <Route path='/Book-Profile' element={<BookProfile />} />
        <Route path='/EventDetails' element={<><Navbar /><LogicLess /><Footer /></>} />
        <Route path='/Courses' element={<><Navbar /><AllCoursesAndCompany /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


