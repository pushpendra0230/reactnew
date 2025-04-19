import React, { useState } from "react";
import axios from "axios";

const ForgetPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleForget = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch("http://localhost:6001/user/forgetPassword", {
                email,
                newPassword,
            });
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={handleForget} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Forget Password</h2>
                {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default ForgetPasswordPage;
