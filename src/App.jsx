import { useState } from "react";
import "./App.css";

const cardsInfos = [
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
  {
    title: "",
    urlEndpoint: "",
    id: crypto.randomUUID(),
  },
];

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

  function handleSubmit(e) {
    e.preventDefault();
    dialog.close();
  }

  let dialog = (
    <dialog open>
      <p>You Win!!</p>
      <button onClick={handleSubmit}>Play Again</button>
    </dialog>
  );

  //winning
  if (score == 9) {
    setScore(0);
    document.querySelector(".main").appendChild(dialog);
  }

  return (
    <div className="main">
      <p className="score">Score: {score}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  );
}

export default App;
