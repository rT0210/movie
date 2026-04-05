const MovieStats = ({ voteAverage, voteCount }) => {
  return (
    <div>
      <p className="text-хl text-gray-500 font-bold">{voteAverage}</p>
      <p className="text-[12px] md:text-[16px] lg:text-[20px]">
        {voteCount} оценок
      </p>
    </div>
  );
};
export default MovieStats;
