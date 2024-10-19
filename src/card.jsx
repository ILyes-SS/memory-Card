import { useEffect, useRef, useState } from "react";

export function Card({ endpoint, title, onClick, order }) {
  let [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.giphy.com/v1/gifs/${endpoint}?api_key=llO1oEL4BFCWQnJw3BE3MyRWIW7KzJhZ&rating=g`
    )
      .then((response) => {
        if (ignore) {
          throw new Error("can't get data");
        } else return response.json();
      })
      .then((data) => {
        setImageSrc(data.data.images.original.url);
      });

    return () => (ignore = true);
  }, [endpoint]);

  return (
    <div
      style={{
        gridArea: `${order}`,
      }}
      onClick={onClick}
      className="card"
      id={title.replaceAll(" ", "-")}
    >
      <img src={imageSrc} alt="cat meme gif" />
      <p>{title}</p>
    </div>
  );
}
