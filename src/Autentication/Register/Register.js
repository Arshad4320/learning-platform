import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from './../AuthProvider/AuthProvider';
import swal from 'sweetalert';





const Register = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(contextProvider)

    const handelUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.email.value;
        const photoUrl = form.photoUrl.value;
        console.log(email, password, name, photoUrl)


        createUser(email, password)
            .then(result => {
                form.reset()
                navigate('/course')
                swal("Congress!", "Your register complete!please login!", "success");
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
                swal("Sorry!", "Your password or email invalid please valid email and password", "error");
            })
    }




    return (
        <div className='m-14 '>
            <Form onSubmit={handelUser} className='w-50 m-auto shadow-2xl bg-orange-600  p-10 rounded text-gray-300'>
                <h3>Please Register</h3>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name="photoUrl" type="text" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" password="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>You have an Account?<Link to='/login'>Please Login</Link></p>
                <Button className='w-40' variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;