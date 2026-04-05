const MoviePoster = ({posterPath}) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        className="w-full h-100 rounded"
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        alt="movie"
      />
    </div>
  );
};
export default MoviePoster;
