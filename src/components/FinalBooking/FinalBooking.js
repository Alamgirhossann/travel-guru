import React, { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LocationContext } from '../../App';
import map from '../../Image/map2.jpg'


const FinalBooking = () => {
    const [singleLocation, setSingleLocation] = useContext(LocationContext);
    const { hotel } = singleLocation.locInfo;
    console.log(singleLocation);
    return (
        <div style={{backgroundColor:'white'}}>
            <h3>Stay in  {singleLocation.locInfo.category}</h3>
            <Row>
                <Col>
                    {hotel.map(room =>
                        <Card style={{ width: '35rem', margin: '10px', }}>
                            <Row>
                            <Col>
                                <Card.Img variant="top" src={room.photo} />
                                </Col>
                                <Col>
                                <Card.Body style={{ color: 'gray', textAlign: 'left' }}>
                                    <Card.Title>{room.name}</Card.Title>
                                    <Card.Text>{room.bed}</Card.Text>
                                    <Card.Text>{room.condition}</Card.Text>
                                    <Card.Text>{room.description}</Card.Text>
                                </Card.Body>
                                </Col>
                                </Row>
                        </Card>)}
                </Col>
                <Col md={6}>
                <Card.Img variant="top" src={map} />
                </Col>
            </Row>

        </div>
    );
};

export default FinalBooking;