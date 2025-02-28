// import React, { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("Signup Data:", formData);
//     localStorage.setItem("userform", JSON.stringify(data));
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 grid-cols-1">
//             <div className="hidden lg:flex flex-col justify-center items-center bg-indigo-600 text-white p-10 rounded-l-2xl">
//               <h1 className="text-4xl font-bold mb-6">Join Us</h1>
//               <p className="text-lg text-center">
//                 Create an account to access exclusive features and stay updated.
//               </p>
//             </div>

//             <div className="bg-gray-50 p-8 lg:rounded-r-2xl rounded-lg">
//               <h2 className="text-indigo-600 text-3xl font-semibold mb-6 text-center">
//                 Sign Up
//               </h2>

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Full Name"
//                 required
//               />

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
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Phone Number"
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

//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Confirm Password"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full py-3 text-lg text-white font-semibold rounded-lg bg-indigo-700 hover:bg-indigo-500 transition duration-300"
//               >
//                 Sign Up
//               </button>
//               <p className="text-center text-gray-600 mt-4">
//                 Already have an account?{" "}
//                 <a href="/login" className="text-indigo-600 font-medium">
//                   Log in
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// };

// export default Signup;

// import React, { useState } from "react";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     console.log("Signup Data:", formData);

//     // Store only necessary user details in localStorage (excluding confirmPassword)
//     const userData = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       password: formData.password,
//     };

//     localStorage.setItem("userform", JSON.stringify(userData));

//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       confirmPassword: "",
//     });

//     alert("Signup successful! You can now log in.");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
//       <section className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 grid-cols-1">
//             <div className="hidden lg:flex flex-col justify-center items-center bg-indigo-600 text-white p-10 rounded-l-2xl">
//               <h1 className="text-4xl font-bold mb-6">Join Us</h1>
//               <p className="text-lg text-center">
//                 Create an account to access exclusive features and stay updated.
//               </p>
//             </div>

//             <div className="bg-gray-50 p-8 lg:rounded-r-2xl rounded-lg">
//               <h2 className="text-indigo-600 text-3xl font-semibold mb-6 text-center">
//                 Sign Up
//               </h2>

//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Full Name"
//                 required
//               />

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
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Phone Number"
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

//               <input
//                 type="password"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
//                 placeholder="Confirm Password"
//                 required
//               />

//               <button
//                 type="submit"
//                 className="w-full py-3 text-lg text-white font-semibold rounded-lg bg-indigo-700 hover:bg-indigo-500 transition duration-300"
//               >
//                 Sign Up
//               </button>
//               <p className="text-center text-gray-600 mt-4">
//                 Already have an account?{" "}
//                 <a href="/login" className="text-indigo-600 font-medium">
//                   Log in
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </form>
//   );
// };

// export default Signup;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Full name is required.";
//     if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Enter a valid email address.";
//     if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be 10 digits.";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     if (existingUsers.some(user => user.email === formData.email)) {
//       alert("Email already registered. Please log in.");
//       return;
//     }

//     const newUser = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       password: formData.password,
//     };

//     localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
//     alert("Signup successful! Redirecting to login page.");
//     navigate("/login");
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Sign Up</h2>
//         {Object.keys(errors).map((key) => (
//           <p key={key} className="text-red-500 text-sm">{errors[key]}</p>
//         ))}
//         <InputField label="Full Name" type="text" name="name" value={formData.name} onChange={handleChange} />
//         <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
//         <InputField label="Phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
//         <InputField label="Password" type="password" name="password" value={formData.password} onChange={handleChange} />
//         <InputField label="Confirm Password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
//         <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-500 transition">Sign Up</button>
//         <p className="text-center text-gray-600 mt-4">Already have an account? <a href="/login" className="text-indigo-600 font-medium">Log in</a></p>
//       </form>
//     </div>
//   );
// };

// const InputField = ({ label, type, name, value, onChange }) => (
//   <div className="mb-4">
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full p-3 border rounded-lg text-gray-700 focus:ring focus:ring-indigo-200"
//       placeholder={label}
//       required
//     />
//   </div>
// );

// export default Signup;




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

    // Get existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const existingUser = users.find(user => user.email === formData.email);
    if (existingUser) {
      alert("Email already registered. Please log in.");
      return;
    }

    // Store user data
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
