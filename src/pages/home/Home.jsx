import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/button/Button";

const Home = () => {
  const [randomIndex, setRandomIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const movie = useSelector((state) => state.movies.movies);
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
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
      <h1>THE MOVIE DB</h1>
      <p className="text-justify">
        данный проект предлагает коллекцию фильмов с описание, трейлерами, а
        также актерами
      </p>
      {isLoading ? (
        <div className="w-75 h-75 flex justify-center items-center">
          <img className="w-30 h-30" src="/img/loading.png" alt="" />
        </div>
      ) : (
        movie.length > 0 &&
        randomIndex !== null && (
          <div className="flex justify-center flex-col">
            <img
              className="w-75 h-75"
              src={`https://image.tmdb.org/t/p/original${movie[randomIndex].poster_path}`}
              alt="poster"
            />
            
          </div>
        )
      )}
      <Button onClick={randomFilm}>рандом фильм</Button>
    </div>
  );
};
export default Home;
