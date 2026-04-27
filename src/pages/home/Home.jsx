import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import CardItem from "../../components/cardItem/CardItem";

const Home = () => {
  const [randomIndex, setRandomIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const movie = useSelector((state) => state.movies.movies);
  const base = import.meta.BASE_UTL
  const randomFilm = () => {
    const randomNumber = Math.floor(Math.random() * movie.length);
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setRandomIndex(randomNumber);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  };
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center p-2">
      <h1 className="mb-2 font-bold text-2xl">THE MOVIE DB</h1>
      <p className="text-justify mb-4 text-[19px]">
        данный проект предлагает коллекцию фильмов с описание, трейлерами, а
        также актерами
      </p>
      {isLoading ? (
        <div className="w-75 h-75 flex justify-center items-center">
          <img className="w-30 h-30" src={`${base}img/loading.png`} alt="" />
        </div>
      ) : (
        movie.length > 0 &&
        randomIndex !== null && (
          <Link to={`/movies/${movie[randomIndex].id}`} className="mb-4">
            <CardItem
              img={movie[randomIndex].poster_path}
              title={movie[randomIndex].title}
              releaseDate={movie[randomIndex].release_date}
              vote={movie[randomIndex].vote_average}
              width={"w-75"}
            />
          </Link>
        )
      )}
      <Button onClick={randomFilm} width={"w-75"} bg={"bg-gray-300"}>Случайный фильм</Button>
    </div>
  );
};
export default Home;
