import React, { useContext, useEffect, useState } from 'react';
import './Booking.css'
import { Link } from 'react-router-dom';
import { LocationContext } from '../../App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Col, Row } from 'react-bootstrap';

const Booking = () => {
// console.log(props);
    const [location, setLocation] = useContext(LocationContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const {detail, category} = location.locInfo;
    
    const handleSubmit =()=>{
        console.log('Form Submited');
    }
    const handleBlur =(e)=>{
        console.log(e.target.value);
    }
    return (
        <div className='booking'>
            <Row>
            <Col md={4} className='booking-detail'>
                <h1><span>{category}</span> </h1>
                <p><strong style={{color:'tomato'}}>Description: </strong>{detail}</p>
            </Col>
            <Col md={6}>
            <form action="" className='booking-form' onSubmit={handleSubmit}>
                <label htmlFor="origin">Origin</label>
                <br />
                <input type="text" onBlur={handleBlur} name='origin' placeholder='Your origin' />
                <br />
                <label htmlFor="destination">Destination</label>
                <br />
                <input type="text" onBlur={handleBlur} name='destination' placeholder='Your destination' />
                <br />
                <div className='date-picker'>
                    <Row>
                   <Col className='dataPicker1'>
                   <p>From</p>
                    <DatePicker

                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => setStartDate(date)}
                    />
                   </Col>
                   <Col className='dataPicker2'>
                   <p>To</p>
                    <DatePicker
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => setEndDate(date)}
                    />
                   </Col>
                   </Row>
                </div>
                <br />
                <Link to='/finalBooking'>
                    <input style={{backgroundColor: '#F9A51A'}} type="submit" value="Booking" />
                </Link>
            </form>
            </Col>
            </Row>
        </div>
    );
};

export default Booking;