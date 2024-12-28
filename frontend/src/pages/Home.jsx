import React from 'react'
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='p-5 h-[100%] w-[100%] bg-gray-900 text-white' >

    <h1 className='text-3xl'>Welcome to the Home Page</h1>
    <br />
    <p>
    Get started -
    </p>
    <br />
    <Link className='mt-2 p-2 rounded-xl bg-gray-800 text-white outline-none' to="/register">Register</Link>
    
    <Link className='ml-5 p-2 rounded-xl bg-gray-800 text-white outline-none' to="/login">Login</Link>
    
    <div>
      <br />
    <h3 className='text-3xl '>About Project -</h3>
    <br />
    <div className='m-5 bg-gray-400 rounded-xl p-5 text-black' >
      <p>
        This is a simple Full stack project that uses React, Tailwind CSS, and React Router on the frontend and Node.js, Express, and MongoDB on the backend.
      </p>
      <br />
      <p>
        The project has three pages - Home, Register, and Login.
      </p>
      <br />
      <p>
        The Home page is the first page that the user sees. It has links to Register and Login pages.
      </p>
      <br />
      <p>
        The Register page has a form that takes a username and password as input and Regiser it to the backend. The form has validation for the username and password fields.
      </p>
      <br />
      <p>
        The Login page has a form that takes a username and password as input and 
        send it to backend and validate the user if the user is valid then it will redirect to the user Page which has all the user data otherwise it will show an error message.
      </p>
      <br />
      <p>
        The User page has the user data and has links to Update and Delete the user and a logout button.
      </p>
      <br />
      <p>
        The Update page has a form that takes a username and password as input and update the user data in the database if the data is already used it will return a error message.
      </p>

    </div>
    </div>




    </div>
    
  )
}

export default Home