import { createBrowserRouter } from "react-router-dom";
import Login from "../Autentication/Login/Login";
import Register from "../Autentication/Register/Register";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Course from "../Page/Cours/Course";
import Error from "../Page/ErrorPage/Error";
import Home from "../Page/Home/Home";
import SingleItem from "../Page/SingleItem/SingleItem";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/course',
                element: <Course></Course>,
                loader: () => fetch(`http://localhost:5000/course`)
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
            }, {
                path: '/course/:id',
                element: <SingleItem></SingleItem>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])