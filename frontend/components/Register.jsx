import React, { use } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register({ setUser }) {
  const [formData,setFormData] = useState({
    first_name:"",
    second_name:"",
    date:"2025-10-10",
    email:"",
    password:""
  });
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/register",formData);
      localStorage.setItem("token",res.data.token);
      setUser(res.data);
      console.log(res.data)
      navigate('/home');
    }catch(err){
      setError(err.response?.data?.message || `${err}`);
    }
  }

  return (
     <div className="form-wrapper">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input type="first_name" onChange={handleChange} value={formData.first_name} name="first_name" placeholder="First Name" />
        <input type="second_name" onChange={handleChange} value={formData.second_name} name="second_name" placeholder="Last Name" />
        {/* <input type="date" name="date" onChange={handleChange}value={formData.date} placeholder={Date.now()}/> */}
        <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
        <input type="password" onChange={handleChange} name="password" value={formData.password}placeholder="Password" />

        <button type="submit">Sign Up</button>
        <p className="register-link">
          You already have an account?<a href="#"> Log in </a>
          {error && <p className='text-red-500 mb-4 text-sm'>{error}</p>}
        </p>
      </form>
    </div>
  )
}

export default Register