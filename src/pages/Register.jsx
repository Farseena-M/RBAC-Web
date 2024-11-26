import { useFormik } from "formik";
import * as Yup from 'yup';
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

const Register = () => {
    const Nvgt = useNavigate();
    const [loading, setLoading] = useState(false);
    const url = import.meta.env.VITE_API_URL


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            role: 'User'
        },
        validationSchema: Yup.object({
            name: Yup.string().required('name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().required('Password is required'),
            role: Yup.string().oneOf(['User', 'Moderator'], 'Invalid role').required('Role is required'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const trimmedValues = {
                name: values.name.trim(),
                email: values.email.trim(),
                password: values.password.trim(),
                role: values.role
            };
            try {
                await axios.post(`${url}/api/user/register`, trimmedValues);
                toast.success('Registered Successfully')
                Nvgt('/');
            } catch (error) {
                console.error('Signup error:', error.response ? error.response.data : error.message);
                toast.warning('Signup failed. Please check your credentials!.');
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    SignUp
                </h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...formik.getFieldProps('name')}
                            placeholder="Enter your name"
                            className={`border ${formik.touched.username && formik.errors.name ? 'border-yellow-500' : 'border-gray-300'} w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400`}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-yellow-500 text-sm text-center">{formik.errors.name}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...formik.getFieldProps('email')}
                            placeholder="Enter your email"
                            className={`border ${formik.touched.email && formik.errors.email ? 'border-yellow-500' : 'border-gray-300'} w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-yellow-500 text-sm text-center">{formik.errors.email}</div>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...formik.getFieldProps('password')}
                            placeholder="Enter your password"
                            className={`border ${formik.touched.password && formik.errors.password ? 'border-yellow-500' : 'border-gray-300'} w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-yellow-500 text-sm text-center">{formik.errors.password}</div>
                        )}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                            membershipLevel
                        </label>
                        <select
                            id="role"
                            name="role"
                            {...formik.getFieldProps('role')}
                            className={`border ${formik.touched.role && formik.errors.role ? 'border-yellow-500' : 'border-gray-300'} w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 text-center`}
                        >
                            <option value="User">User</option>
                            <option value="Moderator">Moderator</option>
                        </select>
                        {formik.touched.role && formik.errors.role && (
                            <div className="text-yellow-500 text-sm text-center">{formik.errors.role}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded-lg text-white transition ${loading ? 'bg-gray-400' : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <p className="text-gray-600 text-center mt-4">
                    Already have an account?{' '}
                    <NavLink to="/" className="text-gray-800 font-medium hover:underline">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
