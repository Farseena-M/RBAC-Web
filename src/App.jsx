import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import User from "./pages/User"
import Moderator from "./pages/Moderator"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/moderator" element={<Moderator />} />
      </Routes>
      <ToastContainer position="top-center" autoClose='500' />
    </>
  )
}

export default App
