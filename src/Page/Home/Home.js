import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img1 from '../../Image/image1.jpg'
import img2 from '../../Image/image2.jpg'
import img3 from '../../Image/image3.jpg'
const Home = () => {
    return (
        <Row>
            <Col>
                <Image
                    style={{ width: "900vh", height: "620px", overflow: "hidden" }}
                    src={img2}>
                </Image>
            </Col>
        </Row>
    );
};

export default Home;