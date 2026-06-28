export const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export function getHeaders(apiKey) {
  return {
    Authorization:` Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}