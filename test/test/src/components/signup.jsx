import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(user => user.email === formData.email);
        if (existingUser) {
            alert("This Email is already registered. Please log in.");
            return;
        }

        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! Please log in.");
        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>

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
                Sign Up
            </button>

            <p className="text-center mt-4">
                Already have an account?{" "}
                <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>
                    Log In
                </span>
            </p>
        </form>
    );
};

export default Signup;