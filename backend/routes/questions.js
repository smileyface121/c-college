import express from 'express';
import Question from '../models/question.js';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// ✅ GET /api/questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find().limit(50);
    res.json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

// ✅ POST /api/questions/seed-from-file
router.post('/seed-from-file', async (req, res) => {
  try {
    const filePath = path.resolve('seed_questions.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const questions = JSON.parse(data);

    await Question.deleteMany();
    await Question.insertMany(questions);

    res.json({ message: `${questions.length} real questions seeded!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to seed questions' });
  }
});

export default router;
