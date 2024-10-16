import { useEffect, useRef } from "react";

export function Api() {
  let imageSrc = useRef(null);

  useEffect(() => {
    let ignore = false;
    fetch(
      `https://api.giphy.com/v1/gifs/wr7oA0rSjnWuiLJOY5?api_key=llO1oEL4BFCWQnJw3BE3MyRWIW7KzJhZ&rating=g`
    )
      .then((response) => {
        if (ignore) {
          throw new Error("can't get data");
        } else return response.json();
      })
      .then((data) => {
        imageSrc.current = data.data.images.original.url;
      });
  }, []);
  console.log("the image state:   " + imageSrc);
  console.log("zzaaaaa current " + imageSrc.current);

  return <img src={imageSrc.current} alt="cat meme gif" />;
}
