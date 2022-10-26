import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img2 from '../../Image/image2.jpg'

const Home = () => {
    return (
        <Image fluid className='w-100'
            src={img2}>
        </Image>
    );
};

export default Home;