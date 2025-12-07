import React, { useEffect } from 'react'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Login from '../components/Login'
import Register from '../components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Quiz from '../components/Quiz'
import UserNavbar from '../components/UserNavbar'
import axios from 'axios';
import { useState } from 'react'
import Home from '../components/Home'
import QuizPreview from '../components/QuizPreview'
import MyAccount from '../components/MyAccount'
import CreateQuiz from '../components/CreateQuiz'
import QuizCreator from '../components/QuizCreator'
import QuizResult from '../components/QuizResult'
import QuizAll from '../components/QuizAll'
import QuizRandom from '../components/QuizRandom'
function App() {
  const [user,setUser] = useState(null);
  const [error,setError] = useState("");
  console.log(user)
  useEffect(()=>{
    const fetchUser = async ()=> {
      const token = localStorage.getItem("token");
      if(token){
        try{
          const res = await axios.get('/api/users/me',{
          headers: {Authorization: `Bearer ${token}`}
        });
      setUser(res.data)
      }catch(err){
        setError("Failed to fetch user data.");
        localStorage.removeItem("token");
      }
      }
    };
    fetchUser();
  },[])
  return (
    <Router>    

      <Header user={user} setUser={setUser}/> 
    
       <Routes>
          <Route path='/createquiz' element={<QuizCreator user={user}/>}/>
          <Route path='/' element={<Welcome/>}/>
          
          <Route path='/myaccount' element={<MyAccount user={user} error={error}/>}/>
          {/* <Route path='/quiz' element={<QuizLayout/>}/> */}
          <Route path="/quiz/:id" element={<Quiz  />} />
          <Route path="/quiz/:id/result" element={<QuizResult/>}/>
          <Route path='/quiz/all' element={<QuizAll/>}/>
          <Route path='/quiz/random' element={<QuizRandom/>}/>
          <Route path='/home' element={<Home user={user} error={error}/>}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/register' element={<Register setUser={setUser}/>}/>

       </Routes> 
      
    </Router>

  )
}

export default App