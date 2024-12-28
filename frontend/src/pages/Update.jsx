import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";


export default function update() {

  const user = JSON.parse(localStorage.getItem('user'))

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [Server, setServer] = useState("");
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:3000/update", 
    {
      _id:user._id,
      username:data.username,
      password:data.password
    }
    ).then((res) => {
      if(res.data === 'username is already taken'){
        setServer(res.data)
        return
      }else{
      console.log(res.data);
      setServer(res.data +' please login again');
      localStorage.removeItem('user')
      }
    });

  };



  return (
    <div className="p-5 h-[100%] w-[100%] bg-gray-900 text-white">
      <h3 className='text-3xl m-2'>Update user</h3>
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
        <button type="submit" className="m-2 p-2 rounded-xl bg-gray-800 text-white outline-none">update</button>

       
    </form>
    </div>
  );
}
