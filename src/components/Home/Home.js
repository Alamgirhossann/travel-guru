
import React, { useContext } from 'react';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Image/Rectangle 28.png'; 
import img2 from '../../Image/sundorbon.png';
import img3 from '../../Image/Sreemongol.png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LocationContext } from '../../App';
import Location from '../Location/Location';

const Home = () => {
    const [location, setLocation] = useContext(LocationContext);
    
    return (
       <div className='div-devide'>
           <Row>
           <Col md={4} className='loc-detail'>
               <h3>Your Location: <span style={{color:'tomato'}}>{location}</span> </h3>
                <Location></Location>
           </Col>
           <Col md={4}>
           <Carousel className='carousel'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                <Button variant="secondary" onClick={()=>setLocation("Cox'sBazar")}>COX'S BAZAR</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src={img2}
                    alt="second slide"
                />

                <Carousel.Caption>
                <Button variant="secondary" onClick={()=>setLocation('Sundorbon')}>SUNDORBON</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-size"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <Button variant="secondary" onClick={()=>setLocation('Sreemongol')}>SREEMONGOL</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Col>
        </Row>
       </div>
    );
};

export default Home;