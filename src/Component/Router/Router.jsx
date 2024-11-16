import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Main/Main";
import About from "../Pages/About";
import AddUsers from "../Pages/AddUsers";
import User from "../Pages/User";
import Users from "../Pages/Users";

export const router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=>fetch('http://localhost:5000/users')
            },
            {
                path:'/home',
                element:<Home/>,
                loader:()=>fetch('http://localhost:5000/users')
            },
            {
                path:'/add',
                element:<AddUsers/>,
            },
            {
                path:'/users',
                element:<Users/>,
                loader:()=>fetch('http://localhost:5000/users')
            },
            {
                path:'/user',
                element:<User/>,
                
            },
            {
                path:'/about',
                element:<About/>
            }

    ]
    }
])