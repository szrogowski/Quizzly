import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizPreview from './QuizPreview';

function QuizRandom() {
  const [quizzes, setQuizzes] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get('/api/quiz/all')
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  if (!quizzes) return <h2>Temporary unavailable, we're sorry ! :/</h2>;
  const length = quizzes.length
  
  let random = Math.ceil(Math.random()*length)
  const rand_id = (quizzes[random]._id)
  const red=()=>{
    navigate(`/quiz/${rand_id}`)
  }
  red();
  return (
    <div className='all-quizzes'>
      
      
      <ul>
        <div className='quiz-filter-res'>
        {quizzes.map((q) => (
          
            
          <QuizPreview id={q._id} title={q.name}/>
          
        ))}
        </div>
      </ul>
      
    </div>
  );
}

export default QuizRandom;
