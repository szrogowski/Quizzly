import React, { useEffect, useState } from "react";
import axios from "axios";
  import { useParams, useNavigate } from "react-router-dom";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/quiz/${id}`)
      .then((res) => setQuiz(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!quiz) return <span className="loader"></span>;
  const q = quiz.questions[currentQuestion];

  const handleAnswerClick = (answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion]: answerIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    navigate(`/quiz/${id}/result`, { state: { quiz, userAnswers } });
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">

        {/* Header */}
        <div className="quiz-info">
          <h2 className="quiz-title">{quiz.name}</h2>
          <p>
            Question <span className="highlight">{currentQuestion + 1}</span> of{" "}
            {quiz.questions.length}
          </p>
        </div>

        {/* Timer (optional) */}
        {/* 
        <div className="quiz-timer-bar">
          <div className="quiz-timer-fill" style={{ width: `${progress}%` }}></div>
        </div>
        */}

        {/* Current Question */}
        <div className="question-box">
          <p className="question-text">{q.text}</p>
        </div>

        {/* Options */}
        <div className="options-grid">
          {q.answers.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                userAnswers[currentQuestion] === index ? "selected" : ""
              }`}
              onClick={() => handleAnswerClick(index)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="quiz-controls">
          <button
            className="nav-btn"
            onClick={handlePrev}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion < quiz.questions.length - 1 ? (
            <button className="nav-btn" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="nav-btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
