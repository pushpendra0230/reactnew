// import React, { useState } from "react";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const signupData = JSON.parse(localStorage.getItem("userform"));

//     if (!signupData) {
//       alert("Please sign up first.");
//       return;
//     }

//     if (
//       signupData.email === formData.email &&
//       signupData.password === formData.password
//     ) {
//       alert("Login successful.");
//       localStorage.setItem("isLoggedIn", "true");
//       // Redirect to dashboard or another page if needed
//     } else {
//       alert("Invalid email or password.");
//     }

//     console.log("Login Data:", formData);
//     setFormData({ email: "", password: "" });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     alert("Logged out successfully.");
//     // Redirect if needed
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg rounded-lg overflow-hidden">
//             <div className="hidden lg:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
//               <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
//               <p className="text-lg text-center">
//                 Log in to continue and access your dashboard.
//               </p>
//             </div>

//             <div className="bg-gray-100 p-8 flex flex-col justify-center w-full">
//               <h2 className="text-blue-600 text-3xl font-semibold mb-6 text-center">
//                 Login
//               </h2>

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Email Address"
//                 required
//               />

//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Password"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full py-3 text-lg text-white font-semibold rounded-lg bg-blue-700 hover:bg-blue-500 transition duration-300"
//               >
//                 Log In
//               </button>

//               {/* Logout Button */}
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="w-full mt-4 py-3 text-lg text-white font-semibold rounded-lg bg-red-600 hover:bg-red-500 transition duration-300"
//               >
//                 Log Out
//               </button>

//               <p className="text-center text-gray-600 mt-4">
//                 Don't have an account?{" "}
//                 <a href="/signup" className="text-blue-600 font-medium">
//                   Sign Up
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// };

// export default Login;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const signupData = JSON.parse(localStorage.getItem("userform"));

//     if (!signupData) {
//       alert("Please sign up first.");
//       return;
//     }

//     if (
//       signupData.email === formData.email &&
//       signupData.password === formData.password
//     ) {
//       alert("Login successful.");
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/products"); // Redirect to products page after login
//     } else {
//       alert("Invalid email or password.");
//     }

//     console.log("Login Data:", formData);
//     setFormData({ email: "", password: "" });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     alert("Logged out successfully.");
//     navigate("/"); // Redirect to home after logout
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg rounded-lg overflow-hidden">
//             <div className="hidden lg:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
//               <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
//               <p className="text-lg text-center">
//                 Log in to continue and access your dashboard.
//               </p>
//             </div>

//             <div className="bg-gray-100 p-8 flex flex-col justify-center w-full">
//               <h2 className="text-blue-600 text-3xl font-semibold mb-6 text-center">
//                 Login
//               </h2>

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Email Address"
//                 required
//               />

//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Password"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full py-3 text-lg text-white font-semibold rounded-lg bg-blue-700 hover:bg-blue-500 transition duration-300"
//               >
//                 Log In
//               </button>

//               {/* Logout Button */}
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className="w-full mt-4 py-3 text-lg text-white font-semibold rounded-lg bg-red-600 hover:bg-red-500 transition duration-300"
//               >
//                 Log Out
//               </button>

//               <p className="text-center text-gray-600 mt-4">
//                 Don't have an account?{" "}
//                 <span
//                   onClick={() => navigate("/signup")}
//                   className="text-blue-600 font-medium cursor-pointer"
//                 >
//                   Sign Up
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// };

// export default Login;



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

    // Get users array from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (validUser) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      navigate("/products"); // Redirect to Products page
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
