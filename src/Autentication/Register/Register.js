import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { contextProvider } from './../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { Col, Container, Row } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FaGithub, FaGoogle } from 'react-icons/fa';





const Register = () => {

    //provider 
    const GoogleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const navigate = useNavigate()
    const { createUser, googleSignIn, githubSignIn } = useContext(contextProvider)
    //createUser
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
                navigate('/home')
                swal("Congress!", "Your register complete!please login!", "success");
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
                swal("Sorry !", "Your password or email invalid please type valid email and password", "error");
            })
    }
    //signIn google
    const handelGoogle = () => {
        googleSignIn(GoogleProvider)
            .then(result => {
                navigate('/home')
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    //signIn github
    const handelGithub = () => {
        githubSignIn(githubProvider)
            .then(result => {
                navigate('/home')
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <Container>
            <Row>
                <Col lg='6' className='m-auto '>
                    <div className='m-14 '>
                        <Form onSubmit={handelUser} className=' shadow-2xl bg-orange-600  p-10 rounded text-gray-300'>
                            <h3>Please Register</h3>

                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Photo Url</Form.Label>
                                <Form.Control name="photoUrl" type="text" placeholder="Enter photo url" />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Email" required />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" password="password" type="password" placeholder="Password" required />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <p>Already have an Account?<Link to='/login'>Please Login</Link></p>

                            <Button className='text-orange-900' variant="dark" type="submit">
                                Submit
                            </Button>

                            <Button variant="primary" className='d-flex mb-2 mt-3' onClick={handelGoogle}><FaGoogle className='mt-1 mr-1' /><span>Sign In With Google</span></Button>

                            <Button variant="dark" className='d-flex  ' onClick={handelGithub}><FaGithub className='mt-1 mr-1' /><span>Sign in With Github</span></Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;