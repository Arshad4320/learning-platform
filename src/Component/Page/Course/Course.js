import { Container } from 'postcss';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Course = () => {
    return (
        <Container>
            <Row>
                <Col lg-4><h2>Navigation</h2></Col>
                <Col lg-8>Cours Item</Col>
            </Row>
        </Container>
    );
};

export default Course;