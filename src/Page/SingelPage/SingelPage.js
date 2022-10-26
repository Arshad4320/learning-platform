import React from 'react';
import { Col, Container, Row, Button, Image, CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const SingelPage = ({ course }) => {
    const { name, image, id, title } = course
    return (
        <div className='mb-3'>

            <div className='bg-gray-200 p-3 rounded-md border-2 border-blue-300 '>
                <div>
                    <Image className='rounded-md border-2 border-blue-300' style={{ width: '100%' }} src={image}></Image>
                    <h5 className='mt-2'>{name}</h5>
                    <p className='text-gray-600'>{title}</p>
                </div>
                <Link className='text-decoration-none font-semi-bold text-white' to={`/course/${id}`}><button className='bg-orange-600 p-2 rounded-md hover:bg-orange-700 d-flex'><span>Premium Course</span> <FaArrowRight className='mt-1 ms-1' /></button></Link>

            </div>

        </div>
    );
};

export default SingelPage;