import axios from 'axios';
import React, { useState } from 'react'
import { use } from 'react';
import { useForm } from "react-hook-form";
import { Link,useNavigate,Navigate, redirect } from 'react-router-dom';
 const Login = () => {

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [Server, setServer] = useState("");
  const onSubmit = (data) => {
    

    axios.post("http://localhost:3000/login", data).then((res) => {
      if(res.data==='login failed'){
        setServer('username or password is incorrect')
      }
      else{
        console.log(res.data);
        setServer('hello '+res.data.username + '  login success')
       localStorage.setItem('user',JSON.stringify(res.data))
        }
    }).catch((e)=>{console.log(e)})
  };


  return (
    <div className="p-5 h-[100%] w-[100%] bg-gray-900 text-white">
      <h3 className='text-3xl m-2'>Login</h3>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="m-2 p-2 rounded-xl bg-gray-800 text-white outline-none"
        placeholder="username"
        
        {...register("username", {
          required: { value: true, message: "this filed is required" },
          minLength: { value: 3, message: "minlength is 3" },
        })}
      />
      {errors.username && <div>{errors.username.message}</div>}
      <br />
      <input
      className="m-2 p-2 rounded-xl bg-gray-800 text-white outline-none"
        placeholder="password"
        {...register("password", {
          required: { value: true, message: "this filed is required" },
          minLength: { value: 5, message: "minlenght is 5" },
        })}
      />

      {errors.password && <div>{errors.password.message}</div>}
      <br />
      <div>{Server}</div>
        <button type="submit" className="m-2 p-2 rounded-xl bg-gray-800 text-white outline-none" >Login</button>

        <h6 className='m-2 text-gray-400'>New_User-<Link className='underline' to='/register'>register</Link></h6>
    </form>
    </div>
  )
}

export default Login;