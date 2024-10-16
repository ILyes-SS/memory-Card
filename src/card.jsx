import { useEffect, useRef } from "react";

export function Card({ endpoint, title, onClick }) {
  let imageSrc = useRef(null);

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
        imageSrc.current = data.data.images.original.url;
      })
      .catch((error) => console.error(error));

    return () => (ignore = true);
  }, [endpoint]);

  return (
    <div
      style={{ backgroundColor: "red", margin: "10px" }}
      onClick={onClick}
      className="card"
      id={title.replaceAll(" ", "-")}
    >
      <img src={imageSrc.current} alt="cat meme gif" />
      <p>{title}</p>
    </div>
  );
}
