import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, Outlet } from 'react-router-dom';
import Card from '../Card/Card';
import SingelPage from '../SingelPage/SingelPage';


const Course = () => {
    const allCourse = useLoaderData()
    return (
        <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block '>
                    <Card></Card>
                </Col>
                <Col lg="9" className='mt-5'>
                    <Row lg="2" md="2" sm="1" >
                        {
                            allCourse.map(course => <SingelPage key={course.id} course={course}></SingelPage>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Course;