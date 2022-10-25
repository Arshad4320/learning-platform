import React, { useEffect, useState } from 'react';
import SingelCourse from '../Cours/SingelCourse';

const LeftSideNav = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div>
            {course.map(courses => <SingelCourse courses={courses} key={course.id}></SingelCourse>)}
        </div>
    );
};

export default LeftSideNav;