import express from "express"

import Quiz from "../models/Quiz.js"

const router = express.Router();
router.post("/create", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json({ message: "Quiz created", quiz });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create quiz" });
  }
});
router.get('/all', async (req,res) => {
  try {
    const quizzes = await Quiz.find()
    if(quizzes.length=== 0) return res.status(404).json({error:"Quiz not found."})
    return res.json(quizzes)
  } catch (err) {
    return res.status(500).json({message:"Server error" ,error: err})
  }
})

router.get('/:id', async (req,res)=>{
  try {
    const quiz = await Quiz.findById(req.params.id);
    if(!quiz) return res.status(404).json({error:"Quiz not found."})

      return res.json(quiz)
  } catch (err) {
    res.status(500).json({message:"Server error" ,err})
  }
})


// fetching all quizzes for the website to display 

export default router;