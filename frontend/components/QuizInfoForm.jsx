export default function QuizInfoForm({ quizInfo, setQuizInfo, goNext }) {
  return (
    <>
   
     

      
    <div className="form-wrapper">
        <form className="quiz-form" >
          <h2>Create your quiz</h2>

          <input type="quiz_name"  name="quiz_name" value={quizInfo.name}
        onChange={(e) => setQuizInfo({ ...quizInfo, name: e.target.value })} placeholder="Quiz name" />
          
          <select name=""  onChange={(e) => setQuizInfo({ ...quizInfo, genre: e.target.value })} id="">
            <option value="">Genre</option>
            <option value="">Geography</option>
          </select>
        
          <button  onClick={goNext}>Next</button>
          
        </form>
      </div>
    </>

  );
}
