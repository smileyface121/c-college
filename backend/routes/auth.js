import express from 'express';
import User from '../models/User.js';
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ email, password });
  }
  res.json({ userId: user._id });
});

export default router;
