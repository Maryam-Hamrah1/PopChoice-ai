import { OPENROUTER_BASE_URL, getHeaders } from "../lib/config";

export async function generateExplanation(profile, movie, env) {
  const response = await fetch(`
    ${OPENROUTER_BASE_URL}/chat/completions`,
    {
      method: "POST",
      headers: getHeaders(env.OPENROUTER_API_KEY),
      body: JSON.stringify({
        model: "openai/gpt-oss-120b:free",
        messages: [
          {
            role: "user",
            content:` You are a friendly movie advisor.

A user described their preferences as:
"${profile}"

The best matching movie is:
${movie.title} (${movie.release_year})

Description:
${movie.content}

Write a short 2-3 sentence personalized explanation for why this movie is a great recommendation.`,
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate explanation.");
  }

  const data = await response.json();

  return data.choices[0].message.content;
}