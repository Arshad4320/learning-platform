import React from 'react';
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../Image/image1.jpg'
import img2 from '../../Image/image2.jpg'
import img3 from '../../Image/image3.jpg'
const Home = () => {
    return (
        <div className='w-'>
            <Image
                style={{ width: "900vh", height: "700px" }}
                src={img3}></Image>
        </div >
    );
};

export default Home;