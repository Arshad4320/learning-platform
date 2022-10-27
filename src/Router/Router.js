import { Card } from "react-bootstrap";
import { FaQq } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Autentication/Login/Login";
import Register from "../Autentication/Register/Register";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Course from "../Page/Cours/Course";
import Error from "../Page/ErrorPage/Error";
import Faq from "../Page/Faq/Faq";
import Home from "../Page/Home/Home";
import Premium from "../Page/Premium/Premium";
import SingleItem from "../Page/SingleItem/SingleItem";
import PrivetRout from './PrivetRout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch(`https://assigenment-server-arshad4320.vercel.app/course`)
            },
            {
                path: '/course/:id',
                element: <SingleItem></SingleItem>,
                loader: ({ params }) => fetch(`https://assigenment-server-arshad4320.vercel.app/course/${params.id}`)
            },
            {
                path: '/course/chackout/:id',
                element: <PrivetRout><Premium></Premium></PrivetRout>,
                loader: ({ params }) => fetch(`https://assigenment-server-arshad4320.vercel.app/course/chackout/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }



        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])