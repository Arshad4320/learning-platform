import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingelPage = ({ course }) => {
    const { name, title, id } = course
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="5"><Link to={`/course/${id}`}>{name}</Link></Col>
                    <Col lg="7">{title}</Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingelPage;