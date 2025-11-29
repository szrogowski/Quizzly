import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
  text: String,
  answers: [String],
  correctIndex: Number
});

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String},
  questions: [questionSchema]
});

const quiz = mongoose.model("Quiz", quizSchema);
export default quiz;