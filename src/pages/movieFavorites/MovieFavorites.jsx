import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "../../components/cardItem/CardItem";
import Button from "../../components/button/Button";
import { delFavorite } from "../../store/moviesSlice/moviesSlice";

const MovieFavorites = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();
  const deleteFavorites = (value) => {
    console.log("Удаляем фильм:", value); // что передаем?
    console.log("Текущие favorites:", favorites); // что было до удаления?
    dispatch(delFavorite(value));
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto bg-black p-4 min-h-[calc(100vh-112px)]">
        {favorites.length > 0 ? (
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
            {favorites?.map((value) => (
              <div className="flex flex-col" key={value.id}>
                <Link to={`/movies/${value.id}`}>
                  <CardItem
                    img={value.poster_path}
                    title={value.title}
                    releaseDate={value.release_date}
                    vote={value.vote_average}
                  />
                </Link>
                <Button
                  bg="bg-red-500"
                  width="w-full"
                  color={"text-white"}
                  onClick={() => deleteFavorites(value)}
                >
                  удалить
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full min-h-[calc(100vh-144px)]">
            <p className="text-white">пока не добавлено ни одного фильма!</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MovieFavorites;
