import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SingelPage = ({ course }) => {
    const { name, title } = course
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="5">{name}</Col>
                    <Col lg="7">{title}</Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingelPage;