import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuizPreview({ id, title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className='quiz-preview-card' id={id}>
      <p>{title}</p>
      <p>{description}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default QuizPreview;
