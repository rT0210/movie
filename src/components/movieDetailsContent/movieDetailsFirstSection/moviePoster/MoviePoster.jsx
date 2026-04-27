const MoviePoster = ({posterPath}) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        className="w-full h-100 md:h-78 lg:h-100 rounded"
        src={`https://bold-hall-9b8a.r1plcops.workers.dev/t/p/original${posterPath}`}
        alt="movie"
      />
    </div>
  );
};
export default MoviePoster;
