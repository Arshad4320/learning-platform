import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='container'>
            <Accordion defaultActiveKey="0">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What is React and why use it?
                        </Accordion.Header>
                        <Accordion.Body>

                            Image result for what is react
                            React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> What is difference between NodeJS and express JS?
                        </Accordion.Header>
                        <Accordion.Body>

                            js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is NodeJS used for?
                        </Accordion.Header>
                        <Accordion.Body>
                            It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. Every browser has its own version of a JS engine, and node.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is difference between MongoDB and mongoose?</Accordion.Header>
                    <Accordion.Body>

                        Image result for what is mongoose in node js
                        It helps developers to model their data, define the schema for documents inside a collection, and manage relationships between data. Mongoose allows users to conveniently create and manage data in MongoDB. While it is possible to manage data, define schemas, etc. using MongoDB APIs, it is quite difficult to do so.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;