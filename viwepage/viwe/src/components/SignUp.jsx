import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const Navi = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        localStorage.setItem("userInfo", JSON.stringify(formData))
        setFormData({
            name: "",
            email: "",
            password: ""
        });
        Navi("/login")
    };
    return (
        <div className='h-screen w-full bg-black flex items-center justify-center'>
            <div className='bg-gray-200 w-[22rem] min-h-[22rem]  rounded-2xl'>
                <h1 className='text-center text-3xl font-semibold pt-5 pb-6'>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div className='px-5 space-y-3 '>
                        <input type='text' name='name' value={formData.name} placeholder='Enter Your Name' required className='border-b w-full py-2 px-2 outline-none' onChange={handleChange}></input>
                        <input type='email' name='email' value={formData.email} placeholder='Email' required className='border-b w-full py-2 px-2 outline-none' onChange={handleChange}></input>
                        <input type='password' name='password' value={formData.password} placeholder='Enter Your password' required className='border-b w-full py-2 px-2 outline-none' onChange={handleChange}></input>
                        <button type='submit' className='bg-blue-500 w-full mt-5 py-2'>SignUp</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUp;