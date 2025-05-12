import express from 'express';
import Question from '../models/question.js';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// ✅ POST /api/questions/seed-from-file
router.post('/seed-from-file', async (req, res) => {
  try {
    const filePath = path.resolve('backend/seed_questions.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const questions = JSON.parse(data);

    await Question.deleteMany(); // Clear existing data
    await Question.insertMany(questions); // Insert from JSON

    res.json({ message: `${questions.length} real questions seeded!` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to seed questions' });
  }
});

export default router;
