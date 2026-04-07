const MovieFavoritesBtn = ({ children, onClick }) => {
  return (
    <div className="mt-auto">
      <button className="text-black font-bold cursor-pointer" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default MovieFavoritesBtn;
