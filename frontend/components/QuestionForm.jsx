import { useState } from "react";

export default function QuestionForm({ num,addQuestion, finishQuiz }) {
  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(null);

  const handleAnswerChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const saveQuestion = () => ({
    text: questionText,
    answers,
    correctIndex,
  });

  const handleNext = () => {
    
    addQuestion(saveQuestion());
    resetForm();
  };

  const handleFinish = () => {
    addQuestion(saveQuestion());
    finishQuiz();
    
  };

  const resetForm = () => {
    setQuestionText("");
    setAnswers(["", "", "", ""]);
    setCorrectIndex(null);
  };

  return (
    <div className="quiz-form">
      {num}
      <h2>Create Question</h2>

      <input
        type="text"
        placeholder="Write your question..."
        value={questionText}
        required
        onChange={(e) => setQuestionText(e.target.value)}
      />

      <h4 >Answers (select the correct one):</h4>

      {answers.map((answer, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginTop: "0px",
          }}
        >
          <input
            type="radio"
            name="correctAnswer"
            checked={correctIndex === index}
            onChange={() => setCorrectIndex(index)}
            style={{ width: "20px", height: "20px" }}
          />

          <input
            type="text"
            placeholder={`Answer ${index + 1}`}
            value={answer}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
            style={{ flex: 1 }}
          />
        </div>
      ))}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button onClick={handleFinish}>Finish</button>
        <button onClick={handleNext}>Next Question</button>
      </div>
    </div>
  );
}
