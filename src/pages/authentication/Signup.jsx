import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import axios from 'axios';

function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});
    const [userType, setUserType] = useState('customer');

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
                const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    user_type: userType
                });

                console.log('Signup successful:', response.data);

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                setErrors({});
            } catch (error) {
                console.error('Signup failed:', error.response.data);
            }
        }
    };

    // Function to validate form data
    const validateFormData = (data) => {
        const errors = {};
        if (!data.firstName.trim()) {
            errors.firstName = 'First name is required';
        }
        if (!data.lastName.trim()) {
            errors.lastName = 'Last name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.password.trim()) {
            errors.password = 'Password is required';
        }
        if (data.password !== data.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto h-screen flex justify-center items-center mt-2">
                <div className="w-full max-w-md mx-8 shadow-lg p-4 bg-[#F7F9F9]">
                    <h2 className="text-3xl font-semibold mb-4 text-center">Signup</h2>
                    <form onSubmit={handleSubmit} className="flex flex-wrap">
                        <div className="mb-4 w-full flex justify-evenly items-center">
                            <div>
                                <input type="radio" id="admin" name="userType" value="admin" checked={userType === 'admin'} onChange={() => setUserType('admin')} />
                                <label htmlFor="admin">Admin</label>
                            </div>
                            <div>
                                <input type="radio" id="salesman" name="userType" value="salesman" checked={userType === 'salesman'} onChange={() => setUserType('salesman')} />
                                <label htmlFor="salesman">Salesman</label>
                            </div>
                            <div>
                                <input type="radio" id="customer" name="userType" value="customer" checked={userType === 'customer'} onChange={() => setUserType('customer')} />
                                <label htmlFor="customer">Customer</label>
                            </div>
                        </div>
                        <div className="mb-4 w-full md:w-[49%] md:mr-[2%]">
                            <label htmlFor="firstName" className="block mb-1">First Name</label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                        </div>
                        <div className="mb-4 w-full md:w-[49%]">
                            <label htmlFor="lastName" className="block mb-1">Last Name</label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                        </div>
                        <div className="mb-4 w-full">
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>
                        <div className="mb-4 w-full md:w-[49%] md:mr-[2%]">
                            <label htmlFor="password" className="block mb-1">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.password && <span className="text-red-500">{errors.password}</span>}
                        </div>
                        <div className="mb-4 w-full md:w-[49%]">
                            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none" />
                            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
                        </div>
                        <div className="w-full text-center">
                            <button type="submit" className="bg-[#E67E22] text-white py-2 px-4 rounded-md hover:bg-[#D35400]">Submit</button>
                            <p className='mt-3'>Already registered?
                                <span className='ml-2 text-[#E67E22]'>
                                    <Link to="/login">Login</Link>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;