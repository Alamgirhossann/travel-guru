import React, { useContext, useEffect, useState } from 'react';
import { LocationContext } from '../../App';
import { FakeData } from '../FakeData/FakeData';
import LocationDetail from '../LocationDetail/LocationDetail';

const Carousel = () => {
    console.log(FakeData);
    const [location] = useContext(LocationContext)
    const [locationInfo, setLocationInfo] = useState([])
    console.log(locationInfo);
    useEffect(()=>{
        const matchedInfo = FakeData.filter(locInfo => locInfo.category === location.toLowerCase())
        setLocationInfo(matchedInfo)
        console.log(matchedInfo);
    }, [location])
    return (
      <div>
         {
             locationInfo.map(locationDetail => <LocationDetail locationDetail={locationDetail}></LocationDetail>)
         }
      </div>
    );
};

export default Carousel;