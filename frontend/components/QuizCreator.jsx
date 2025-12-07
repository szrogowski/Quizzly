import { useState } from "react";
import QuizInfoForm from "./QuizInfoForm";
import QuestionForm from "./QuestionForm";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
export default function QuizCreator({user}) {
  const [quizInfo, setQuizInfo] = useState({ name: "", genre: "" ,username:""});
  const [questions, setQuestions] = useState([]);
  const [step, setStep] = useState("info"); // "info" | "question"
  const [num,setNum] = useState(1);
  
  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };
  const navigate = useNavigate();
  const finishQuiz = async () => {

    const username = user._id
    console.log(user.first_name)
    //const navigate = useNavigate()
    const quiz = { ...quizInfo,username, questions };
    console.log("quiz:", quiz);
    console.log()
    try{
        const res = await axios.post("/api/quiz/create",quiz)
        alert("quiz saved")
        navigate('/home')
    }
    catch(err){
        console.error("!!!" , err)

    }

    // const navigate = useNavigate();
    // navigate('/')
//alert("Quiz created! Check console.");
  };

  return (
    <div className="flex justify-center">
      {console.log(user._id)}
      {step === "info" && (
        <QuizInfoForm
          quizInfo={quizInfo}
          setQuizInfo={setQuizInfo}
          goNext={() => setStep("question")}
        />
      )}

      {step === "question" && (
        <QuestionForm num={num} addQuestion={addQuestion} finishQuiz={finishQuiz} />
      )}
    </div>
  );
}
