import React, { useContext } from 'react';
import { LocationContext } from '../../App';


const FinalBooking = () => {
    const [singleLocation, setSingleLocation] = useContext(LocationContext);
    const {hotel} = singleLocation.locInfo;
    console.log(singleLocation);
    return (
        <div>
            <h1>This is Final booking component:{hotel[0].name} </h1>
            <h1>This is Final booking component:{hotel[0].description} </h1>
            <img src={hotel[0].photo} alt=""/>
        </div>
    );
};

export default FinalBooking;