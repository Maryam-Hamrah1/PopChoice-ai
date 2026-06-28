import { useState } from "react";
import QuestionsView from "./components/QuestionView"
import ResultView from "./components/ResultView"
import { WORKER_URL } from "./lib/config";



function App() {
  const [view, setView] = useState("questions");
  const [result, setResult] = useState(null);

  async function handleSubmit({ favoriteMovie, mood, tone }, setLoading) {
    setLoading(true);

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ favoriteMovie, mood, tone }),
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      setResult(data);
      setView("result");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setResult(null);
    setView("questions");
  }

  return (
    <>
      {view === "questions" ? (
        <QuestionsView onSubmit={handleSubmit} />
      ) : (
        <ResultView result={result} onReset={handleReset} />
      )}
    </>
  );
}

export default App;