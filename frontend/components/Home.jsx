import React from 'react'
import QuizGroup from './QuizGroup'
function Home({user,error}) {
  if(!user) return null
  return (
    
    <>
    <div className='flex justify-center opacity-50 text-30'>
      
      <p>Hello {user.first_name}</p>
    </div>
    <div>
    
    </div>
    <div className='home-favorite'>

      <h3>Our favorites !</h3>
      <QuizGroup className='flex justify-center'/>
    </div>
    
    </>
  )
}

export default Home