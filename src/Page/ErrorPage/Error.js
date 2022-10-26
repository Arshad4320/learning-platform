import React from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
const Error = () => {
    return (
        <Container>
            <Row>
                <Col lg="6" className='m-auto '>
                    <div className=' rounded shadow bg-gray-200 mt-10 text-center p-10'>
                        <h1 className='text-gray-800  font-bold'>Page is Not found 404</h1>
                        <Button variant="dark" >
                            <div className='d-flex'>
                                <FaArrowLeft className='mt-1 me-1' /><Link className='text-decoration-none text-white' to='/home'> Back to home </Link>
                            </div>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Error;