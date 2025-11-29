import React, { useEffect, useState } from "react";

function QuizLayout() {
  const [progress, setProgress] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Timer progress animation
  useEffect(() => {
    const duration = 15; // seconds
    const interval = 100; // ms update speed
    const totalSteps = (duration * 1000) / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setProgress((step / totalSteps) * 100);
      if (step >= totalSteps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Handle answer selection
  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
  };

  return (
    <div className="quiz-wrapper">
      <div className="quiz-card">
        <div className="quiz-info">
            <h2 className="quiz-title">General Knowledge Quiz</h2>
        <p>
            Question <span className="highlight">1</span> of 10
          </p>
        </div>
        {/* Timer progress bar */}
        {/* <div className="quiz-timer-bar">
          <div
            className="quiz-timer-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>  */}

        
          

        <div className="question-box">
          <p className="question-text">
            What is the capital city of France?
          </p>
        </div>

        <div className="options-grid">
          {["Madrid", "Paris", "Rome", "Berlin"].map((option, index) => (
            <button
              key={index}
              className={`option-btn ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => handleAnswerClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="quiz-controls">
          <button className="nav-btn">Previous</button>
          <button className="nav-btn">Next</button>
        </div>
      </div>
    </div>
  );
}

export default QuizLayout;
