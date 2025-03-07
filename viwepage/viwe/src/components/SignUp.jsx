// import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Login from './Login'

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const Navi = useNavigate()

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value })
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(formData)
//         localStorage.setItem("userInfo", JSON.stringify(formData))
//         setFormData({
//             name: "",
//             email: "",
//             password: ""
//         });
//         Navi("/login")
//     };
//     return (
//         <div className='h-screen w-full bg-black flex items-center justify-center'>
//             <div className='bg-gray-200 w-[22rem] min-h-[22rem]  rounded-2xl'>
//                 <h1 className='text-center text-3xl font-semibold pt-5 pb-6'>SignUp</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className='px-5 space-y-3 '>
//                         <input type='text' name='name' value={formData.name} placeholder='Enter Your Name' required className='border-b w-full py-2 px-2 outline-none' onChange={handleChange}></input>
//                         <input type='email' name='email' value={formData.email} placeholder='Email' required className='border-b w-full py-2 px-2 outline-none' onChange={handleChange}></input>
//                         <input type='password' name='password' value={formData.password} placeholder='Enter Your password' required className='border-b w-full py-2 px-2 outline-none' onChange={handleChange}></input>
//                         <button type='submit' className='bg-blue-500 w-full mt-5 py-2'>SignUp</button>
//                     </div>

//                 </form>
//             </div>
//         </div>
//     )
// }

// export default SignUp;


import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const countries = Country.getAllCountries().map((c) => ({
        value: c.isoCode,
        label: c.name,
    }));

    // Get states based on selected country
    let states = [];
    if (selectedCountry) {
        states = State.getStatesOfCountry(selectedCountry.value).map((s) => ({
            value: s.isoCode,
            label: s.name,
        }));
    } else {
        states = [];
    }

    // Get cities based on selected state
    let cities = [];
    if (selectedState) {
        cities = City.getCitiesOfState(selectedCountry.value, selectedState.value).map((ct) => ({
            value: ct.name,
            label: ct.name,
        }));
    } else {
        cities = [];
    }

    // Form submission handler
    const onSubmit = (data) => {
        let userData = {
            ...data,
            country: selectedCountry ? selectedCountry.label : "",
            state: selectedState ? selectedState.label : "",
            city: selectedCity ? selectedCity.label : "",
        };

        console.log(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));
        navigate("/login");
    };

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <div className="bg-gray-200 w-[24rem] min-h-[30rem] rounded-2xl p-6">
                <h1 className="text-center text-3xl font-semibold mb-6">Sign Up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        placeholder="Enter Your Name"
                        className="border-b w-full py-2 px-2 outline-none"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}

                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        placeholder="Email"
                        className="border-b w-full py-2 px-2 outline-none"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        placeholder="Enter Your Password"
                        className="border-b w-full py-2 px-2 outline-none"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                    <Select
                        options={countries}
                        onChange={setSelectedCountry}
                        placeholder="Select Country"
                        className="w-full"
                    />

                    <Select
                        options={states}
                        onChange={setSelectedState}
                        placeholder="Select State"
                        className="w-full"
                        isDisabled={!selectedCountry}
                    />

                    <Select
                        options={cities}
                        onChange={setSelectedCity}
                        placeholder="Select City"
                        className="w-full"
                        isDisabled={!selectedState}
                    />

                    <button type="submit" className="bg-blue-500 w-full mt-5 py-2 text-white rounded-md">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;