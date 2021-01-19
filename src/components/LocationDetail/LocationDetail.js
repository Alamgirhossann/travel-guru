import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LocationContext } from '../../App';


const LocationDetail = (props) => {
    const {detail} = props.locInfo;
    const [singleLocation, setSingleLocation] = useContext(LocationContext)
    
    return (
        <div>
            <p><strong style={{color:'tomato', textDecoration:'underline'}}>Description: </strong><br/> {detail}</p>
            <Link to='/booking'>
                <Button onClick={()=>setSingleLocation(props)} variant='warning'>Booking</Button>
            </Link>
         </div>
    );
};

export default LocationDetail;