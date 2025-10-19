import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUS/AboutUs";
import Contact from "../Components/Contact/Contact";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'aboutus',
                Component: AboutUs
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'login',
                Component: Login
            }
        ]
    }
])