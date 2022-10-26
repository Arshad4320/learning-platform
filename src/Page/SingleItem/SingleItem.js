import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";


import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const SingleItem = () => {
    const singleCard = useLoaderData();
    const { name, id, title, description, image, rating, price } = singleCard;
    return (
        <Container className='mt-10 mb-10'>
            <Row>

                <Col lg="6" className='m-auto shadow-lg p-3 rounded-3 bg-orange-300 border-2 border-red-900'>
                    <div style={{}}>
                        <Image style={{ width: "700px " }} className="rounded-3 border-2 border-red-900" src={image}></Image>
                        <div className='text-justify'>
                            <h4 className='mt-3 font-bold'>{name}</h4>
                            <h6>{title}</h6>
                            <p className='text-gray-800 font-semibold'>{description}</p>
                            <div className='d-flex justify-content-between text-gray-500'>
                                <div className='d-flex '>
                                    <h5>Review :{rating}</h5>
                                    <FaStar className='mt-1 ms-2 text-warning'></FaStar>
                                    <FaStarHalfAlt className='mt-1 ms-1 text-warning'></FaStarHalfAlt>
                                </div>
                                <h5>Price :{price}</h5>
                            </div>
                            <div className='d-flex justify-between'>
                                <Link to={`/course/chackout/${id}`}>
                                    <Button className='d-flex mt-3 d-flex'>
                                        <span>Buy Now</span> <FaArrowRight className='mt-1 ms-2' />
                                    </Button>
                                </Link>
                                <Link to='/course'>
                                    <Button className='d-flex mt-3 d-flex'>
                                        <span>See All Course</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default SingleItem;