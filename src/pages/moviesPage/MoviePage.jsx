import { useSelector } from "react-redux";
import CardItem from "../../components/cardItem/CardItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";

const MoviePage = () => {
  const movie = useSelector((state) => state.movies.movies);
  const [filterMovies, setFilterMovies] = useState([]);

  const movieVotesFilter = () => {
    const sorted = [...movie].sort((a, b) => b.vote_average - a.vote_average);
    setFilterMovies(sorted)
  };

  const moviePopularityFilter = () => {
    const sorted = [...movie].sort((a,b) => b - a)
    setFilterMovies(sorted)
  }
  
  const movieDefaultFilter = () => {
    setFilterMovies(movie)
  }
  

  useEffect(() => {
    setFilterMovies(movie);
  }, [movie]);
  
  if(movie.length < 1) {
    return (
      <div className="max-w-7xl mx-auto p-2 bg-white flex justify-center items-center h-screen">
        <p className="text-7xl">Loading...</p>
      </div>
    )
  }
  
  
  return (
    <div className="max-w-7xl mx-auto p-2 bg-white">
      <div className="h-10 flex justify-between md:justify-around mb-4">
        <Button onClick={movieVotesFilter}>По оценке</Button>
        <Button onClick={moviePopularityFilter}>По популярности</Button>
        <Button onClick={movieDefaultFilter}>Сброс</Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
        {filterMovies?.map((value) => (
          <Link key={value.id} to={`/movies/${value.id}`}>
            <CardItem
              img={value.poster_path}
              title={value.title}
              releaseDate={value.release_date}
              vote={value.vote_average}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MoviePage;
