import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const Nvgt = useNavigate()
    const [loading, setLoading] = useState(false);
    const url = import.meta.env.VITE_API_URL

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await axios.post(`${url}/api/user/login`, values);
                const Data = response.data;
                if (Data.role === 'Admin') {
                    localStorage.setItem('adminToken', Data.token);
                    toast.success('Admin Login Successfully')
                    Nvgt('/admin');
                } else if (Data.role === 'User') {
                    localStorage.setItem('userToken', Data.token);
                    toast.success('User Login Successfully')
                    Nvgt('/user');
                } else if (Data.role === 'Moderator') {
                    localStorage.setItem('moderatorToken', Data.token);
                    toast.success('Moderator Login Successfully')
                    Nvgt('/moderator');
                } else {
                    throw new Error('Unknown role');
                }
            } catch (error) {
                console.error("Login failed:", error.response ? error.response.data : error.message);
                toast.warning("Login failed. Please check your credentials!.");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...formik.getFieldProps("email")}
                            placeholder="Enter your email"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
                                ? "border-yellow-500 focus:ring-yellow-500"
                                : "border-gray-300 focus:ring-gray-400"
                                }`}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-yellow-500 text-sm text-center">
                                {formik.errors.email}
                            </div>
                        )}
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            {...formik.getFieldProps("password")}
                            placeholder="Enter your password"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password
                                ? "border-yellow-500 focus:ring-yellow-500"
                                : "border-gray-300 focus:ring-gray-400"
                                }`}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-yellow-500 text-sm text-center">
                                {formik.errors.password}
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 px-4 rounded-lg text-white transition ${loading ? "bg-gray-400" : "bg-gray-800 hover:bg-gray-700"
                            }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <NavLink to="/signup" className="block mt-4">
                        <button
                            type="button"
                            className="w-full bg-white text-gray py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-500 transition"
                        >
                            Sign Up
                        </button>
                    </NavLink>
                </form>
            </div>
        </div>
    );
};

export default Login;
