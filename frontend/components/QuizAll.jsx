import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizPreview from './QuizPreview';

function QuizAll() {
  const [quizzes, setQuizzes] = useState(null);

  const [search,setSearch] = useState("");
  
  const filteredQuizzes = (quizzes || []).filter(q =>
    q.name?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get('/api/quiz/all')
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!quizzes) return <span class="loader"></span>;

  return (
    <div className='all-quizzes'>
      <div className='search-bar'>
      <span className=''>Search: </span>
      <input type="text" name="" id="" onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      
      
      <ul>
        <div className='quiz-filter-res'>
        {filteredQuizzes.map((q) => (
          
            
          <QuizPreview id={q._id} title={q.name}/>
          
        ))}
        </div>
      </ul>
      
    </div>
  );
}

export default QuizAll;
