import MovieFavorites from "../movieFavorites/MovieFavoritesBtn";

const MovieGenres = ({ genres }) => {
  return (
    <div className="flex justify-center w-full text-white">
      <ul className="flex md:flex-col justify-around w-full gap-4 text-center flex-wrap">
        {genres.map((mov) => (
          <li className="text-gray-400" key={mov.id}>
            <p className="text-[10px] md:text-[16px]">#{mov.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieGenres;
