# Natural Language to SQL Query Converter

A full-stack application that converts natural language to SQL queries using OpenAI's GPT-3.5 API.

## Features

- Converts English queries to SQL.
- Simple React-based frontend.
- Node.js and Express backend.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **AI Integration**: OpenAI GPT-3.5 API

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
2. Install client dependencies:

cd client
npm install

3. Install server dependencies:

cd ../server
npm install


Setup
Create a .env file in the server directory:
OPENAI_API_KEY=<your_openai_api_key>
PORT=3002
Usage
Run the server:

cd server
npm start
Run the client:

cd ../client
npm run dev
Open in browser: http://localhost:3000

Notes
Make sure your OpenAI API key has sufficient quota.
Backend runs on http://localhost:3002.
