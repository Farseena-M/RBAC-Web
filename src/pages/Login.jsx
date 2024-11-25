import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Login
                </h2>
                <form>
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
                        className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition mb-4"
                    >
                        Login
                    </button>
                    <NavLink to="/signup">
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
