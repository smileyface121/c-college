import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  answers: [{ questionId: String, selectedIndex: Number, isCorrect: Boolean }]
});

export default mongoose.model('Progress', progressSchema);
