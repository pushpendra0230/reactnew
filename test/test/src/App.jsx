import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/login";
import Signup from "./components/signup";
// import Products from "./components/comments";
import Comments from "./components/comments";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/comments" element={<Comments />} />
            </Routes>
        </Router>
    );
};

export default App;