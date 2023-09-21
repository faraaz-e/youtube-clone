import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Music",
    "Gaming",
    "News",
    "Comedy",
    "TV Series",
    "Drama",
    "Action movies",
    "Trending Trailers"
  ];

  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
