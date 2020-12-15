import React, { useContext } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Image/Rectangle 28.png'; 
import img2 from '../../Image/sundorbon.png';
import img3 from '../../Image/Sreemongol.png';
import { Button } from 'react-bootstrap';
import { LocationContext } from '../../App';
import Carousel1 from '../Carousel/Carousel'

const Home = () => {
    const [location, setLocation] = useContext(LocationContext);
    console.log(location);
    return (
       <div className='div-devide'>
           <div className='loc-detail'>
                <Carousel1></Carousel1>
           </div>
           <Carousel className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                <Button variant="secondary" onClick={()=>setLocation("coxbazar")}>COX'S BAZAR</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src={img2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <Button variant="secondary" onClick={()=>setLocation('sreemongol')}>SREEMONGOL</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <Button variant="secondary" onClick={()=>setLocation('sundorbon')}>SUNDORBON</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
       </div>
    );
};

export default Home;