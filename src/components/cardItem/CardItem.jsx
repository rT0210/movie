import Button from "../button/Button";

const CardItem = ({ title, releaseDate, img, vote, width = "w-full"}) => {
  const [year] = releaseDate.split("-");

  return (
    <>
      <div className="flex flex-col items-center relative cursor-pointer hover:brightness-50 transition-all">
        <img
          className={`${width} h-70 rounded`}
          src={`https://image.tmdb.org/t/p/w200${img}`}
          alt="постер фильма"
        />
        <div className="absolute top-4 left-4 bg-emerald-500 rounded w-10 h-6 flex justify-center">
          <p className="text-white">{year}</p>
        </div>
        <div className="absolute top-4 right-4">
          <p className="font-bold text-white">{vote}</p>
        </div>

        <p className="text-white absolute bottom-4 text-center text-[14px] font-bold">
          {title}
        </p>
      </div>
    </>
  );
};
export default CardItem;
