// import React, { useState } from "react";

// export default function SignUpPage() {
//     const [form, setForm] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const res = await fetch("http://localhost:6001/user/sign", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(form),
//         });

//         const data = await res.json();
//         console.log(data);
//         alert(data.message || "Signed up successfully!");
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
//             >
//                 <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     className="mb-4 w-full p-2 border rounded"
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="mb-4 w-full p-2 border rounded"
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone"
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
//                     className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
//                 >
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// }




// import React, { useState } from "react";
// import axios from "axios";

// const SignUpPage = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//     });

//     const [message, setMessage] = useState("");

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("http://localhost:6001/user/sign", formData);
//             setMessage(res.data.message || "Signup successful!");
//         } catch (err) {
//             setMessage(err.response?.data?.message || "Signup failed");
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//             <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
//                 {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}

//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="phone"
//                     placeholder="Phone"
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="w-full p-2 border border-gray-300 rounded mb-4"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 <button
//                     type="submit"
//                     className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
//                 >
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default SignUpPage;





import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post("http://localhost:6001/user/sign", formData);
    //         setMessage("Signup successful! Now login...");
    //         setTimeout(() => {
    //             navigate("/login");
    //         }, 2000);
    //     } catch (err) {
    //         setMessage(err.response?.data?.message || "Signup failed");
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const res = await axios.post("http://localhost:6001/users/sign", formData);
            setMessage("Signup successful! Now login...");
            navigate("/login");
        } catch (err) {
            setMessage(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
                {message && <p className="text-center text-sm text-red-500 mb-4">{message}</p>}

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpPage;
