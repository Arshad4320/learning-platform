import { createBrowserRouter } from "react-router-dom";
import Login from "../Autentication/Login/Login";
import Main from "../Layout/Main";
import Blog from "../Page/Blog/Blog";
import Course from "../Page/Cours/Course";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])