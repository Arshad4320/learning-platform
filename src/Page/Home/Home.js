import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img2 from '../../Image/image2.jpg'

const Home = () => {
    return (
        <Row>
            <Col >
                <Image
                    style={{ width: "100%", height: "620px", overflow: "" }}
                    src={img2}>
                </Image>
            </Col>
        </Row>
    );
};

export default Home;