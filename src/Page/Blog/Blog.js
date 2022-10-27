import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='mt-10'>
            <Row >
                <Col sm="12" md="6" lg="4"  >
                    <div className='bg-blue-400 border-2 border-red-800  py-4 px-3 rounded shadow-lg mb-4'>
                        <h5>What is cors?</h5>
                        <p className='text-justify'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                </Col>
                <Col sm="12" md="6" lg="4" >
                    <div className='bg-blue-400 border-2 border-red-800  py-4 px-3 rounded shadow-lg mb-4'>
                        <h5>Why Are using firebase ?</h5>
                        <p className='text-justify'>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Backed by Google. Build Fast For Any Device. 15+ Products & Solutions.</p>
                        <h5>What other option do you implement authentication?</h5>
                        <p className='text-justify'>Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
                    </div>
                </Col>
                <Col sm="12" md="6" lg="4" >
                    <div className='bg-blue-400 border-2 border-red-800  py-4 px-3 rounded shadow-lg mb-4'>
                        <h5>What is the node ?</h5>
                        <p className='text-justify '>A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network. </p>
                        <h5>How does node work?</h5>
                        <p className='text-justify'>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code.</p>
                    </div>
                </Col>
                <Col sm="12" md="6" lg="4"   >
                    <div className='bg-blue-400 border-2 border-red-800  py-4 px-3 rounded shadow-lg mb-4'>
                        <h5>How does switch route work?</h5>
                        <p className='text-justify'>When a frame enters the switch port, the switch checks the dynamic table in memory which stores Physical Port and MAC address pairs. Switch then knows which port to use to forward the frame. Remember: switch does not look into the IP packet and forwards frame as is based on the destination MAC address.</p>
                    </div>

                </Col>

            </Row>
        </Container>
    );
};

export default Blog;