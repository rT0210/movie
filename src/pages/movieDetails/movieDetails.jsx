import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsMovie } from "../../store/moviesSlice/moviesSlice";
import MovieDetailsFirstSection from "../../components/movieDetailsContent/movieDetailsFirstSection/MovieDetailsFirstSection";
import MovieDetailsTrailerSection from "../../components/movieDetailsContent/movieDetailsTrailerSection/MovieDetailsTrailerSection";
import MovieDetrailsSliderSection from "../../components/movieDetailsContent/movieDetailsSliderSection/MovieDetrailsSliderSection";

const MovieDetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  
  const movie = useSelector((state) => state.movies.currentMovie);
  const movieTrailer = useSelector((state) => state.movies.trailers);
  const { cast, crew } = useSelector((state) => state.movies.currentActors);

  const trailer = movieTrailer.find((video) => video.type === "Trailer");
  const director = crew.find((people) => people.job === "Director");

  useEffect(() => {
    dispatch(detailsMovie(movieId));
  }, [movieId, dispatch]);

  if (!movie) {
    return <p className="text-black">Loading...</p>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col p-4">
        <MovieDetailsFirstSection movie={movie} />
        <MovieDetailsTrailerSection movie={movie} trailer={trailer} />
        <MovieDetrailsSliderSection cast={cast} />
      </div>
    </div>
  );
};
export default MovieDetails;
