import React from 'react'
import Regiser from './pages/register'
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
import Update from './pages/Update'
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
const App = () => {
  return (
    <div className='p-10'>
    <div className='bg-gray-700 p-5 text-white'>
    <Link className='mr-5' to="/">Home</Link>
    <Link className='' to="/register">Register</Link>
    <Link className='ml-5' to="/login">Login</Link>
    <Link className='ml-5' to="/user">User</Link>
    </div>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Regiser />} />
      <Route path="/login" element={<Login />} />
      <Route path='/user' element={<User />} />
      <Route path='update' element={<Update />} />
    </Routes>
    </div>
  )
}

export default App