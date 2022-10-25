import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
const Error = () => {
    return (
        <div className='p-40 text-center '>
            <div className='p-20 rounded shadow bg-gray-200'>
                <h1 className='text-gray-800  font-bold'>Page is Not found 404</h1>
                <Button variant="dark" >
                    <div className='d-flex'>
                        <FaArrowLeft className='mt-1 me-1' /><Link className='text-decoration-none text-white' to='/home'> Back to home </Link>
                    </div>
                </Button>
            </div>
        </div>
    );
};

export default Error;