import React from 'react'
import * as RB from "react-bootstrap";
import '../../assets/css/App.css'
import { Link } from 'react-router-dom';


export default function EventBigCard() {
    return (
        <div className=' px-2 p-3'>
            <RB.Row className="p-3 eventBigCard">
            <RB.Col sm={2} className="date p-3 pt-4 text-center">
                <h3>14</h3>
                <p>December</p>
            </RB.Col>
            <RB.Col sm={8}>
              <h3>Event Name </h3>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
            </RB.Col>
            <RB.Col sm={2} className=" pt-5">
            <Link to="/EventDetails" >    <button className="button text-light"> More Details</button> </Link>
            </RB.Col>
          </RB.Row>
        </div>
    )
}
