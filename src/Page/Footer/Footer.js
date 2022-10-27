import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container fluid className='bg-dark'>
            <Row className='p-14 m-10 m-xl-auto'>
                <Col lg="4" md="4" sm="12" className='m'>
                    <h6 className='text-white text-semibold'>Service</h6>
                    <Link className='d-block text-decoration-none text-white' to="/home">Home</Link>
                    <Link className='d-block text-decoration-none text-white' to="/course">Course</Link>
                    <Link className='d-block text-decoration-none text-white' to="/faq">FAQ</Link>
                    <Link className='d-block text-decoration-none text-white' to="/blog">Blog</Link>
                </Col>
                <Col lg="4" md="4" sm="12">
                    <h6 className='text-white text-semibold'>Contact</h6>
                    <p className='text-white text-justify  d-flex'><FaFacebook className='mt-2 me-1'></FaFacebook>Facebook</p>
                    <p className='text-white text-justify  d-flex'><FaTwitter className='mt-2 me-1'></FaTwitter> Twitter</p>
                    <p className='text-white text-justify  d-flex'><FaTwitch className='mt-2 me-1'></FaTwitch>Twitch</p>
                </Col>
                <Col lg="4" md="4" sm="12">
                    <h6 className='text-white font-bold'>Skills</h6>
                    <p className='text-justify text-white '>Tailwind</p>
                    <p className='text-justify text-white '>Bootstrap</p>
                    <p className='text-justify text-white '>Javascript</p>
                    <p className='text-justify text-white '>Rect</p>
                </Col>
            </Row>
            <p className='text-white text-center pb-3'>copyright Arshad</p>
        </Container>
    );
};

export default Footer;