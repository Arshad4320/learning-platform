import React from 'react';
import { Link } from 'react-router-dom';
import Course from './../Cours/Course';
import { Button } from 'react-bootstrap';

const Cetagory = ({ course }) => {

    return (
        <div>
            <Link to={`/course/${course.id}`}> <Button>{course.name}</Button></Link>
        </div>
    );
};

export default Cetagory;