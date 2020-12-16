import React, { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../App';
import { FakeData } from '../FakeData/FakeData';
import LocationDetail from '../LocationDetail/LocationDetail';

const Location = () => {
    console.log(FakeData);
    const [singleLocation, setSingleLocation] = useContext(LocationContext);
    const [locationInfo, setLocationInfo] = useState([])
    useEffect(()=>{
        const matchedLocation = FakeData.filter(location=> location.category === singleLocation.toString().toLowerCase())
        setLocationInfo(matchedLocation)
        console.log(matchedLocation)
    },[singleLocation])
    return (
        <div>
            {
                locationInfo.map(locInfo => <LocationDetail locInfo={locInfo}></LocationDetail>)
            }
        </div>
    );
};

export default Location;