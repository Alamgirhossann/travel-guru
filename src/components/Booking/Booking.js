import React, { useContext, useState } from 'react';
import './Booking.css'
import { Link } from 'react-router-dom';
import { LocationContext } from '../../App';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Booking = (props) => {
console.log(props);
    const [location, setLocation] = useContext(LocationContext);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const { detail, category } = location.locInfo;
    console.log(location);
    return (
        <div className='booking'>
            <div className='booking-detail'>
                <h3>Booking For: <span style={{color:'tomato'}}> {category}</span> </h3>
                <p><strong style={{color:'tomato'}}>Description: </strong>{detail}</p>
            </div>
            <form action="" className='booking-form'>
                <label htmlFor="origin">Origin</label>
                <br />
                <input type="text" name='origin' placeholder='Your origin' />
                <br />
                <label htmlFor="destination">Destination</label>
                <br />
                <input type="text" name='destination' placeholder='Your destination' />
                <br />
                <div className='date-picker'>
                   <div className='dataPicker1'>
                   <p>From</p>
                    <DatePicker

                        selected={startDate}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        onChange={date => setStartDate(date)}
                    />
                   </div>
                   <div className='dataPicker2'>
                   <p>To</p>
                    <DatePicker
                        selected={endDate}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        onChange={date => setEndDate(date)}
                    />
                   </div>
                </div>
                <br />
                <Link to='/finalBooking'>
                    <input style={{backgroundColor: '#F9A51A'}} type="submit" value="Booking" />
                </Link>
            </form>

        </div>
    );
};

export default Booking;