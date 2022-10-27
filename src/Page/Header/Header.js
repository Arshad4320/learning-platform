import React from 'react';
import { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaToggleOff, FaToggleOn, FaUserAlt } from "react-icons/fa";
import logo from '../../Image/logu.png'
import { Link } from 'react-router-dom';
import { contextProvider } from '../../Autentication/AuthProvider/AuthProvider';
import Card from '../Card/Card';


const Header = () => {

    //toggle Button
    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state)
    }

    //log out

    const { user, logOUt } = useContext(contextProvider)
    const handelLogOut = () => {
        logOUt()
            .then(result => { })
            .error(error => {
                console.error(error)
            })
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><Link to='/home' className=' '><Image className='rounded' style={{ width: "60px", height: "60px", }} src={logo}></Image></Link></Navbar.Brand>
                <Navbar.Brand href="#home"><Link to='/home' className='text-decoration-none text-3xl font-bold text-orange-600'>Code Pen</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="#features"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/home'>Home</Link></Nav.Link>
                        <Nav.Link href="#features"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/course'>Course</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link href="#pricing"><Link className='text-decoration-none text-lg font-semibold text-orange-400' to='/faq'>FAQ</Link></Nav.Link>
                    </Nav>
                    <Nav>

                        {user?.uid ?
                            <>
                                {user?.photoURL ?
                                    <Image className=' mt-2 rounded-full w-9 h-9' title={user?.displayName} src={user?.photoURL} />
                                    :
                                    <div className='h-10 w-12 mt-2 bg-white rounded-full '>
                                        <FaUserAlt className=' rounded-full w-7 h-8 mt-1 ms-2'></FaUserAlt>
                                    </div>
                                }
                                <Nav.Link href="#deets" className='ms-2'>
                                    <Button onClick={handelLogOut} variant="outline-warning">
                                        <Link className='text-decoration-none text-white'>
                                            Log Out
                                        </Link>
                                    </Button>
                                </Nav.Link>

                            </> :
                            <Nav.Link href="#deets">
                                <Link className='text-decoration-none text-white' to='/login'>
                                    <Button variant="outline-warning" className='me-2'>
                                        Login
                                    </Button></Link>
                                <Link className='text-decoration-none text-white' to='/register'><Button variant="outline-warning">Register</Button></Link>
                            </Nav.Link>

                        }
                        <Button className='bg-dark border-0 ' onClick={toggle}>{state ? <FaToggleOff className='text-4xl w-8' /> : <FaToggleOn className='text-4xl w-8' />}</Button>
                        <div className='d-lg-none d-sm-block d-md-block'>
                            <Card></Card>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;