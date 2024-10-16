import { useState } from "react";
import { Card } from "./card";
import "./App.css";

const cardsInfos = [
  {
    title: "Side eye cat",
    urlEndpoint: "wr7oA0rSjnWuiLJOY5",
    id: crypto.randomUUID(),
  },
  {
    title: "Soldier cat",
    urlEndpoint: "2zUn8hAwJwG4abiS0p",
    id: crypto.randomUUID(),
  },
  {
    title: "Huh cat",
    urlEndpoint: "GRk3GLfzduq1NtfGt5",
    id: crypto.randomUUID(),
  },
  {
    title: "Vibes cat",
    urlEndpoint: "GeimqsH0TLDt4tScGw",
    id: crypto.randomUUID(),
  },
  {
    title: "dinner cat",
    urlEndpoint: "iE4e5c8ExJUhdhvSiw",
    id: crypto.randomUUID(),
  },
  {
    title: "Mewing cat",
    urlEndpoint: "bLzSbiS3Lzkrwl6ENS",
    id: crypto.randomUUID(),
  },
  {
    title: "Symfunny cat",
    urlEndpoint: "meFHvwfX0GDpWiAlRx",
    id: crypto.randomUUID(),
  },
  {
    title: "Typing cat",
    urlEndpoint: "JIX9t2j0ZTN9S",
    id: crypto.randomUUID(),
  },
  {
    title: "Sliding cat",
    urlEndpoint: "W4iMEEOHdUEKMaf81Y",
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
      setClickedCards([]);
    } else {
      setClickedCards((prev) => [...prev, e.target.id]);
      setScore((prev) => prev + 1);
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
      <div className="cards">
        {cardsInfos.map((card, index) => {
          return (
            <Card
              endpoint={card.urlEndpoint}
              title={card.title}
              key={card.id}
              onClick={clickHandler}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
