import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizPreview from './QuizPreview';

function QuizAll() {
  const [quizzes, setQuizzes] = useState(null);

  useEffect(() => {
    axios
      .get('/api/quiz/all')
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!quizzes) return <h2>Loading...</h2>;

  return (
    <div>
      {console.log(quizzes)}
      <h2>All Quizzes</h2>
      <ul>
        {quizzes.map((q) => (
          
          <QuizPreview id={q._id} title={q.name}/>
        ))}
      </ul>
    </div>
  );
}

export default QuizAll;
