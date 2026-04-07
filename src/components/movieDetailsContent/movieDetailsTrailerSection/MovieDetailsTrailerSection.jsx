const MovieDetailsTrailerSection = ({ movie, trailer }) => {
  console.log(typeof trailer);
  if (typeof trailer === "undefined" || !trailer) {
    return (
      <div className="flex justify-center bg-white min-h-16">
        <p className="text-[20px]">Трейлер не доступен....</p>
      </div>
    );
  }
  return (
    <div className="bg-black flex flex-col justify-center p-4 md:p-4 gap-4">
      <hr className="h-0.5 bg-white w-full" />
      <iframe
        className="w-full aspect-video rounded-lg mb-4"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&modestbranding=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="trailer"
      ></iframe>
      <div className="text-justify">
        <p className="text-[30px] text-white">{movie.overview}</p>
      </div>
      <hr className="h-0.5 bg-white w-full" />
    </div>
  );
};
export default MovieDetailsTrailerSection;
