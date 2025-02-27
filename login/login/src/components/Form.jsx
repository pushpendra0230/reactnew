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
//       // Do something after successful login (e.g., redirect)
//     } else {
//       alert("Invalid email or password.");
//     }

//     console.log("Login Data:", formData);
//     localStorage.setItem("userform", JSON.stringify(formData));
//     setFormData({ email: "", password: "" });
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("userform");
//     alert("Logged out successfully.");
//     // Do something after logging out (e.g., redirect)
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

//               <div className="flex items-center justify-between mb-4">
//                 <a href="/forgot" className="text-blue-600 text-sm">
//                   Forgot Password?
//                 </a>
//               </div>

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

//               {/* Signup Link */}
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

import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupData = JSON.parse(localStorage.getItem("userform"));

    if (!signupData) {
      alert("Please sign up first.");
      return;
    }

    if (
      signupData.email === formData.email &&
      signupData.password === formData.password
    ) {
      alert("Login successful.");
      localStorage.setItem("isLoggedIn", "true");
      // Redirect to dashboard or another page if needed
    } else {
      alert("Invalid email or password.");
    }

    console.log("Login Data:", formData);
    setFormData({ email: "", password: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully.");
    // Redirect if needed
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 shadow-lg rounded-lg overflow-hidden">
            <div className="hidden lg:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
              <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
              <p className="text-lg text-center">
                Log in to continue and access your dashboard.
              </p>
            </div>

            <div className="bg-gray-100 p-8 flex flex-col justify-center w-full">
              <h2 className="text-blue-600 text-3xl font-semibold mb-6 text-center">
                Login
              </h2>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
                placeholder="Email Address"
                required
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="w-full py-3 text-lg text-white font-semibold rounded-lg bg-blue-700 hover:bg-blue-500 transition duration-300"
              >
                Log In
              </button>

              {/* Logout Button */}
              <button
                type="button"
                onClick={handleLogout}
                className="w-full mt-4 py-3 text-lg text-white font-semibold rounded-lg bg-red-600 hover:bg-red-500 transition duration-300"
              >
                Log Out
              </button>

              <p className="text-center text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-600 font-medium">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Login;
