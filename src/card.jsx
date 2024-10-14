import { useEffect, useRef } from "react";

export function Card({ endpoint, title, clickHandler }) {
  let imageSrc = useRef(null);

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.giphy.com/v1/gifs/${endpoint}?api_key=llO1oEL4BFCWQnJw3BE3MyRWIW7KzJhZ&rating=g`
    )
      .then((response) => {
        if (!ignore) {
          throw new Error("can't get data");
        } else return response.json();
      })
      .then((data) => (imageSrc.current = data.images.original.url))
      .catch((error) => console.error(error));

    return () => (ignore = true);
  }, [endpoint]);

  return (
    <div className="card" onClick={clickHandler}>
      <img src={imageSrc} alt="cat meme gif" />
      <p>{title}</p>
    </div>
  );
}
