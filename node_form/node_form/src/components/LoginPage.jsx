// import React, { useState } from "react";

// export default function LoginPage() {
//     const [form, setForm] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const res = await fetch("http://localhost:6001/user/login", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(form),
//         });

//         const data = await res.json();
//         console.log(data);
//         alert(data.message || "Login successful!");

//         if (data.token) {
//             localStorage.setItem("token", data.token);
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//             >
//                 <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="mb-4 w-full p-2 border rounded"
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="mb-4 w-full p-2 border rounded"
//                     onChange={handleChange}
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
//                 >
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// }






import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:6001/users/login", {
                email,
                password,
            });
            setMessage(res.data.message);

            navigate("/form");
        } catch (err) {
            setMessage(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>

                <div className="mt-4 text-sm text-center">
                    <Link to="/forget-password" className="text-blue-600 hover:underline mr-4">
                        Forget Password?
                    </Link>
                    <Link to="/reset-password" className="text-blue-600 hover:underline">
                        Reset Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;