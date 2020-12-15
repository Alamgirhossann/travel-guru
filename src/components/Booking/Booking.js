import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LocationContext } from '../../App';

const Booking = () => {
    const [location, setLocation] = useContext(LocationContext)
    console.log(location);
    return (
        <div>
            <div>
            <p><strong>description: </strong>{location}</p>
            </div>
            <form action="">
                <label htmlFor="origin">Origin</label>
                <br/>
                <input type="text" name='origin' placeholder='Your origin'/>
                <br/>
                <label htmlFor="destination">Destination</label>
                <br/>
                <input type="text" name='destination' placeholder='Your destination'/>
                <br/>
                <label htmlFor="from">From</label>
                <br/>
                <input type="date" name='from' />
                <br/>
                <label htmlFor="to">To</label>
                <br/>
                <input type="date" name='to' />
                <br/>
               <Link to='/signin'>
               <input type="submit" value="Booking"/>
               </Link>
            </form>
        </div>
    );
};

export default Booking;