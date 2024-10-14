import { useState } from "react";
import "./App.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  function clickHandler(e) {
    if (clickedCards.includes(e.target.id)) {
      setScore(0);
    } else {
      setClickedCards((prev) => [...prev, e.target.id]);
      setScore((prev) => ++prev);
    }
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  return (
    <div className="main">
      <p className="score">Score: {score}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  );
}

export default App;
