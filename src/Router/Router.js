import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";
import Course from "../Component/Course/Course";
import Blog from "../Component/Page/Blog/Blog";
import Faq from "../Component/Page/Faq/Faq";
import Main from "../Layout/Main";

const routes = createBootstrapComponent([
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
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])