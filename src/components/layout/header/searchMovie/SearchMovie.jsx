import { Link } from "react-router-dom";

const SearchMovie = ({ query, changeQuery, movie, resetQuery }) => {
  const filterQuery = movie.filter((mov) =>
    mov.title.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(filterQuery);
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
        <div className="absolute top-10 text-left  bg-gray-500 text-white rounded left-0 right-0 px-4">
          <p>Возможно вы имели в виду:</p>
          <ul>
            {filterQuery.map((mov) => (
              <li key={mov.id}>
                <Link to={`movies/${mov.id}`} onClick={resetQuery}>{mov.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default SearchMovie;
