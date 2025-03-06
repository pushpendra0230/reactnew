import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ProductCart from "./components/ProductCart";

const App = () => {
    // const isSignUp = localStorage.getItem('userInfo') ? true : false;
    const isSignUp = localStorage.getItem('userInfo') !== null;
    console.log(isSignUp);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <SignUp />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/product",
            element: isSignUp ? <ProductCart /> : <Login /> // Moved inside App to access isSignUp
        }
    ]);

    return <RouterProvider router={router} />;
};

export default App;