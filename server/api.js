import { OpenAI } from "openai";  // Assuming you're using the newer openai package
import dotenv from "dotenv";

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set.');
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export default openai;
