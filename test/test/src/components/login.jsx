import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const validUser = users.find(
            user => user.email === formData.email && user.password === formData.password
        );

        if (validUser) {
            alert("Login successful!");
            localStorage.setItem("isLoggedIn", "true");
            navigate("/products");
        } else {
            alert("Invalid email or password.");
        }

        setFormData({ email: "", password: "" });
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        alert("Logged out successfully.");
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded mb-4"
                placeholder="Email"
                required
            />

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded mb-4"
                placeholder="Password"
                required
            />

            <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded"
            >
                Log In
            </button>

            <button
                type="button"
                onClick={handleLogout}
                className="w-full p-3 bg-red-600 text-white rounded mt-4"
            >
                Log Out
            </button>

            <p className="text-center mt-4">
                Don't have an account?{" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/signup")}>
                    Sign Up
                </span>
            </p>
        </form>
    );
};

export default Login;