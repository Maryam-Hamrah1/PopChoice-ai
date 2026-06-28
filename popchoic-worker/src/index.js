import { createEmbedding } from "./utils/createEmbedding";
import { searchMovies } from "./utils/searchMovies";
import { generateExplanation } from "./utils/generateExplanation";

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    try {
      const { favoriteMovie, mood, tone } = await request.json();

      const profile =` 
My favorite movie is ${favoriteMovie}.

I am looking for something ${mood}.

I want something ${tone}.`
      ;

      
      const embedding = await createEmbedding(profile, env);

      
      const movie = await searchMovies(embedding, env);

      
      const explanation = await generateExplanation(
        profile,
        movie,
        env
      );

      return new Response(
        JSON.stringify({
          movie,
          explanation,
        }),
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({
          error: err.message,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};