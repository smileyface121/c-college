import express from 'express';
import Question from '../models/question.js';

const router = express.Router(); 

// ✅ GET all questions
router.get('/', async (req, res) => {
  const questions = await Question.find().limit(50);
  res.json(questions);
});

// ✅ POST seed questions
router.post('/seed', async (req, res) => {
  await Question.deleteMany({});

  const questions = [];

  for (let i = 1; i <= 50; i++) {
    questions.push({
      question: `What does Law ${i} of Thermodynamics say?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswerIndex: i % 4
    });
  }

  await Question.insertMany(questions);
  res.json({ message: '50 questions seeded!' });
});

export default router;
