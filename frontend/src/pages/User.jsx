import React, { useEffect } from 'react'
import { use } from 'react';
import { useParams,Navigate,useNavigate, Link} from "react-router-dom";
import axios from 'axios';

const User = () => {
  const navigate=useNavigate()
    const user= JSON.parse(localStorage.getItem('user')) ||
    alert('please login to acsess this page')
    ||window.location.replace('/login')


  axios.post('http://localhost:3000/login',user).then((res)=>{
  if(res.data==='login failed'){
    alert('somthing went wrong please login again')
    localStorage.removeItem('user')
    window.location.replace('/login')
  }})
    console.log(user)

    const DeletUser=()=>{
      axios.post('http://localhost:3000/delete',user).then((res)=>{
        if(res.data==='user deleted'){
          alert('user deleted')
          localStorage.removeItem('user')
          window.location.replace('/login')
        }
      })
    }


  return (
    
    <div className="p-5 h-[100%] w-[100%] bg-gray-900 text-white">
        <h3 className='text-3xl m-2'>User</h3>
        <div className='m-2 p-3 rounded-xl bg-gray-800 text-white outline-none'>
        <h1>username : {user.username} </h1>
        <h1>id in database : {user._id} </h1>
        <br />
        <Link
        className='p-2  rounded-xl bg-gray-400 text-white outline-none'
        to='/update' >Update user</Link>
        <br />
        <h6 className='text-xs mt-5 text-gray-500'>Make shaure to logout before exiting</h6>
        <button
        className='mt-2 p-2 rounded-xl bg-red-800 text-white outline-none'
        onClick={()=>{localStorage.removeItem('user');
          window.location.replace('/login')
        }}>logout</button>
        
        <button
        className='ml-2 p-2 rounded-xl bg-red-800 text-white outline-none'
        onClick={DeletUser} >delet user</button>
        </div>

    </div>
    
  )
}

export default User