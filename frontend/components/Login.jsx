import React, { use } from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [formData,setFormData] = useState({
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
      const res = await axios.post("/api/users/login",formData);
     
      console.log(res)
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
      <form onSubmit={handleSubmit}className="login-form">
        <h2>Login</h2>

        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder="Password" />

        <button type="submit">Sign In</button>

        <p className="register-link">
          Don’t have an account? <a href="#">Register</a>
        </p>
        {error && <p className='text-red-500 mb-4 text-sm'>{error}</p>}
      </form>
    </div>
  );
  
}

export default Login