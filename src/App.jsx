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
    if (clickedCards.includes(e.target.id || e.target.parentElement.id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards((prev) => [
        ...prev,
        e.target.id || e.target.parentElement.id,
      ]);
      setScore((prev) => prev + 1);
    }
    if (score >= bestScore) {
      setBestScore(score);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dialog.close();
  }

  let dialog = document.querySelector("dialog");
  let dialogBtn = document.querySelector("dialog button");

  dialogBtn.addEventListener("click", handleSubmit);
  //winning
  if (score == 9) {
    dialog.showModal();
    setBestScore(9);
    setScore(0);
    setClickedCards([]);
  }
  let randomArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(randomArray);
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
              order={randomArray[index]}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;
