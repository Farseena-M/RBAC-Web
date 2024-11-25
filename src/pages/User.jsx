import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const User = () => {

    const Nvgt = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('userToken')
        toast.success('User logout Successfully')
        Nvgt('/')
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <div className="bg-white p-10 rounded-lg shadow-xl w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-6 font-serif">
                    Welcome to the User Panel
                </h1>
                <p className="text-center text-gray-500 text-lg mb-8">
                    Manage all aspects of the system efficiently and effectively.
                </p>
                <div className="mt-8 flex justify-center" title='Logout'>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300" onClick={handleLogout}>
                        <FaSignOutAlt className="text-2xl" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User