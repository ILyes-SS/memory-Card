return (
  <>
    {!imageSrc ? (
      <p>...Loading</p>
    ) : (
      <div
        style={{
          gridArea: `${order}`,
        }}
        onClick={onClick}
        className="card"
        id={title.replaceAll(" ", "-")}
      >
        <img src={imageSrc.current} alt="cat meme gif" />
        <p>{title}</p>
      </div>
    )}
  </>
);

setTimeout(() => {
  return;
}, 1000);

let [gifIsRendered, setGifIsRendered] = useState(false);

if (imageSrc.current != null) setGifIsRendered(true);
//use a state instead of useRef
