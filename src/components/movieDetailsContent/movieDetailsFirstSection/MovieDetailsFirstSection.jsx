import { useNavigate } from "react-router-dom";
import MoviePoster from "./moviePoster/MoviePoster";
import MovieInfo from "./movieInfo/MovieInfo";
import MovieStats from "./movieStats/MovieStats";
import MovieButton from "./movieButton/MovieButton";
import MovieGenres from "./movieGenres/MovieGenres";

const MovieDetailsFirstSection = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col md:flex-row justify-between w-full p-4 md:p-4 gap-2 bg-white`}
    >
      <MoviePoster posterPath={movie.poster_path} />
      <MovieInfo movie={movie} />
      <div className="flex flex-col justify-between items-center md:flex-col md:justify-start md:gap-2">
        <div className="flex gap-2 justify-between w-full">
          <MovieStats
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
          />
          <MovieButton onClick={() => navigate(-1)}>Назад</MovieButton>
        </div>
        <MovieGenres genres={movie.genres} />
      </div>
    </div>
  );
};
export default MovieDetailsFirstSection;
