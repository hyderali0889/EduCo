import "../assets/css/StaffMain.css";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import StaffCard from "../components/StaffCard";
import * as RB from "react-bootstrap"
function StaffMain() {
    return ( 
        <div>
            <Navbar />

            <div className="companyTitle display-5 mt-5 fw-bold text-center">Companies</div>
              <RB.Container className="mt-5">
                  <RB.Row>
                      <RB.Col sm={12} md={6} > <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6}> <StaffCard /></RB.Col>
                  </RB.Row>
                  <RB.Row>
                      <RB.Col sm={12} md={6}> <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6}> <StaffCard /></RB.Col>
                  </RB.Row>
                  <RB.Row>
                      <RB.Col sm={12} md={6}> <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6}> <StaffCard /></RB.Col>
                  </RB.Row>
                  <RB.Row>
                      <RB.Col sm={12} md={6}> <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6}> <StaffCard /></RB.Col>
                  </RB.Row>
                  <RB.Row>
                      <RB.Col sm={12} md={6}> <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6}> <StaffCard /></RB.Col>
                  </RB.Row>
                  <RB.Row>
                      <RB.Col sm={12} md={6}> <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6} > <StaffCard /></RB.Col>
                  </RB.Row>
                  <RB.Row>
                      <RB.Col sm={12} md={6}> <StaffCard />  </RB.Col>
                      <RB.Col sm={12} md={6}> <StaffCard /></RB.Col>
                  </RB.Row>
               
               </RB.Container>
            <Footer />

        </div>
     );
}

export default StaffMain;