import React, { useState } from 'react'

function Login({handleLogin}) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(formData.email, formData.password)
        setFormData('')
    }
    return (
        <div className='flex items-center justify-center h-screen w-screen bg-black'>
            <div className='border-2 border-emerald-600 '>
                <h3 className='text-3xl text-white justify-center flex mt-10   '>Login</h3>
                <form action="" onSubmit={handleSubmit} className='flex flex-col justify-center items-center px-10 py-10 gap-8'>
                    <input required value={formData.email} onChange={handleChange} name='email' type="email" className='border-2 py-3 px-5  bg-transparent placeholder:text-gray-200 border-emerald-600 rounded-full outline-none text-white' placeholder='please enter your mail' />
                    <input required value={formData.password} onChange={handleChange} name='password' type="password" className='border-2 py-3  px-5 bg-transparent   placeholder:text-gray-200  border-emerald-600 rounded-full outline-none text-white' placeholder='please enter your password' />
                    <button type='submit' className='outline-none bg-emerald-600 text-slate-400 rounded-full text-xl text-semibold py-3 px-5 w-full'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login 