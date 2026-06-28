import { useState } from "react";
import LoadingState from "./LoadingState";

function QuestionsView({ onSubmit }) {
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const [mood, setMood] = useState("");
  const [tone, setTone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit() {
    if (!favoriteMovie || !mood || !tone) {
      setError("Please answer all questions before continuing.");
      return;
    }
    setError(null);
    onSubmit({ favoriteMovie, mood, tone }, setLoading);
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎬 PopChoice</h1>
          <p className="text-gray-400 text-sm">Your personal AI movie advisor</p>
        </div>

        
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-1">Find Your Perfect Movie</h2>
          <p className="text-gray-400 text-sm mb-8">Answer a few questions and we'll find the perfect match.</p>

          <div className="flex flex-col gap-6">

            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                What's your favorite movie and why?
              </label>
              <textarea
                className="bg-gray-950 border border-gray-700 rounded-xl text-white text-sm p-4 resize-none outline-none focus:border-violet-500 transition-colors placeholder-gray-600"
                placeholder="e.g. I love Inception because of its mind-bending story..."
                rows={4}
                value={favoriteMovie}
                onChange={(e) => setFavoriteMovie(e.target.value)}
              />
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                New or Classic?
              </label>
              <div className="flex gap-3">
                {["new", "classic"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setMood(option)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                      mood === option
                        ? "bg-violet-600 border-violet-600 text-white"
                        : "bg-gray-950 border-gray-700 text-gray-400 hover:border-violet-500 hover:text-white"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-white">
                Fun or Serious?
              </label>
              <div className="flex gap-3">
                {["fun", "serious"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-all ${
                      tone === option
                        ? "bg-violet-600 border-violet-600 text-white"
                        : "bg-gray-950 border-gray-700 text-gray-400 hover:border-violet-500 hover:text-white"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-950 border border-red-500 rounded-xl px-4 py-3 text-red-400 text-sm">
                ⚠️ {error}
              </div>
            )}

            
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all text-sm"
            >
              {loading ? (
                <LoadingState/>
              ) : (
                "🎯 Recommend a Movie"
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsView;