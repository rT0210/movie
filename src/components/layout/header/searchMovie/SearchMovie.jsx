import { Link } from "react-router-dom";

const SearchMovie = ({ query, changeQuery, movie, resetQuery }) => {
  const filterQuery = movie.filter((mov) =>
    mov.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative flex-1 flex-col hidden md:flex mx-4">
      <input
        className="border rounded text-black h-8  bg-gray-500 w-full px-4"
        type="text"
        placeholder="найти фильм, сериал..."
        value={query}
        onChange={(e) => changeQuery(e)}
      />
      {filterQuery.length > 0 && query.length > 2 ? (
        <div className="absolute top-10 text-left  bg-gray-500 text-white rounded left-0 right-0 px-4 z-999">
          <p>Возможно вы имели в виду:</p>
          <ul className="py-4">
            {filterQuery.map((mov) => (
              <li key={mov.id}>
                <Link
                  to={`/movies/${mov.id}`}
                  onClick={resetQuery}
                  className="flex gap-2"
                >
                  <img
                    className="w-20 h-30"
                    src={`https://bold-hall-9b8a.r1plcops.workers.dev/t/p/original${mov.poster_path}`}
                    alt=""
                  />
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-black font-bold">{mov.title}</p>
                    <div className="flex gap-2">
                      <p
                        className={`${+mov.vote_average >= 7.5 ? "text-green-600" : "text-orange-600"}`}
                      >
                        {mov.vote_average}
                      </p>
                      <p>{mov.release_date.slice(0, 4)}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default SearchMovie;
