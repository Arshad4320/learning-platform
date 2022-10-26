import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { contextProvider } from './../Autentication/AuthProvider/AuthProvider';

const PrivetRout = ({ children }) => {
    const { user, loader } = useContext(contextProvider)
    const location = useLocation()
    if (loader) {
        return <Spinner animation="border" variant="danger" />

    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivetRout;