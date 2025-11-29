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
          {/* <input type="date" name="date" onChange={handleChange}value={formData.date} placeholder={Date.now()}/> */}
          
          
          
          {/* <div className="question-count">
            <label htmlFor="">How many questions do you want in your quiz?</label>
            <input type="number" className="q-size" name="" id="" />
          </div> */}

          {/* <hr /> */}

          {/* <div className="new-question">
            <input type="text" name="" id="" placeholder='Question 1' /> 
           
            <div className="add-question">
              <input type="text" placeholder='Answear 1'  />
              <input type="text" placeholder='Answear 2'  />
              <input type="text" placeholder='Answear 4'  />
              <input type="text" placeholder='Answear 3'  />
            </div>
          </div> */}
          
          
          <button type="submit">Next</button>
          
        </form>
      </div>
  )}
  export default CreateQuiz