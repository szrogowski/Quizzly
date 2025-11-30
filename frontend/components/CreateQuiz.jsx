import React, { useState } from "react";

const CreateQuiz = () => {
  
  return (
         
  <div className="form-wrapper">
        <form className="quiz-form" >
          <h2>Create your quiz</h2>

          <input type="quiz_name"  required name="quiz_name" placeholder="Quiz name" />
          
          <select name="" id="">
            <option value="">Genre</option>
            <option value="">Geography</option>
          </select>
          
          
          
          <button type="submit">Next</button>
          
        </form>
      </div>
  )}
  export default CreateQuiz