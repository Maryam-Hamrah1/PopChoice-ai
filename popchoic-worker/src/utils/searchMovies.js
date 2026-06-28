export async function searchMovies(embedding, env) {
  const response = await fetch(`
    ${env.SUPABASE_URL}/rest/v1/rpc/match_movies`,
    {
      method: "POST",
      headers: {
        apikey: env.SUPABASE_ANON_KEY,
        Authorization:` Bearer ${env.SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query_embedding: embedding,
        match_threshold: 0.0,
        match_count: 1,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to search movies.");
  }

  const movies = await response.json();

  if (!movies || movies.length === 0) {
    throw new Error("No movies found.");
  }

  return movies[0];
}