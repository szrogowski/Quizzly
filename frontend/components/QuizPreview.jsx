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
      <div className='flex justify-between'>
        <p>{description}</p>
        <button onClick={handleClick}>PLAY</button>
      </div>
    </div>
  );
}

export default QuizPreview;
