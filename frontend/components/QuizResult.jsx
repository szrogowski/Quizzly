import React from "react";
import { useLocation } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function handleReturn(){
    const navigate = useNavigate();
    navigate(`/home`);
}
function QuizResult() {
  const { state } = useLocation();
  const { quiz, userAnswers } = state;

  let score = 0;
  quiz.questions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctIndex) score++;
  });

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <h2>Your Score</h2>
        <div className="flex items-baseline justify-between">
        <p>
          {score} / {quiz.questions.length}
        </p>
        <button onClick={handleReturn} className="nav-btn">RETURN</button>
        </div>
      </div>
    </div>
  );
}

export default QuizResult;
