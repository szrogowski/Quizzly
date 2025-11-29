import React, { useState } from "react";

const CreateQuiz = () => {
  
  return (
         
  <div className="form-wrapper">
        <form className="quiz-form" >
          <h2>Create your quiz</h2>

          <input type="quiz_name"  name="quiz_name" placeholder="Quiz name" />
          {/* <label htmlFor="select">Genre</label> */}
          <select name="" id="">
            <option value="">Genre</option>
            <option value="">Geography</option>
          </select>
          {/* <input type="date" name="date" onChange={handleChange}value={formData.date} placeholder={Date.now()}/> */}
          
          <input type="text" name="" id="" placeholder='Question 1' />
          <div className="add-question">
            <input type="text" placeholder='Answear 1' value="" />
            <input type="text"placeholder='Answear 2' value="" />
            <input type="text" placeholder='Answear 4'value="" />
            <input type="text"placeholder='Answear 3' value="" />
          </div>

          <button type="submit">Create</button>
          <p className="register-link">
            You already have an account?<a href="#"> Log in </a>
            
          </p>
        </form>
      </div>
  )}
  export default CreateQuiz