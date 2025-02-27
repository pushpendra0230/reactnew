import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signup Data:", formData);
    localStorage.setItem("userform",JSON.stringify(data))
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto p-6">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="hidden lg:flex flex-col justify-center items-center bg-indigo-600 text-white p-10 rounded-l-2xl">
              <h1 className="text-4xl font-bold mb-6">Join Us</h1>
              <p className="text-lg text-center">
                Create an account to access exclusive features and stay updated.
              </p>
            </div>

            <div className="bg-gray-50 p-8 lg:rounded-r-2xl rounded-lg">
              <h2 className="text-indigo-600 text-3xl font-semibold mb-6 text-center">
                Sign Up
              </h2>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
                placeholder="Full Name"
                required
              />

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
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
                placeholder="Phone Number"
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

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full h-12 text-gray-700 placeholder-gray-400 shadow-sm bg-transparent text-lg rounded-lg border border-gray-300 pl-4 mb-4"
                placeholder="Confirm Password"
                required
              />
              <button
                type="submit"
                className="w-full py-3 text-lg text-white font-semibold rounded-lg bg-indigo-700 hover:bg-indigo-500 transition duration-300"
              >
                Sign Up
              </button>
              <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-indigo-600 font-medium">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Signup;