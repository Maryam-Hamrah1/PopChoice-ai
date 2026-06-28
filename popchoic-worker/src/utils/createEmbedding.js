import { OPENROUTER_BASE_URL, getHeaders } from "../lib/config";

export async function createEmbedding(profile, env) {
  const response = await fetch(`${OPENROUTER_BASE_URL}/embeddings`, {
    method: "POST",
    headers: getHeaders(env.OPENROUTER_API_KEY),
    body: JSON.stringify({
      model: "text-embedding-3-small",
      input: profile,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create embedding.");
  }

  const data = await response.json();

  return data.data[0].embedding;
}