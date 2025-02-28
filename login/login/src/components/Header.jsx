import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        alert("Logged out successfully.");
        window.location.reload();
    };

    return (
        <nav className="bg-indigo-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">My App</h1>
                <div className="space-x-6">
                    <Link to="/" className="text-white text-lg hover:text-gray-300">Home</Link>
                    <Link to="/products" className="text-white text-lg hover:text-gray-300">Products</Link>
                    {!isLoggedIn ? (
                        <>
                            <Link to="/signup" className="text-white text-lg hover:text-gray-300">Signup</Link>
                            <Link to="/login" className="text-white text-lg hover:text-gray-300">Login</Link>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="text-white text-lg bg-red-500 px-3 py-1 rounded hover:bg-red-700"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;