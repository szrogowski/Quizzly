import React from 'react'
import teacher from "../src/assets/teacher.jpg"
import student from "../src/assets/teacher.jpg"
function Welcome() {
  return (
    <>
    <br />
    <div className="text-center">
      <h3>Welcome to QUIZZLY</h3>
    </div>
    <br />
    <div className="welcome-content-main">
        
        

        <div className="div1">
            <img className='teacher-photo' src={teacher} alt="" />
        </div>
        <div className="welcome-text">
          <p className='text-main'>
            Quizzly is a tool built for students, teachers but also parents. Doesn't matter if you're a beginner or expert. These tools were made for learning using flashcards, quiz's and many more.
            </p>
        </div>
        <div className="welcome-text">
          <div className='text-main'>
            <h4>Learn the most efficient way !</h4>
          </div>
          </div>
        <div >
          <img className="teacher-photo" src={student} alt="" />
        </div>
        <div className='full-width'>
        
        </div>
    </div>
    </>
  ) 
}

export default Welcome