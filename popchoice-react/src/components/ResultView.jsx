function ResultView({ result, onReset }) {
  const { movie, explanation } = result;
   
  return (
    <div className="min-h-screen bg-gray-950 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎬 PopChoice</h1>
          <p className="text-gray-400 text-sm">Your personal AI movie advisor</p>
        </div>

        
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col gap-6">

          
          <div className="w-fit bg-violet-950 border border-violet-500 text-violet-400 text-xs font-semibold px-4 py-2 rounded-full">
            🎉 We found your match!
          </div>

          
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{movie.title}</h2>
            <p className="text-gray-400 text-sm">{movie.release_year}</p>
          </div>

          
          <div className="border-t border-gray-800" />

          
          <div className="flex flex-col gap-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">About the Movie</p>
            <p className="text-gray-400 text-sm leading-relaxed">{movie.content}</p>
          </div>

          
          <div className="border-t border-gray-800" />

          
          <div className="bg-violet-950 border border-violet-800 rounded-xl p-5 flex flex-col gap-2">
            <p className="text-xs font-bold text-violet-400 uppercase tracking-widest">✨ Why We Picked This For You</p>
            <p className="text-white text-sm leading-relaxed">{explanation}</p>
          </div>

          
          <button
            onClick={onReset}
            className="w-full border border-gray-700 hover:border-violet-500 hover:text-white text-gray-400 font-medium py-4 rounded-xl transition-all text-sm"
          >
            🔄 Go Again
          </button>

        </div>
      </div>
    </div>
  );
}

export default ResultView;