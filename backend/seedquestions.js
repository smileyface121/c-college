import fs from 'fs';
import path from 'path';

const questions = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'seed_questions.json'))
);

