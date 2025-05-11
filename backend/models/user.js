import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String, // hashed in real systems
});

export default mongoose.model('User', userSchema);
