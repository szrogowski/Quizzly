import React from 'react'
import {Link, useNavigate} from 'react-router-dom';



function Header({user,setUser}) {
  
  const navigate = useNavigate();
  const handleLogout =()=>{
  localStorage.removeItem('token');
  setUser(null);
  navigate('/');
}
  
  return (
      
      <header className='flex col justify-between'>
            <div className='flex align-items-center'>
              {user? (
                <h1 className='site-name'><Link to='/home'>Quizzly</Link></h1>
              ):(
                <h1 className='site-name'><Link to='/'>Quizzly</Link></h1>
              )}
              
            </div>
          {/* if you are  not logged in  */}
          {user? (
            <div className='header-links flex col justify-end align-items-center '>

              <div className="dropdown">
              <p className='dropbtn'>Create</p>
              <div className="dropdown-content">
                <a href="">FLASH CARDS</a>
                <a href="">MEMORY CARDS</a>
                <Link to='/createquiz'>QUIZ</Link>
                
              </div>
              
              </div>
              <div className="dropdown">
              <p className='dropbtn'>Play</p>
              
              <div className="dropdown-content">
                
                <Link to='/quiz/random'>RANDOM QUIZ</Link>
                {/* <a href="">MEMORY CARDS</a>
                <Link to='/createquiz'>QUIZ</Link> */}
                <Link to='/quiz/all'>All Quizzes</Link>
              </div>
              
              </div>
              <p className='dropbtn'>Assignments</p>
              <p><Link className='dropbtn' to='/myaccount'>My account</Link></p>
             
              <p className='link-router' onClick={handleLogout}><Link className='link-router' >LOGOUT</Link></p> 
              
              {/* <h4 className='header-text'><Link className='link-router' to='/quiz'>Quiz</Link></h4>
              
              <h4 className='header-text'><Link className='link-router' to='/myaccount'>Your account.</Link></h4> */}
            </div>
          ):(
            <div className='header-links flex col justify-end align-items-center  '>
              <p className='header-text '><Link className='link-router' to='/login'>Log in</Link></p>
              <p className='header-text'><Link className='link-router' to='/register'>Register</Link></p>
            </div>

          )}
          

         
            
      </header>
    
  )
}

export default Header