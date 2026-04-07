const MovieInfo = ({ movie }) => {
  const [year] = movie.release_date.split("-");
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center md:mb-8 lg:text-5xl">
        {movie.title}({year})
      </h1>
      <div className="flex flex-col gap-2 mt-auto">
        <h2 className="text-3xl text-center">О фильме</h2>
        <div className="flex gap-4 justify-around text-[10px] md:text-[16px] lg:text-[20px]">
          {" "}
          <div className="text-gray-500">
            <ul>
              <li>Бюджет</li>
              <li>Время просмотра</li>
              <li>Статус</li>
              <li>Дата выхода</li>
              <li>название</li>
              <li>Страна</li>
              <li>Сборы</li>
            </ul>
          </div>
          <div>
            <ul className="text-right">
              <li>{movie.budget.toLocaleString()} $</li>
              <li>{movie.runtime} м</li>
              <li>{movie.status}</li>
              <li>{movie.release_date}</li>
              <li>{movie.original_title}</li>
              <li>{movie.production_countries?.[0]?.name}</li>
              <li>{movie.revenue?.toLocaleString()} $</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
