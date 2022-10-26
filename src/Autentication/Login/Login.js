import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useContext } from 'react';
import { contextProvider } from '../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


const Login = () => {
    const { userLogin } = useContext(contextProvider)
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleUserLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        userLogin(email, password)
            .then(result => {
                form.reset();
                swal("Congress!", "You Successfully login!", "success");
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                swal("Sorry!", "Your Email or password invalid .please type valid email and password", "error");
            })
    }
    return (
        <Container>
            <Row>
                <Col lg='6' className='m-auto'>
                    <div className='mt-14 '>
                        <Form onSubmit={handleUserLogin} className='  shadow-2xl bg-orange-600  p-10 rounded text-gray-300'>
                            <h3>Please Login</h3>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" password="password" type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <p>Create New Account?<Link to='/register'>please register</Link></p>
                            <Button variant="dark" className='w-40' type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;