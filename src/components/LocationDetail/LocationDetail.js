import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const LocationDetail = (props) => {
    const {detail} = props.locationDetail;
    console.log(props.locationDetail);
    return (
        <div>
            
            <p><strong>Description about location:</strong> <br/>{detail} </p>
           <Link to='/booking'>
                <Button variant="warning">Booking</Button>
           </Link>
            
        </div>
    );
};

export default LocationDetail;