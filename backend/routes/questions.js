import express from 'express';
import Question from '../models/question.js';

const router = express.Router(); 

// Seeder route (add this at bottom of file)
router.post('/seed', async (req, res) => {
  await Question.deleteMany({}); // Clear existing

  const questions = [];

  for (let i = 1; i <= 50; i++) {
    questions.push({
      question: `What does Law ${i} of Thermodynamics say?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswerIndex: i % 4 // rotate correct answers
    });
  }

  await Question.insertMany(questions);
  res.json({ message: '50 questions seeded!' });
});
export default router;