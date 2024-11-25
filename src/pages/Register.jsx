import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
    const Nvgt = useNavigate()
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    SignUp
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
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
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
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
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                    >
                        Register
                    </button>
                </form>
                <p className="text-gray-600 text-center mt-4">
                    Already have an account?{" "}
                    <NavLink to="/" className="text-gray-800 font-medium hover:underline">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
