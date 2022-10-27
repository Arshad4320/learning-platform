import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";




const PremiumCard = ({ data }) => {

    const { id, name, image, title, rating, price, description } = data
    return (
        <Container>
            <Row >
                <Col lg="6" className='m-auto mt-5 rounded'>
                    <Card.Title className='bg-dark text-white text-center p-2 rounded'>{name} Programming</Card.Title>
                    <Card >
                        <Card.Img variant="top" style={{ width: "700px" }} src={image} />
                        <div className='d-flex justify-around text-xl font-bold-sm mt-2'>
                            <span className='d-flex'>{rating}<span className='ms-1 mt-1 text-warning d-flex'><FaStar /><FaStar /></span></span>
                            <span>{name}</span>
                            <span>{price}</span>
                        </div>
                        <Card.Body>
                            <h6 className='text-justify'>{title}</h6>
                            <Card.Text className='text-justify'>
                                {description}
                            </Card.Text>
                            <div className='d-flex justify-between'>
                                <Link to={`/course/${id}`} className='text-decoration-none'> <Button variant="dark" className='d-flex'><FaArrowLeft className='mt-1 me-1' /><span>Back to Check Card</span> </Button></Link>

                                <Button variant="dark" className='d-flex'><FaDownload className='mt-1 me-1' /><span>Download Course</span> </Button>


                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};
export default PremiumCard;