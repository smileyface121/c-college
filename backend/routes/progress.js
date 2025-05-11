import express from 'express';
import Progress from '../models/Progress.js';
const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, answers } = req.body;

  const formatted = answers.map(ans => ({
    questionId: ans.questionId,
    selectedIndex: ans.selectedIndex,
    isCorrect: ans.selectedIndex === ans.correctAnswerIndex
  }));

  await Progress.findOneAndUpdate(
    { userId },
    { $set: { answers: formatted } },
    { upsert: true }
  );

  res.json({ message: 'Progress saved' });
});

export default router;
