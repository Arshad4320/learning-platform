import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg-4>Nav site</Col>
                <Col lg-8>Cours</Col>
            </Row>
        </Container>
    );
};

export default Course;