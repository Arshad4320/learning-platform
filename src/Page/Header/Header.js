import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from "react-icons/fa";
import logo from '../../Image/logu.png'
import { Link } from 'react-router-dom';
import { contextProvider } from '../../Autentication/AuthProvider/AuthProvider';
import { Card } from 'react-bootstrap';
import Course from '../Cours/Course';
const Header = () => {
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
                            <>{user?.photoURL ?
                                <Image className='ms-2 mt-3 w-' src={user?.photoURL}>

                                </Image> : <div className='h-10 w-10 mt-2 bg-white rounded-full '>
                                    <FaUserAlt className=' rounded-full text-3xl mt-2 ms-1'></FaUserAlt>
                                </div>
                            }
                                <Nav.Link href="#deets">
                                    <Button onClick={handelLogOut} variant="outline-warning">
                                        <Link className='text-decoration-none text-white' to='/login'>
                                            Log Out
                                        </Link>
                                    </Button>
                                </Nav.Link>

                            </> :
                            <Nav.Link href="#deets">
                                <Button variant="outline-warning">
                                    <Link className='text-decoration-none text-white' to='/login'>Login</Link>
                                </Button>
                            </Nav.Link>

                        }
                        <Nav.Link eventKey={2} href="#memes">
                            <Button variant="outline-warning"><Link className='text-decoration-none text-white' to='/register'>Register</Link></Button>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;