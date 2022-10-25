import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingelPage from '../SingelPage/SingelPage';


const Course = () => {
    const allCourse = useLoaderData()
    return (
        <Container>
            <Row>
                {
                    allCourse.map(course => <SingelPage key={course.id} course={course}></SingelPage>)
                }
            </Row>
        </Container>
    );
};

export default Course;