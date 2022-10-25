import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const SingelPage = ({ course }) => {
    const { title, image, name } = course
    return (
        <Container fluid>
            <Row>
                <Col lg="4"><p>{name}</p></Col>
                <Col lg='4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SingelPage;