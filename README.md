# 🎬 PopChoice – AI Movie Recommendation App

PopChoice is an AI-powered movie recommendation application that helps users find movies based on their personal preferences. Instead of using simple filters or keywords, the system understands the meaning behind user answers and recommends the most relevant movie using AI embeddings and vector search.

This project demonstrates how modern AI applications combine embeddings, semantic search, and large language models to create intelligent recommendation systems similar to real-world AI products.



## 🚀 Features

- Personalized movie recommendations based on user preferences
- AI-powered semantic understanding using embeddings
- Supabase vector database (pgvector) for similarity search
- AI-generated explanations for each recommendation
- Clean and responsive React interface



## 🧠 How It Works

1. User answers a few preference questions (favorite movie, mood, tone)
2. Answers are combined into a single text profile
3. The profile is converted into an embedding using OpenRouter
4. The embedding is compared with stored movie embeddings in Supabase
5. The most similar movie is selected using vector similarity search
6. OpenRouter AI generates a personalized explanation
7. The result is shown to the user in a simple UI



## ⚙️ Tech Stack

- React (Frontend)
- Cloudflare Worker (Backend)
- OpenRouter API
  - text-embedding-3-small
  - openai/gpt-oss-120b:free
- Supabase (pgvector vector database)



## 🧪 Setup Instructions

1. Install frontend dependencies:
`bash id="setup1"
npm install
npm run dev
