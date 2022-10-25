import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingelPage from '../SingelPage/SingelPage';


const Course = () => {
    const allCourse = useLoaderData()
    return (
        <div >

            {
                allCourse.map(course => <SingelPage key={allCourse.id} course={course}></SingelPage>)
            }
        </div >
    );
};

export default Course;