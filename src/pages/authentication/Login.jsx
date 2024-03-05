import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userType: 'customer',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateFormData(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/login/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Login failed');
                }

                console.log('Login successful');

                setFormData({
                    email: '',
                    password: '',
                    userType: 'customer',
                });
                setErrors({});
            } catch (error) {
                console.error('Login error:', error.message);
            }
        }
    };

    const validateFormData = (formData) => {
        const validationErrors = {};

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = 'Email is invalid';
        }
        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        }

        return validationErrors;
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto h-screen flex justify-center items-center">
                <div className="w-full max-w-md mx-8 shadow-lg p-5 bg-[#F7F9F9]">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <div className="flex items-center">
                                <input type="radio" id="customer" name="userType" value="customer" checked={formData.userType === 'customer'} onChange={handleChange} />
                                <label htmlFor="customer" className="ml-2 mr-4">Customer</label>
                                <input type="radio" id="salesman" name="userType" value="salesman" checked={formData.userType === 'salesman'} onChange={handleChange} />
                                <label htmlFor="salesman" className="ml-2 mr-4">Salesman</label>
                                <input type="radio" id="admin" name="userType" value="admin" checked={formData.userType === 'admin'} onChange={handleChange} />
                                <label htmlFor="admin" className="ml-2">Admin</label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.password && <span className="text-red-500">{errors.password}</span>}
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <button type="submit" className="bg-[#E67E22] text-white py-2 px-4 rounded-md hover:bg-[#D35400]">Submit</button>
                            <p>Not registered yet?
                                <span className='ml-2 text-[#E67E22]'>
                                    <Link to="/signup" >Signup</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;