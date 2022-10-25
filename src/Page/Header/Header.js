import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link className='text-decoration-none text-3xl font-bold text-orange-600'>Code Pen</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#features"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/course'>Course</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link href="#pricing"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/faq'>FAQ</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"><Button variant="outline-warning"><Link to='/login'>Login</Link></Button></Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="outline-warning">Register</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;