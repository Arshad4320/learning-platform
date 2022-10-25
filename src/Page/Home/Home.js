import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Image/image1.jpg'
import img2 from '../../Image/image2.jpg'
import img3 from '../../Image/image3.jpg'
const Home = () => {
    return (
        <Image
            className='w-100 d-block h-50'
            src={img1}></Image>
    );
};

export default Home;